import { GPF_DEMO, GPF_VARS, gpfFill } from "@/components/demo/gpf/gpf-config";

const BASE = GPF_DEMO.assetsBase;

/** Nur frische Stock-Assets — keine Client-Fotos der alten Demo */
export const GPF_IMG = {
  hero: `${BASE}/hero-wide.jpg`,
  rasenFertig: `${BASE}/rasen-fertig.jpg`,
  rasenMaehen: `${BASE}/rasen-maehen.jpg`,
  rasenBoden: `${BASE}/rasen-boden.jpg`,
  hecke: `${BASE}/hecke.jpg`,
  heckeClean: `${BASE}/hecke-clean.jpg`,
  beeteAnlegen: `${BASE}/beete-anlegen.jpg`,
  beetHangVorher: `${BASE}/beet-hang-vorher.jpg`,
  beetHangNachher: `${BASE}/beet-hang-nachher.jpg`,
  kronenschnitt: `${BASE}/kronenschnitt.jpg`,
  baumDetail: `${BASE}/baum-detail.jpg`,
  stumpf: `${BASE}/stumpf.jpg`,
  unkrautVorher: `${BASE}/unkraut-vorher.jpg`,
  unkrautNachher: `${BASE}/unkraut-nachher.jpg`,
  terrasseVorher: `${BASE}/terrasse-vorher.jpg`,
  terrasseNachher: `${BASE}/terrasse-nachher.jpg`,
  terrasseComplete: `${BASE}/terrasse-complete.jpg`,
  wegFertig: `${BASE}/weg-fertig.jpg`,
  wegKies: `${BASE}/weg-kies.jpg`,
  mauer: `${BASE}/mauer.jpg`,
  palisaden: `${BASE}/palisaden.jpg`,
  zaunFertig: `${BASE}/zaun-fertig.jpg`,
  zaunAufbau: `${BASE}/zaun-aufbau.jpg`,
  zaunSicht: `${BASE}/zaun-sicht.jpg`,
  gabionen: `${BASE}/gabionen.jpg`,
  steinmauer: `${BASE}/steinmauer.jpg`,
  parkanlage: `${BASE}/parkanlage.jpg`,
  poolTerrasse: `${BASE}/pool-terrasse.jpg`,
  gartenWeit: `${BASE}/garten-weit.jpg`,
  detailHoch: `${BASE}/detail-hoch.jpg`,
  pflanzenDetail: `${BASE}/pflanzen-detail.jpg`,
  arbeitDetail: `${BASE}/arbeit-detail.jpg`,
  teamArbeit: `${BASE}/arbeit-detail.jpg`,
} as const;

export const GPF_STATS = GPF_DEMO.stats;

export const GPF_PILLARS = [
  {
    id: "pflege",
    index: "01",
    title: "Gartenpflege",
    claim: "Damit es gepflegt bleibt.",
    text: "Rasen, Hecken, Beete, Flächen. Einmalig zum Saisonstart oder dauerhaft im Pflegepaket — vom Vorgarten bis zur Parkanlage.",
    items: ["Rasenmähen & Mulchen", "Vertikutieren & Düngen", "Hecken & Sträucher", "Beete & Bepflanzung"],
    image: GPF_IMG.rasenFertig,
    alt: "Frisch gepflegte Rasenfläche mit sauberer Kante",
  },
  {
    id: "baum",
    index: "02",
    title: "Baumarbeiten",
    claim: "Wenn es hoch hinaus geht.",
    text: "Kronenpflege nach ZTV, Verjüngung, Fällung, Rodung und Wurzelentfernung. Mit Seilklettertechnik, Hebebühne und Häcksler auf Raupenfahrwerk.",
    items: ["Kronen- & Obstbaumpflege", "Baumfällung (SKT-B)", "Rodung & Forstmulchen", "Stumpf- & Wurzelentfernung"],
    image: GPF_IMG.kronenschnitt,
    alt: "Hoher Baumbestand mit dichter Kronenschicht",
  },
  {
    id: "bau",
    index: "03",
    title: "Landschaftsbau",
    claim: "Wenn der Garten neu wird.",
    text: "Terrassen, Wege, Mauern, Zäune und komplette Neuanlagen. Vom Unterbau bis zur letzten Fuge — inklusive Entwässerung und Entsorgung.",
    items: ["Terrassen & Wege", "Mauern & Palisaden", "Zaun- & Toranlagen", "Garten- & Rasenneuanlage"],
    image: GPF_IMG.terrasseComplete,
    alt: "Fertige Terrasse mit klarer Linie zum Garten",
  },
] as const;

