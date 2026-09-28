#!/usr/bin/env node
/**
 * YouForge-SEO-Modul: Seite(n) erfassen → prüfen → Bericht (HTML, Markdown, JSON).
 *
 *   node seo.mjs pruefen --url https://beispiel.de
 *   node seo.mjs pruefen --url /demo/raumkontrast --site --max 8 --ignoriere-noindex
 *   node seo.mjs pruefen --url https://alt.de --url https://neu.de --keyword Maler --ort Rosenheim
 *   node seo.mjs pruefen --url https://agentur.de --site --keyword Webdesign --ort DACH   (überregional)
 */
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { collectOrigin, collectPage, internalLinks, launchBrowser } from "./analyse.mjs";
import { renderHtml, renderMarkdown } from "./bericht.mjs";
import { DEFAULT_BASE, RECHTSTEXT, REPORT_DIR, ensureDirs, istUeberregional, normalizeUrl, stamp, toUrl } from "./lib.mjs";
import { bewerte, einordnen, massnahmen, note, pruefeSeite, pruefeWebsite } from "./pruefungen.mjs";

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
    ueberregional: false,
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
    else if (arg === "--ueberregional") out.ueberregional = true;
    else if (arg === "--kein-oeffnen") out.oeffnen = false;
    else if (arg === "--ohne-drosselung") out.drosseln = false;
    else if (arg === "--pdf") out.pdf = true;
    else if (arg === "--vorschau") out.vorschau = true;
    else if (!arg.startsWith("--")) out.urls.push(arg);
  }
  out.urls = out.urls.filter(Boolean).map((u) => normalizeUrl(toUrl(u, out.base)));
  out.ueberregional = out.ueberregional || istUeberregional(out.ort);
  return out;
}

function openFile(file) {
  const cmd = process.platform === "win32" ? ["cmd", ["/c", "start", "", file]] : [process.platform === "darwin" ? "open" : "xdg-open", [file]];
  spawn(cmd[0], cmd[1], { detached: true, stdio: "ignore" }).unref();
}

const TYP_KURZ = { rechtstext: "Rechtstext", versteckt: "verborgen", kopie: "Kopie (Canonical)" };
const LCP_GRENZE = 2500;
const median = (werte) => {
  const s = [...werte].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
};

/** Ladezeit schwankt: über der Grenze ein zweites Mal messen, bei starker Abweichung ein drittes Mal. */
async function nachmessen(browser, url, page, opts) {
  if (!opts.drosseln || page.lcp == null || page.lcp <= LCP_GRENZE) return;
  const werte = [page.lcp];
  for (let i = 0; i < 2; i++) {
    const m = await collectPage(browser, url, { drosseln: true, nurMessen: true });
    if (m.ok && m.lcp != null) werte.push(m.lcp);
    if (werte.length === 2 && Math.max(...werte) / Math.min(...werte) < 1.5) break;
  }
  if (werte.length > 1) {
    page.lcpMessungen = werte;
    page.lcp = median(werte);
  }
}

async function analysiere(browser, url, opts, istStart) {
  process.stdout.write(`  prüfe ${url} … `);
  const page = await collectPage(browser, url, { drosseln: opts.drosseln });
  if (!page.ok) {
    console.log(`nicht erreichbar (${page.error})`);
    return { page, einordnung: { typ: "fehler", gewertet: false, grund: "" }, results: [], score: { gesamt: 0, kategorien: {} }, massnahmen: [] };
  }
  const site = await collectOrigin(new URL(page.finalUrl || url).origin);
  const kontext = { ...opts, istStart };
  const einordnung = einordnen(page, site, kontext);
  if (einordnung.gewertet) await nachmessen(browser, url, page, opts);
  const results = pruefeSeite(page, site, { ...kontext, einordnung });
  const score = bewerte(results);
  const zusatz = einordnung.gewertet ? "" : ` · ${TYP_KURZ[einordnung.typ] || einordnung.typ}, nicht gewertet`;
  const hinweise = [page.zweiterVersuch && "im 2. Anlauf geladen", page.lcpMessungen && `Ladezeit ${page.lcpMessungen.length}× gemessen`].filter(Boolean);
  console.log(`${score.gesamt}/100 (${note(score.gesamt)})${zusatz}${hinweise.length ? ` · ${hinweise.join(", ")}` : ""}`);
  return { page, einordnung, results, score, massnahmen: massnahmen(results) };
}

const opts = parseArgs(process.argv.slice(2));
if (!opts.urls.length) {
  console.error(
    "Aufruf: node seo.mjs pruefen --url URL|PFAD [--url …] [--site] [--max 10] [--keyword BEGRIFF] [--ort ORT] [--ueberregional] [--ignoriere-noindex] [--pdf] [--vorschau] [--kein-oeffnen] [--ohne-drosselung]",
  );
  process.exit(1);
}

