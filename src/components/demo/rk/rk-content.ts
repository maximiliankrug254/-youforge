import { RK_IMG } from "@/components/demo/rk/rk-config";

export const RK_MARQUEE = [
  "Markisen",
  "ZIP-Screens",
  "Plissees",
  "Rollos",
  "Jalousien",
  "Wintergarten",
  "Pergola",
  "Insektenschutz",
  "Gardinen",
  "Polsterei",
  "Bodenbeläge",
] as const;

export const RK_MARKISEN_TYPES = [
  {
    slug: "gelenkarm",
    title: "Gelenkarmmarkise",
    kicker: "Terrasse & Balkon",
    text: "Der Klassiker vor der Südfassade. Arme klappen aus, Stoff spannt sich, Schatten steht in Minuten. Mit Motor, Windwächter und optionalem LED-Volant — so bleibt die Terrasse abends nutzbar.",
    image: RK_IMG.gelenkarm,
    alt: "Gelenkarmmarkise mit gespanntem Sandstoff über einer Holzterrasse",
  },
  {
    slug: "kassette",
    title: "Kassettenmarkise",
    kicker: "Geschützt im Winter",
    text: "Stoff und Arme verschwinden komplett in der Kassette. Die Fassade bleibt ruhig, der Behang bleibt sauber — auch wenn der Föhn über Irschenberg zieht.",
    image: RK_IMG.kassette,
    alt: "Geschlossene anthrazitfarbene Markisenkassette an einer weißen Hausfassade",
  },
  {
    slug: "zip",
    title: "Senkrechtmarkise & ZIP",
    kicker: "Fenster, Balkon, Loggia",
    text: "Seitlich geführt, windstabil, blickdicht, wenn Sie wollen. ZIP-Screens halten Hitze draußen, bevor sie durchs Glas will — und lassen den Blick in den Garten, wenn der Stoff oben ist.",
    image: RK_IMG.zip,
    alt: "Vertikaler ZIP-Screen halb heruntergefahren vor einer bodentiefen Fensterfront",
  },
  {
    slug: "wintergarten",
    title: "Wintergartenmarkise",
    kicker: "Auf dem Glasdach",
    text: "Ein Wintergarten ohne außenliegenden Schatten wird im Juli zum Treibhaus. Die Markise sitzt auf dem Glas, nicht dahinter. Licht bleibt, die Hitze nicht.",
    image: RK_IMG.wintergarten,
    alt: "Wintergarten mit außenliegender Dachmarkise über Glas und Rattanmöbeln",
  },
  {
    slug: "pergola",
    title: "Pergolamarkise",
    kicker: "Freistehend oder angebaut",
    text: "Ein Dach aus Stoff, das Sie einfahren können. Für den Sitzplatz im Garten, der kein Wintergarten werden soll — aber trotzdem Wetter aushalten muss.",
    image: RK_IMG.pergola,
    alt: "Pergola mit einfahrbarem Stoffdach über einer Steinterrasse",
  },
] as const;

export const RK_INNEN_SCHUTZ = [
  {
    title: "Plissee",
    text: "Der Behang, der sich an schräge Fenster, Dachflächen und kleine Nischen anpasst. Fein gefaltet, unauffällig in der Führung — oder als Wabe, die dämmt.",
    image: RK_IMG.plissee,
    alt: "Wabenplissee halb geschlossen an einem Wohnzimmerfenster",
  },
  {
    title: "Doppelrollo",
    text: "Zwei Bahnen, abwechselnd transparent und blickdicht. Geschlossen Sichtschutz, geöffnet ein Lichtspiel — ohne den Stoff ganz hochzuziehen.",
    image: RK_IMG.doppelrollo,
    alt: "Doppelrollo mit Streifen aus Licht und Schatten in einem Schlafzimmer",
  },
  {
    title: "Jalousie",
    text: "Lamellen, die Sie kippen statt nur hoch und runter. Blendfrei am Schreibtisch, dunkel im Schlafzimmer, offen zum Garten.",
    image: RK_IMG.jalousie,
    alt: "Aluminium-Jalousie mit gekippten Lamellen und Sonnenstreifen auf einem Schreibtisch",
  },
  {
    title: "Flächenvorhang",
    text: "Große Scheiben brauchen Fläche, nicht Rüschen. Paneele, die sich schieben lassen — von zarttransparent bis abdunkelnd.",
    image: RK_IMG.flaechenvorhang,
    alt: "Flächenvorhänge in Leinen und Salbei vor einer Glaswand",
  },
] as const;

