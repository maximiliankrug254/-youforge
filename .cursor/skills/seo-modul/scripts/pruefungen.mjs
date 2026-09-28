import { KONTAKTSEITE, LOCAL_BUSINESS_TYPES, RECHTSTEXT, STUFEN, contains, flattenJsonLd, fold, normalizeUrl, typesOf } from "./lib.mjs";
import { robotsBlocks, sitemapPfad } from "./analyse.mjs";
import { tipp } from "./tipps.mjs";

function r(id, kategorie, stufe, titel, status, detail, fix = "") {
  return { id, kategorie, stufe, titel, status, detail, fix };
}

const kb = (bytes) => (bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`);
const sek = (ms) => `${(ms / 1000).toFixed(1).replace(".", ",")} s`;

function words(text) {
  return (text.match(/[A-Za-zÄÖÜäöüß0-9][A-Za-zÄÖÜäöüß0-9\-]{1,}/g) || []).length;
}

const pfadVon = (url) => new URL(url).pathname;
const istNoindex = (p) => /noindex/i.test(`${p.robots || ""} ${p.xRobots || ""}`);

function imSitemap(p, site) {
  if (!site.sitemap.found) return false;
  const pfade = new Set(site.sitemap.paths);
  return [p.url, p.finalUrl].filter(Boolean).some((u) => pfade.has(sitemapPfad(u)));
}

// Suchbegriff wortweise: „Marketingagentur Handwerk“ trifft auch „Marketingagentur für … Handwerk“.
const FUELLWOERTER = new Set(["fuer", "und", "oder", "mit", "von", "vom", "der", "die", "das", "den", "dem", "des", "ein", "eine", "einen", "zum", "zur", "aus", "bei", "auf", "im", "in", "am", "an"]);

function begriffWoerter(begriff) {
  return begriff
    .split(/[^A-Za-zÄÖÜäöüß0-9]+/)
    .filter((w) => w.length >= 3 && !FUELLWOERTER.has(fold(w)));
}

function begriffTreffer(text, begriff) {
  const f = fold(text);
  if (f.includes(fold(begriff))) return { art: "genau", fehlt: [] };
  const woerter = begriffWoerter(begriff);
  if (!woerter.length) return { art: "keins", fehlt: [] };
  const fehlt = woerter.filter((w) => !f.includes(fold(w)));
  if (!fehlt.length) return { art: "alle", fehlt };
  return { art: fehlt.length < woerter.length ? "teil" : "keins", fehlt };
}

function begriffCheck(id, stufe, titel, text, begriff, { fixTeil, fixKeins, keinsStatus = "fehler" }) {
  const t = begriffTreffer(text, begriff);
  if (t.art === "genau") return r(id, "inhalte", stufe, titel, "ok", "Genau so enthalten.");
  if (t.art === "alle") return r(id, "inhalte", stufe, titel, "ok", "Alle Wörter enthalten.");
  if (t.art === "teil") return r(id, "inhalte", stufe, titel, "warnung", `Teilweise – es fehlt: ${t.fehlt.join(", ")}.`, fixTeil);
  return r(id, "inhalte", stufe, titel, keinsStatus, "Nicht enthalten.", fixKeins);
}

// Firmeneintrag: verknüpfte Angaben (@id, provider, parentOrganization) mit auswerten.
const FIRMEN_FELDER = ["name", "address", "telephone", "email", "geo", "openingHoursSpecification", "openingHours", "areaServed", "url", "image", "logo", "sameAs"];

function istLokalTyp(n) {
  return typesOf(n).some((t) => LOCAL_BUSINESS_TYPES.includes(t) || /Business|Contractor|Service/.test(t || ""));
}
function istOrgTyp(n) {
  return typesOf(n).some((t) => /^(Organization|Corporation|OnlineBusiness|NGO)$/.test(t || ""));
}

function findeFirma(nodes) {
  const byId = new Map(nodes.filter((n) => n["@id"]).map((n) => [n["@id"], n]));
  const aufloesen = (v) => (v && typeof v === "object" && !Array.isArray(v) && v["@id"] && byId.has(v["@id"]) ? byId.get(v["@id"]) : v);
  const lokal = nodes.find(istLokalTyp) || null;
  const org = nodes.find(istOrgTyp) || null;
  const haupt = lokal || org;
  if (!haupt) return null;
  const quellen = [haupt, aufloesen(haupt.provider), aufloesen(haupt.parentOrganization), aufloesen(haupt.publisher), haupt === lokal ? org : null].filter(
    (n, i, arr) => n && typeof n === "object" && arr.indexOf(n) === i,
  );
  const daten = {};
  let verknuepft = false;
  for (const feld of FIRMEN_FELDER) {
    for (const [i, q] of quellen.entries()) {
      const wert = aufloesen(q[feld]);
      if (wert) {
        daten[feld] = wert;
        if (i > 0) verknuepft = true;
        break;
      }
    }
  }
  return { typ: typesOf(haupt).filter(Boolean).join(", "), lokal: Boolean(lokal), daten, verknuepft };
}

function adresseTeile(address) {
  const a = Array.isArray(address) ? address[0] : address;
  if (!a) return {};
  if (typeof a === "string") return { strasse: a, plz: a, ort: a };
  return { strasse: a.streetAddress, plz: a.postalCode, ort: a.addressLocality };
}

function findeAdresse(text, firma) {
  const de = text.match(/\b(?:D-)?\d{5}\s+[A-ZÄÖÜ][a-zäöüß]+(?:[\s-][A-ZÄÖÜ][a-zäöüß]+)?/);
  if (de) return de[0];
  const atch = text.match(/\b(?:A|CH)-\d{4}\s+[A-ZÄÖÜ][a-zäöüß]+/);
  if (atch) return atch[0];
  const us = text.match(/\b[A-Z][a-zA-Z .'-]{1,30},\s*[A-Z]{2}\s+\d{5}(?:-\d{4})?\b/);
  if (us) return us[0];
  const { plz } = adresseTeile(firma?.daten.address);
  if (plz && typeof plz === "string" && plz.length <= 10 && text.includes(plz)) return plz;
  return null;
}

export function hatFaq(p) {
  const nodes = flattenJsonLd(p.jsonLd.filter((b) => !b.__fehler));
  const schema = nodes.some((n) => typesOf(n).includes("FAQPage"));
  const ueberschrift = p.headings.some((h) => /häufig|fragen|faq/i.test(h.text));
  return { gefunden: schema || ueberschrift || p.details >= 3, schema };
}

/**
 * Ordnet eine Seite ein, bevor sie geprüft wird:
 * - rechtstext: Impressum, Datenschutz, AGB … → nur Grundtechnik, zählt nicht zur Gesamtnote
 * - versteckt: bewusst vor Google verborgen (noindex oder robots.txt, nicht in der Sitemap) → zählt nicht
 * - normal
 */
export function einordnen(p, site, opts) {
  const pfad = pfadVon(p.finalUrl || p.url);
  const kopf = `${p.title || ""} ${p.headings.find((h) => h.level === 1)?.text || ""}`;
  if (RECHTSTEXT.test(pfad) || /^(impressum|datenschutz|agb|allgemeine geschäftsbedingungen|privacy|widerruf)/i.test(kopf.trim())) {
    return { typ: "rechtstext", gewertet: false, grund: "Rechtstext – nur Grundtechnik geprüft, zählt nicht zur Gesamtnote." };
  }
  if (!opts.istStart && !opts.ignoriereNoindex && !imSitemap(p, site) && (istNoindex(p) || robotsBlocks(site.robots, pfad))) {
    return { typ: "versteckt", gewertet: false, grund: "Bewusst vor Google verborgen – zählt nicht zur Gesamtnote." };
  }
  return { typ: KONTAKTSEITE.test(pfad) ? "kontakt" : "normal", gewertet: true, grund: "" };
}

export function pruefeSeite(p, site, opts) {
  const out = [];
  const pfad = pfadVon(p.finalUrl || p.url);
  const isLocal = /^(localhost|127\.|0\.0\.0\.0)/.test(new URL(p.url).hostname);
  const noindex = istNoindex(p);
  const plattform = isLocal ? "nextjs" : p.plattform || "unbekannt";
  const T = (key) => tipp(key, plattform);
  const typ = opts.einordnung?.typ || "normal";
  const nebenbei = typ === "rechtstext" || typ === "versteckt";
  const voll = typ !== "rechtstext";
  const start = Boolean(opts.istStart);
  const inSitemap = imSitemap(p, site);
  const ueber = Boolean(opts.ueberregional);

  // Technik
  const umgeleitet = p.finalUrl && normalizeUrl(p.finalUrl) !== normalizeUrl(p.url) ? ` – umgeleitet auf ${p.finalUrl}` : "";
  if (p.status >= 400 || p.status === 0) {
    out.push(
      r(
        "status",
        "technik",
        "kritisch",
        "Seite erreichbar",
        "fehler",
        `HTTP ${p.status}${umgeleitet}. Weitere Prüfungen entfallen, weil nur eine Fehlerseite ausgeliefert wird.`,
        "Adresse prüfen bzw. die Seite wieder erreichbar machen (Status 200).",
      ),
    );
    return out;
  }
  out.push(
    p.status === 200
      ? r("status", "technik", "kritisch", "Seite erreichbar", "ok", `HTTP ${p.status}${umgeleitet}`)
      : r("status", "technik", "kritisch", "Seite erreichbar", "warnung", `HTTP ${p.status}${umgeleitet}`, "Die Seite sollte mit Status 200 antworten."),
  );

  const idx = (status, detail, fix = "") => r("indexierbar", "technik", "kritisch", "Für Google freigegeben", status, detail, fix);
  if (!noindex) out.push(idx("ok", "Kein noindex gesetzt."));
  else if (opts.ignoriereNoindex) out.push(idx("info", "noindex gesetzt – bei Demo-Seiten gewollt, für die Bewertung ignoriert."));
  else if (typ === "rechtstext") out.push(idx("info", "noindex gesetzt – bei Rechtstexten üblich und in Ordnung."));
  else if (start) out.push(idx("fehler", "Die Startseite ist für Google gesperrt (noindex).", T("noindex")));
  else if (inSitemap) out.push(idx("fehler", "Widerspruch: Die Seite steht in der Sitemap, ist aber per noindex gesperrt.", T("noindex")));
  else out.push(idx("info", "noindex gesetzt und nicht in der Sitemap – die Seite ist bewusst verborgen. Soll sie gefunden werden: noindex entfernen."));

  const blocked = robotsBlocks(site.robots, pfad);
  const rob = (status, detail, fix = "") => r("robots", "technik", "wichtig", "robots.txt", status, detail, fix);
  if (!site.robots.found) out.push(rob("warnung", "Keine robots.txt gefunden.", T("robotsFehlt")));
  else if (blocked && (opts.ignoriereNoindex || nebenbei)) out.push(rob("info", `Pfad per robots.txt ausgeblendet (Disallow: ${blocked}) – hier gewollt.`));
  else if (blocked) out.push(rob("fehler", `robots.txt sperrt diese Seite (Disallow: ${blocked}).`, T("robotsSperrt")));
  else out.push(rob("ok", "Vorhanden, Seite nicht gesperrt."));

  const sm = (status, detail, fix = "") => r("sitemap", "technik", "wichtig", "Sitemap", status, detail, fix);
  const teile = site.sitemap.teile?.length ? ` (${site.sitemap.teile.length} Teil-Sitemaps)` : "";
  if (!site.sitemap.found) out.push(sm(nebenbei ? "info" : "fehler", "Keine gültige Sitemap gefunden.", T("sitemapFehlt")));
  else if (inSitemap) out.push(sm("ok", `Vorhanden${teile}, Seite eingetragen.`));
  else if (opts.ignoriereNoindex || nebenbei) out.push(sm("info", `Vorhanden${teile}, diese Seite ist – passend – nicht eingetragen.`));
  else out.push(sm("warnung", `Sitemap vorhanden${teile}, diese Seite ist aber nicht eingetragen.`, T("sitemapSeite")));

  if (start && site.sitemap.benutzer?.length) {
    out.push(
      r(
        "sitemap-benutzer",
        "technik",
        "tipp",
        "Benutzerliste in der Sitemap",
        "warnung",
        `Die Sitemap listet Autoren- bzw. Benutzerseiten (${site.sitemap.benutzer.map((u) => u.split("/").pop()).join(", ")}). Das bringt bei Google nichts und verrät oft Login-Namen.`,
        T("sitemapBenutzer"),
      ),
    );
  }

  if (isLocal) out.push(r("https", "technik", "kritisch", "HTTPS", "info", "Lokal geprüft – live läuft Vercel immer über HTTPS."));
  else
    out.push(
      p.finalUrl?.startsWith("https://")
        ? r("https", "technik", "kritisch", "HTTPS", "ok", "Verschlüsselt.")
        : r("https", "technik", "kritisch", "HTTPS", "fehler", "Seite läuft ohne HTTPS.", T("https")),
    );

  if (voll) {
    const tl = p.title?.length || 0;
    out.push(
      !tl
        ? r("title", "technik", "wichtig", "Seitentitel", "fehler", "Kein Seitentitel.", T("titel"))
        : tl < 30 || tl > 65
          ? r("title", "technik", "wichtig", "Seitentitel", "warnung", `${tl} Zeichen: „${p.title}“`, "Ideal sind 30–65 Zeichen, sonst kürzt Google oder verschenkt Platz.")
          : r("title", "technik", "wichtig", "Seitentitel", "ok", `${tl} Zeichen: „${p.title}“`),
    );

    const dl = p.description?.length || 0;
    out.push(
      !dl
        ? r("description", "technik", "wichtig", "Beschreibung (Meta-Description)", "fehler", "Keine Beschreibung.", T("beschreibung"))
        : dl < 70 || dl > 160
          ? r("description", "technik", "wichtig", "Beschreibung (Meta-Description)", "warnung", `${dl} Zeichen.`, "Ideal sind 70–160 Zeichen.")
          : r("description", "technik", "wichtig", "Beschreibung (Meta-Description)", "ok", `${dl} Zeichen.`),
    );

    out.push(
      p.canonical
        ? r("canonical", "technik", "tipp", "Canonical-Link", "ok", p.canonical)
        : r("canonical", "technik", "tipp", "Canonical-Link", "fehler", "Kein Canonical-Link.", T("canonical")),
    );
  }

  out.push(
    p.lang?.toLowerCase().startsWith("de")
      ? r("lang", "technik", "wichtig", "Sprache der Seite", "ok", `lang="${p.lang}"`)
      : r("lang", "technik", "wichtig", "Sprache der Seite", p.lang ? "warnung" : "fehler", p.lang ? `lang="${p.lang}"` : "Keine Sprache angegeben.", T("sprache")),
  );

  out.push(
    /width=device-width/.test(p.viewport || "")
      ? r("viewport", "technik", "kritisch", "Handy-tauglich (Viewport)", "ok", "Viewport gesetzt.")
      : r("viewport", "technik", "kritisch", "Handy-tauglich (Viewport)", "fehler", "Kein mobiler Viewport.", T("viewport")),
  );

  const h1 = p.headings.filter((h) => h.level === 1);
  if (voll) {
    out.push(
      h1.length === 1
        ? r("h1", "technik", "wichtig", "Hauptüberschrift (H1)", "ok", `„${h1[0].text}“`)
        : h1.length === 0
          ? r("h1", "technik", "wichtig", "Hauptüberschrift (H1)", "fehler", "Keine H1 gefunden.", "Genau eine H1 pro Seite, die sagt, worum es geht.")
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
        : r("og", "technik", "tipp", "Vorschau beim Teilen (Open Graph)", "warnung", "Kein Vorschaubild/-titel für WhatsApp, Facebook & Co.", T("vorschau")),
    );
  }

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
        p.lcp <= 2500 ? "" : T("ladezeit"),
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

  if (!voll) return out;

  // Inhalte
  const wc = words(p.text);
  if (typ === "kontakt")
    out.push(r("woerter", "inhalte", "wichtig", "Textumfang", "info", `${wc} Wörter – bei einer Kontaktseite ist wenig Text in Ordnung.`));
  else
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

  // Suchbegriff gehört auf die Startseite bzw. die geprüfte Einzelseite, nicht auf jede Unterseite.
  if (opts.keyword && start) {
    const kw = opts.keyword;
    out.push(
      begriffCheck("kw-title", "wichtig", `Suchbegriff „${kw}“ im Seitentitel`, p.title || "", kw, {
        fixTeil: "Die fehlenden Wörter im Seitentitel ergänzen, wichtigste Wörter nach vorne.",
        fixKeins: "Suchbegriff vorne in den Seitentitel.",
      }),
    );
    out.push(
      begriffCheck("kw-h1", "wichtig", `Suchbegriff „${kw}“ in der H1`, h1.map((h) => h.text).join(" "), kw, {
        fixTeil: "Die fehlenden Wörter natürlich in die Hauptüberschrift einbauen.",
        fixKeins: "Suchbegriff natürlich in die Hauptüberschrift einbauen – oder direkt darunter in einer Unterzeile.",
        keinsStatus: "warnung",
      }),
    );
    out.push(
      begriffCheck("kw-text", "tipp", `Suchbegriff „${kw}“ im Text`, p.text, kw, {
        fixTeil: "Die fehlenden Wörter im Fließtext natürlich verwenden.",
        fixKeins: "Im Fließtext natürlich verwenden, nicht stopfen.",
      }),
    );
  }

  if (!opts.websiteModus) {
    const faq = hatFaq(p);
    out.push(
      faq.gefunden
        ? r("faq", "inhalte", "tipp", "Fragen & Antworten", "ok", faq.schema ? "FAQ mit Google-Eintrag (FAQPage)." : "FAQ-Bereich gefunden.")
        : r("faq", "inhalte", "tipp", "Fragen & Antworten", "warnung", "Kein FAQ-Bereich gefunden.", "Echte Kundenfragen beantworten – hilft bei Google und KI-Suchen (ChatGPT, Google-KI)."),
    );
  }

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
      .filter((u) => u && u.origin === origin && u.pathname !== pfad)
      .map((u) => u.pathname),
  );
  out.push(
    internal.size >= 3
      ? r("links", "inhalte", "tipp", "Interne Verlinkung", "ok", `${internal.size} Links auf andere Unterseiten.`)
      : r("links", "inhalte", "tipp", "Interne Verlinkung", "warnung", `${internal.size} Links auf andere Unterseiten.`, "Leistungen, Kontakt und Referenzen untereinander verlinken."),
  );

  const tel = p.links.filter((l) => l.href.startsWith("tel:"));
  const mail = p.links.filter((l) => l.href.startsWith("mailto:"));
  const cta = tel.length || mail.length || p.links.some((l) => /kontakt|contact|anfrage|angebot|termin|briefing|calendly/i.test(`${l.text} ${l.href}`));
  out.push(
    cta
      ? r("kontakt", "inhalte", "wichtig", "Kontakt mit einem Klick", "ok", tel.length ? "Telefon-Link und/oder Kontakt-Link vorhanden." : "Kontakt-Link vorhanden.")
      : r("kontakt", "inhalte", "wichtig", "Kontakt mit einem Klick", "fehler", "Kein Anruf- oder Kontakt-Link gefunden.", "Gut sichtbaren Anruf-Button und Kontakt-Link einbauen."),
  );

  // Lokal bzw. Firmenangaben
  const nodes = flattenJsonLd(p.jsonLd.filter((b) => !b.__fehler));
  const firma = findeFirma(nodes);
  const kaputt = p.jsonLd.some((b) => b.__fehler);
  // Den Firmeneintrag braucht Google einmal pro Website – bei Unterseiten prüft ihn pruefeWebsite().
  const eintragHier = !opts.websiteModus || start;

  if (eintragHier && !firma) {
    out.push(
      r(
        "schema",
        "lokal",
        ueber ? "wichtig" : "kritisch",
        "Firmeneintrag für Google (JSON-LD)",
        "fehler",
        kaputt ? "JSON-LD vorhanden, aber fehlerhaft." : ueber ? "Kein Firmeneintrag (Organization) gefunden." : "Kein Firmeneintrag (LocalBusiness) gefunden.",
        ueber ? T("organisation") : T("firmeneintrag"),
      ),
    );
    out.push(r("nap", "lokal", "wichtig", ueber ? "Firmendaten im Eintrag" : "Name, Adresse, Telefon im Eintrag", "fehler", "Kein Firmeneintrag vorhanden.", "Erst den Firmeneintrag einbauen."));
  } else if (eintragHier) {
    const hinweisVerknuepft = firma.verknuepft ? " (teils aus verknüpftem Eintrag)" : "";
    if (firma.lokal || ueber)
      out.push(r("schema", "lokal", ueber ? "wichtig" : "kritisch", "Firmeneintrag für Google (JSON-LD)", "ok", `Typ: ${firma.typ}`));
    else
      out.push(
        r(
          "schema",
          "lokal",
          "kritisch",
          "Firmeneintrag für Google (JSON-LD)",
          "warnung",
          `Nur ein allgemeiner Eintrag (Typ: ${firma.typ}). Für die lokale Suche fehlt ein Betriebs-Typ wie LocalBusiness oder HousePainter.`,
          T("firmeneintrag"),
        ),
      );

    const d = firma.daten;
    const adr = adresseTeile(d.address);
    const need = ueber
      ? { Name: d.name, Adresse: adr.strasse || adr.ort, "Telefon oder E-Mail": d.telephone || d.email }
      : { Name: d.name, Straße: adr.strasse, PLZ: adr.plz, Ort: adr.ort, Telefon: d.telephone };
    const fehlt = Object.entries(need)
      .filter(([, v]) => !v)
      .map(([k]) => k);
    out.push(
      fehlt.length === 0
        ? r("nap", "lokal", "wichtig", ueber ? "Firmendaten im Eintrag" : "Name, Adresse, Telefon im Eintrag", "ok", `Vollständig${hinweisVerknuepft}.`)
        : r(
            "nap",
            "lokal",
            "wichtig",
            ueber ? "Firmendaten im Eintrag" : "Name, Adresse, Telefon im Eintrag",
            fehlt.length <= 2 ? "warnung" : "fehler",
            `Fehlt: ${fehlt.join(", ")}`,
            T("firmendaten"),
          ),
    );

    const extra = ueber
      ? { Website: d.url, Logo: d.logo || d.image, "Profile (Social Media)": d.sameAs, Einsatzgebiet: d.areaServed }
      : { Koordinaten: d.geo, Öffnungszeiten: d.openingHoursSpecification || d.openingHours, Einsatzgebiet: d.areaServed, Website: d.url, Bild: d.image || d.logo };
    const fehltExtra = Object.entries(extra)
      .filter(([, v]) => !v)
      .map(([k]) => k);
    out.push(
      fehltExtra.length <= (ueber ? 1 : 2)
        ? r("schema-extra", "lokal", "tipp", "Zusatzangaben im Eintrag", "ok", fehltExtra.length ? `Fehlt noch: ${fehltExtra.join(", ")}` : "Vollständig.")
        : r(
            "schema-extra",
            "lokal",
            "tipp",
            "Zusatzangaben im Eintrag",
            "warnung",
            `Fehlt: ${fehltExtra.join(", ")}`,
            ueber ? "Website, Logo, Social-Media-Profile und Einsatzgebiet ergänzen." : "Koordinaten, Öffnungszeiten und Einsatzgebiet ergänzen.",
          ),
    );
  }

  if (ueber) {
    out.push(
      tel.length || mail.length
        ? r("tel", "lokal", "tipp", "Telefon oder E-Mail antippbar", "ok", [tel.length && `${tel.length}× Telefon`, mail.length && `${mail.length}× E-Mail`].filter(Boolean).join(", "))
        : r("tel", "lokal", "tipp", "Telefon oder E-Mail antippbar", "warnung", "Weder Telefon- noch E-Mail-Link.", 'Telefon als <a href="tel:…"> oder E-Mail als <a href="mailto:…"> verlinken.'),
    );
  } else {
    const nummerImText = p.text.match(/(?:\+49|\+43|\+41|\b0)[\s()/-]*\d{2,5}(?:[\s/-]*\d){4,}/);
    out.push(
      tel.length
        ? r("tel", "lokal", "wichtig", "Telefonnummer antippbar", "ok", `${tel.length}× tel:-Link.`)
        : nummerImText
          ? r("tel", "lokal", "wichtig", "Telefonnummer antippbar", "fehler", `Die Nummer steht auf der Seite („${nummerImText[0].trim()}“), lässt sich auf dem Handy aber nicht antippen.`, 'Nummer als <a href="tel:…"> verlinken – ideal auch im Kopfbereich.')
          : r("tel", "lokal", "wichtig", "Telefonnummer antippbar", "fehler", "Keine Telefonnummer auf dieser Seite.", 'Telefonnummer als <a href="tel:…"> einbauen – ideal im Kopfbereich jeder Seite.'),
    );
  }

  const adresse = findeAdresse(p.text, firma);
  if (adresse) out.push(r("adresse", "lokal", ueber ? "tipp" : "wichtig", "Adresse sichtbar auf der Seite", "ok", `„${adresse}“`));
  else if (ueber) out.push(r("adresse", "lokal", "tipp", "Adresse sichtbar auf der Seite", "info", "Keine Adresse auf dieser Seite – bei überregionalen Anbietern genügt sie im Impressum."));
  else out.push(r("adresse", "lokal", "wichtig", "Adresse sichtbar auf der Seite", "warnung", "Keine Adresse (PLZ + Ort) im sichtbaren Text.", "Adresse im Footer oder Kontaktbereich zeigen."));

  if (opts.ort) {
    const ort = opts.ort;
    const inTitle = contains(p.title, ort);
    const inHead = h1.some((h) => contains(h.text, ort));
    const inText = contains(p.text, ort);
    const titel = ueber ? `Einsatzgebiet „${ort}“ genannt` : `Ort „${ort}“ auf der Seite`;
    if (ueber) {
      if (start) {
        const imEintrag = contains(JSON.stringify(firma?.daten.areaServed || ""), ort);
        out.push(
          inTitle || inText || imEintrag
            ? r("ort", "lokal", "tipp", titel, "ok", [inTitle && "im Seitentitel", inText && "im Text", imEintrag && "im Firmeneintrag"].filter(Boolean).join(", "))
            : r("ort", "lokal", "tipp", titel, "warnung", "Das Einsatzgebiet wird nicht genannt.", "Einsatzgebiet im Text oder Firmeneintrag (areaServed) nennen."),
        );
      }
    } else if (start) {
      out.push(
        inTitle && (inHead || inText)
          ? r("ort", "lokal", "wichtig", titel, "ok", `Im Seitentitel${inHead ? ", in der H1" : ""} und im Text.`)
          : inText || inTitle
            ? r("ort", "lokal", "wichtig", titel, "warnung", inTitle ? "Nur im Seitentitel." : "Nur im Text, nicht im Seitentitel.", "Ort in Seitentitel und Hauptüberschrift nennen.")
            : r("ort", "lokal", "wichtig", titel, "fehler", "Ort wird nicht genannt.", "Ort in Seitentitel, H1 und Text nennen."),
      );
    } else {
      out.push(
        inTitle || inText
          ? r("ort", "lokal", "tipp", titel, "ok", inTitle ? "Im Seitentitel." : "Im Text.")
          : r("ort", "lokal", "tipp", titel, "warnung", "Ort auf dieser Seite nicht genannt.", "Ort im Text erwähnen, bei Leistungsseiten gern auch im Seitentitel."),
      );
    }
  }

  return out;
}

/** Prüfungen über die ganze Website – nur mit den gewerteten Seiten. */
export function pruefeWebsite(pages, opts = {}) {
  const ok = pages.filter((p) => p.ok);
  if (ok.length < 2) return [];
  const mitEintrag = ok
    .map((p) => ({ pfad: new URL(p.url).pathname, firma: findeFirma(flattenJsonLd(p.jsonLd.filter((b) => !b.__fehler))) }))
    .filter((x) => x.firma && (x.firma.lokal || opts.ueberregional));
  const eintrag = mitEintrag.length
    ? r("schema-website", "lokal", "wichtig", "Firmeneintrag auf der Website", "ok", `Auf ${mitEintrag.length} von ${ok.length} Seiten, z. B. ${mitEintrag.slice(0, 3).map((x) => x.pfad).join(", ")}.`)
    : r(
        "schema-website",
        "lokal",
        "wichtig",
        "Firmeneintrag auf der Website",
        "fehler",
        "Auf keiner Seite ein Firmeneintrag für Google.",
        tipp(opts.ueberregional ? "organisation" : "firmeneintrag", ok[0].plattform || "unbekannt"),
      );
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
  const mitFaq = ok.filter((p) => hatFaq(p).gefunden).map((p) => new URL(p.url).pathname);
  return [
    titles.length
      ? r("dup-title", "technik", "wichtig", "Einzigartige Seitentitel", "fehler", titles.map(([t, l]) => `„${t}“ auf ${l.join(", ")}`).join(" · "), "Jede Unterseite braucht einen eigenen Titel.")
      : r("dup-title", "technik", "wichtig", "Einzigartige Seitentitel", "ok", `${ok.length} Seiten, alle Titel verschieden.`),
    descs.length
      ? r("dup-desc", "technik", "tipp", "Einzigartige Beschreibungen", "warnung", `${descs.length}× doppelt, z. B. auf ${descs[0][1].join(", ")}`, "Jede Unterseite braucht eine eigene Beschreibung.")
      : r("dup-desc", "technik", "tipp", "Einzigartige Beschreibungen", "ok", "Alle Beschreibungen verschieden."),
    mitFaq.length
      ? r("faq", "inhalte", "tipp", "Fragen & Antworten", "ok", `FAQ-Bereich auf ${mitFaq.slice(0, 3).join(", ")}${mitFaq.length > 3 ? " …" : ""}.`)
      : r("faq", "inhalte", "tipp", "Fragen & Antworten", "warnung", "Auf keiner Seite ein FAQ-Bereich.", "Echte Kundenfragen beantworten – hilft bei Google und KI-Suchen (ChatGPT, Google-KI)."),
    eintrag,
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
