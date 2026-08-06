/**
 * Garten-Demo — alles Anpassbare an einer Stelle.
 * Für einen neuen Kunden: Werte hier setzen, optional Bilder in
 * public/demo/garten/ tauschen, fertig.
 */
export const GPF_DEMO = {
  /** Pfad zu den Demo-Bildern unter /public */
  assetsBase: "/demo/garten",

  brand: {
    /** Logo / Nav (kurz) */
    short: "Grünwerk",
    /** Vollständiger Name, Impressum */
    full: "Grünwerk Garten & Landschaft",
    legalName: "Muster Garten & Landschaft GmbH",
    tagline: "Vom Rasen bis zum Baumwipfel.",
    navSubtitle: "Garten · Landschaft",
    profession: "Garten- und Landschaftsbau · Gartenpflege",
  },

  contact: {
    /** Anzeige im UI — Platzhalter für Pitch */
    ownerLabel: "Ihr Ansprechpartner",
    phoneTel: "+4917000000000",
    phoneDisplay: "0170 000 0000",
    email: "anfrage@beispiel-garten.de",
    addressLine1: "Musterstraße 12",
    addressLine2: "12345 Musterstadt",
    hours: "Mo–Fr 07:00–18:00 · Sa nach Absprache",
    whatsappText:
      "Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Gartenleistungen.",
  },

  business: {
    since: 2010,
    radiusKm: 30,
    travelRate: "1,80 € pro Kilometer",
    travelFrom: "dem Firmensitz",
    regionLabel: "Region & Umland",
  },

  hero: {
    eyebrow: "Gartenpflege & Landschaftsbau",
    lines: ["Vom Rasen", "bis zum", "Baumwipfel."] as const,
    text:
      "Pflege, Rodung und Neubau — mit eigenem Team, klarer Planung und einem Ansprechpartner von der ersten Besichtigung bis zur letzten Fläche.",
  },

  intro: {
    label: "Garten · Landschaft",
  },

  stats: [
    { value: 15, suffix: "+", label: "Jahre Erfahrung", hint: "im Team" },
    { value: 30, suffix: " km", label: "Einsatzradius", hint: "flexibel" },
    { value: 20, suffix: "+", label: "Leistungen", hint: "aus einer Hand" },
    { value: 100, suffix: " %", label: "Eigenes Team", hint: "kein Subunternehmer" },
  ] as const,

  about: {
    sectionId: "ueber-uns",
    sectionLabel: "Über uns",
    headline: "Handwerk mit Haltung.",
    imageCaption: "Team vor Ort",
    imageCaptionHint: "seit {since}",
    paragraphs: [
      "Gärten brauchen Kontinuität — nicht nur im Frühjahr, sondern über alle Jahreszeiten. Deshalb denken wir Pflege, Baumarbeit und Neubau zusammen, statt jeden Bereich isoliert zu betrachten.",
      "Ob Vorgarten, Hanglage oder komplette Neugestaltung: Wir schauen uns Untergrund, Bestand und Nutzung an, bevor wir Werkzeug ansetzen. Was nicht sinnvoll ist, sagen wir — bevor es teuer wird.",
      "Jedes Projekt beginnt mit Besichtigung und klarem Angebot. Am Ende steht eine besenreine Fläche, nicht „fast fertig“.",
    ],
    quote:
      "Ein sorgfältiges Ergebnis nach Ihrer Zufriedenheit — das ist der Maßstab. Alles andere ergibt sich daraus.",
    facts: [
      ["Schwerpunkt", "Privatgärten, Hausverwaltungen, Parkflächen"],
      ["Team", "Eigene Mitarbeiter, keine Subunternehmer"],
      ["Einsatzgebiet", "{radiusKm} km Radius"],
      ["Anfahrt", "{travelRate}"],
    ] as const,
  },

  region: {
    headline: ["Regional.", "Verlässlich."],
    text:
      "Wir arbeiten im Umkreis von {radiusKm} Kilometern — kurze Wege, schnelle Reaktion bei Pflege, realistische Planung bei größeren Bauprojekten. Bei Sonderaufträgen erweitern wir den Radius gerne.",
    towns: [
      "Stadtmitte",
      "Umland Nord",
      "Umland Süd",
      "Nachbargemeinden",
      "Privatgärten",
      "Gewerbeobjekte",
      "Neubaugebiete",
      "Altbestand",
    ] as const,
    travelNote: "{travelRate} — transparent ab {travelFrom} berechnet",
    mapAlt: "Einsatzgebiet mit etwa {radiusKm} Kilometern Radius",
  },

  gallery: {
    eyebrow: "Referenzen",
    title: ["Arbeiten, die", "stehen geblieben sind."],
    text:
      "Terrassen, Mauern, Zäune, Beete und Parkflächen — fotografiert nach der Abnahme, nicht aus dem Katalog.",
  },

  compare: {
    text:
      "Echte Projekte — dieselbe Kameraposition, ein paar Arbeitstage dazwischen.",
  },

  faq: [
    {
      q: "Übernehmen Sie auch kleine Aufträge?",
      a: "Ja. Vom einzelnen Heckenschnitt über den Vorgarten bis zur Parkanlage — eine Mindestgröße gibt es bei uns nicht.",
    },
    {
      q: "Was kostet die Anfahrt?",
      a: "Die Anfahrtspauschale beträgt {travelRate} ab {travelFrom}. Bei größeren Aufträgen finden wir eine faire Lösung.",
    },
    {
      q: "Wie schnell bekomme ich einen Termin?",
      a: "Pflegearbeiten meist kurzfristig. Für Rodungsarbeiten planen wir rund zwei Wochen Vorlauf ein — alle Außenarbeiten sind witterungsabhängig.",
    },
    {
      q: "Gibt es feste Pflegepakete?",
      a: "Die Pakete stellen wir individuell zusammen — aus genau den Leistungen, die Ihr Garten braucht. Sie lassen sich jederzeit erweitern oder reduzieren.",
    },
    {
      q: "Was brauchen Sie für ein Angebot?",
      a: "Lage und Größe des Objekts, Ihre Kontaktdaten, die gewünschten Leistungen — und gerne ein paar Fotos zur Vorabeinschätzung.",
    },
    {
      q: "Arbeiten Sie mit Subunternehmern?",
      a: "Nein. Auf Ihrem Grundstück stehen unsere eigenen Mitarbeiter, geschult und mit eigener Technik.",
    },
  ] as const,

  standards: {
    neighborLaw:
      "Bei Zäunen und Mauern arbeiten wir nach geltendem Nachbarrecht — kein Ärger im Nachgang.",
  },

  impressum: {
    regionSummary:
      "Stadt & Umland · Privatgärten · Gewerbe · Parkflächen · Nachbargemeinden",
  },

  form: {
    placePlaceholder: "z. B. Ihre Stadt",
  },

  marquee: [
    "Rasenpflege",
    "Heckenschnitt",
    "Baumpflege",
    "Fällung & Rodung",
    "Terrassen",
    "Pflasterwege",
    "Mauern",
    "Zaunanlagen",
    "Beete",
    "Region & Umland",
  ] as const,
} as const;

/** Platzhalter {key} in Strings ersetzen */
export function gpfFill(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in vars ? String(vars[key]) : `{${key}}`,
  );
}

export const GPF_VARS = {
  since: GPF_DEMO.business.since,
  radiusKm: GPF_DEMO.business.radiusKm,
  travelRate: GPF_DEMO.business.travelRate,
  travelFrom: GPF_DEMO.business.travelFrom,
} as const;
