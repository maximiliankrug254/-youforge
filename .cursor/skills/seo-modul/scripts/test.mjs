#!/usr/bin/env node
/**
 * Prüft gespeicherte Testfälle ohne Internet: Rohdaten aus tests/faelle/*.json werden neu ausgewertet
 * und mit tests/erwartet/*.json sowie den Kernbefunden (tests/kernbefunde.mjs) verglichen.
 *
 *   npm run seo:test                       Abweichungen anzeigen
 *   npm run seo:test -- --aktualisieren    neuen Stand als Erwartung festschreiben (nur nach Prüfung!)
 *
 * Neuen Testfall anlegen: npm run seo:pruefen -- --url … --site --testfall name
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SKILL_DIR, TEST_DIR } from "./lib.mjs";
import { bewerte, einordnen, pruefeSeite, pruefeWebsite } from "./pruefungen.mjs";
import { KERNBEFUNDE } from "../tests/kernbefunde.mjs";

const ERWARTET_DIR = join(SKILL_DIR, "tests", "erwartet");
const aktualisieren = process.argv.includes("--aktualisieren");
const nurFall = process.argv.find((a, i, arr) => arr[i - 1] === "--fall");

function auswerten(fall) {
  const opts = { ...fall.opts, drosseln: true };
  const seiten = [];
  const gewertete = [];
  const texte = new Map();
  for (const { istStart, page } of fall.seiten) {
    const pfad = new URL(page.finalUrl || page.url).pathname;
    if (!page.ok) {
      seiten.push({ pfad, typ: "fehler", gesamt: 0, befunde: {} });
      continue;
    }
    const site = fall.sites[new URL(page.finalUrl || page.url).origin];
    const kontext = { ...opts, istStart };
    const einordnung = einordnen(page, site, kontext);
    const results = pruefeSeite(page, site, { ...kontext, einordnung });
    if (einordnung.gewertet) gewertete.push({ page, results });
    for (const x of results) texte.set(`${pfad}|${x.id}`, x.detail);
    seiten.push({
      pfad,
      typ: einordnung.typ,
      gesamt: bewerte(results).gesamt,
      befunde: Object.fromEntries(results.map((x) => [x.id, x.status])),
    });
  }
  let website = null;
  if (opts.websiteModus) {
    const siteResults = pruefeWebsite(
      gewertete.map((g) => g.page),
      { ...opts, nurSitemap: fall.nurSitemap || [] },
    );
    for (const x of siteResults) texte.set(`website|${x.id}`, x.detail);
    website = {
      gesamt: bewerte([...gewertete.flatMap((g) => g.results), ...siteResults]).gesamt,
      befunde: Object.fromEntries(siteResults.map((x) => [x.id, x.status])),
    };
  }
  return { website, seiten, texte };
}

function vergleiche(name, alt, neu) {
  const diff = [];
  if (alt.website || neu.website) {
    if (alt.website?.gesamt !== neu.website?.gesamt) diff.push(`Website-Note ${alt.website?.gesamt} → ${neu.website?.gesamt}`);
    const ids = new Set([...Object.keys(alt.website?.befunde || {}), ...Object.keys(neu.website?.befunde || {})]);
    for (const id of ids) {
      const a = alt.website?.befunde[id];
      const b = neu.website?.befunde[id];
      if (a !== b) diff.push(`Website · ${id}: ${a ?? "–"} → ${b ?? "–"}`);
    }
  }
  const altNachPfad = new Map(alt.seiten.map((s) => [s.pfad, s]));
  for (const s of neu.seiten) {
    const a = altNachPfad.get(s.pfad);
    if (!a) {
      diff.push(`${s.pfad}: neu im Testfall`);
      continue;
    }
    if (a.typ !== s.typ) diff.push(`${s.pfad} · Einordnung: ${a.typ} → ${s.typ}`);
    if (a.gesamt !== s.gesamt) diff.push(`${s.pfad} · Note: ${a.gesamt} → ${s.gesamt}`);
    const ids = new Set([...Object.keys(a.befunde), ...Object.keys(s.befunde)]);
    for (const id of ids) if (a.befunde[id] !== s.befunde[id]) diff.push(`${s.pfad} · ${id}: ${a.befunde[id] ?? "–"} → ${s.befunde[id] ?? "–"}`);
  }
  return diff.map((d) => `${name} · ${d}`);
}

function pruefeKern(name, ergebnis) {
  const fehler = [];
  for (const k of KERNBEFUNDE.filter((x) => x.fall === name)) {
    const ist =
      k.pfad === "website"
        ? ergebnis.website?.befunde[k.id]
        : k.id === "typ"
          ? ergebnis.seiten.find((s) => s.pfad === k.pfad)?.typ
          : ergebnis.seiten.find((s) => s.pfad === k.pfad)?.befunde[k.id];
    if (k.erwartet && ist !== k.erwartet) fehler.push(`${name} · ${k.pfad} · ${k.id}: erwartet „${k.erwartet}“, ist „${ist ?? "–"}“ – ${k.warum}`);
    const text = ergebnis.texte.get(`${k.pfad}|${k.id}`) || "";
    if (k.text && !k.text.test(text)) fehler.push(`${name} · ${k.pfad} · ${k.id}: Text passt nicht zu ${k.text} („${text.slice(0, 90)}“) – ${k.warum}`);
  }
  return fehler;
}

if (!existsSync(TEST_DIR)) {
  console.log("Noch keine Testfälle. Anlegen mit: npm run seo:pruefen -- --url … --site --testfall name");
  process.exit(0);
}
mkdirSync(ERWARTET_DIR, { recursive: true });

const faelle = readdirSync(TEST_DIR)
  .filter((f) => f.endsWith(".json"))
  .map((f) => f.replace(/\.json$/, ""))
  .filter((n) => !nurFall || n === nurFall);

let abweichungen = 0;
let kernFehler = 0;
for (const name of faelle) {
  const fall = JSON.parse(readFileSync(join(TEST_DIR, `${name}.json`), "utf8"));
  const { texte, ...neu } = auswerten(fall);
  const kern = pruefeKern(name, { ...neu, texte });
  kernFehler += kern.length;
  const datei = join(ERWARTET_DIR, `${name}.json`);
  const note = neu.website ? `Website ${neu.website.gesamt}` : `Seite ${neu.seiten[0]?.gesamt}`;

  if (aktualisieren || !existsSync(datei)) {
    const war = existsSync(datei);
    writeFileSync(datei, `${JSON.stringify(neu, null, 2)}\n`);
    console.log(`${kern.length ? "✕" : "✓"} ${name} (${note}) – Erwartung ${war ? "festgeschrieben" : "angelegt"}`);
  } else {
    const diff = vergleiche(name, JSON.parse(readFileSync(datei, "utf8")), neu);
    abweichungen += diff.length;
    console.log(`${diff.length || kern.length ? "✕" : "✓"} ${name} (${note})${diff.length ? ` – ${diff.length} Abweichungen` : ""}`);
    for (const d of diff) console.log(`    ${d}`);
  }
  for (const k of kern) console.log(`    KERNBEFUND: ${k}`);
}

console.log(
  `\n${faelle.length} Testfälle · ${abweichungen} Abweichungen · ${kernFehler} verletzte Kernbefunde` +
    (abweichungen && !aktualisieren ? "\nSind die Abweichungen gewollt? Dann: npm run seo:test -- --aktualisieren" : ""),
);
process.exit(abweichungen || kernFehler ? 1 : 0);
