export const TUKAN_NAV = [
  { href: "#eis", label: "Eis" },
  { href: "#zahlen", label: "Zahlen" },
  { href: "#bali", label: "Bali" },
  { href: "#bestellen", label: "Bestellen" },
] as const;

const nb = "\u00A0";
const d24 = "2\u2060–\u20604";
const pack = "4er\u2011Pack";

export const TUKAN_DRAWERS = [
  { id: "eis", label: "Eis", meta: `Maracuja · 9,90${nb}€` },
  { id: "zahlen", label: "Zahlen", meta: `14${nb}g · 0${nb}g · 121` },
  { id: "bali", label: "Bali", meta: "Ohne den Flug" },
  { id: "bestellen", label: "Bestellen", meta: `${d24}${nb}Tage gekühlt` },
] as const;

export const TUKAN_MARQUEE = [
  "14 g Protein",
  "0 g Zucker",
  "Echte Maracuja",
  "Schmeckt nach Bali",
  "Kühlversand 2–4 Tage",
  "4er-Pack 9,90 €",
];

export const TUKAN_STAGE = [
  { id: "home", kicker: "Das Eis", line: "Maracuja · 9,90 €" },
  { id: "eis", kicker: "Drin", line: "14 g · 0 g Zucker · 121 kcal" },
  { id: "bali", kicker: "Bali", line: "Der Flug bleibt." },
  { id: "pack", kicker: "Zahlen", line: "Was draufsteht, stimmt." },
  { id: "bestellen", kicker: "Bestellen", line: "Kühlversand in 2–4 Tagen" },
] as const;

export const TUKAN_RAIL = [
  {
    title: "Die Packung",
    meta: "4er-Pack · 9,90 €",
    image: "popsicle",
    href: "#bestellen",
  },
  {
    title: "Die Frucht",
    meta: "Maracuja, sichtbar",
    image: "passion",
    href: "#eis",
  },
  {
    title: "Der Biss",
    meta: "14 g Protein · 0 g Zucker",
    image: "macro",
    href: "#eis",
  },
  {
    title: "Bali",
    meta: "Ohne den Flug",
    image: "bali",
    href: "#bali",
  },
] as const;

export const TUKAN_COPY = {
  badge: "Neu",
  chapterHome: "01. Start",
  chapterEis: "02. Das Eis",
  chapterBali: "03. Bali",
  chapterPack: "04. Die Zahlen",
  chapterOrder: "05. Bestellen",
  chapterFilm: "Die Frucht",
  filmTitle: "So sieht 14 g Protein aus.",
  railHint: "Ziehen",
  filmHint: "Scrollen — dann siehst du, was drin ist.",
  heroKicker: "Protein\u2011Eis am Stiel",
  heroTitle: "Maracuja",
  heroLine: `0${nb}g Zucker, 14${nb}g Protein.`,
  heroLine2: "Schmeckt nach Bali.",
  heroLead:
    `Echtes Maracuja-Fruchtfleisch, 14 Gramm Protein, kein${nb}Zucker. Du nimmst es nach dem Training — oder abends, wenn du etwas Kaltes willst, das keine 400 Kilokalorien kostet. 4er-Pack, 9,90${nb}€, kommt gefroren.`,
  drawerLead:
    `Echtes Maracuja-Fruchtfleisch, 14${nb}g${nb}Protein, kein${nb}Zucker. ${pack}${nb}9,90${nb}€, kommt gefroren.`,
  heroCta: `${pack} für 9,90${nb}€ holen`,
  heroSecondary: "Was drin ist",
  features: [
    { title: "14 g Protein", text: "pro Eis, nicht auf die Packung gerechnet" },
    { title: "0 g Zucker", text: "schmeckt nach Frucht, nicht nach Diät" },
    { title: "Echte Maracuja", text: "Fruchtfleisch und Kerne, sichtbar" },
    { title: "121 kcal", text: "pro Eis" },
  ],
  proofs: [
    { title: "4er-Pack", text: "reicht für die Woche" },
    { title: "Kühlversand", text: "2–4 Werktage, kommt gefroren an" },
    { title: "Holz", text: "kein Plastikbesteck in der Tüte" },
  ],
  rating: "4,9 / 5",
  ratingNote: "Über 2.500 Packungen",
  baliKicker: "Der Geschmack",
  baliTitle: "Es schmeckt nach Bali.",
  baliTitle2: "Den Flug kannst du dir sparen.",
  baliCaption: "Bali, Abendlicht — das Gefühl, nicht der Flug",
  baliLead:
    `Reife Maracuja ist warm, sauer und ein bisschen wild. Daraus wird ein Protein-Eis mit 14${nb}g: derselbe Biss wie im Urlaub, nur dass du danach noch trainieren kannst.`,
  baliBody:
    `Kein Shake, der nach Puder schmeckt. 14${nb}g${nb}Protein, 0${nb}g${nb}Zucker, 121${nb}kcal. Die Packung reicht für die Woche.`,
  tasteKicker: "Das Eis",
  tasteTitle: "Die Frucht siehst du. Die 14 Gramm merkst du.",
  tasteLead:
    "Die orangene Schicht ist Maracuja-Püree, nicht Aroma. Die helle ist die Proteinbasis — cremig, kalt, ohne Zucker. Die schwarzen Punkte sind Kerne. Wenn du reinbeißt, knackt es kurz, dann kommt die Säure, dann die Süße ohne Zucker.",
  tastePoints: [
    {
      title: "Maracuja, nicht Parfüm",
      text: "Püree und Fruchtfleisch. Deshalb der Stich, den du von der echten Frucht kennst — nicht der von Gummibärchen.",
    },
    {
      title: "Protein, das zählt",
      text: "14 g pro Eis. Nach dem Training reicht oft eins. Abends auch, ohne dass du dir etwas vormachst.",
    },
    {
      title: "0 g Zucker, steht drauf",
      text: "0 g Zucker. Gesüßt so, dass es nach Frucht schmeckt, nicht nach Dose.",
    },
  ],
  packKicker: "Die Packung",
  packTitle: "Vier im Karton. Holz, kein Plastik.",
  packLead:
    `Kein Plastiklöffel, keine Einzelverpackung aus fünf Lagen. Vier Stück, ein${nb}Karton. Die Frucht siehst du im Eis — nicht als Zeichnung auf der Packung.`,
  factsKicker: "Die Zahlen",
  factsTitle: "Was draufsteht, stimmt.",
  facts: [
    { value: `14${nb}g`, label: "Protein", hint: "pro Eis" },
    { value: `0${nb}g`, label: "Zucker", hint: "pro Eis" },
    { value: "121", label: "kcal", hint: "pro Eis" },
    { value: `9,90${nb}€`, label: pack, hint: `2,48${nb}€ pro Eis` },
  ],
  orderKicker: "Bestellen",
  orderTitle: "Gekühlt vor die Tür.",
  orderLead:
    `9,90${nb}€ fürs ${pack}. Kühlversand in ${d24}${nb}Werktagen, kommt gefroren an. Zahlung nach Bestätigung, kein${nb}Abo.`,
  orderCta: `${pack} bestellen`,
  orderNote: "Maximal sechs Packungen, sonst taut der Karton.",
  sticky: `${pack} holen · 9,90${nb}€`,
} as const;