export const GPF_SERVICES = [
  {
    title: "Mäh-, Mulch- & Rasenarbeiten",
    group: "Pflege",
    text: "Alle 7 bis 14 Tage ab dem Frühjahr — so bleibt die Fläche dicht. Vom Schrebergarten bis zum Stadtpark, Schnittlänge nach Wunsch. Entsorgung des Schnittguts ist im Preis enthalten.",
    image: GPF_IMG.rasenMaehen,
    alt: "Gleichmäßig gemähte Rasenfläche in einem Privatgarten",
  },
  {
    title: "Vertikutieren, Aerifizieren & Düngen",
    group: "Pflege",
    text: "Anritzen, anstechen, nachsäen, düngen. Wir wählen Saatgut und Dünger nach Ihren Bodenverhältnissen — damit der Rasen nicht nur kurz, sondern gesund ist.",
    image: GPF_IMG.rasenBoden,
    alt: "Bodenvorbereitung und Bepflanzung einer Grünfläche",
  },
  {
    title: "Hecken- & Sträucherschnitt",
    group: "Pflege",
    text: "Je nach Art, Alter und Zustand per Hand oder Motorschere, ab 2 m mit passender Leiter. Der ideale Schnittzeitpunkt entscheidet, ob ein Strauch verkahlt oder blüht.",
    image: GPF_IMG.heckeClean,
    alt: "Formschön geschnittene Hecken und Rasenflächen",
  },
  {
    title: "Bepflanzung & Beetpflege",
    group: "Pflege",
    text: "Neue Beete anlegen, bestehende in Form halten, Stauden teilen, Flächen einfassen. Wir wählen Pflanzen, die an Ihrem Standort tatsächlich wachsen wollen.",
    image: GPF_IMG.beeteAnlegen,
    alt: "Frisch angelegtes Beet mit saisonaler Bepflanzung",
  },
  {
    title: "Großflächenreinigung & Unkraut",
    group: "Pflege",
    text: "Fugen, Pflaster, Hof und Zufahrt. Wir arbeiten maschinell und ohne Chemie — die Fläche sieht danach aus wie am ersten Tag.",
    image: GPF_IMG.unkrautNachher,
    alt: "Saubere Pflaster- und Terrassenfläche ohne Unkraut",
  },
  {
    title: "Baum- & Obstbaumpflege",
    group: "Bäume",
    text: "Kronenpflege nach ZTV: Totholz raus, Symmetrie rein. Bei Obstbäumen je nach Alter Erziehungs- oder Regenerationsschnitt. Vogelnester bleiben, wo sie sind.",
    image: GPF_IMG.kronenschnitt,
    alt: "Gepflegter Baumbestand mit klarer Kronenstruktur",
  },
  {
    title: "Fällung & Rodung",
    group: "Bäume",
    text: "Komplettfällung oder Abtrag in Etappen — mit SKT-B-Schein, Hebebühne und Raupenhäcksler auch auf engem Gelände. Fällgenehmigung und Straßensperrung übernehmen wir.",
    image: GPF_IMG.baumDetail,
    alt: "Waldartiger Baumbestand vor einer Rodungsmaßnahme",
  },
  {
    title: "Baumstumpf- & Wurzelentfernung",
    group: "Bäume",
    text: "Fräsen oder ausbaggern. Beim Fräsen füllen wir das Loch mit Fräsgut oder Erde, beim Ausbaggern kommt das komplette Wurzelwerk raus — dann sackt später nichts nach.",
    image: GPF_IMG.stumpf,
    alt: "Wald- und Wurzelbereich nach einer Baummaßnahme",
  },
  {
    title: "Terrassenbau",
    group: "Bau",
    text: "Eckig, rund, gepflastert, Platte oder Holz. Auf Wunsch mit Sichtschutz, Überdachung, Beleuchtung oder Outdoor-Küche. Unterbau und Entwässerung sind nicht verhandelbar.",
    image: GPF_IMG.terrasseComplete,
    alt: "Fertige Terrasse mit Plattenbelag und Gartenbezug",
  },
  {
    title: "Wege & Pflasterflächen",
    group: "Bau",
    text: "Vom Trittplattenweg bis zur befahrbaren Zufahrt. Sauberer Aufbau, saubere Kante, sauberes Gefälle — damit der Weg auch nach dem dritten Winter noch liegt.",
    image: GPF_IMG.wegKies,
    alt: "Gartenweg mit klarer Kante und Bepflanzung",
  },
  {
    title: "Mauern & Palisaden",
    group: "Bau",
    text: "Naturstein, Beton, Gabione oder Palisade. Zum Abfangen von Hängen, zum Einfassen von Beeten oder einfach, weil eine gute Mauer einen Garten sortiert.",
    image: GPF_IMG.mauer,
    alt: "Natursteinmauer als räumliche Einfassung",
  },
  {
    title: "Zaun- & Toranlagen",
    group: "Bau",
    text: "Holz, Maschendraht, Gitterstab, Alu, WPC oder Gabione — dazu Flügel- und Rolltore, auf Wunsch elektrisch. Wir bauen nach geltendem Nachbarrecht.",
    image: GPF_IMG.zaunFertig,
    alt: "Saubere Grundstücksgrenze mit Zaunanlage",
  },
] as const;

