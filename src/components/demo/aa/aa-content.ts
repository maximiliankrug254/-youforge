import { AA_IMG } from "@/components/demo/aa/aa-config";

export const AA_NAV = [
  ["#werkstatt", "Werkstatt"],
  ["#stuecke", "Stücke"],
  ["#ort", "Ort"],
  ["#besuch", "Besuch"],
] as const;

export const AA_STEPS = [
  {
    n: "01",
    title: "Der Stamm",
    fact: "4 Jahre Trocknung",
    text: "Nur Eiche aus dem Kammwald. Kein Zukauf, kein Furnier. Was nicht trägt, kommt nicht auf die Bank.",
    img: AA_IMG.oak,
  },
  {
    n: "02",
    title: "Die Grube",
    fact: "8 km Ton",
    text: "Westerwälder Steinzeug, geholt wo der Wald aufhört. Derselbe Boden, der den Hof trägt.",
    img: AA_IMG.clay,
  },
  {
    n: "03",
    title: "Die Fuge",
    fact: "0 Schrauben",
    text: "Zapfen, Keil, Schlitz. Was sich löst, war nie gemeint. Ein Stuhl muss zerlegbar sein — in 80 Jahren, nicht in acht.",
    img: AA_IMG.joinery,
  },
  {
    n: "04",
    title: "Der Brand",
    fact: "1280 °C",
    text: "Die Glasur ist die Asche derselben Eiche. Tisch und Schale kommen aus einem Feuer — sonst gehören sie nicht zusammen.",
    img: AA_IMG.kiln,
  },
] as const;

export const AA_FACTS = [
  { n: "2", label: "Hände" },
  { n: "1", label: "Ofen" },
  { n: "12", label: "Unikate / Jahr" },
  { n: "8–16", label: "Wochen Wartezeit" },
] as const;

export const AA_FILM_CHAPTERS = [
  { at: 0, title: "Der Stamm", note: "Eiche, vier Jahre ruhend" },
  { at: 2.1, title: "Die Grube", note: "Ton aus dem Westerwald" },
  { at: 4.3, title: "Die Fuge", note: "Zapfen, kein Beschlag" },
  { at: 6.4, title: "Die Scheibe", note: "Nass, zentriert, langsam" },
  { at: 8.6, title: "Die Asche", note: "Glasur aus dem eigenen Holz" },
  { at: 10.7, title: "Der Ofen", note: "1280 Grad, nichts eilen" },
  { at: 12.9, title: "Die Glut", note: "Holzbrand über Nacht" },
  { at: 15.0, title: "Das Stück", note: "Tisch und Schale, ein Winter" },
] as const;

export const AA_NEAR = [
  {
    n: "8",
    unit: "MIN.",
    label: "ZU FUSS ZUR LEHMGRUBE",
    img: AA_IMG.clay,
  },
  {
    n: "12",
    unit: "MIN.",
    label: "ZU FUSS IN DEN EICHENSTAND",
    img: AA_IMG.oak,
  },
  {
    n: "6",
    unit: "MIN.",
    label: "ZU FUSS AN DEN WALDBACH",
    img: AA_IMG.forest,
  },
  {
    n: "4",
    unit: "MIN.",
    label: "ZUM HOLZBRAND IM HOF",
    img: AA_IMG.firing,
  },
  {
    n: "18",
    unit: "MIN.",
    label: "ZUM SCHAURAUM IN DER SCHEUNE",
    img: AA_IMG.showroom,
  },
  {
    n: "25",
    unit: "MIN.",
    label: "NACH HÖHR-GRENZHAUSEN",
    img: AA_IMG.exterior,
  },
] as const;

export const AA_TIMELINE = [
  ["WERKSTATT GEÖFFNET", "Q2 2024"],
  ["ERSTER HOLZBRAND", "Q4 2024"],
  ["ATELIER-TAGE", "Q3 2025"],
  ["JAHRESKOLLEKTION", "Q1 2026"],
] as const;

