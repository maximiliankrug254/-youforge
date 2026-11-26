import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";

const BASE = ANA_DEMO.assetsBase;

/** Eigene Baustellenfotos — keine iStock-Motive */
export const ANA_IMG = {
  hero: `${BASE}/ref-4985.jpg`,
  heroAlt:
    "Firmenfahrzeug von Anatolia Straßen- und GaLaBau, Iveco-Lkw mit Firmenbeschriftung",
  excavator: `${BASE}/ref-4990.jpg`,
  excavatorWork: `${BASE}/ref-5004.jpg`,
  sand: `${BASE}/ref-4950.jpg`,
  pavingWet: `${BASE}/img-4743.jpg`,
  driveway: `${BASE}/ana-35.jpg`,
  steps: `${BASE}/ana-28.jpg`,
  path: `${BASE}/ana-17.jpg`,
  lawn: `${BASE}/work-02.jpg`,
  wall: `${BASE}/ana-12.jpg`,
  terrace: `${BASE}/ana-20.jpg`,
  detail: `${BASE}/ana-08.jpg`,
  workClose: `${BASE}/ref-4996.jpg`,
  site: `${BASE}/ref-4987.jpg`,
  stones: `${BASE}/ana-05.jpg`,
  finish: `${BASE}/ana-30.jpg`,
  edge: `${BASE}/ana-24.jpg`,
  yard: `${BASE}/ana-14.jpg`,
  build: `${BASE}/work-01.jpg`,
  build2: `${BASE}/work-03.jpg`,
  handwork: `${BASE}/img-3403.jpg`,
  trench: `${BASE}/img-4196.jpg`,
  prep: `${BASE}/img-2724.jpg`,
  crew: `${BASE}/img-2175.jpg`,
  logo: `${BASE}/logo.png`,
  /** Atmosphäre (frei nutzbare Stock-Motive) */
  atmSite: `${BASE}/atm-site.jpg`,
  atmCrane: `${BASE}/atm-crane.jpg`,
  atmPaving: `${BASE}/atm-paving.jpg`,
  atmGarden: `${BASE}/atm-garden.jpg`,
  atmLawn: `${BASE}/atm-lawn.jpg`,
  atmTerrace: `${BASE}/atm-terrace.jpg`,
  atmPool: `${BASE}/atm-pool.jpg`,
  atmWorker: `${BASE}/atm-worker.jpg`,
  atmTools: `${BASE}/atm-tools.jpg`,
  atmGravel: `${BASE}/atm-gravel.jpg`,
} as const;

/** Freie Stock-Filme (Pexels / Mixkit) — Atmosphäre, nicht Kundenbaustelle */
export const ANA_FILM = {
  hero: `${BASE}/film-paving.mp4`,
  excavator: `${BASE}/film-excavator.mp4`,
  dig: `${BASE}/film-dig.mp4`,
  timelapse: `${BASE}/film-timelapse.mp4`,
  green: `${BASE}/film-green.mp4`,
  drone: `${BASE}/film-drone.mp4`,
} as const;

export const ANA_CINEMA = [
  {
    src: ANA_FILM.hero,
    title: "Pflaster",
    text: "Stein für Stein. Unterbau, Fuge, Kante.",
  },
  {
    src: ANA_FILM.excavator,
    title: "Gerät",
    text: "Erdreich bewegen. Fläche schaffen.",
  },
  {
    src: ANA_FILM.green,
    title: "Grün",
    text: "Landschaft, die bleibt.",
  },
] as const;

export const ANA_MARQUEE = [
  "Pflasterung",
  "Naturstein",
  "Terrassenbau",
  "Bordsteinabsenkung",
  "Baggerarbeiten",
  "Kellerisolierung",
  "Beton & Mauer",
  "Entwässerung",
  "Gartengestaltung",
  "Zaunbau",
  "Baumfällung",
  "Essen & Umgebung",
] as const;

export const ANA_STATEMENT = {
  eyebrow: "Was wir tun",
  lines: ["Jedes Grundstück", "hat seine Eigenheiten.", "Wir setzen sie um."],
  text: "Ob Garten oder Terrasse, privates Kleinprojekt oder öffentliche Fläche — wir erarbeiten mit Ihnen ein Konzept und setzen es mit Erfahrung und Sorgfalt um. Dabei zählen Ihre Vorgaben ebenso wie Vegetation, Topografie und die Architektur des Hauses.",
} as const;

