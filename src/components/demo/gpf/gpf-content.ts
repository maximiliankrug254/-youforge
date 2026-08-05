const BASE = "/demo/gartenpflege-friedberg";

export const GPF_IMG = {
  hero: `${BASE}/hero-wide.jpg`,
  rasenFertig: `${BASE}/rasen-fertig.jpg`,
  rasenMaehen: `${BASE}/rasen-maehen.jpg`,
  rasenBoden: `${BASE}/rasen-boden.jpg`,
  rasenTextur: `${BASE}/rasen-textur.jpg`,
  hecke: `${BASE}/hecke.jpg`,
  buesche: `${BASE}/buesche.jpg`,
  beeteAnlegen: `${BASE}/beete-anlegen.jpg`,
  beetNeubepflanzung: `${BASE}/beet-neubepflanzung.jpg`,
  beetHangVorher: `${BASE}/beet-hang-vorher.jpg`,
  beetHangNachher: `${BASE}/beet-hang-nachher.jpg`,
  kronenschnitt: `${BASE}/kronenschnitt.jpg`,
  baumfaellung: `${BASE}/baumfaellung.jpg`,
  baumAbtrag: `${BASE}/baum-abtrag.jpg`,
  baumAeste: `${BASE}/baum-aeste.jpg`,
  baumKomplett: `${BASE}/baum-komplett.jpg`,
  stumpffraese: `${BASE}/stumpffraese.jpg`,
  unkrautVorher: `${BASE}/unkraut-vorher.jpg`,
  unkrautNachher: `${BASE}/unkraut-nachher.jpg`,
  terrasseVorher: `${BASE}/terrasse-vorher.jpg`,
  terrasseNachher: `${BASE}/terrasse-nachher.jpg`,
  terrasseComplete: `${BASE}/terrasse-complete.jpg`,
  terrasseSideview: `${BASE}/terrasse-sideview.jpg`,
  terrasseBau: `${BASE}/terrasse-bau.jpg`,
  wegBau: `${BASE}/weg-bau.jpg`,
  wegFertig: `${BASE}/weg-fertig.jpg`,
  wegKies: `${BASE}/weg-kies.jpg`,
  mauerTypen: `${BASE}/mauer-typen.jpg`,
  palisaden: `${BASE}/palisaden.jpg`,
  zaunFertig: `${BASE}/zaun-fertig.jpg`,
  zaunAufbau: `${BASE}/zaun-aufbau.jpg`,
  zaunVerkleidet: `${BASE}/zaun-verkleidet.jpg`,
  gabionen: `${BASE}/gabionen.jpg`,
  neuanlagePflaster: `${BASE}/neuanlage-pflaster.jpg`,
  parkanlage: `${BASE}/parkanlage.jpg`,
  poolTerrasse: `${BASE}/pool-terrasse.jpg`,
  pool: `${BASE}/pool.jpg`,
  poolanlage: `${BASE}/poolanlage.jpg`,
  gartenWeit: `${BASE}/garten-weit.jpg`,
  detailHoch: `${BASE}/detail-hoch.jpg`,
  mariusArbeit: `${BASE}/marius-arbeit.jpg`,
  mariusPortrait: `${BASE}/marius-portrait.jpg`,
  einzugsgebiet: `${BASE}/einzugsgebiet.jpg`,
} as const;

