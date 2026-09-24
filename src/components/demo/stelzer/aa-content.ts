import { AA_IMG } from "@/components/demo/stelzer/aa-config";

const HOME = "/demo/stelzer-hesselmann";

export const AA_NAV = [
  [`${HOME}#werkstatt`, "Die beiden"],
  [`${HOME}#leistungen`, "Gewerke"],
  [`${HOME}#ort`, "Oberhausen"],
  [`${HOME}#aktuelles`, "Aktuelles"],
  [`${HOME}#besuch`, "Kontakt"],
] as const;

export const AA_STEPS = [
  {
    n: "01",
    title: "Flachdach",
    fact: "Abdichtung",
    text: "Schaden, Sanierung und neue Fläche. Eine Undichtigkeit wird behoben, bevor sie ins Haus zieht.",
    img: AA_IMG.flach,
  },
  {
    n: "02",
    title: "Steildach",
    fact: "Ziegel und Schiefer",
    text: "Eindeckung, Dämmung und das Dach, das zum Haus passt. Vom einzelnen Schaden bis zur kompletten Erneuerung.",
    img: AA_IMG.ziegel,
  },
  {
    n: "03",
    title: "Klempner",
    fact: "Metall am Dach",
    text: "Rinnen, Anschlüsse, Bleche. Das, was das Wasser führt, sitzt so fest wie die Deckung selbst.",
    img: AA_IMG.blech,
  },
  {
    n: "04",
    title: "Licht und Strom",
    fact: "VELUX und Photovoltaik",
    text: "Dachfenster, Solar oder Elektro, Hitze- und Sonnenschutz. Und die Anlage auf dem Dach, wenn das Haus sie tragen soll.",
    img: AA_IMG.tagPv,
  },
] as const;

export const AA_FACTS = [
  { n: "2022", label: "Selbstständig" },
  { n: "5,0", label: "bei Google" },
  { n: "13", label: "Bewertungen" },
  { n: "HWK", label: "Düsseldorf" },
] as const;

export const AA_FILM_CHAPTERS = [
  { at: 0, title: "Besichtigung", note: "Wir kommen zum Haus", src: AA_IMG.tagOrt },
  { at: 1, title: "Deckung", note: "Ziegel, Schiefer, Fläche", src: AA_IMG.schiefer },
  { at: 2, title: "Licht", note: "Fenster im Dach", src: AA_IMG.tagFenst },
] as const;

export const AA_COLLAGE = [
  {
    src: AA_IMG.frameFirst,
    label: "AUF DEM FIRST",
    rot: -6,
    shift: -70,
    pos: "left-[6%] top-[8%] w-[38%] sm:w-[32%]",
  },
  {
    src: AA_IMG.frameOrt,
    label: "ÜBER HOLTEN",
    rot: 3,
    shift: 40,
    pos: "left-[42%] top-[18%] w-[40%] sm:w-[34%]",
  },
  {
    src: AA_IMG.frameHand,
    label: "IN DER HAND",
    rot: 7,
    shift: -28,
    pos: "left-[18%] top-[54%] w-[36%] sm:w-[30%]",
  },
  {
    src: AA_IMG.frameRinne,
    label: "BLECH UND RINNE",
    rot: -3,
    shift: 64,
    pos: "right-[8%] top-[52%] w-[34%] sm:w-[28%]",
  },
] as const;

export const AA_FLOW = [
  {
    n: "01",
    title: "Besichtigung",
    text: "Wir schauen uns das Dach an. Schaden, Wunschfenster oder eine ganze neue Deckung: erst das Haus, dann der Plan.",
  },
  {
    n: "02",
    title: "Angebot",
    text: "Sie bekommen ein Angebot, das sagt, was gemacht wird. Kein Rätselraten am Telefon.",
  },
  {
    n: "03",
    title: "Ausführung",
    text: "Das eigene Team arbeitet auf dem Dach. Pünktlich, sauber, auch wenn das Wetter mitredet.",
  },
  {
    n: "04",
    title: "Fertig",
    text: "Am Ende steht das Dach, das Fenster oder die Anlage. Sie treten einen Schritt zurück und sehen, was geworden ist.",
  },
] as const;