export const RK_PRODUCTS = [
  {
    slug: "markisen",
    href: "/demo/raumkontrast/markisen",
    title: "Markisen",
    kicker: "Neu im Fokus",
    text: "Gelenkarm, Kassette, ZIP, Wintergarten, Pergola. Außenliegender Schatten — der einzige, der Hitze wirklich draußen hält.",
    image: RK_IMG.hero,
    alt: "Ausgefahrene Kassettenmarkise über einer Terrasse im Voralpenland",
    featured: true,
  },
  {
    slug: "sonnenschutz",
    href: "/demo/raumkontrast/sonnenschutz",
    title: "Sicht- und Sonnenschutz",
    kicker: "Innen, auf Maß",
    text: "Plissee, Rollo, Jalousie, Flächenvorhang. Wir messen jedes Fenster und setzen den Behang so, dass Licht bleibt und Blicke draußen.",
    image: RK_IMG.plissee,
    alt: "Plissee an einem Wohnzimmerfenster bei Tageslicht",
    featured: false,
  },
  {
    slug: "gardinen",
    href: "/demo/raumkontrast/produkte/gardinen",
    title: "Deko- und Gardinenstoffe",
    kicker: "Aus dem eigenen Atelier",
    text: "Aufmaß bei Ihnen, Nähen bei uns, Waschservice, wenn der Stoff es verträgt. Von Landhaus bis klar und modern.",
    image: RK_IMG.gardineInspire,
    alt: "Gardinenstoffe und Vorhänge in einem hellen Wohnraum",
    featured: false,
  },
  {
    slug: "polsterei",
    href: "/demo/raumkontrast/produkte/polsterei",
    title: "Polsterei",
    kicker: "Eigene Näherei",
    text: "Neu beziehen statt wegwerfen. Bezug, Farbe, Polsterung — Sie legen fest, wir bauen. Abholung und Anlieferung inklusive.",
    image: RK_IMG.polsterBuddy,
    alt: "Neu bezogenes Polstermöbel in der Werkstatt",
    featured: false,
  },
  {
    slug: "bodenbelaege",
    href: "/demo/raumkontrast/produkte/bodenbelaege",
    title: "Bodenbeläge",
    kicker: "Parkett bis Designbelag",
    text: "Parkett, Laminat, Kork, Designbelag, Teppich. Der Boden trägt den Raum — wir helfen bei der Wahl, die dazu passt.",
    image: RK_IMG.bodenParkett,
    alt: "Wohnraum mit Holzboden und textiler Einrichtung",
    featured: false,
  },
  {
    slug: "insektenschutz",
    href: "/demo/raumkontrast/produkte/insektenschutz",
    title: "Insektenschutz",
    kicker: "Fenster, Tür, Dachfenster",
    text: "Spannrahmen, Dreh- und Schiebetür, Rollo. Im Herbst abnehmen, im April wieder klicken. Inklusive Pollenschutz, wenn Sie das brauchen.",
    image: RK_IMG.insektenschutz,
    alt: "Insektenschutzgitter in einer geöffneten Terrassentür",
    featured: false,
  },
] as const;

export const RK_PROCESS = [
  {
    step: "01",
    title: "Anruf oder Nachricht",
    text: "Sagen Sie uns, ob es um die Terrasse, ein Dachfenster oder den ganzen Südgiebel geht. Ein Foto vom Smartphone reicht für die erste Einschätzung.",
  },
  {
    step: "02",
    title: "Termin vor Ort",
    text: "Wir kommen mit der mobilen Ausstellung. 15 Quadratmeter Muster — Stoffe, Kassettenfarben, Bedienungen. Bei Ihnen, nicht im Laden.",
  },
  {
    step: "03",
    title: "Aufmaß & Festpreis",
    text: "Maß nehmen, Untergrund prüfen, Angebot schreiben. Sie bekommen eine Zahl, bevor etwas bestellt wird — nicht danach.",
  },
  {
    step: "04",
    title: "Anfertigung & Montage",
    text: "Auf Maß gefertigt, von uns gesetzt. Motor angelernt, Endlagen geprüft, Baustelle sauber. Dann sitzen Sie im Schatten.",
  },
] as const;