export const GPF_STATS = [
  { value: 13, suffix: "", label: "Jahre selbstständig", hint: "seit 2013" },
  { value: 25, suffix: " km", label: "Einsatzradius", hint: "ab Rodheim" },
  { value: 20, suffix: "+", label: "Leistungen", hint: "aus einer Hand" },
  { value: 100, suffix: " %", label: "Eigenes Team", hint: "kein Subunternehmer" },
] as const;

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
    image: GPF_IMG.detailHoch,
    alt: "Mitarbeiter mit Motorsäge und Schnittschutzausrüstung bei einer Fällung",
  },
  {
    id: "bau",
    index: "03",
    title: "Landschaftsbau",
    claim: "Wenn der Garten neu wird.",
    text: "Terrassen, Wege, Mauern, Zäune und komplette Neuanlagen. Vom Unterbau bis zur letzten Fuge — inklusive Entwässerung und Entsorgung.",
    items: ["Terrassen & Wege", "Mauern & Palisaden", "Zaun- & Toranlagen", "Garten- & Rasenneuanlage"],
    image: GPF_IMG.terrasseComplete,
    alt: "Fertige Natursteinterrasse mit Bepflanzung",
  },
] as const;

export const GPF_SERVICES = [
  {
    title: "Mäh-, Mulch- & Rasenarbeiten",
    group: "Pflege",
    text: "Alle 7 bis 14 Tage ab dem Frühjahr — so bleibt die Fläche dicht. Vom Schrebergarten bis zum Stadtpark, Schnittlänge nach Wunsch. Entsorgung des Schnittguts ist im Preis enthalten.",
    image: GPF_IMG.rasenMaehen,
    alt: "Rasenmäharbeiten auf großer Fläche",
  },
  {
    title: "Vertikutieren, Aerifizieren & Düngen",
    group: "Pflege",
    text: "Anritzen, anstechen, nachsäen, düngen. Wir wählen Saatgut und Dünger nach Ihren Bodenverhältnissen — damit der Rasen nicht nur kurz, sondern gesund ist.",
    image: GPF_IMG.rasenBoden,
    alt: "Bodenvorbereitung für eine neue Rasenfläche",
  },
  {
    title: "Hecken- & Sträucherschnitt",
    group: "Pflege",
    text: "Je nach Art, Alter und Zustand per Hand oder Motorschere, ab 2 m mit passender Leiter. Der ideale Schnittzeitpunkt entscheidet, ob ein Strauch verkahlt oder blüht.",
    image: GPF_IMG.hecke,
    alt: "Heckenschnitt mit Motorheckenschere",
  },
  {
    title: "Bepflanzung & Beetpflege",
    group: "Pflege",
    text: "Neue Beete anlegen, bestehende in Form halten, Stauden teilen, Flächen einfassen. Wir wählen Pflanzen, die an Ihrem Standort tatsächlich wachsen wollen.",
    image: GPF_IMG.beeteAnlegen,
    alt: "Neu angelegtes Beet mit frischer Bepflanzung",
  },
  {
    title: "Großflächenreinigung & Unkraut",
    group: "Pflege",
    text: "Fugen, Pflaster, Hof und Zufahrt. Wir arbeiten maschinell und ohne Chemie — die Fläche sieht danach aus wie am ersten Tag.",
    image: GPF_IMG.unkrautNachher,
    alt: "Gereinigte Pflasterfläche ohne Unkraut in den Fugen",
  },
  {
    title: "Baum- & Obstbaumpflege",
    group: "Bäume",
    text: "Kronenpflege nach ZTV: Totholz raus, Symmetrie rein. Bei Obstbäumen je nach Alter Erziehungs- oder Regenerationsschnitt. Vogelnester bleiben, wo sie sind.",
    image: GPF_IMG.kronenschnitt,
    alt: "Kronenpflege an einem großen Laubbaum",
  },
  {
    title: "Fällung & Rodung",
    group: "Bäume",
    text: "Komplettfällung oder Abtrag in Etappen — mit SKT-B-Schein, Hebebühne und Raupenhäcksler auch auf engem Gelände. Fällgenehmigung und Straßensperrung übernehmen wir.",
    image: GPF_IMG.baumAeste,
    alt: "Kletterer beim etappenweisen Abtrag eines hohen Baums",
  },
  {
    title: "Baumstumpf- & Wurzelentfernung",
    group: "Bäume",
    text: "Fräsen oder ausbaggern. Beim Fräsen füllen wir das Loch mit Fräsgut oder Erde, beim Ausbaggern kommt das komplette Wurzelwerk raus — dann sackt später nichts nach.",
    image: GPF_IMG.stumpffraese,
    alt: "Baumstumpffräse im Einsatz",
  },
  {
    title: "Terrassenbau",
    group: "Bau",
    text: "Eckig, rund, gepflastert, Platte oder Holz. Auf Wunsch mit Sichtschutz, Überdachung, Beleuchtung oder Outdoor-Küche. Unterbau und Entwässerung sind nicht verhandelbar.",
    image: GPF_IMG.terrasseComplete,
    alt: "Fertige Terrasse mit Plattenbelag",
  },
  {
    title: "Wege & Pflasterflächen",
    group: "Bau",
    text: "Vom Trittplattenweg bis zur befahrbaren Zufahrt. Sauberer Aufbau, saubere Kante, sauberes Gefälle — damit der Weg auch nach dem dritten Winter noch liegt.",
    image: GPF_IMG.wegKies,
    alt: "Fertiger Gartenweg mit Kiesbett",
  },
  {
    title: "Mauern & Palisaden",
    group: "Bau",
    text: "Naturstein, Beton, Gabione oder Palisade. Zum Abfangen von Hängen, zum Einfassen von Beeten oder einfach, weil eine gute Mauer einen Garten sortiert.",
    image: GPF_IMG.mauerTypen,
    alt: "Verschiedene Mauertypen im Garten",
  },
  {
    title: "Zaun- & Toranlagen",
    group: "Bau",
    text: "Holz, Maschendraht, Gitterstab, Alu, WPC oder Gabione — dazu Flügel- und Rolltore, auf Wunsch elektrisch. Wir bauen nach Hessischem Nachbarrechtsgesetz.",
    image: GPF_IMG.zaunFertig,
    alt: "Fertige Zaunanlage entlang eines Grundstücks",
  },
] as const;

