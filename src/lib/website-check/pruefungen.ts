import type { CheckPunkt, GoogleDaten, PunktStatus, PunktStufe } from "./types";

const GEWICHT: Record<PunktStufe, number> = { kritisch: 3, wichtig: 2, tipp: 1 };
const WERT: Record<Exclude<PunktStatus, "info">, number> = { ok: 1, warnung: 0.5, fehler: 0 };

const LOKALE_TYPEN = new Set([
  "LocalBusiness",
  "HomeAndConstructionBusiness",
  "GeneralContractor",
  "HousePainter",
  "Plumber",
  "Electrician",
  "RoofingContractor",
  "Locksmith",
  "HVACBusiness",
  "MovingCompany",
  "ProfessionalService",
  "AutoRepair",
  "Store",
  "HomeGoodsStore",
  "FurnitureStore",
  "HardwareStore",
  "CleaningService",
]);
const ORG_TYPEN = /^(Organization|Corporation|OnlineBusiness|NGO)$/;

const ENTITAETEN: Record<string, string> = {
  amp: "&",
  quot: '"',
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  auml: "ä",
  ouml: "ö",
  uuml: "ü",
  Auml: "Ä",
  Ouml: "Ö",
  Uuml: "Ü",
  szlig: "ß",
  ndash: "–",
  mdash: "—",
  bdquo: "„",
  ldquo: "“",
  rdquo: "”",
  hellip: "…",
  euro: "€",
  copy: "©",
};

function dekodiere(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name: string) => ENTITAETEN[name] ?? m);
}

const bereinige = (text: string) => dekodiere(text.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function attribute(tag: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/g)) {
    out[m[1].toLowerCase()] = dekodiere(m[2] ?? m[3] ?? m[4] ?? "");
  }
  return out;
}

const tags = (html: string, name: string) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => attribute(m[0]));
const sek = (ms: number) => `${(Math.round(ms / 100) / 10).toFixed(1).replace(".", ",")} s`;
const kurz = (text: string, max = 70) => (text.length > max ? `${text.slice(0, max - 1)}…` : text);

function punkt(id: string, titel: string, stufe: PunktStufe, status: PunktStatus, detail: string, fix = ""): CheckPunkt {
  return { id, titel, stufe, status, detail, fix: status === "ok" || status === "info" ? "" : fix };
}

type JsonKnoten = Record<string, unknown>;