export const RK_GALLERY = [
  {
    src: RK_IMG.hero,
    alt: "Gelenkarmmarkise über einer Terrasse mit Blick ins Voralpenland",
    caption: "Gelenkarm · Terrasse",
  },
  {
    src: RK_IMG.zip,
    alt: "ZIP-Screen an einer modernen Fensterfront",
    caption: "ZIP-Screen",
  },
  {
    src: RK_IMG.pergola,
    alt: "Pergola mit Stoffdach im Garten",
    caption: "Pergola",
  },
  {
    src: RK_IMG.plissee,
    alt: "Plissee im Wohnzimmer",
    caption: "Plissee",
  },
  {
    src: RK_IMG.abend,
    alt: "Markise mit LED-Licht in der Dämmerung",
    caption: "LED am Volant",
  },
  {
    src: RK_IMG.wintergarten,
    alt: "Wintergarten mit Dachmarkise",
    caption: "Wintergarten",
  },
] as const;

export const RK_FAQ = [
  {
    q: "Warum stehen Markisen hier so weit vorne?",
    a: "Weil sie im Sommer den größten Unterschied machen: Hitze bleibt außen, die Terrasse wird nutzbar. Sicht- und Sonnenschutz innen gehört dazu — die Markise hält die Wärme draußen, bevor sie durchs Glas will.",
  },
  {
    q: "Was kostet eine Markise?",
    a: "Das hängt von Breite, Ausfall, Motor, Stoff und davon ab, ob eine Kassette den Behang schützt. Eine seriöse Zahl gibt es nach dem Aufmaß — nicht aus einem Online-Rechner. Das Aufmaß selbst kostet Sie nichts.",
  },
  {
    q: "Kommen Sie mit Mustern vorbei?",
    a: "Ja. Die mobile Ausstellung hat auf 15 Quadratmetern Boden, Stoffe, Sicht- und Sonnenschutz dabei. Der Termin ist kostenlos — nach Vereinbarung.",
  },
  {
    q: "Elektrisch oder mit Kurbel?",
    a: "Beides ist möglich. Die meisten bestellen den Motor mit Handsender, oft mit Windwächter. Die Kurbel bleibt als Notbedienung sinnvoll, wenn der Strom weg ist.",
  },
  {
    q: "Wie weit fahren Sie?",
    a: "Unser Sitz ist Grub in Irschenberg. Mangfalltal, Tegernsee, Schliersee, Miesbach, Holzkirchen, Bad Aibling, Rosenheim — das ist unser Alltag. Weiter weg nach Absprache.",
  },
  {
    q: "Brauche ich eine Genehmigung?",
    a: "Am Einfamilienhaus ist eine übliche Gelenkarmmarkise in den meisten Fällen unproblematisch. Bei Denkmalschutz, Reihenhausordnung oder großen Anlagen klären wir das, bevor bestellt wird.",
  },
] as const;

export const RK_TOWNS = [
  "Irschenberg",
  "Miesbach",
  "Tegernsee",
  "Schliersee",
  "Holzkirchen",
  "Bad Aibling",
  "Rosenheim",
  "Mangfalltal",
  "Weyarn",
  "Valley",
  "Feldkirchen-Westerham",
  "Bad Wiessee",
] as const;

export type RkProductGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type RkProductPage = {
  title: string;
  kicker: string;
  lead: string;
  image: string;
  alt: string;
  paragraphs: string[];
  points: string[];
  gallery: RkProductGalleryItem[];
  sections: { title: string; text: string }[];
};

