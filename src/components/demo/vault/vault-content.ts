export type VaultLang = "de" | "en";

export type VaultCask = {
  id: "ember" | "amber" | "depth";
  no: string;
  years: number;
  distilled: number;
  bottled: number;
  abv: string;
  color: string;
  colorDeep: string;
  image: string;
  de: {
    name: string;
    grade: string;
    cask: string;
    fill: string;
    lead: string;
    notes: string[];
    body: string;
    glass: string;
    temp: string;
    water: string;
    pairing: string;
    nose: string;
    palate: string;
    finish: string;
  };
  en: {
    name: string;
    grade: string;
    cask: string;
    fill: string;
    lead: string;
    notes: string[];
    body: string;
    glass: string;
    temp: string;
    water: string;
    pairing: string;
    nose: string;
    palate: string;
    finish: string;
  };
};

export const VAULT_CASKS: VaultCask[] = [
  {
    id: "ember",
    no: "08",
    years: 8,
    distilled: 2018,
    bottled: 2026,
    abv: "46.0",
    color: "#d4b56a",
    colorDeep: "#8a6a2a",
    image: "/demo/vault/bottle-08.jpg",
    de: {
      name: "Glut",
      grade: "Jung & offen",
      cask: "First Fill Bourbon",
      fill: "American Oak",
      lead: "Die erste Stimme des Hauses. Hell, direkt, noch nah am Malz.",
      notes: ["Vanille", "Zitronenschale", "junges Holz", "Heidehonig"],
      body: "Acht Jahre im First-Fill-Bourbonfass. Der Whisky bleibt hell und sprechend — Vanille, Zitrus, ein Hauch Heide. Reifegrad: offen. Für den, der das Fass noch schmecken will, nicht nur die Zeit.",
      glass: "Copita",
      temp: "16–18 °C",
      water: "Ein Tropfen öffnet die Zitrusnote",
      pairing: "Reifer Comté",
      nose: "Heide, frische Vanille, Zitronenschale.",
      palate: "Leicht, sprechend, ein Hauch junger Eiche.",
      finish: "Kurz, hell, trocken.",
    },
    en: {
      name: "Ember",
      grade: "Young & open",
      cask: "First Fill Bourbon",
      fill: "American Oak",
      lead: "The house’s first voice. Bright, direct, still close to the malt.",
      notes: ["Vanilla", "Lemon peel", "young oak", "heather honey"],
      body: "Eight years in first-fill bourbon. The whisky stays pale and articulate — vanilla, citrus, a lift of heather. Maturity: open. For those who still want the cask, not only the years.",
      glass: "Copita",
      temp: "16–18 °C",
      water: "A drop opens the citrus",
      pairing: "Aged Comté",
      nose: "Heather, fresh vanilla, lemon peel.",
      palate: "Light, articulate, a lift of young oak.",
      finish: "Short, bright, dry.",
    },
  },
  {
    id: "amber",
    no: "12",
    years: 12,
    distilled: 2014,
    bottled: 2026,
    abv: "48.0",
    color: "#c4843a",
    colorDeep: "#7a3e14",
    image: "/demo/vault/bottle-12.jpg",
    de: {
      name: "Kern",
      grade: "Kernreife",
      cask: "Oloroso Sherry Butt",
      fill: "European Oak",
      lead: "Die Mitte. Frucht, Gerbstoff, Wärme — hier sitzt das Haus.",
      notes: ["Trockenfeige", "Orangeat", "Leder", "geröstete Eiche"],
      body: "Zwölf Jahre in einem Oloroso-Butt. Die Farbe zieht ins Bernstein, der Körper wird ruhig. Sherry gibt Dörrobst und Leder, die Eiche hält dagegen. Reifegrad: Kern — weder jung noch schwer.",
      glass: "Glencairn",
      temp: "18 °C",
      water: "Wenig Wasser, sonst bricht die Frucht",
      pairing: "Dunkle Schokolade 70 %",
      nose: "Feige, Orangeat, warmes Leder.",
      palate: "Rund, trocken, Sherry ohne Süße um jeden Preis.",
      finish: "Mittel, eichenwarm, sauber.",
    },
    en: {
      name: "Amber",
      grade: "Core maturity",
      cask: "Oloroso Sherry Butt",
      fill: "European Oak",
      lead: "The centre. Fruit, tannin, warmth — this is where the house sits.",
      notes: ["Dried fig", "candied orange", "leather", "toasted oak"],
      body: "Twelve years in an oloroso butt. Colour pulls toward amber, the body settles. Sherry gives dried fruit and leather; oak holds the line. Maturity: core — neither young nor heavy.",
      glass: "Glencairn",
      temp: "18 °C",
      water: "Little water, or the fruit splits",
      pairing: "70% dark chocolate",
      nose: "Fig, candied orange, warm leather.",
      palate: "Round, dry, sherry without cheap sweetness.",
      finish: "Medium, oak-warm, clean.",
    },
  },
  {
    id: "depth",
    no: "21",
    years: 21,
    distilled: 2005,
    bottled: 2026,
    abv: "43.0",
    color: "#9a4a22",
    colorDeep: "#4a1c10",
    image: "/demo/vault/bottle-21.jpg",
    de: {
      name: "Tiefe",
      grade: "Tief gereift",
      cask: "PX Finish",
      fill: "24 Monate Pedro Ximénez",
      lead: "Langsam, dunkel, knapp. Die letzte Lage im Warehouse.",
      notes: ["Schwarze Kirsche", "Kakao", "Tabakblatt", "dunkler Honig"],
      body: "Einundzwanzig Jahre, zuletzt vierundzwanzig Monate unter Pedro Ximénez. Der Whisky ist dicht, aber nicht süß um jeden Preis. Reifegrad: tief. Wenige Fässer, eine Zuteilung im Jahr.",
      glass: "Copita, klein",
      temp: "18–20 °C",
      water: "Kein Wasser — nur Luft im Glas",
      pairing: "Walnuss, getrocknete Kirsche",
      nose: "Kirsche, Kakao, Tabakblatt.",
      palate: "Dicht, ruhig, PX als Schatten, nicht als Sirup.",
      finish: "Lang, dunkel, trocken.",
    },
    en: {
      name: "Depth",
      grade: "Deep aged",
      cask: "PX Finish",
      fill: "24 months Pedro Ximénez",
      lead: "Slow, dark, scarce. The last rack in the warehouse.",
      notes: ["Black cherry", "cacao", "tobacco leaf", "dark honey"],
      body: "Twenty-one years, finished twenty-four months under Pedro Ximénez. Dense, but not sweet at any cost. Maturity: deep. Few casks, one allocation a year.",
      glass: "Small copita",
      temp: "18–20 °C",
      water: "No water — only air in the glass",
      pairing: "Walnut, dried cherry",
      nose: "Cherry, cacao, tobacco leaf.",
      palate: "Dense, quiet, PX as a shadow, not a syrup.",
      finish: "Long, dark, dry.",
    },
  },
];