export const AA_NEAR = [
  {
    n: "07",
    unit: "UHR",
    label: "BAUSTELLE, MONTAG BIS DONNERSTAG",
    img: AA_IMG.ort,
  },
  {
    n: "13",
    unit: "UHR",
    label: "FREITAG ENDE AUF DER BAUSTELLE",
    img: AA_IMG.first,
  },
  {
    n: "08",
    unit: "UHR",
    label: "TELEFON IM BÜRO, MONTAG BIS FREITAG",
    img: AA_IMG.hero,
  },
  {
    n: "14",
    unit: "UHR",
    label: "BÜRO ZU",
    img: AA_IMG.fenster,
  },
] as const;

export const AA_TIMELINE = [
  ["AUSBILDUNG BEI VAN DER HORST", "2006"],
  ["RÜCKKEHR AUS BERLIN", "2008"],
  ["EIGENE GMBH", "2022"],
  ["MESSE DACH + HOLZ, KÖLN", "2026"],
] as const;

export const AA_NEWS = [
  {
    when: "Februar 2026",
    title: "Dach + Holz in Köln",
    paragraphs: [
      "Unser Team war auf der Dach + Holz 2026 in Köln. Die DACH+HOLZ International ist die Fachmesse für Dach und Holz in Europa.",
      "Zum Besuch gehörte auch der Stand unseres Lieferanten COBA, Anton Gallhöfer GmbH.",
    ],
    images: [{ src: AA_IMG.newsMesse, alt: "Das Team auf der Dach + Holz am Stand von COBA" }],
  },
  {
    when: "Mai 2024",
    title: "Maifest in Holten",
    paragraphs: [
      "Beim Maifest 2024 in Oberhausen-Holten haben wir bei Sonne kühle Getränke ausgeschenkt.",
      "Wir danken der Holtener Interessen- und Bürgergemeinschaft e. V. und allen, die geholfen haben.",
      "Marcel Stelzer ist zum zweiten Vorsitzenden der HIB gewählt worden und wirkt dort mit.",
    ],
    images: [
      { src: AA_IMG.newsStand, alt: "Ausschank beim Maifest in Holten" },
      { src: AA_IMG.newsMaibaum, alt: "Maibaum auf dem Maifest in Holten" },
    ],
  },
  {
    when: "April 2024",
    title: "Bälle für die C-Jugend",
    paragraphs: ["TuS Grün-Weiss Holten: Die C-Jugend hat neue Bälle bekommen."],
    images: [{ src: AA_IMG.newsBaelle, alt: "Die C-Jugend von TuS Grün-Weiss Holten mit neuen Bällen" }],
  },
] as const;

export type AaPiece = {
  id: string;
  label: string;
  from: string;
  unit: string;
  wait: string;
  pills: string[];
  lead: string;
  body: string;
  image: string;
  stills: string[];
};

const still = {
  flachdach: [AA_IMG.altFlach],
  ziegel: [AA_IMG.altZiegel],
  schiefer: [AA_IMG.altSchiefer],
  klempner: [AA_IMG.altBlech],
  photovoltaik: [AA_IMG.altPv],
  velux: [AA_IMG.altFenster],
};