export const RK_PRODUCT_PAGES: Record<string, RkProductPage> = {
  gardinen: {
    title: "Deko- und Gardinenstoffe",
    kicker: "Nähatelier",
    lead: "Der Stoff muss zum Fenster, zum Boden und zu Ihnen passen — nicht zum Katalogfoto.",
    image: RK_IMG.gardineInspire,
    alt: "Gardinenstoffe in einem hellen Wohnraum",
    paragraphs: [
      "Deko- und Gardinenstoffe bringen Atmosphäre und steuern, wie viel Licht in den Raum kommt. Ob klassisch, ländlich oder klar und modern: Wir führen die Qualitäten, aus denen sich das nähen lässt.",
      "Gemeinsam finden wir den passenden Stoff — und liefern den handwerklichen Service dazu: Aufmaß und Beratung vor Ort, Anfertigung im eigenen Nähatelier, Waschservice für geeignete Qualitäten.",
      "Von zarten Blütenmustern über griffige Strukturen bis zu Leichtigkeit im Landhausstil: Wenn die alten Vorhänge nur noch Staub fangen, sagen wir das auch.",
    ],
    points: [
      "Aufmaß und Beratung zu Hause",
      "Anfertigung nach Maß im eigenen Atelier",
      "Waschservice für geeignete Qualitäten",
      "Kombinierbar mit Plissee, Rollo und Flächenvorhang",
      "Nachhaltige und Ökotex-zertifizierte Qualitäten",
    ],
    gallery: [
      { src: RK_IMG.gardineHanni, alt: "Gardinenstoff Hanni", caption: "Struktur · Wohnraum" },
      { src: RK_IMG.gardineTimber, alt: "Gardinenstoff Timber", caption: "Naturton · Holz" },
      { src: RK_IMG.gardineCountry, alt: "Landhaus-Gardine", caption: "Country · Zweige" },
      { src: RK_IMG.gardineSoraya, alt: "Gardine Soraya", caption: "Elegance" },
      { src: RK_IMG.gardineMika, alt: "Gardine Mika", caption: "Vision" },
      { src: RK_IMG.gardineInspire, alt: "Inspiration Gardinen", caption: "Inspiration" },
    ],
    sections: [
      {
        title: "Vom Muster zum Vorhang",
        text: "Wir legen Stoffe ans Fenster, prüfen Fall und Transparenz bei Tageslicht und nähen in unserem Atelier — nicht in Fernost.",
      },
      {
        title: "Pflege, die mitgedacht ist",
        text: "Flecken kommen vor. Für viele Qualitäten gibt es klare Pflegehinweise — und wenn Waschen Sinn ergibt, übernehmen wir den Service.",
      },
    ],
  },
  polsterei: {
    title: "Polsterei",
    kicker: "Eigene Werkstatt",
    lead: "Das Gestell ist oft besser als der Bezug. Dann beziehen wir neu, anstatt ein neues Sofa zu kaufen.",
    image: RK_IMG.polsterBuddy,
    alt: "Neu bezogenes Polstermöbel",
    paragraphs: [
      "Bezugsmaterial, Farbe, Art der Polsterung: Sie legen fest, wir bauen. Sonderanfertigungen gehören dazu — Einzelstücke in handwerklicher Qualität, nicht „wenn noch Kapazität ist“.",
      "Mit Fingerspitzengefühl beziehen wir Sitzmöbel neu. Fertigung ausschließlich in unserer eigenen Polsterei und Näherei. Abholung und Anlieferung inklusive.",
      "Viele Bezüge sind pflegeleicht: Wasser und etwas Seife reichen oft nach kleinen Unfällen mit Kaffee oder Rotwein. Ökotex-zertifizierte Stoffe für jeden Wohnraum.",
    ],
    points: [
      "Beratung und Aufmaß zu Hause",
      "Aufpolstern und Neubeziehen",
      "Abholung und Anlieferung",
      "Sonderanfertigung in der eigenen Näherei",
      "Reinigung und Pflege",
    ],
    gallery: [
      { src: RK_IMG.polsterBuddy, alt: "Polsterstoff Buddy", caption: "Buddy" },
      { src: RK_IMG.polsterLovely, alt: "Polsterstoff Lovely", caption: "Lovely" },
      { src: RK_IMG.polsterTreviso, alt: "Polster Country Treviso", caption: "Country" },
      { src: RK_IMG.polsterScandi, alt: "Polster Hightech Scandi", caption: "Scandi" },
      { src: RK_IMG.polsterSamurai, alt: "Polster Samurai", caption: "Samurai" },
      { src: RK_IMG.polster, alt: "Polsterarbeit", caption: "Werkstatt" },
    ],
    sections: [
      {
        title: "Maßanfertigung",
        text: "Traum-Polstermöbel als Einzelstück: Gestell, Härte, Bezug — alles nach Ihren Vorgaben, in Spitzenqualität aus der Werkstatt.",
      },
      {
        title: "Alte Stücke retten",
        text: "Oft lohnt das Gestell. Wir polstern auf, erneuern Federn und Bezug — und liefern das Möbel wieder vor die Tür.",
      },
    ],
  },
  bodenbelaege: {
    title: "Bodenbeläge",
    kicker: "Der Grund unter allem",
    lead: "Parkett, Laminat, Kork, Designbelag, Teppich — der Boden entscheidet, wie der Rest des Raums klingt.",
    image: RK_IMG.bodenParkett,
    alt: "Parkettboden in einem Wohnraum",
    paragraphs: [
      "Fußböden prägen die Atmosphäre und müssen zur Nutzung passen. Entscheidend ist Ihr Geschmack — und wie der Raum gelebt wird.",
      "Parkett ist belastbar, fußwarm, schalldämmend und für Allergiker geeignet. Laminat überzeugt als strapazierfähige Alternative. Kork bringt Ruhe und Wärme. Designbeläge sind dünn, robust und ohne Weichmacher (Phthalate).",
      "Abgepasste Teppiche, Läufer und Stufenmatten schneiden wir auf Ihre Flächen. Boden und Markise gehören zusammen: Wer unten Eiche legt, will oben keinen grellen Plastikstoff.",
    ],
    points: [
      "Parkett — Natur, Maserung, Langlebigkeit",
      "Laminat — funktional und vielseitig",
      "Kork — leise, warm, pflegeleicht",
      "Designbelag — Holz- oder Steinoptik ohne Weichmacher",
      "Teppiche, Läufer, Stufenmatten auf Maß",
    ],
    gallery: [
      { src: RK_IMG.bodenEicheVintage, alt: "Eiche Vintage Parkett", caption: "Eiche Vintage" },
      { src: RK_IMG.bodenEicheWega, alt: "Eiche Wega", caption: "Eiche Wega" },
      { src: RK_IMG.bodenDiamant, alt: "Diamanteiche", caption: "Diamanteiche" },
      { src: RK_IMG.bodenLaminat, alt: "Laminatboden", caption: "Laminat" },
      { src: RK_IMG.bodenKork, alt: "Korkboden", caption: "Kork" },
      { src: RK_IMG.bodenDesign, alt: "Designbelag", caption: "Designbelag" },
      { src: RK_IMG.bodenTeppich1, alt: "Abgepasster Teppich", caption: "Teppich" },
      { src: RK_IMG.bodenTeppich2, alt: "Teppich Detail", caption: "Textil" },
    ],
    sections: [
      {
        title: "Parkett als Unikat",
        text: "Jeder Holzboden zeigt eigene Maserung und Farbe. Richtig verlegt dämmt er Trittschall und bleibt bei guter Pflege jahrzehntelang nutzbar.",
      },
      {
        title: "Textile Akzente",
        text: "Abgepasste Teppiche setzen bewusste Akzente auf harten Flächen — Läufer, Vorleger und Stufenmatten passgenau für Ihre Wohn(t)räume.",
      },
    ],
  },
  insektenschutz: {
    title: "Insektenschutz",
    kicker: "Fenster, Tür, Dach",
    lead: "Nachts das Fenster auf, ohne dass die Stube summt. Morgens zu, ohne dass der Rahmen stört.",
    image: RK_IMG.insektenschutz,
    alt: "Insektenschutz an einer Terrassentür",
    paragraphs: [
      "Umfassendes Insekten- und Pollenschutzprogramm für Fenster und Türen — im Wohnhaus und in gewerblichen Gebäuden. Je nach Bedarf zum Klappen, Schwenken oder Schieben; vor dem Winter schnell abnehmbar.",
      "Rollolösungen für Fenster, Türen und Dachfenster. Formschöne runde Kassette, einfacher Auszug, moderne Klick-Klack-Bedienung.",
      "Pollenschutz, wenn Heuschnupfen das eigentliche Thema ist — nicht nur die Mücke.",
    ],
    points: [
      "Fenster, Türen, Dachfenster",
      "Klappen, schwenken, schieben oder rollen",
      "Saisonale Demontage möglich",
      "Runde Kassette bei Rollo-Systemen",
      "Optional mit Pollenschutzgewebe",
    ],
    gallery: [
      { src: RK_IMG.insektenschutz, alt: "Insektenschutz Terrassentür", caption: "Terrassentür" },
      { src: RK_IMG.insektOrig, alt: "Insektenschutz Detail", caption: "Rahmen" },
      { src: RK_IMG.plissee, alt: "Fensterlösung", caption: "Fenster" },
    ],
    sections: [
      {
        title: "Alltagstauglich",
        text: "Systeme, die Sie im Herbst abnehmen und im Frühjahr wieder einsetzen — ohne Werkzeugchaos und ohne den Rahmen zu verbiegen.",
      },
      {
        title: "Partnerqualität",
        text: "Wir setzen auf etablierte Hersteller wie Neher — damit der Schutz sitzt und lange hält.",
      },
    ],
  },
};