ensureDirs();
const modus = opts.site ? "website" : opts.urls.length > 1 ? "vergleich" : "einzeln";
opts.websiteModus = modus === "website";
console.log(`YouForge-SEO-Modul · ${modus === "website" ? `Website (max. ${opts.max} Seiten)` : modus === "vergleich" ? `Vergleich (${opts.urls.length} Adressen)` : "Einzelseite"}`);
if (opts.ueberregional) console.log(`  überregional${opts.ort ? ` (${opts.ort})` : ""}: Firmenangaben statt Ortsbezug`);

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
    const ausSitemap = [];
    const spaeter = [];
    const seen = new Set(queue);
    const verlinkt = new Set();
    const herkunftSitemap = new Set();
    const verborgeneBereiche = new Set();
    const uebersprungen = new Set();
    const bereich = (url) => new URL(url).pathname.split("/")[1] || "";
    const imVerborgenen = (url) => bereich(url) !== "" && verborgeneBereiche.has(bereich(url));
    const gewerteteSeiten = () => analysen.filter((a) => a.einordnung.gewertet).length;
    const imBereich = (url) => prefix === "/" || new URL(url).pathname === prefix || new URL(url).pathname.startsWith(`${prefix}/`);
    const einreihen = (url, liste) => {
      if (seen.has(url)) return;
      seen.add(url);
      (RECHTSTEXT.test(new URL(url).pathname) ? spaeter : liste).push(url);
    };
    const MAX_RECHTSTEXTE = 3;
    // Reihenfolge: verlinkte Seiten, dann Seiten nur aus der Sitemap, zuletzt höchstens drei Rechtstexte.
    // Nur gewertete Seiten zählen gegen --max. Nach der ersten verborgenen Seite eines Bereichs (z. B. /demo/…)
    // werden weitere Seiten dort übersprungen.
    while (queue.length || ausSitemap.length || spaeter.length) {
      const liste = queue.length ? queue : ausSitemap.length ? ausSitemap : spaeter;
      if (liste !== spaeter ? gewerteteSeiten() >= opts.max : analysen.filter((a) => a.einordnung.typ === "rechtstext").length >= MAX_RECHTSTEXTE) break;
      const url = liste.shift();
      if (imVerborgenen(url)) {
        uebersprungen.add(url);
        continue;
      }
      const istStart = analysen.length === 0;
      const a = await analysiere(browser, url, opts, istStart);
      analysen.push(a);
      if (!a.page.ok) continue;
      if (a.page.finalUrl) seen.add(normalizeUrl(a.page.finalUrl));
      if (istStart) {
        const origin = new URL(a.page.finalUrl || url).origin;
        const { sitemap } = await collectOrigin(origin);
        for (const pfad of sitemap.paths) {
          let adresse;
          try {
            adresse = normalizeUrl(new URL(pfad, origin).href);
          } catch {
            continue;
          }
          if (!imBereich(adresse) || seen.has(adresse) || /\.(pdf|jpe?g|png|gif|webp|svg|mp4|zip|docx?|xlsx?)$/i.test(pfad)) continue;
          herkunftSitemap.add(adresse);
          einreihen(adresse, ausSitemap);
        }
      }
      if (a.einordnung.typ === "versteckt") {
        verborgeneBereiche.add(bereich(url));
        continue;
      }
      const selbst = new Set([a.page.url, a.page.finalUrl].filter(Boolean).map(normalizeUrl));
      for (const link of internalLinks(a.page, prefix)) {
        if (!selbst.has(link)) verlinkt.add(link);
        const idx = ausSitemap.indexOf(link);
        if (idx >= 0) queue.push(...ausSitemap.splice(idx, 1));
        einreihen(link, queue);
      }
    }
    for (const url of [...queue, ...ausSitemap]) if (imVerborgenen(url)) uebersprungen.add(url);
    if (uebersprungen.size) console.log(`  ${uebersprungen.size} weitere Seiten in verborgenen Bereichen übersprungen (/${[...verborgeneBereiche].join(", /")})`);
    const gewertet = analysen.filter((a) => a.einordnung.gewertet);
    const nurSitemap = gewertet.map((a) => normalizeUrl(a.page.url)).filter((u) => herkunftSitemap.has(u) && !verlinkt.has(u)).map((u) => new URL(u).pathname);
    const siteResults = pruefeWebsite(gewertet.map((a) => a.page), { ...opts, nurSitemap });
    const alle = [...gewertet.flatMap((a) => a.results), ...siteResults];
    website = {
      seiten: analysen.length,
      gewertet: gewertet.length,
      uebersprungen: { anzahl: uebersprungen.size, bereiche: [...verborgeneBereiche] },
      results: siteResults,
      score: bewerte(alle),
    };
  } else {
    for (const url of opts.urls) analysen.push(await analysiere(browser, url, opts, true));
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