export const AA_PIECES: AaPiece[] = [
  {
    id: "flachdach",
    label: "Flachdach",
    from: "01",
    unit: "Gewerk",
    wait: "Schaden und Sanierung",
    pills: ["Abdichtung", "Schaden", "Sanierung"],
    lead: "Eine undichte Stelle wird dicht, bevor sie ins Haus zieht.",
    body: "Vom einzelnen Schaden bis zur neuen Fläche. Schnell erreichbar, fachgerecht ausgeführt.",
    image: AA_IMG.flach,
    stills: still.flachdach,
  },
  {
    id: "ziegel",
    label: "Ziegeldach",
    from: "02",
    unit: "Gewerk",
    wait: "Eindeckung",
    pills: ["Ziegel", "Dämmung", "Erneuerung"],
    lead: "Das Dach, das zum Haus gehört.",
    body: "Neue Deckung, Dämmung, Fenster. Ein komplettes Dach aus einer Hand, mit dem eigenen Team.",
    image: AA_IMG.ziegel,
    stills: still.ziegel,
  },
  {
    id: "schiefer",
    label: "Schieferdach",
    from: "03",
    unit: "Gewerk",
    wait: "Deckart",
    pills: ["Schiefer", "Detail", "Bestand"],
    lead: "Schiefer will eine ruhige Hand.",
    body: "Deckung im Bestand und am Neubau. Die Fläche soll halten und zum Haus passen.",
    image: AA_IMG.schiefer,
    stills: still.schiefer,
  },
  {
    id: "klempner",
    label: "Klempner",
    from: "04",
    unit: "Gewerk",
    wait: "Metall",
    pills: ["Rinne", "Anschluss", "Blech"],
    lead: "Was das Wasser führt, sitzt am Dach.",
    body: "Klempnerarbeiten gehören dazu, nicht daneben. Rinnen, Kehlen, Anschlüsse.",
    image: AA_IMG.blech,
    stills: still.klempner,
  },
  {
    id: "photovoltaik",
    label: "Photovoltaik",
    from: "05",
    unit: "Gewerk",
    wait: "Auf dem Dach",
    pills: ["Anlage", "Dach", "Planung"],
    lead: "Die Anlage sitzt nur so gut wie das Dach darunter.",
    body: "Wir planen die Fläche mit. Fragen zum Haus beantworten wir, bevor etwas aufs Dach kommt.",
    image: AA_IMG.pv,
    stills: still.photovoltaik,
  },
  {
    id: "velux",
    label: "VELUX",
    from: "06",
    unit: "Partner",
    wait: "Fenster",
    pills: ["Dachfenster", "Solar", "Sonnenschutz"],
    lead: "Das Fenster, das Sie wollen, bauen wir ein.",
    body: "Dachfenster und Flachdach-Fenster, Solar oder Elektro, Hitze- und Sonnenschutz. Sie nennen das Wunschfenster, wir machen den Termin zur Besichtigung.",
    image: AA_IMG.fenster,
    stills: still.velux,
  },
];

export const AA_FAQ = [
  {
    q: "Sind Sie auch nach Büroschluss erreichbar?",
    a: "Im Büro sind wir montags bis freitags von 8 bis 14 Uhr unter 0208 680806 erreichbar. Wenn es danach drängt, erreichen Sie uns unter 0176 16808060, auch per WhatsApp.",
  },
  {
    q: "Übernehmen Sie auch einen kleinen Schaden?",
    a: "Ja. Eine Undichtigkeit, ein Flachdachschaden, ein einzelnes Fenster. Es muss nicht gleich das ganze Dach sein.",
  },
  {
    q: "Was brauchen Sie für ein Angebot?",
    a: "Eine kurze Beschreibung, ein paar Fotos und Ihre Erreichbarkeit. Danach kommen wir zur Besichtigung.",
  },
  {
    q: "Bauen Sie VELUX-Fenster ein?",
    a: "Ja. Dachfenster und Flachdach-Fenster, auf Wunsch mit Solar oder Elektro, dazu Hitze- und Sonnenschutz. Den Konfigurator von VELUX können Sie vorab nutzen, das Wunschfenster nennen Sie uns.",
  },
  {
    q: "Wo arbeiten Sie?",
    a: "Sitz ist die Graßhofstraße 204 in Oberhausen-Holten. Von hier aus sind wir in der Stadt und der Umgebung unterwegs.",
  },
  {
    q: "Wann ist jemand auf der Baustelle?",
    a: "Montag bis Donnerstag von 7 bis 16 Uhr, freitags von 7 bis 13 Uhr. Im Büro sind wir montags bis freitags von 8 bis 14 Uhr erreichbar.",
  },
] as const;

export const AA_MARQUEE = [
  "Flachdach",
  "Ziegel",
  "Schiefer",
  "Klempner",
  "Photovoltaik",
  "VELUX",
  "Oberhausen",
] as const;