export const RK_TRENDS = [
  {
    slug: "cord",
    kicker: "Comeback",
    title: "Cord ist zurück.",
    lead: "Fein oder breit gerippt, samtig, robust — der Manchester-Stoff der 70er läuft wieder über Sofas und Vorhänge.",
    text: "Cord stammt aus dem englischen Manchester: Längsrillen, monochrome Farbe, leicht changierender Effekt. Robust, schmutzunempfindlich — und trotzdem weich. Wir zeigen aktuelle Qualitäten in der mobilen Ausstellung.",
    image: RK_IMG.trendCord2,
    detail: RK_IMG.trendCord1,
    detail2: RK_IMG.trendCord3,
  },
  {
    slug: "energie",
    kicker: "Nutzen",
    title: "Textil, das heizt mit.",
    lead: "Dichte Vorhänge dämmen. Weniger Wärmeverlust am Fenster — spürbar an der Heizung.",
    text: "Heimtextilien machen Räume kuschelig und senken Energieverlust: dicht gewebte Vorhänge wirken wie eine Luftschicht. Mit innenliegendem Sonnenschutz und Teppich steigt die Sparwirkung weiter.",
    image: RK_IMG.trendEnergie,
    detail: RK_IMG.trendDouble,
    detail2: RK_IMG.trendFresh,
  },
  {
    slug: "leinen",
    kicker: "Sommer",
    title: "Leinen atmet mit.",
    lead: "Zufällige Struktur, edler Knitter, natürliche Leichtigkeit — stoffgewordener Sommer.",
    text: "Aus der Flachspflanze, geröstet und verwoben. Leinen reguliert und beruhigt den Raum. Form, Farbe und Materialität statt Plastikglanz.",
    image: RK_IMG.trendSumba,
    detail: RK_IMG.trendOat,
    detail2: RK_IMG.trendMineral,
  },
  {
    slug: "kollektion",
    kicker: "Neu",
    title: "Kollektion jetzt.",
    lead: "Frische Designs, klare Farben — was gerade bei den Herstellern ankommt, liegt bei uns im Anhänger.",
    text: "Wir zeigen aktuelle Kollektionen namhafter Partner — Muster zum Anfassen, nicht nur auf dem Screen. Termine nach Vereinbarung.",
    image: RK_IMG.trendVogue,
    detail: RK_IMG.trendFresh,
    detail2: RK_IMG.trendDouble,
  },
] as const;