export const AA_COLLAGE = [
  {
    src: AA_IMG.firing,
    label: "HOLZBRAND",
    rot: -6,
    pos: "left-[6%] top-[8%] w-[38%] sm:w-[32%]",
  },
  {
    src: AA_IMG.makers,
    label: "ZWEI HÄNDE, EIN OFEN",
    rot: 3,
    pos: "left-[42%] top-[18%] w-[40%] sm:w-[34%]",
  },
  {
    src: AA_IMG.glaze,
    label: "ASCHEGUß",
    rot: 7,
    pos: "left-[18%] top-[54%] w-[36%] sm:w-[30%]",
  },
  {
    src: AA_IMG.joinery,
    label: "ZAPFEN, NICHT SCHRAUBE",
    rot: -3,
    pos: "right-[8%] top-[52%] w-[34%] sm:w-[28%]",
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

export const AA_PIECES: AaPiece[] = [
  {
    id: "stuhl",
    label: "STUHL",
    from: "1",
    unit: "SITZ",
    wait: "12 WOCHEN",
    pills: ["EICHE", "HANDZAPFEN", "LEINÖL", "UNIKAT"],
    lead: "EIN STUHL, DER SICH AN DEN RÜCKEN ERINNERT.",
    body: "GESCHLITZT, VERZAPFT, NICHT GESCHRAUBT. DIE SITZHÖHE KOMMT AUS DEM KÖRPER, NICHT AUS DEM KATALOG.",
    image: AA_IMG.chair,
    stills: [AA_IMG.chair, AA_IMG.joinery, AA_IMG.stool],
  },
  {
    id: "tisch",
    label: "TISCH",
    from: "6",
    unit: "PLÄTZE",
    wait: "16 WOCHEN",
    pills: ["MASSIVEICH", "ÖL", "KERAMIK-INSET", "AUF MASS"],
    lead: "EINE PLATTE, DIE JAHRE BRAUCHT UND JAHRE HÄLT.",
    body: "DIE PLATTE LIEGT AUF ZAPFEN, NICHT AUF BESCHLÄGEN. SCHÜSSELN AUS DEMSELBEN OFEN SITZEN IN DERSELBEN MASERUNG.",
    image: AA_IMG.table,
    stills: [AA_IMG.table, AA_IMG.oak, AA_IMG.bowl],
  },
  {
    id: "leuchte",
    label: "LEUCHTE",
    from: "1",
    unit: "LICHT",
    wait: "10 WOCHEN",
    pills: ["GEDRECHSELT", "ASCHEGUß", "MESSING", "DIMMBAR"],
    lead: "LICHT AUS HOLZ UND TON, NICHT AUS BLECH.",
    body: "DER SCHIRM KOMMT AUS DEM OFEN. DER ARM AUS DER DREHBANK. ZUSAMMEN WÄRMEN SIE EINEN RAUM, OHNE IHN ZU FÜLLEN.",
    image: AA_IMG.lamp,
    stills: [AA_IMG.lamp, AA_IMG.glaze, AA_IMG.showroom],
  },
  {
    id: "gefaess",
    label: "GEFÄSS",
    from: "1",
    unit: "STÜCK",
    wait: "8 WOCHEN",
    pills: ["DREHSCHEIBE", "HOLZASCHE", "RISS ALS NARB", "ESSBAR"],
    lead: "ASCHE AUS DEMSELBEN HOLZ, DAS DEN TISCH TRÄGT.",
    body: "DIE GLASUR IST KEIN REZEPT AUS DER DOSE. SIE IST DIE ASCHE UNSERER EICHE, GEBRANNT BIS SIE GLAS WIRD.",
    image: AA_IMG.vessels,
    stills: [AA_IMG.vessels, AA_IMG.bowl, AA_IMG.wheel],
  },
  {
    id: "bank",
    label: "BANK",
    from: "3",
    unit: "SITZE",
    wait: "14 WOCHEN",
    pills: ["SPALT", "KEIL", "ROHE KANTE", "INNEN/AUSSEN"],
    lead: "EINE BANK FÜR DEN HOF UND FÜR DIE KÜCHE.",
    body: "DIE KANTE BLEIBT, WO DER STAMM SIE GELASSEN HAT. DARUNTER EIN KEIL AUS DEMSELBEN STAMM.",
    image: AA_IMG.stool,
    stills: [AA_IMG.stool, AA_IMG.oak, AA_IMG.exterior],
  },
  {
    id: "unikat",
    label: "UNIKAT",
    from: "∞",
    unit: "FORM",
    wait: "NACH GESPRÄCH",
    pills: ["AUFTRAG", "HOLZ + TON", "NUMMERIERT", "ATELIER"],
    lead: "WAS NOCH KEINEN NAMEN HAT, ENTSTEHT IM GESPRÄCH.",
    body: "EIN SCHRANK FÜR EINEN RAUM. EINE SCHALE FÜR EINEN TISCH, DEN ES NOCH NICHT GIBT. WIR ZEICHNEN ERST, DANN BRENNEN WIR.",
    image: AA_IMG.showroom,
    stills: [AA_IMG.showroom, AA_IMG.makers, AA_IMG.kiln],
  },
];

export const AA_FAQ = [
  {
    q: "KANN ICH IN DER WERKSTATT ZUSCHAUEN?",
    a: "Ja — an den Atelier-Tagen und nach Vereinbarung. Der Ofen bleibt geschlossen, solange er brennt. Alles andere darfst du sehen.",
  },
  {
    q: "WIE LANGE DAUERT EIN STÜCK?",
    a: "Ein Gefäß acht Wochen, ein Stuhl zwölf, ein Tisch sechzehn. Holz will ruhen, Ton will warten. Wer schneller braucht, braucht eine andere Werkstatt.",
  },
  {
    q: "SIND DIE STÜCKE NUMMERIERT?",
    a: "Jedes Unikat trägt Brandstempel, Jahr und Nummer unter dem Fuß oder in der Fuge. Keine Serie über zwölf.",
  },
  {
    q: "KANN ICH EIGENES HOLZ ODER TON MITBRINGEN?",
    a: "Holz ja, wenn es trocken und ehrlich ist. Ton nur nach Brennprobe. Wir sagen rechtzeitig, wenn ein Material uns nicht gehört.",
  },
  {
    q: "LIEFERN SIE?",
    a: "Im Umkreis von 80 Kilometern mit eigenem Wagen. Weiter weg mit Spedition, die Holz und Scherben versteht — nicht mit einem Möbelpacker.",
  },
  {
    q: "WIE PFLEGE ICH HOLZ UND ASCHEGUß?",
    a: "Eiche: trockenes Tuch, selten Leinöl. Gefäße: spülbar, nicht in die Spülmaschine. Risse in der Glasur sind Narben, keine Fehler.",
  },
  {
    q: "KANN ICH NUR KERAMIK ODER NUR MÖBEL BESTELLEN?",
    a: "Ja. Die Werkstatt ist eine, die Stücke müssen es nicht sein. Am schönsten sitzen sie trotzdem beieinander.",
  },
  {
    q: "WAS KOSTET EIN ATELIERBESUCH?",
    a: "Nichts. Du kommst, siehst, gehst. Erst wenn ein Stück beginnt, sprechen wir über Geld.",
  },
] as const;
