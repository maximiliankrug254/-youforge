import { LOCAL_BUSINESS_TYPES, STUFEN, contains, flattenJsonLd, normalizeUrl, typesOf } from "./lib.mjs";
import { robotsBlocks } from "./analyse.mjs";

function r(id, kategorie, stufe, titel, status, detail, fix = "") {
  return { id, kategorie, stufe, titel, status, detail, fix };
}

const kb = (bytes) => (bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`);
const sek = (ms) => `${(ms / 1000).toFixed(1).replace(".", ",")} s`;

function words(text) {
  return (text.match(/[A-Za-zÄÖÜäöüß0-9][A-Za-zÄÖÜäöüß0-9\-]{1,}/g) || []).length;
}

function findBusiness(nodes) {
  return nodes.find((n) => typesOf(n).some((t) => LOCAL_BUSINESS_TYPES.includes(t) || /Business|Contractor|Service/.test(t || ""))) || null;
}

export function pruefeSeite(p, site, opts) {
  const out = [];
  const pathname = new URL(p.finalUrl || p.url).pathname;
  const isLocal = /^(localhost|127\.|0\.0\.0\.0)/.test(new URL(p.url).hostname);
  const noindex = /noindex/i.test(`${p.robots || ""} ${p.xRobots || ""}`);

  // Technik
  const umgeleitet = p.finalUrl && normalizeUrl(p.finalUrl) !== normalizeUrl(p.url) ? ` – umgeleitet auf ${p.finalUrl}` : "";
  out.push(
    p.status === 200
      ? r("status", "technik", "kritisch", "Seite erreichbar", "ok", `HTTP ${p.status}${umgeleitet}`)
      : r("status", "technik", "kritisch", "Seite erreichbar", "fehler", `HTTP ${p.status}${umgeleitet}`, "Die Seite muss mit Status 200 antworten."),
  );

  if (!noindex) out.push(r("indexierbar", "technik", "kritisch", "Für Google freigegeben", "ok", "Kein noindex gesetzt."));
  else if (opts.ignoriereNoindex)
    out.push(r("indexierbar", "technik", "kritisch", "Für Google freigegeben", "info", "noindex gesetzt – bei Demo-Seiten gewollt, für die Bewertung ignoriert."));
  else
    out.push(
      r("indexierbar", "technik", "kritisch", "Für Google freigegeben", "fehler", "Die Seite ist per noindex für Google gesperrt.", "noindex entfernen (Next.js: metadata.robots in layout.tsx/page.tsx)."),
    );

  const blocked = robotsBlocks(site.robots, pathname);
  if (!site.robots.found)
    out.push(r("robots", "technik", "wichtig", "robots.txt", "warnung", "Keine robots.txt gefunden.", "src/app/robots.ts anlegen (Vorlage: vorlagen/robots.ts)."));
  else if (blocked && opts.ignoriereNoindex)
    out.push(r("robots", "technik", "wichtig", "robots.txt", "info", `Pfad per robots.txt gesperrt (Disallow: ${blocked}) – bei Demo-Seiten gewollt.`));
  else if (blocked)
    out.push(r("robots", "technik", "wichtig", "robots.txt", "fehler", `robots.txt sperrt diese Seite (Disallow: ${blocked}).`, "Disallow-Regel in src/app/robots.ts entfernen."));
  else out.push(r("robots", "technik", "wichtig", "robots.txt", "ok", "Vorhanden, Seite nicht gesperrt."));

  if (!site.sitemap.found)
    out.push(r("sitemap", "technik", "wichtig", "Sitemap", "fehler", "Keine gültige sitemap.xml gefunden.", "src/app/sitemap.ts anlegen (Vorlage: vorlagen/sitemap.ts)."));
  else if (!site.sitemap.paths.includes(pathname.replace(/\/$/, "") || "/"))
    out.push(
      r("sitemap", "technik", "wichtig", "Sitemap", opts.ignoriereNoindex ? "info" : "warnung", "Sitemap vorhanden, diese Seite ist aber nicht eingetragen.", "Route in src/app/sitemap.ts ergänzen."),
    );
  else out.push(r("sitemap", "technik", "wichtig", "Sitemap", "ok", "Vorhanden, Seite eingetragen."));

  if (isLocal) out.push(r("https", "technik", "kritisch", "HTTPS", "info", "Lokal geprüft – live läuft Vercel immer über HTTPS."));
  else
    out.push(
      p.finalUrl?.startsWith("https://")
        ? r("https", "technik", "kritisch", "HTTPS", "ok", "Verschlüsselt.")
        : r("https", "technik", "kritisch", "HTTPS", "fehler", "Seite läuft ohne HTTPS.", "SSL aktivieren (bei Vercel automatisch)."),
    );

  const tl = p.title?.length || 0;
  out.push(
    !tl
      ? r("title", "technik", "wichtig", "Seitentitel", "fehler", "Kein Seitentitel.", "metadata.title setzen: Leistung + Ort + Firmenname.")
      : tl < 30 || tl > 65
        ? r("title", "technik", "wichtig", "Seitentitel", "warnung", `${tl} Zeichen: „${p.title}“`, "Ideal sind 30–65 Zeichen, sonst kürzt Google oder verschenkt Platz.")
        : r("title", "technik", "wichtig", "Seitentitel", "ok", `${tl} Zeichen: „${p.title}“`),
  );

  const dl = p.description?.length || 0;
  out.push(
    !dl
      ? r("description", "technik", "wichtig", "Beschreibung (Meta-Description)", "fehler", "Keine Beschreibung.", "metadata.description setzen: 1–2 Sätze mit Leistung, Ort und Nutzen.")
      : dl < 70 || dl > 160
        ? r("description", "technik", "wichtig", "Beschreibung (Meta-Description)", "warnung", `${dl} Zeichen.`, "Ideal sind 70–160 Zeichen.")
        : r("description", "technik", "wichtig", "Beschreibung (Meta-Description)", "ok", `${dl} Zeichen.`),
  );

  out.push(
    p.canonical
      ? r("canonical", "technik", "tipp", "Canonical-Link", "ok", p.canonical)
      : r("canonical", "technik", "tipp", "Canonical-Link", "fehler", "Kein Canonical-Link.", "metadata.alternates.canonical setzen, damit Google die Haupt-Adresse kennt."),
  );

  out.push(
    p.lang?.toLowerCase().startsWith("de")
      ? r("lang", "technik", "wichtig", "Sprache der Seite", "ok", `lang="${p.lang}"`)
      : r("lang", "technik", "wichtig", "Sprache der Seite", p.lang ? "warnung" : "fehler", p.lang ? `lang="${p.lang}"` : "Keine Sprache angegeben.", '<html lang="de"> setzen.'),
  );

  out.push(
    /width=device-width/.test(p.viewport || "")
      ? r("viewport", "technik", "kritisch", "Handy-tauglich (Viewport)", "ok", "Viewport gesetzt.")
      : r("viewport", "technik", "kritisch", "Handy-tauglich (Viewport)", "fehler", "Kein mobiler Viewport.", "viewport-Export mit width=device-width setzen."),
  );

  const h1 = p.headings.filter((h) => h.level === 1);
  out.push(
    h1.length === 1
      ? r("h1", "technik", "wichtig", "Hauptüberschrift (H1)", "ok", `„${h1[0].text}“`)
      : h1.length === 0
        ? r("h1", "technik", "wichtig", "Hauptüberschrift (H1)", "fehler", "Keine H1 gefunden.", "Genau eine H1 pro Seite mit Leistung und Ort.")
        : r("h1", "technik", "wichtig", "Hauptüberschrift (H1)", "warnung", `${h1.length} H1 gefunden.`, "Nur eine H1 pro Seite, der Rest als H2/H3."),
  );

  let jump = null;
  for (let i = 1; i < p.headings.length; i++) {
    if (p.headings[i].level > p.headings[i - 1].level + 1) {
      jump = `H${p.headings[i - 1].level} → H${p.headings[i].level} („${p.headings[i].text.slice(0, 50)}“)`;
      break;
    }
  }
  out.push(
    jump
      ? r("gliederung", "technik", "tipp", "Gliederung der Überschriften", "warnung", `Sprung: ${jump}`, "Überschriften ohne Sprünge staffeln (H1 → H2 → H3).")
      : r("gliederung", "technik", "tipp", "Gliederung der Überschriften", "ok", `${p.headings.length} Überschriften, sauber gestaffelt.`),
  );

  const { total, missing, samples } = p.images;
  out.push(
    missing === 0
      ? r("alt", "technik", "wichtig", "Bildbeschreibungen (Alt-Text)", "ok", `${total} Bilder, alle beschrieben oder als Deko markiert.`)
      : r(
          "alt",
          "technik",
          "wichtig",
          "Bildbeschreibungen (Alt-Text)",
          missing / Math.max(total, 1) <= 0.1 ? "warnung" : "fehler",
          `${missing} von ${total} Bildern ohne Alt-Text (z. B. ${samples.filter(Boolean).join(", ")}).`,
          "Alt-Text ergänzen: was ist zu sehen, gern mit Leistung und Ort.",
        ),
  );

  out.push(
    p.ogTitle && p.ogImage
      ? r("og", "technik", "tipp", "Vorschau beim Teilen (Open Graph)", "ok", "Titel und Bild gesetzt.")
      : r("og", "technik", "tipp", "Vorschau beim Teilen (Open Graph)", "warnung", "Kein Vorschaubild/-titel für WhatsApp, Facebook & Co.", "metadata.openGraph mit Titel und Bild setzen."),
  );

  if (p.lcp == null) out.push(r("lcp", "technik", "wichtig", "Ladezeit (LCP)", "info", "Nicht messbar."));
  else
    out.push(
      r(
        "lcp",
        "technik",
        "wichtig",
        "Ladezeit (LCP)",
        p.lcp <= 2500 ? "ok" : p.lcp <= 4000 ? "warnung" : "fehler",
        `Hauptinhalt sichtbar nach ${sek(p.lcp)} (${p.netz}).`,
        p.lcp <= 2500 ? "" : "Große Bilder verkleinern (next/image), Intro-Animationen kürzen, Schriften sparsam laden.",
      ),
    );

  out.push(
    r(
      "cls",
      "technik",
      "wichtig",
      "Stabiles Layout (CLS)",
      p.cls <= 0.1 ? "ok" : p.cls <= 0.25 ? "warnung" : "fehler",
      `Layout-Verschiebung: ${p.cls.toFixed(3).replace(".", ",")}`,
      p.cls <= 0.1 ? "" : "Bildern feste Größen geben, nachladende Elemente reservieren.",
    ),
  );

  out.push(
    r(
      "gewicht",
      "technik",
      "tipp",
      "Datenmenge",
      p.bytes <= 2.5 * 1024 * 1024 ? "ok" : p.bytes <= 5 * 1024 * 1024 ? "warnung" : "fehler",
      `${kb(p.bytes)} beim ersten Laden.`,
      p.bytes <= 2.5 * 1024 * 1024 ? "" : "Bilder als WebP/AVIF, Videos erst bei Bedarf laden.",
    ),
  );

  // Inhalte
  const wc = words(p.text);
  out.push(
    r(
      "woerter",
      "inhalte",
      "wichtig",
      "Textumfang",
      wc >= 300 ? "ok" : wc >= 150 ? "warnung" : "fehler",
      `${wc} Wörter sichtbarer Text.`,
      wc >= 300 ? "" : "Mehr echten Inhalt: Leistungen erklären, Ablauf, Einsatzgebiet, Fragen & Antworten.",
    ),
  );

  if (opts.keyword) {
    const kw = opts.keyword;
    out.push(
      contains(p.title, kw)
        ? r("kw-title", "inhalte", "wichtig", `Suchbegriff „${kw}“ im Seitentitel`, "ok", "Enthalten.")
        : r("kw-title", "inhalte", "wichtig", `Suchbegriff „${kw}“ im Seitentitel`, "fehler", "Nicht enthalten.", "Suchbegriff vorne in den Seitentitel."),
    );
    out.push(
      h1.some((h) => contains(h.text, kw))
        ? r("kw-h1", "inhalte", "wichtig", `Suchbegriff „${kw}“ in der H1`, "ok", "Enthalten.")
        : r("kw-h1", "inhalte", "wichtig", `Suchbegriff „${kw}“ in der H1`, "fehler", "Nicht enthalten.", "Suchbegriff natürlich in die Hauptüberschrift einbauen."),
    );
    out.push(
      contains(p.text, kw)
        ? r("kw-text", "inhalte", "tipp", `Suchbegriff „${kw}“ im Text`, "ok", "Enthalten.")
        : r("kw-text", "inhalte", "tipp", `Suchbegriff „${kw}“ im Text`, "fehler", "Nicht im sichtbaren Text.", "Im Fließtext natürlich verwenden, nicht stopfen."),
    );
  }

  const nodes = flattenJsonLd(p.jsonLd.filter((b) => !b.__fehler));
  const faqSchema = nodes.some((n) => typesOf(n).includes("FAQPage"));
  const faqHeading = p.headings.some((h) => /häufig|fragen|faq/i.test(h.text));
  out.push(
    faqSchema || faqHeading || p.details >= 3
      ? r("faq", "inhalte", "tipp", "Fragen & Antworten", "ok", faqSchema ? "FAQ mit Google-Eintrag (FAQPage)." : "FAQ-Bereich gefunden.")
      : r("faq", "inhalte", "tipp", "Fragen & Antworten", "warnung", "Kein FAQ-Bereich gefunden.", "Echte Kundenfragen beantworten – hilft bei Google und KI-Suchen (ChatGPT, Google-KI)."),
  );

  const origin = new URL(p.finalUrl || p.url).origin;
  const internal = new Set(
    p.links
      .map((l) => {
        try {
          return new URL(l.href);
        } catch {
          return null;
        }
      })
      .filter((u) => u && u.origin === origin && u.pathname !== pathname)
      .map((u) => u.pathname),
  );
  out.push(
    internal.size >= 3
      ? r("links", "inhalte", "tipp", "Interne Verlinkung", "ok", `${internal.size} Links auf andere Unterseiten.`)
      : r("links", "inhalte", "tipp", "Interne Verlinkung", "warnung", `${internal.size} Links auf andere Unterseiten.`, "Leistungen, Kontakt und Referenzen untereinander verlinken."),
  );

  const tel = p.links.filter((l) => l.href.startsWith("tel:"));
  const cta = tel.length || p.links.some((l) => /kontakt|anfrage|angebot|termin/i.test(`${l.text} ${l.href}`));
  out.push(
    cta
      ? r("kontakt", "inhalte", "wichtig", "Kontakt mit einem Klick", "ok", tel.length ? "Telefon-Link und/oder Kontakt-Link vorhanden." : "Kontakt-Link vorhanden.")
      : r("kontakt", "inhalte", "wichtig", "Kontakt mit einem Klick", "fehler", "Kein Anruf- oder Kontakt-Link gefunden.", "Gut sichtbaren Anruf-Button und Kontakt-Link einbauen."),
  );

  // Lokal
  const biz = findBusiness(nodes);
  out.push(
    biz
      ? r("schema", "lokal", "kritisch", "Firmeneintrag für Google (JSON-LD)", "ok", `Typ: ${typesOf(biz).join(", ")}`)
      : r(
          "schema",
          "lokal",
          "kritisch",
          "Firmeneintrag für Google (JSON-LD)",
          "fehler",
          p.jsonLd.some((b) => b.__fehler) ? "JSON-LD vorhanden, aber fehlerhaft." : "Kein Firmeneintrag (LocalBusiness) gefunden.",
          "Vorlage vorlagen/LocalBusinessJsonLd.tsx einbauen.",
        ),
  );

  if (biz) {
    const addr = Array.isArray(biz.address) ? biz.address[0] : biz.address;
    const need = {
      Name: biz.name,
      Straße: addr?.streetAddress,
      PLZ: addr?.postalCode,
      Ort: addr?.addressLocality,
      Telefon: biz.telephone,
    };
    const fehlt = Object.entries(need)
      .filter(([, v]) => !v)
      .map(([k]) => k);
    out.push(
      fehlt.length === 0
        ? r("nap", "lokal", "wichtig", "Name, Adresse, Telefon im Eintrag", "ok", "Vollständig.")
        : r("nap", "lokal", "wichtig", "Name, Adresse, Telefon im Eintrag", fehlt.length <= 2 ? "warnung" : "fehler", `Fehlt: ${fehlt.join(", ")}`, "Fehlende Angaben im JSON-LD ergänzen – exakt wie im Google-Profil."),
    );
    const extra = {
      Koordinaten: biz.geo,
      Öffnungszeiten: biz.openingHoursSpecification || biz.openingHours,
      Einsatzgebiet: biz.areaServed,
      Website: biz.url,
      Bild: biz.image || biz.logo,
    };
    const fehltExtra = Object.entries(extra)
      .filter(([, v]) => !v)
      .map(([k]) => k);
    out.push(
      fehltExtra.length <= 2
        ? r("schema-extra", "lokal", "tipp", "Zusatzangaben im Eintrag", "ok", fehltExtra.length ? `Fehlt noch: ${fehltExtra.join(", ")}` : "Vollständig.")
        : r("schema-extra", "lokal", "tipp", "Zusatzangaben im Eintrag", "warnung", `Fehlt: ${fehltExtra.join(", ")}`, "Koordinaten, Öffnungszeiten und Einsatzgebiet ergänzen."),
    );
  } else {
    out.push(r("nap", "lokal", "wichtig", "Name, Adresse, Telefon im Eintrag", "fehler", "Kein Firmeneintrag vorhanden.", "Erst den Firmeneintrag einbauen."));
  }

  out.push(
    tel.length
      ? r("tel", "lokal", "wichtig", "Telefonnummer antippbar", "ok", `${tel.length}× tel:-Link.`)
      : r("tel", "lokal", "wichtig", "Telefonnummer antippbar", "fehler", "Keine antippbare Telefonnummer.", 'Telefonnummer als <a href="tel:…"> verlinken.'),
  );

  const plzOrt = p.text.match(/\b\d{5}\s+[A-ZÄÖÜ][a-zäöüß]+(?:[\s-][A-ZÄÖÜ][a-zäöüß]+)?/);
  out.push(
    plzOrt
      ? r("adresse", "lokal", "wichtig", "Adresse sichtbar auf der Seite", "ok", `„${plzOrt[0]}“`)
      : r("adresse", "lokal", "wichtig", "Adresse sichtbar auf der Seite", "warnung", "Keine Adresse (PLZ + Ort) im sichtbaren Text.", "Adresse im Footer oder Kontaktbereich zeigen."),
  );

  if (opts.ort) {
    const inTitle = contains(p.title, opts.ort);
    const inHead = h1.some((h) => contains(h.text, opts.ort));
    const inText = contains(p.text, opts.ort);
    out.push(
      inTitle && (inHead || inText)
        ? r("ort", "lokal", "wichtig", `Ort „${opts.ort}“ auf der Seite`, "ok", `Im Seitentitel${inHead ? ", in der H1" : ""} und im Text.`)
        : inText || inTitle
          ? r("ort", "lokal", "wichtig", `Ort „${opts.ort}“ auf der Seite`, "warnung", inTitle ? "Nur im Seitentitel." : "Nur im Text, nicht im Seitentitel.", "Ort in Seitentitel und Hauptüberschrift nennen.")
          : r("ort", "lokal", "wichtig", `Ort „${opts.ort}“ auf der Seite`, "fehler", "Ort wird nicht genannt.", "Ort in Seitentitel, H1 und Text nennen."),
    );
  }

  return out;
}

export function pruefeWebsite(pages) {
  const ok = pages.filter((p) => p.ok);
  if (ok.length < 2) return [];
  const dup = (key) => {
    const seen = new Map();
    for (const p of ok) {
      const v = (p[key] || "").trim();
      if (!v) continue;
      seen.set(v, [...(seen.get(v) || []), new URL(p.url).pathname]);
    }
    return [...seen.entries()].filter(([, list]) => list.length > 1);
  };
  const titles = dup("title");
  const descs = dup("description");
  return [
    titles.length
      ? r("dup-title", "technik", "wichtig", "Einzigartige Seitentitel", "fehler", titles.map(([t, l]) => `„${t}“ auf ${l.join(", ")}`).join(" · "), "Jede Unterseite braucht einen eigenen Titel.")
      : r("dup-title", "technik", "wichtig", "Einzigartige Seitentitel", "ok", `${ok.length} Seiten, alle Titel verschieden.`),
    descs.length
      ? r("dup-desc", "technik", "tipp", "Einzigartige Beschreibungen", "warnung", `${descs.length}× doppelt, z. B. auf ${descs[0][1].join(", ")}`, "Jede Unterseite braucht eine eigene Beschreibung.")
      : r("dup-desc", "technik", "tipp", "Einzigartige Beschreibungen", "ok", "Alle Beschreibungen verschieden."),
  ];
}

export function bewerte(results) {
  const byCat = {};
  let sum = 0;
  let max = 0;
  for (const res of results) {
    if (res.status === "info") continue;
    const g = STUFEN[res.stufe].gewicht;
    const pts = res.status === "ok" ? 1 : res.status === "warnung" ? 0.5 : 0;
    byCat[res.kategorie] ??= { sum: 0, max: 0 };
    byCat[res.kategorie].sum += g * pts;
    byCat[res.kategorie].max += g;
    sum += g * pts;
    max += g;
  }
  const kategorien = Object.fromEntries(Object.entries(byCat).map(([k, v]) => [k, Math.round((v.sum / v.max) * 100)]));
  return { gesamt: max ? Math.round((sum / max) * 100) : 0, kategorien };
}

export function note(score) {
  if (score >= 90) return "Sehr gut";
  if (score >= 75) return "Gut";
  if (score >= 50) return "Ausbaufähig";
  return "Schwach";
}

export function massnahmen(results, limit = 6) {
  const rank = { fehler: 0, warnung: 1 };
  return results
    .filter((x) => x.status === "fehler" || x.status === "warnung")
    .sort((a, b) => STUFEN[b.stufe].gewicht - STUFEN[a.stufe].gewicht || rank[a.status] - rank[b.status])
    .slice(0, limit);
}