export const RK_REFERENCES = [
  {
    title: "Gelenkarm · Südterrasse",
    place: "Irschenberg",
    year: "2024",
    text: "Kassettenmarkise mit Motor und Windwächter. Stoff an die Fassade gelegt, Aufmaß vor Ort, Montage in einem Tag.",
    image: RK_IMG.gelenkarm,
    tags: ["Markise", "Motor"],
  },
  {
    title: "ZIP-Screens · Glasfront",
    place: "Tegernsee",
    year: "2024",
    text: "Senkrechte ZIP-Führung an bodentiefen Fenstern — Hitze draußen, Blick in den Garten, wenn der Behang oben ist.",
    image: RK_IMG.zip,
    tags: ["ZIP", "Sonnenschutz"],
  },
  {
    title: "Wintergarten · Dachmarkise",
    place: "Holzkirchen",
    year: "2023",
    text: "Außenliegender Schatten auf dem Glasdach. Der Wintergarten bleibt im Juli nutzbar — ohne Treibhauseffekt.",
    image: RK_IMG.wintergarten,
    tags: ["Wintergarten"],
  },
  {
    title: "Parkett & Gardine",
    place: "Miesbach",
    year: "2023",
    text: "Eiche am Boden, Stoff am Fenster — ein Ansprechpartner für Belag, Vorhang und Plissee.",
    image: RK_IMG.bodenEicheWega,
    tags: ["Boden", "Gardine"],
  },
  {
    title: "Polster · Neubezug",
    place: "Schliersee",
    year: "2025",
    text: "Familiensofa neu bezogen statt ersetzt. Abholung, Werkstatt, Anlieferung — Gestell blieb, Bezug ist neu.",
    image: RK_IMG.polsterBuddy,
    tags: ["Polsterei"],
  },
  {
    title: "Plissee · Dachfenster",
    place: "Bad Aibling",
    year: "2024",
    text: "Schräge Dachflächen mit Wabenplissee — Licht dosiert, Hitze gemindert, Maßarbeit.",
    image: RK_IMG.sonneDuette,
    tags: ["Plissee"],
  },
] as const;