function jsonLdKnoten(html: string): JsonKnoten[] {
  const knoten: JsonKnoten[] = [];
  const sammle = (wert: unknown) => {
    if (Array.isArray(wert)) wert.forEach(sammle);
    else if (wert && typeof wert === "object") {
      const obj = wert as JsonKnoten;
      knoten.push(obj);
      if (obj["@graph"]) sammle(obj["@graph"]);
    }
  };
  for (const m of html.matchAll(/<script\b[^>]*type\s*=\s*["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      sammle(JSON.parse(m[1].trim()));
    } catch {
      /* fehlerhafter Eintrag – zählt nicht */
    }
  }
  return knoten;
}

const typen = (k: JsonKnoten) => [k["@type"]].flat().filter((t): t is string => typeof t === "string");

export function erkennePlattform(html: string): string | null {
  const generator = tags(html, "meta").find((m) => m.name?.toLowerCase() === "generator")?.content || "";
  const alles = `${generator} ${html.slice(0, 400_000)}`;
  if (/wp-content\/|wp-includes\//i.test(alles) || /wordpress/i.test(generator)) return "WordPress";
  if (/wix\.com|parastorage\.com|wixstatic\.com/i.test(alles)) return "Wix";
  if (/jimdo|jimcdn\.com|jimstatic/i.test(alles)) return "Jimdo";
  if (/cdn\.shopify\.com|Shopify\.theme/i.test(alles)) return "Shopify";
  if (/squarespace/i.test(alles)) return "Squarespace";
  if (/webflow/i.test(generator) || /data-wf-site/i.test(alles)) return "Webflow";
  if (/typo3/i.test(generator) || /typo3(conf|temp)\//i.test(alles)) return "TYPO3";
  if (/joomla/i.test(generator)) return "Joomla";
  if (/\/_next\/static\//.test(alles)) return "Next.js";
  return null;
}

export type Rohdaten = {
  finalUrl: string;
  html: string;
  /** null = robots.txt konnte nicht geprüft werden */
  robotsGefunden: boolean | null;
  /** null = Sitemap konnte nicht geprüft werden */
  sitemapGefunden: boolean | null;
  google: GoogleDaten | null;
};

export function pruefeStartseite(daten: Rohdaten): { punkte: CheckPunkt[]; nurBrowser: boolean } {
  const { html, finalUrl, google } = daten;
  const ohneSkripte = html.replace(/<!--[\s\S]*?-->/g, " ").replace(/<(script|style|noscript|template)\b[\s\S]*?<\/\1>/gi, " ");
  const body = /<body\b[^>]*>([\s\S]*)<\/body>/i.exec(ohneSkripte)?.[1] ?? ohneSkripte;
  const text = bereinige(body.replace(/<(svg|iframe)\b[\s\S]*?<\/\1>/gi, " "));
  const woerter = text.split(/\s+/).filter((w) => /[a-zäöüß]{2,}/i.test(w)).length;
  const nurBrowser =
    woerter < 80 && (/<div[^>]+id\s*=\s*["']?(root|app|__next|__nuxt)["'\s>]/i.test(html) || /<noscript\b[^>]*>[\s\S]{0,400}javascript/i.test(html));

  const meta = tags(html, "meta");
  const metaName = (name: string) => meta.find((m) => m.name?.toLowerCase() === name)?.content?.trim() || "";
  const metaProp = (name: string) => meta.find((m) => m.property?.toLowerCase() === name)?.content?.trim() || "";
  const punkte: CheckPunkt[] = [];

  punkte.push(
    finalUrl.startsWith("https://")
      ? punkt("https", "Verschlüsselung (HTTPS)", "kritisch", "ok", "Die Verbindung ist verschlüsselt.")
      : punkt(
          "https",
          "Verschlüsselung (HTTPS)",
          "kritisch",
          "fehler",
          "Die Website läuft ohne Verschlüsselung. Browser warnen Besucher mit „Nicht sicher“.",
          "SSL-Zertifikat beim Hoster aktivieren (oft kostenlos) und alle Adressen auf https umleiten.",
        ),
  );

  const viewport = metaName("viewport");
  const feste = /width\s*=\s*(\d+)/i.exec(viewport)?.[1];
  punkte.push(
    /width\s*=\s*device-width/i.test(viewport)
      ? punkt("viewport", "Handytauglich", "kritisch", "ok", "Die Seite passt sich der Bildschirmbreite an.")
      : punkt(
          "viewport",
          "Handytauglich",
          "kritisch",
          "fehler",
          feste
            ? `Feste Breite von ${feste} Pixeln: Handys zeigen eine verkleinerte Desktop-Seite mit winziger Schrift. Google wertet das als nicht handytauglich.`
            : "Kein Hinweis für Handys (Viewport). Die Seite wird auf dem Smartphone verkleinert dargestellt.",
          "Die Website für Handys anpassen (responsives Design) bzw. im Baukasten die mobile Ansicht einschalten.",
        ),
  );

  if (google) {
    const feld = google.feld;
    const quelle = feld?.quelle === "seite" ? "für diese Seite" : "für deine Domain";
    const lcp = feld?.lcp ?? google.labor.lcp;
    if (lcp != null) {
      const status = lcp <= 2500 ? "ok" : lcp <= 4000 ? "warnung" : "fehler";
      punkte.push(
        punkt(
          "ladezeit",
          "Ladezeit am Handy",
          "wichtig",
          status,
          feld?.lcp != null
            ? `Echte Besucher sehen den Hauptinhalt nach ${sek(lcp)} (Google-Nutzerdaten der letzten 28 Tage ${quelle}). Gut sind bis 2,5 s.`
            : `Googles Testlauf am Handy: Hauptinhalt nach ${sek(lcp)} sichtbar. Gut sind bis 2,5 s. Echte Nutzerdaten hat Google für diese Website noch nicht.`,
          "Große Bilder verkleinern und als WebP speichern, Slider und Videos im oberen Bereich reduzieren, unnötige Skripte und Plugins entfernen.",
        ),
      );
    }
    const cls = feld?.cls ?? google.labor.cls;
    if (cls != null) {
      punkte.push(
        punkt(
          "cls",
          "Ruhiger Seitenaufbau",
          "wichtig",
          cls <= 0.1 ? "ok" : cls <= 0.25 ? "warnung" : "fehler",
          cls <= 0.1
            ? "Beim Laden verrutscht nichts Nennenswertes."
            : `Beim Laden verrutschen Inhalte spürbar (Wert ${cls.toFixed(2).replace(".", ",")}, gut sind bis 0,10). Besucher tippen dadurch leicht daneben.`,
          "Bildern und Videos feste Größen geben und Platz für Banner, Pop-ups und nachladende Elemente reservieren.",
        ),
      );
    }
  } else {
    punkte.push(
      punkt(
        "ladezeit",
        "Ladezeit am Handy",
        "wichtig",
        "info",
        "Die Ladezeit ließ sich im Schnell-Check gerade nicht messen. Im vollständigen Bericht messen wir sie für jede Unterseite.",
      ),
    );
  }

  const titel = bereinige(/<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1] || "");
  punkte.push(
    !titel
      ? punkt("titel", "Seitentitel", "wichtig", "fehler", "Kein Seitentitel – Google muss sich selbst etwas ausdenken.", "Seitentitel setzen: Leistung + Ort + Firmenname.")
      : titel.length < 30 || titel.length > 65
        ? punkt(
            "titel",
            "Seitentitel",
            "wichtig",
            "warnung",
            `${titel.length} Zeichen: „${kurz(titel)}“. Ideal sind 30–65 Zeichen, sonst kürzt Google oder verschenkt Platz.`,
            "Seitentitel auf 30–65 Zeichen bringen: Leistung + Ort + Firmenname.",
          )
        : punkt("titel", "Seitentitel", "wichtig", "ok", `„${kurz(titel)}“`),
  );

  const beschreibung = metaName("description");
  punkte.push(
    !beschreibung
      ? punkt(
          "beschreibung",
          "Beschreibung bei Google",
          "wichtig",
          "fehler",
          "Keine Beschreibung hinterlegt. Google zeigt dann einen zufälligen Textausschnitt im Suchergebnis.",
          "Meta-Beschreibung setzen: 1–2 Sätze mit Leistung, Ort und Nutzen.",
        )
      : beschreibung.length < 70 || beschreibung.length > 160
        ? punkt(
            "beschreibung",
            "Beschreibung bei Google",
            "wichtig",
            "warnung",
            `${beschreibung.length} Zeichen. Ideal sind 70–160 Zeichen.`,
            "Beschreibung auf 70–160 Zeichen bringen: Leistung, Ort und Nutzen.",
          )
        : punkt("beschreibung", "Beschreibung bei Google", "wichtig", "ok", `${beschreibung.length} Zeichen, passende Länge.`),
  );

  if (nurBrowser) {
    punkte.push(
      punkt(
        "inhalt",
        "Überschrift und Text",
        "wichtig",
        "info",
        "Deine Seite wird erst im Browser aufgebaut. Überschriften und Text prüfen wir im vollständigen Bericht mit einem echten Browser.",
      ),
    );
  } else {
    const h1 = [...ohneSkripte.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => ({
      text: bereinige(m[1]),
      nurBild: !bereinige(m[1]) && /<(img|svg)\b/i.test(m[1]),
    }));
    punkte.push(
      h1.length === 0
        ? punkt("h1", "Hauptüberschrift (H1)", "wichtig", "fehler", "Keine Hauptüberschrift gefunden.", "Genau eine H1 setzen, die sagt, was du anbietest und wo.")
        : h1.length > 1
          ? punkt("h1", "Hauptüberschrift (H1)", "wichtig", "warnung", `${h1.length} Hauptüberschriften gefunden – Google weiß nicht, welche zählt.`, "Nur eine H1 pro Seite, den Rest als Zwischenüberschriften (H2/H3).")
          : h1[0].nurBild
            ? punkt(
                "h1",
                "Hauptüberschrift (H1)",
                "wichtig",
                "warnung",
                "Die Hauptüberschrift ist nur ein Bild bzw. Logo – sie sagt Google nicht, worum es geht.",
                "Eine echte Text-Überschrift als H1 setzen: Leistung + Ort.",
              )
            : punkt("h1", "Hauptüberschrift (H1)", "wichtig", "ok", `„${kurz(h1[0].text)}“`),
    );
    punkte.push(
      woerter < 150
        ? punkt("text", "Textumfang", "wichtig", "fehler", `Nur etwa ${woerter} Wörter auf der Startseite. Google hat kaum etwas, woran es dich erkennt.`, "Mehr echten Inhalt: Leistungen erklären, Ablauf, Einsatzgebiet, häufige Fragen.")
        : woerter < 300
          ? punkt("text", "Textumfang", "wichtig", "warnung", `Etwa ${woerter} Wörter auf der Startseite – eher wenig.`, "Leistungen, Ablauf und Einsatzgebiet ausführlicher beschreiben.")
          : punkt("text", "Textumfang", "wichtig", "ok", `Etwa ${woerter} Wörter – genug Inhalt für Google.`),
    );
  }

  const telLink = /href\s*=\s*["']?\s*tel:/i.test(ohneSkripte);
  const telSichtbar = /(?:\+4[139]|004[139]|\(0\d{2,5}\)|\b0\d{2,5})[\s/\-.)]*\d[\d\s/\-.]{4,}\d/.test(text);
  punkte.push(
    telLink
      ? punkt("telefon", "Telefonnummer antippbar", "wichtig", "ok", "Am Handy reicht ein Tipp zum Anrufen.")
      : telSichtbar
        ? punkt(
            "telefon",
            "Telefonnummer antippbar",
            "wichtig",
            "warnung",
            "Die Telefonnummer steht da, lässt sich am Handy aber nicht antippen.",
            "Telefonnummer als anklickbaren Link (tel:) einbauen – ideal im Kopfbereich jeder Seite.",
          )
        : punkt(
            "telefon",
            "Telefonnummer antippbar",
            nurBrowser ? "tipp" : "wichtig",
            nurBrowser ? "info" : "fehler",
            nurBrowser ? "Wir prüfen das im vollständigen Bericht." : "Keine Telefonnummer auf der Startseite gefunden.",
            "Telefonnummer gut sichtbar und antippbar (tel:) einbauen – ideal im Kopfbereich jeder Seite.",
          ),
  );

  const knoten = jsonLdKnoten(html);
  const lokal = knoten.find((k) => typen(k).some((t) => LOKALE_TYPEN.has(t) || /Business|Contractor|Service/.test(t)));
  const org = knoten.find((k) => typen(k).some((t) => ORG_TYPEN.test(t)));
  punkte.push(
    lokal
      ? punkt("firmeneintrag", "Firmeneintrag für Google", "kritisch", "ok", `Vorhanden (Typ: ${typen(lokal)[0]}).`)
      : org
        ? punkt(
            "firmeneintrag",
            "Firmeneintrag für Google",
            "kritisch",
            "warnung",
            "Nur ein allgemeiner Eintrag (Organization). Für die lokale Suche fehlt ein Betriebs-Eintrag (LocalBusiness) mit Adresse und Öffnungszeiten.",
            "Firmeneintrag vom Typ LocalBusiness mit Name, Adresse, Telefon, Öffnungszeiten und Einsatzgebiet ergänzen.",
          )
        : punkt(
            "firmeneintrag",
            "Firmeneintrag für Google",
            "kritisch",
            "fehler",
            "Kein strukturierter Firmeneintrag. Google erkennt Adresse, Öffnungszeiten und Einsatzgebiet dadurch schlechter.",
            "Firmeneintrag (JSON-LD, Typ LocalBusiness) mit Name, Adresse, Telefon, Öffnungszeiten und Einsatzgebiet einbauen.",
          ),
  );

  const bilder = tags(ohneSkripte, "img").filter((b) => b["aria-hidden"] !== "true" && b.role !== "presentation" && !/^data:image\/gif/i.test(b.src || ""));
  const ohneAlt = bilder.filter((b) => !("alt" in b)).length;
  if (bilder.length) {
    punkte.push(
      ohneAlt === 0
        ? punkt("alt", "Bildbeschreibungen", "wichtig", "ok", `Alle ${bilder.length} Bilder sind beschrieben.`)
        : punkt(
            "alt",
            "Bildbeschreibungen",
            "wichtig",
            ohneAlt / bilder.length <= 0.1 ? "warnung" : "fehler",
            `${ohneAlt} von ${bilder.length} Bildern ohne Beschreibung. Google kann sie nicht zuordnen.`,
            "Jedem Bild einen Alt-Text geben: Was ist zu sehen, gern mit Leistung und Ort.",
          ),
    );
  }

  const lang = attribute(/<html\b[^>]*>/i.exec(html)?.[0] || "").lang;
  punkte.push(
    lang
      ? punkt("sprache", "Sprache angegeben", "wichtig", "ok", `lang="${lang}"`)
      : punkt("sprache", "Sprache angegeben", "wichtig", "fehler", "Die Sprache der Seite ist nicht angegeben.", 'Sprache im Quelltext setzen (<html lang="de">).'),
  );

  punkte.push(
    daten.sitemapGefunden == null
      ? punkt("sitemap", "Sitemap für Google", "wichtig", "info", "Die Sitemap ließ sich gerade nicht abrufen – wir prüfen sie im vollständigen Bericht.")
      : daten.sitemapGefunden
        ? punkt("sitemap", "Sitemap für Google", "wichtig", "ok", "Vorhanden – Google findet die Unterseiten leichter.")
        : punkt(
            "sitemap",
            "Sitemap für Google",
            "wichtig",
            "fehler",
            "Keine Sitemap gefunden. Google findet neue Unterseiten dadurch langsamer.",
            "XML-Sitemap erzeugen und in der Google Search Console eintragen.",
          ),
  );

  punkte.push(
    daten.robotsGefunden == null
      ? punkt("robots", "robots.txt", "wichtig", "info", "Die robots.txt ließ sich gerade nicht abrufen – wir prüfen sie im vollständigen Bericht.")
      : daten.robotsGefunden
        ? punkt("robots", "robots.txt", "wichtig", "ok", "Vorhanden.")
        : punkt("robots", "robots.txt", "wichtig", "warnung", "Keine robots.txt gefunden.", "robots.txt anlegen und darin auf die Sitemap verweisen."),
  );

  punkte.push(
    metaProp("og:title") && metaProp("og:image")
      ? punkt("vorschau", "Vorschau beim Teilen", "tipp", "ok", "Titel und Bild für WhatsApp, Facebook & Co. sind gesetzt.")
      : punkt(
          "vorschau",
          "Vorschau beim Teilen",
          "tipp",
          "warnung",
          metaProp("og:image")
            ? "Kein Vorschautitel für WhatsApp, Facebook & Co. – geteilte Links wirken unvollständig."
            : "Kein Vorschaubild für WhatsApp, Facebook & Co. – geteilte Links sehen leer aus.",
          "Vorschaubild und -titel (Open Graph) setzen.",
        ),
  );

  return { punkte, nurBrowser };
}

export function berechneNote(punkte: CheckPunkt[]): number {
  let summe = 0;
  let max = 0;
  for (const p of punkte) {
    if (p.status === "info") continue;
    summe += GEWICHT[p.stufe] * WERT[p.status];
    max += GEWICHT[p.stufe];
  }
  return max ? Math.round((summe / max) * 100) : 0;
}

export function bewertung(note: number): string {
  if (note >= 90) return "Sehr gut";
  if (note >= 75) return "Gut";
  if (note >= 50) return "Ausbaufähig";
  return "Schwach";
}

/** Die wichtigsten offenen Punkte: erst Fehler, dann Warnungen, jeweils nach Gewicht. */
export function groessteProbleme(punkte: CheckPunkt[], anzahl = 3): CheckPunkt[] {
  return punkte
    .filter((p) => p.status === "fehler" || p.status === "warnung")
    .sort((a, b) => (a.status === b.status ? GEWICHT[b.stufe] - GEWICHT[a.stufe] : a.status === "fehler" ? -1 : 1))
    .slice(0, anzahl);
}