export const GPF_COMPARE = [
  {
    id: "pflaster",
    label: "Hoffläche",
    title: "Pflasterfläche, entkrautet",
    text: "Maschinell aus jeder Fuge geholt — ohne Chemie, ohne beschädigte Steine.",
    before: GPF_IMG.unkrautVorher,
    after: GPF_IMG.unkrautNachher,
    beforeAlt: "Pflasterfläche mit Unkraut in den Fugen",
    afterAlt: "Dieselbe Pflasterfläche nach der Reinigung",
  },
  {
    id: "hang",
    label: "Hangbeet",
    title: "Vom kahlen Hang zum Beet",
    text: "Modelliert, eingefasst und bepflanzt — aus einer Restfläche wird nutzbarer Garten.",
    before: GPF_IMG.beetHangVorher,
    after: GPF_IMG.beetHangNachher,
    beforeAlt: "Kahler Hang vor der Bepflanzung",
    afterAlt: "Derselbe Hang mit fertig angelegtem Beet",
  },
  {
    id: "terrasse",
    label: "Terrasse",
    title: "Terrasse komplett neu",
    text: "Alter Belag raus, neuer Unterbau rein, saubere Kante und Gefälle zum Garten.",
    before: GPF_IMG.terrasseVorher,
    after: GPF_IMG.terrasseNachher,
    beforeAlt: "Terrasse vor dem Umbau",
    afterAlt: "Fertig umgebaute Terrasse",
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
    text: "Bei Zäunen und Mauern arbeiten wir nach Hessischem Nachbarrechtsgesetz — kein Ärger im Nachgang.",
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

export const GPF_MARQUEE = [
  "Rasenpflege",
  "Heckenschnitt",
  "Baumpflege",
  "Fällung & Rodung",
  "Terrassen",
  "Pflasterwege",
  "Mauern",
  "Zaunanlagen",
  "Beete",
  "Wetterau",
] as const;

export const GPF_GALLERY = [
  {
    src: GPF_IMG.terrasseComplete,
    label: "Terrasse",
    alt: "Fertige Terrasse mit Randeinfassung am Wohnhaus",
    portrait: false,
  },
  {
    src: GPF_IMG.zaunVerkleidet,
    label: "Sichtschutz",
    alt: "Doppelstabmattenzaun mit grüner Sichtschutzverkleidung",
    portrait: true,
  },
  {
    src: GPF_IMG.mauerTypen,
    label: "Naturstein",
    alt: "Mauer aus verschiedenen Natursteintypen",
    portrait: false,
  },
  {
    src: GPF_IMG.rasenFertig,
    label: "Rasen",
    alt: "Frisch vertikutierte und ausgebesserte Rasenfläche",
    portrait: false,
  },
  {
    src: GPF_IMG.zaunAufbau,
    label: "Zaunbau",
    alt: "Gesetzte Zaunpfosten entlang eines gepflasterten Weges",
    portrait: true,
  },
  {
    src: GPF_IMG.wegFertig,
    label: "Wege",
    alt: "Geschwungener Gartenweg mit Pflastereinfassung",
    portrait: false,
  },
  {
    src: GPF_IMG.gabionen,
    label: "Gabionen",
    alt: "Gabionenwand als Grundstücksbegrenzung",
    portrait: false,
  },
  {
    src: GPF_IMG.stumpffraese,
    label: "Wurzelfräsen",
    alt: "Baumstumpffräse beim Entfernen eines Stumpfes",
    portrait: false,
  },
  {
    src: GPF_IMG.poolTerrasse,
    label: "Poolumfeld",
    alt: "Natursteinmauer und Rasenfläche rund um einen Pool",
    portrait: false,
  },
  {
    src: GPF_IMG.palisaden,
    label: "Abfangung",
    alt: "Palisadenrund als Hangabfangung mit Splittfüllung",
    portrait: false,
  },
] as const;

export const GPF_REGION = [
  "Rodheim v. d. H.",
  "Rosbach",
  "Friedberg",
  "Bad Nauheim",
  "Assenheim",
  "Niddatal",
  "Karben",
  "Wöllstadt",
  "Ober-Mörlen",
  "Butzbach",
  "Bad Homburg",
  "Friedrichsdorf",
  "Oberursel",
  "Nidda",
  "Altenstadt",
  "Usingen",
] as const;

export const GPF_FAQ = [
  {
    q: "Übernehmen Sie auch kleine Aufträge?",
    a: "Ja. Vom einzelnen Heckenschnitt über den Vorgarten bis zur Parkanlage — eine Mindestgröße gibt es bei uns nicht.",
  },
  {
    q: "Was kostet die Anfahrt?",
    a: "Die Anfahrtspauschale beträgt 1,80 € pro Kilometer ab Rodheim. Bei größeren Aufträgen sprechen Sie uns an, dann finden wir eine Lösung.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "Pflegearbeiten meist kurzfristig. Für Rodungsarbeiten planen wir rund zwei Wochen Vorlauf ein, und alle Außenarbeiten sind witterungsabhängig.",
  },
  {
    q: "Gibt es feste Pflegepakete?",
    a: "Die Pakete stellen wir individuell zusammen — aus genau den Leistungen, die Ihr Garten braucht. Sie lassen sich jederzeit erweitern oder reduzieren.",
  },
  {
    q: "Was brauchen Sie für ein Angebot?",
    a: "Lage und Größe des Objekts, Ihre Telefonnummer oder E-Mail, die gewünschten Leistungen — und gerne ein paar Fotos zur Vorabeinschätzung.",
  },
  {
    q: "Arbeiten Sie mit Subunternehmern?",
    a: "Nein. Auf Ihrem Grundstück stehen unsere eigenen Mitarbeiter, geschult und mit eigener Technik.",
  },
] as const;