export const VAULT_COPY = {
  de: {
    ageTitle: "Diese Seite gilt Spirituosen.",
    ageLead: "Bitte bestätige, dass du 18 Jahre oder älter bist.",
    ageYes: "Ich bin 18+",
    ageNo: "Unter 18",
    ageDenied: "Kein Zutritt. Vault ist eine fiktive Destillerie-Demo — kein Angebot an Minderjährige.",
    ageBack: "Zurück zu YouForge",
    heroLeft: ["IM FASS", "GEHALTEN"],
    heroRight: ["IN ZEIT", "GELEGT"],
    meta: [
      "01. Single Malt",
      "02. Speyside · Glen of Allt",
      "03. Allocation",
      "04. Drei Reifestufen",
    ],
    chapters: {
      casks: "Fässer",
      taste: "Genuss",
      craft: "Handwerk",
      house: "Haus",
    },
    selectedKicker: "Die drei Lagen",
    selectedTitle: "Reifestufen",
    selectedLead: "Ein Brand, drei Zeiten. Nicht Sorten um der Sorten willen — derselbe Malt, anders lange im Holz.",
    start: "Zuteilung anfragen",
    distilled: "Destilliert",
    bottled: "Abgefüllt",
    years: "Jahre",
    abv: "% vol.",
    grade: "Reifegrad",
    nose: "Nase",
    palate: "Gaumen",
    finish: "Abgang",
    serve: "Servieren",
    glassLabel: "Glas",
    tempLabel: "Temperatur",
    waterLabel: "Wasser",
    pairingLabel: "Dazu",
    tasteKicker: "Im Glas",
    tasteTitle: "Langsam trinken",
    tasteLead:
      "Kein Shot. Ein Glas, Luft, ein Tropfen wenn er ihn braucht. Drei Lagen, drei Rituale.",
    scroll: "Scrollen",
    soundOn: "Warehouse an",
    soundOff: "Warehouse aus",
    expression: "Lage",
    channel: "Anfrage als",
    trade: "Handel",
    private: "Privat",
    sent: "Danke. Wir schreiben zurück.",
    craftKicker: "Kupfer, Holz, Geduld.",
    craftTitle: "Ohne Kompromiss",
    craftLead: "Destillation, Reifung, Fass, Abfüllung — ein Rhythmus, kein Marketing.",
    touch: "Kontakt",
    pillars: [
      {
        key: "still",
        title: "Destillation",
        body: "Zwei Kupferblasen. Langsamer Lauf, kurzer Spirit. Das Destillat soll tragen, nicht schreien.",
      },
      {
        key: "wood",
        title: "Reifung",
        body: "Dunnage East, Erde unter den Füßen, Luft durch die Steine. Kein Rackhouse, keine Eile.",
      },
      {
        key: "cask",
        title: "Fass",
        body: "Bourbon, Oloroso, Pedro Ximénez. Das Holz ist die zweite Destillation.",
      },
      {
        key: "bottle",
        title: "Abfüllung",
        body: "Nach Fass, nicht nach Kalender. Ungefärbt, ungekühlt filtriert, in der Lage belassen.",
      },
    ],
    stats: [
      { value: "3", label: "Reifestufen" },
      { value: "21", label: "Jahre, tiefste Lage" },
      { value: "1", label: "Warehouse" },
    ],
    quotes: [
      {
        text: "Der 12er sitzt wie ein gutes Second Pour — warm, trocken, ohne Theater.",
        name: "Elias K.",
        role: "Bar · Hamburg",
      },
      {
        text: "21 Jahre, und er bleibt klar. Keine Marmelade. Das ist selten.",
        name: "Mara Voss",
        role: "Buyer · München",
      },
    ],
    houseKicker: "Vom Konzept bis zur Flasche.",
    houseTitle: "Ein Haus, drei Zeiten",
    houseBody:
      "Vault lagert denselben Speyside-Malt in drei Horizonten. Acht Jahre für die offene Stimme, zwölf für den Kern, einundzwanzig für die Tiefe. Kein Blend über Marken hinweg — eine Destillerie, die Zeit als Sorte begreift.",
    ledgerKicker: "Zuteilung 2026",
    ledgerTitle: "Ledger",
    ledgerLead: "Kein Shop. Eine Liste. Händler und private Zuteilung, einmal im Jahr.",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Anfrage senden",
    legal:
      "Ab 18. Fiktive Living Demo von YouForge. Kein Verkauf, keine echte Destillerie. Spirituosenwerbung richtet sich nicht an Minderjährige.",
    demo: "Living Demo",
  },
  en: {
    ageTitle: "This site concerns spirits.",
    ageLead: "Please confirm you are 18 or older.",
    ageYes: "I am 18+",
    ageNo: "Under 18",
    ageDenied: "No entry. Vault is a fictional distillery demo — not an offer to minors.",
    ageBack: "Back to YouForge",
    heroLeft: ["HELD IN", "CASK"],
    heroRight: ["LAID IN", "TIME"],
    meta: [
      "01. Single Malt",
      "02. Speyside · Glen of Allt",
      "03. Allocation",
      "04. Three maturities",
    ],
    chapters: {
      casks: "Casks",
      taste: "Taste",
      craft: "Craft",
      house: "House",
    },
    selectedKicker: "The three lays",
    selectedTitle: "Maturity",
    selectedLead: "One spirit, three times. Not flavours for the shelf — the same malt, held longer in wood.",
    start: "Request allocation",
    distilled: "Distilled",
    bottled: "Bottled",
    years: "Years",
    abv: "% vol.",
    grade: "Maturity",
    nose: "Nose",
    palate: "Palate",
    finish: "Finish",
    serve: "Serve",
    glassLabel: "Glass",
    tempLabel: "Temperature",
    waterLabel: "Water",
    pairingLabel: "Beside",
    tasteKicker: "In the glass",
    tasteTitle: "Drink slowly",
    tasteLead:
      "Not a shot. A glass, air, a drop if it asks. Three lays, three rituals.",
    scroll: "Scroll",
    soundOn: "Warehouse on",
    soundOff: "Warehouse off",
    expression: "Lay",
    channel: "Request as",
    trade: "Trade",
    private: "Private",
    sent: "Thank you. We will write back.",
    craftKicker: "Copper, wood, patience.",
    craftTitle: "Without compromise",
    craftLead: "Still, warehouse, cask, bottle — a rhythm, not a campaign.",
    touch: "Get in touch",
    pillars: [
      {
        key: "still",
        title: "Distillation",
        body: "Two copper stills. A slow run, a short spirit. The new make should carry, not shout.",
      },
      {
        key: "wood",
        title: "Maturation",
        body: "Dunnage East, earth underfoot, air through stone. No rackhouse, no hurry.",
      },
      {
        key: "cask",
        title: "Cask",
        body: "Bourbon, oloroso, Pedro Ximénez. The wood is the second distillation.",
      },
      {
        key: "bottle",
        title: "Bottling",
        body: "By cask, not by calendar. Uncoloured, non-chill filtered, left in its lay.",
      },
    ],
    stats: [
      { value: "3", label: "Maturities" },
      { value: "21", label: "Years, deepest lay" },
      { value: "1", label: "Warehouse" },
    ],
    quotes: [
      {
        text: "The 12 sits like a good second pour — warm, dry, no theatre.",
        name: "Elias K.",
        role: "Bar · Hamburg",
      },
      {
        text: "Twenty-one years, and it stays clear. No jam. That is rare.",
        name: "Mara Voss",
        role: "Buyer · Munich",
      },
    ],
    houseKicker: "From concept to bottle.",
    houseTitle: "One house, three times",
    houseBody:
      "Vault holds the same Speyside malt across three horizons. Eight years for the open voice, twelve for the core, twenty-one for depth. No blend across brands — a distillery that treats time as the expression.",
    ledgerKicker: "Allocation 2026",
    ledgerTitle: "Ledger",
    ledgerLead: "No shop. A list. Trade and private allocation, once a year.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send request",
    legal:
      "18+. Fictional living demo by YouForge. No sale, no real distillery. Spirits advertising is not directed at minors.",
    demo: "Living Demo",
  },
} as const;