export const GPF_COMPARE = [
  {
    id: "terrasse",
    label: "Terrasse",
    title: "Terrasse komplett neu",
    text: "Alter Belag raus, neuer Unterbau rein — saubere Fläche, klare Kante, Bepflanzung an der Wand.",
    before: `${BASE}/compare-terrasse-vorher.jpg`,
    after: `${BASE}/compare-terrasse-nachher.jpg`,
    beforeAlt: "Vernachlässigte Betonfläche vor dem Umbau",
    afterAlt: "Fertige Terrasse mit Platten und Bepflanzung",
  },
  {
    id: "weg",
    label: "Wege",
    title: "Weg neu angelegt",
    text: "Aus dem Trampelpfad wird eine klare Achse — Pflaster, Kante und geschnittene Ränder.",
    before: `${BASE}/compare-weg-vorher.jpg`,
    after: `${BASE}/compare-weg-nachher.jpg`,
    beforeAlt: "Matschiger Trampelpfad vor dem Umbau",
    afterAlt: "Gepflasterter Gartenweg nach dem Umbau",
  },
  {
    id: "rasen",
    label: "Rasen",
    title: "Rasenfläche erneuert",
    text: "Kahle Stellen und Unkraut raus — dichter Rasen, saubere Kante, Beet am Zaun.",
    before: `${BASE}/compare-rasen-vorher.jpg`,
    after: `${BASE}/compare-rasen-nachher.jpg`,
    beforeAlt: "Lückiger, verunkrauteter Rasen vor der Erneuerung",
    afterAlt: "Dichter, gepflegter Rasen nach der Erneuerung",
  },
] as const;