export const ANA_PILLARS = [
  {
    id: "pflaster",
    index: "01",
    title: "Pflaster & Naturstein",
    claim: "Wege, Höfe und Einfahrten.",
    text: "Pflastersteine in Einfahrten, Wegen und Terrassen — fachgerecht verlegt, mit sauberer Fuge und stabilem Unterbau.",
    items: [
      "Hof- und Einfahrtspflasterung",
      "Natursteinarbeiten",
      "Terrassenbeläge",
      "Wege und Stellplätze",
    ],
    image: ANA_IMG.driveway,
    alt: "Frisch gepflasterte Einfahrt aus grauem Verbundstein vor einem Wohnhaus",
  },
  {
    id: "galabau",
    index: "02",
    title: "Garten & Landschaft",
    claim: "Außenanlagen, die bleiben.",
    text: "Gartengestaltung, Rollrasen, Beete, Entwässerung und Zaunbau — abgestimmt auf Grundstück und Nutzung.",
    items: [
      "Gartengestaltung",
      "Rollrasen und Bodenarbeiten",
      "Entwässerungsleitungen",
      "Zaunarbeiten",
    ],
    image: ANA_IMG.lawn,
    alt: "Neu angelegte Rasenfläche mit sauberer Einfassung und Bepflanzung",
  },
  {
    id: "tiefbau",
    index: "03",
    title: "Erd- & Tiefbau",
    claim: "Mit eigenem Gerät.",
    text: "Bagger- und Erdarbeiten, Bordsteinabsenkungen, Kellerisolierungen sowie Beton- und Maurerarbeiten — vom Leitungsgraben bis zur Baugrube.",
    items: [
      "Bagger- und Erdarbeiten",
      "Bordsteinabsenkungen",
      "Kellerisolierungen",
      "Beton- und Maurerarbeiten",
    ],
    image: ANA_IMG.excavator,
    alt: "Kompaktbagger Takeuchi bei Pflaster- und Erdarbeiten auf der Baustelle",
  },
] as const;

export const ANA_SERVICES = [
  {
    title: "Gartengestaltung",
    group: "Garten",
    text: "Terrassen, Wege, Kiesflächen und Beete — fachgerecht angelegt. Rollrasen von Premium- bis Schattenrasen, inklusive Bodenlockerung, Starterdünger und Anwachsphase.",
    image: ANA_IMG.lawn,
    alt: "Gestaltete Gartenanlage mit Rasen und Einfassung",
  },
  {
    title: "Naturstein- und Pflasterarbeiten",
    group: "Pflaster",
    text: "Garagenzufahrten, Terrassen, Hauswege und Carport-Stellplätze. Funktional und optisch sauber — nach Ihren Wünschen verlegt.",
    image: ANA_IMG.pavingWet,
    alt: "Frisch verlegte dunkle Plattenfläche im Außenbereich",
  },
  {
    title: "Terrassenbau",
    group: "Pflaster",
    text: "Gepflasterte Terrassen, auf denen man länger bleibt als auf einem Weg — stabiler Unterbau, klare Kanten, saubere Fugen.",
    image: ANA_IMG.terrace,
    alt: "Terrassen- und Außenanlage nach Fertigstellung",
  },
  {
    title: "Bordsteinabsenkungen",
    group: "Straßenbau",
    text: "Fachgerechte Absenkung von Bordsteinkanten und Anpassung von Geh- und Radweg zwischen Straße und Zufahrt — inklusive Beratung zu den rechtlichen Aspekten.",
    image: ANA_IMG.edge,
    alt: "Bordstein- und Pflasterdetail an einer Zufahrt",
  },
  {
    title: "Baggerarbeiten",
    group: "Tiefbau",
    text: "Erd- und Baggerarbeiten mit eigenem Gerät: Leitungsgräben, Baugruben, Abfahren von Mutterboden und Entsorgung von Bauschutt.",
    image: ANA_IMG.excavatorWork,
    alt: "Bagger und Team bei Erdarbeiten an einer Böschung",
  },
  {
    title: "Kellerisolierungen",
    group: "Tiefbau",
    text: "Erdarbeiten und Abdichtung an Kelleraußenwänden, anschließend Verfüllung — damit Feuchtigkeit draußen bleibt.",
    image: ANA_IMG.trench,
    alt: "Erdarbeiten und Freilegung im Bereich der Gebäudegründung",
  },
  {
    title: "Beton- und Maurerarbeiten",
    group: "Bau",
    text: "Mauern, Böden, Decken und Zwischenwände — sowie Sanierung und Renovierung älterer Gebäudeteile.",
    image: ANA_IMG.wall,
    alt: "Mauer- und Steinarbeiten an einer Außenanlage",
  },
  {
    title: "Entwässerungsleitungen",
    group: "Technik",
    text: "Wasser muss weg vom Haus. Wir verlegen und führen Entwässerung so aus, dass Fundament und Fläche trocken bleiben.",
    image: ANA_IMG.prep,
    alt: "Vorbereitete Fläche und Leitungsarbeiten auf der Baustelle",
  },
  {
    title: "Zaunarbeiten",
    group: "Garten",
    text: "Grundstückseingrenzungen nach örtlichen Baubestimmungen — Höhe, Breite und Gestaltung abgestimmt.",
    image: ANA_IMG.finish,
    alt: "Fertiggestellte Außenanlage mit klarer Grundstücksgrenze",
  },
  {
    title: "Baumfällung",
    group: "Garten",
    text: "Fällung mit Erfahrung und Motorsäge. Beratung zu Genehmigung und Sicherheit. Stamm in Teilstücke, Spalten zu Kaminholz, Häckseln und Entsorgen von Astwerk — nach Absprache.",
    image: ANA_IMG.crew,
    alt: "Arbeiten im Außenbereich mit Gerät und Material",
  },
] as const;

