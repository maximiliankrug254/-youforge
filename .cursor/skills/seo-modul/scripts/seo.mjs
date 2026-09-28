#!/usr/bin/env node
/**
 * YouForge-SEO-Modul: Seite(n) erfassen → prüfen → Bericht (HTML, Markdown, JSON).
 *
 *   node seo.mjs pruefen --url https://beispiel.de
 *   node seo.mjs pruefen --url /demo/raumkontrast --site --max 8 --ignoriere-noindex
 *   node seo.mjs pruefen --url https://alt.de --url https://neu.de --keyword Maler --ort Rosenheim
 */
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { collectOrigin, collectPage, internalLinks, launchBrowser } from "./analyse.mjs";
import { renderHtml, renderMarkdown } from "./bericht.mjs";
import { DEFAULT_BASE, REPORT_DIR, ensureDirs, normalizeUrl, stamp, toUrl } from "./lib.mjs";
import { bewerte, massnahmen, note, pruefeSeite, pruefeWebsite } from "./pruefungen.mjs";

function parseArgs(argv) {
  if (argv[0] === "pruefen") argv.shift();
  const out = {
    urls: [],
    base: DEFAULT_BASE,
    site: false,
    max: 10,
    keyword: "",
    ort: "",
    ignoriereNoindex: false,
    oeffnen: true,
    drosseln: true,
    pdf: false,
    vorschau: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--url") out.urls.push(argv[++i] ?? "");
    else if (arg === "--base") out.base = (argv[++i] ?? "").replace(/\/$/, "");
    else if (arg === "--site") out.site = true;
    else if (arg === "--max") out.max = Math.max(1, Number(argv[++i]) || 10);
    else if (arg === "--keyword") out.keyword = argv[++i] ?? "";
    else if (arg === "--ort") out.ort = argv[++i] ?? "";
    else if (arg === "--ignoriere-noindex") out.ignoriereNoindex = true;
    else if (arg === "--kein-oeffnen") out.oeffnen = false;
    else if (arg === "--ohne-drosselung") out.drosseln = false;
    else if (arg === "--pdf") out.pdf = true;
    else if (arg === "--vorschau") out.vorschau = true;
    else if (!arg.startsWith("--")) out.urls.push(arg);
  }
  out.urls = out.urls.filter(Boolean).map((u) => normalizeUrl(toUrl(u, out.base)));
  return out;
}

function openFile(file) {
  const cmd = process.platform === "win32" ? ["cmd", ["/c", "start", "", file]] : [process.platform === "darwin" ? "open" : "xdg-open", [file]];
  spawn(cmd[0], cmd[1], { detached: true, stdio: "ignore" }).unref();
}

async function analysiere(browser, url, opts) {
  process.stdout.write(`  prüfe ${url} … `);
  const page = await collectPage(browser, url, { drosseln: opts.drosseln });
  if (!page.ok) {
    console.log(`nicht erreichbar (${page.error})`);
    return { page, results: [], score: { gesamt: 0, kategorien: {} }, massnahmen: [] };
  }
  const site = await collectOrigin(new URL(page.finalUrl || url).origin);
  const results = pruefeSeite(page, site, opts);
  const score = bewerte(results);
  console.log(`${score.gesamt}/100 (${note(score.gesamt)})`);
  return { page, results, score, massnahmen: massnahmen(results) };
}

const opts = parseArgs(process.argv.slice(2));
if (!opts.urls.length) {
  console.error(
    "Aufruf: node seo.mjs pruefen --url URL|PFAD [--url …] [--site] [--max 10] [--keyword BEGRIFF] [--ort ORT] [--ignoriere-noindex] [--kein-oeffnen] [--ohne-drosselung]",
  );
  process.exit(1);
}

ensureDirs();
const modus = opts.site ? "website" : opts.urls.length > 1 ? "vergleich" : "einzeln";
console.log(`YouForge-SEO-Modul · ${modus === "website" ? `Website (max. ${opts.max} Seiten)` : modus === "vergleich" ? `Vergleich (${opts.urls.length} Adressen)` : "Einzelseite"}`);

let browser;
try {
  browser = await launchBrowser();
} catch (err) {
  console.error(`Browser konnte nicht gestartet werden: ${err instanceof Error ? err.message.split("\n")[0] : err}`);
  console.error("Tipp: npx playwright install chromium");
  process.exit(2);
}

const analysen = [];
let website = null;
try {
  if (modus === "website") {
    const start = opts.urls[0];
    const prefix = new URL(start).pathname.replace(/\/$/, "") || "/";
    const queue = [start];
    const seen = new Set(queue);
    while (queue.length && analysen.length < opts.max) {
      const url = queue.shift();
      const a = await analysiere(browser, url, opts);
      analysen.push(a);
      if (!a.page.ok) continue;
      for (const link of internalLinks(a.page, prefix)) {
        if (!seen.has(link)) {
          seen.add(link);
          queue.push(link);
        }
      }
    }
    const pages = analysen.map((a) => a.page);
    const siteResults = pruefeWebsite(pages);
    const alle = [...analysen.flatMap((a) => a.results), ...siteResults];
    website = { seiten: analysen.length, results: siteResults, score: bewerte(alle) };
  } else {
    for (const url of opts.urls) analysen.push(await analysiere(browser, url, opts));
  }
} finally {
  await browser.close();
}

const erstellt = new Date().toLocaleString("de-DE", { dateStyle: "long", timeStyle: "short" });
const report = { modus, erstellt, opts, analysen, website };
const base = join(REPORT_DIR, `seo-${stamp()}`);
writeFileSync(`${base}.html`, renderHtml(report));
writeFileSync(`${base}.md`, renderMarkdown(report));
writeFileSync(
  `${base}.json`,
  JSON.stringify({ ...report, analysen: analysen.map((a) => ({ ...a, page: { ...a.page, screenshot: undefined, text: undefined, links: undefined } })) }, null, 2),
);

console.log(`\nBericht: ${base}.html`);

if (opts.pdf || opts.vorschau) {
  const viewer = await launchBrowser();
  try {
    const page = await viewer.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(pathToFileURL(`${base}.html`).href);
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
    if (opts.vorschau) {
      await page.screenshot({ path: `${base}.png`, fullPage: true, clip: { x: 0, y: 0, width: 1280, height: 1700 } });
      console.log(`Vorschau: ${base}.png`);
    }
    if (opts.pdf) {
      await page.pdf({ path: `${base}.pdf`, format: "A4", printBackground: true, margin: { top: "12mm", bottom: "12mm", left: "10mm", right: "10mm" } });
      console.log(`PDF: ${base}.pdf`);
    }
  } catch (err) {
    console.error(`PDF/Vorschau fehlgeschlagen: ${err instanceof Error ? err.message.split("\n")[0] : err}`);
  } finally {
    await viewer.close();
  }
}

if (opts.oeffnen) openFile(`${base}.html`);
const ok = analysen.some((a) => a.page.ok);
process.exit(ok ? 0 : 2);