export const GPF_PROCESS = [
  {
    step: "01",
    title: "Sie melden sich",
    text: "Kurzer Anruf oder ein paar Zeilen mit Ort, Größe und dem, was Sie stört. Fotos helfen uns, direkt einzuschätzen, worum es geht.",
  },
  {
    step: "02",
    title: "Wir kommen vorbei",
    text: "Vor Ort statt am Telefon: Zugang, Untergrund, Bestand. Wir sagen ehrlich, was sinnvoll ist — und was Sie sich sparen können.",
  },
  {
    step: "03",
    title: "Sie bekommen ein Angebot",
    text: "Unverbindlich und aufgeschlüsselt. Sie sehen, was welche Position kostet, und können in Etappen planen, wenn das besser passt.",
  },
  {
    step: "04",
    title: "Wir setzen um",
    text: "Termin steht, Team kommt, Entsorgung inklusive. Am Ende ist die Fläche besenrein — nicht „fast fertig“.",
  },
] as const;

export const GPF_STANDARDS = [
  {
    title: "ZTV-Baumpflege",
    text: "Wir schneiden nach den Zusätzlichen Technischen Vertragsbedingungen — nicht nach Gefühl.",
  },
  {
    title: "SKT-B geschult",
    text: "Seilklettertechnik-B: Unsere Leute arbeiten gesichert auch dort, wo keine Maschine hinkommt.",
  },
  {
    title: "Ökologische EPS-Bekämpfung",
    text: "Gegen den Eichenprozessionsspinner setzen wir ein zu 100 % ökologisches Mittel ein.",
  },
  {
    title: "Entsorgung inklusive",
    text: "Schnittgut, Wurzelwerk, Aushub: Abtransport und Entsorgung sind Teil der Leistung.",
  },
  {
    title: "Genehmigungen inklusive",
    text: "Fällgenehmigung oder Straßensperrung nötig? Das erledigen wir, bevor die Säge läuft.",
  },
  {
    title: "Nachbarrecht beachtet",
    text: GPF_DEMO.standards.neighborLaw,
  },
] as const;

export const GPF_MACHINES = [
  "Hebebühne",
  "Raupenhäcksler",
  "Forstmulcher",
  "Baumstumpffräse",
  "Aufsitzmäher",
  "Minibagger",
  "Vertikutierer",
  "Kehrmaschine",
] as const;

export const GPF_MARQUEE = GPF_DEMO.marquee;

export const GPF_GALLERY = [
  {
    src: GPF_IMG.terrasseComplete,
    label: "Terrasse",
    alt: "Fertige Terrasse mit klarer Linie zum Außenraum",
    portrait: false,
  },
  {
    src: GPF_IMG.zaunSicht,
    label: "Sichtschutz",
    alt: "Dichte Hecke als grüner Sichtschutz",
    portrait: true,
  },
  {
    src: GPF_IMG.mauer,
    label: "Naturstein",
    alt: "Natursteinmauer als räumliche Einfassung",
    portrait: false,
  },
  {
    src: GPF_IMG.rasenFertig,
    label: "Rasen",
    alt: "Gleichmäßig gepflegte Rasenfläche",
    portrait: false,
  },
  {
    src: GPF_IMG.zaunAufbau,
    label: "Zaunbau",
    alt: "Neue Zaunanlage an der Grundstücksgrenze",
    portrait: true,
  },
  {
    src: GPF_IMG.wegFertig,
    label: "Wege",
    alt: "Gartenweg mit weicher Linienführung",
    portrait: false,
  },
  {
    src: GPF_IMG.gabionen,
    label: "Gabionen",
    alt: "Gabionenwand als Grundstücksstruktur",
    portrait: false,
  },
  {
    src: GPF_IMG.stumpf,
    label: "Bestand",
    alt: "Baumbestand und Wurzelbereich nach einer Maßnahme",
    portrait: false,
  },
  {
    src: GPF_IMG.poolTerrasse,
    label: "Poolumfeld",
    alt: "Gepflegtes Umfeld rund um eine Wasserfläche",
    portrait: false,
  },
  {
    src: GPF_IMG.palisaden,
    label: "Abfangung",
    alt: "Hangabfangung mit klarer Steinlinie",
    portrait: false,
  },
] as const;

export const GPF_REGION = GPF_DEMO.region.towns;

export const GPF_FAQ = GPF_DEMO.faq.map((item) => ({
  q: item.q,
  a: gpfFill(item.a, GPF_VARS),
}));