/** Acht benannte Referenzen von der bestehenden Website */
export const ANA_PROJECTS = [
  {
    place: "Hilden",
    title: "600 m² Hofpflasterung",
    image: ANA_IMG.driveway,
    alt: "Großflächige Pflasterarbeit an einem Hof",
  },
  {
    place: "Mülheim an der Ruhr",
    title: "Terrasse",
    image: ANA_IMG.terrace,
    alt: "Terrassenbau in Mülheim an der Ruhr",
  },
  {
    place: "Dorsten-Wulfen",
    title: "Außenanlagen Gnadenkirche",
    image: ANA_IMG.yard,
    alt: "Gestaltung der Außenanlagen an der Gnadenkirche Wulfen",
  },
  {
    place: "Krefeld",
    title: "Natursteinmauer",
    image: ANA_IMG.stones,
    alt: "Natursteinmauer in Krefeld",
  },
  {
    place: "Essen-Holsterhausen",
    title: "Schalungssteinmauer",
    image: ANA_IMG.wall,
    alt: "Schalungssteinmauer in Essen-Holsterhausen",
  },
  {
    place: "Iserlohn",
    title: "800 m² Hallenpflasterung",
    image: ANA_IMG.pavingWet,
    alt: "Großflächige Pflasterung in Hallen in Iserlohn",
  },
  {
    place: "Duisburg",
    title: "Terrassenbau",
    image: ANA_IMG.path,
    alt: "Terrassenbau in Duisburg",
  },
  {
    place: "Kreis Kleve",
    title: "Parkplatzanlage",
    image: ANA_IMG.excavatorWork,
    alt: "Parkplatzanlage im Kreis Kleve",
  },
] as const;

export const ANA_GALLERY = [
  {
    src: ANA_IMG.pavingWet,
    label: "Plattenfläche",
    alt: "Frisch verlegte dunkle Platten",
    portrait: true,
  },
  {
    src: ANA_IMG.excavator,
    label: "Gerät im Einsatz",
    alt: "Kompaktbagger auf der Baustelle",
    portrait: false,
  },
  {
    src: ANA_IMG.steps,
    label: "Stufen & Pflaster",
    alt: "Steinstufen mit Pflasterbelag am Hauseingang",
    portrait: true,
  },
  {
    src: ANA_IMG.hero,
    label: "Fuhrpark",
    alt: "Firmen-Lkw von Anatolia",
    portrait: false,
  },
  {
    src: ANA_IMG.lawn,
    label: "Gartenanlage",
    alt: "Fertige Rasenfläche mit Einfassung",
    portrait: true,
  },
  {
    src: ANA_IMG.driveway,
    label: "Einfahrt",
    alt: "Gepflasterte Einfahrt",
    portrait: false,
  },
  {
    src: ANA_IMG.excavatorWork,
    label: "Erdarbeiten",
    alt: "Team und Bagger bei Erdarbeiten",
    portrait: false,
  },
  {
    src: ANA_IMG.path,
    label: "Wegbelag",
    alt: "Schmaler Plattenweg am Gebäude",
    portrait: true,
  },
] as const;

export const ANA_PROCESS = [
  {
    step: "01",
    title: "Gespräch",
    text: "Wir hören zu: Pläne, Vorgaben, Grundstück. Daraus entsteht ein maßgeschneidertes Konzept.",
  },
  {
    step: "02",
    title: "Planung",
    text: "Untergrund, Entwässerung, Material und Ablauf — bevor das Gerät anrückt.",
  },
  {
    step: "03",
    title: "Umsetzung",
    text: "Pflaster, Erde, Stein oder Mauer: ausgeführt mit eigenem Team und Gerät.",
  },
  {
    step: "04",
    title: "Übergabe",
    text: "Saubere Fläche, klare Kanten. Sie prüfen mit uns ab — dann ist das Projekt fertig.",
  },
] as const;

export const ANA_ABOUT = {
  eyebrow: "Unternehmen",
  headline: "Handwerk aus Essen.",
  paragraphs: [
    "Die ANATOLIA Straßen- und GaLaBau GmbH besteht laut eigener Angabe seit dem 1. Juni 2016. Sitz ist Im Looscheid 91 in Essen. Geschäftsführer ist Ali Sertpolat.",
    "Das Leistungsspektrum reicht von Garten- und Landschaftsbau über Naturstein- und Pflasterarbeiten bis zu Bordsteinabsenkungen, Baggerarbeiten, Kellerisolierungen, Beton- und Maurerarbeiten, Entwässerung, Zaunbau und Baumfällung.",
    "Kleinprojekte und Großprojekte — privat und öffentlich. Die benannten Referenzen reichen von Hilden und Mülheim bis Iserlohn und den Kreis Kleve.",
  ],
  facts: [
    ["Firma", "ANATOLIA Straßen- und GaLaBau GmbH"],
    ["Seit", "1. Juni 2016"],
    ["Geschäftsführer", "Ali Sertpolat"],
    ["Register", "Amtsgericht Essen, HRB 33128"],
    ["Adresse", "Im Looscheid 91, 45141 Essen"],
  ] as const,
} as const;

export const ANA_STATS = ANA_DEMO.stats;
