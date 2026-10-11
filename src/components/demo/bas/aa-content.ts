import { AA, AA_IMG } from "@/components/demo/bas/aa-config";

const HOME = AA.home;

export const AA_NAV = [
  [`${HOME}#leistungen`, "Leistungen"],
  [`${HOME}#unternehmen`, "Unternehmen"],
  [`${HOME}#ort`, "Eschborn"],
  [`${HOME}#aktuelles`, "Aktuelles"],
  [`${HOME}#besuch`, "Kontakt"],
] as const;

export const AA_STEPS = [
  {
    n: "01",
    title: "Spezialtransporte",
    fact: "Eigene Flotte",
    text: "Ob es um die Auslieferung exklusiver Neuwagen oder den diskreten Transport eines Prototyps zur nächsten Teststrecke geht, BAS unterstützt Sie mit individuell abgestimmten Lösungen.",
    img: AA_IMG.spezialCabrio,
  },
  {
    n: "02",
    title: "Messen & Events",
    fact: "Messeauftritte, Promotions, Roadshows",
    text: "Internationale Automobilmessen und Händlerevents bieten die Chance, exklusive Fahrzeuge einem ausgewählten Publikum zu präsentieren.",
    img: AA_IMG.messeShowroom,
  },
  {
    n: "03",
    title: "Motorsport",
    fact: "Königsklasse des Rennsports",
    text: "BAS realisiert seit vielen Jahren für verschiedene Teams den Transport wertvoller Formel-1-Fahrzeuge und anderer Rennwagen.",
    img: AA_IMG.motorsport138,
  },
  {
    n: "04",
    title: "Aufbereitung",
    fact: "Werterhaltung und Pflege",
    text: "Zum Leistungsumfang gehören eine Grundreinigung sowie eine anschließende Feinreinigung und Pflege durch geschulte Mitarbeiter.",
    img: AA_IMG.lack,
  },
] as const;

export const AA_FACTS = [
  { n: "1989", label: "Gegründet" },
  { n: "100 km", label: "Hol- und Liefer-Service" },
  { n: "28", label: "Händler in acht Ländern" },
  { n: "55", label: "Kunden auf der Referenzliste" },
] as const;

export const AA_CLIENTS = [
  "Aston Martin Lagonda Ltd.",
  "Aston Martin Lagonda of Europe GmbH",
  "Aston Martin Racing",
  "Audi Quattro GmbH",
  "AvD Frankfurt",
  "Benarrow GmbH",
  "Bentley Motor Cars Ltd.",
  "BMW AG",
  "BMW M GmbH",
  "Bridgestone Technical Center Europe S.p.A.",
  "Central-Garage Automuseum",
  "Citroën Commerce GmbH",
  "Continental AG",
  "Daimler AG",
  "DP Test, Training & Event GmbH",
  "drift & drive GmbH",
  "European Speed Club",
  "Ferrari Central / East Europe GmbH",
  "Emil Frey AG",
  "Hessischer Rundfunk",
  "Hyundai Motor Europe GmbH",
  "ISUZU Deutschland GmbH",
  "Jaguar Cars Ltd.",
  "Jaguar Land Rover Deutschland GmbH",
  "KIA Motors Deutschland GmbH",
  "KJ Tech Services GmbH",
  "Klassik Garage Kronberg GmbH & Co. KG",
  "Klassikstadt Frankfurt",
  "MAN Deutschland GmbH",
  "Maserati Deutschland GmbH",
  "Mazda Motor Deutschland GmbH",
  "Mazda Motor Europe GmbH",
  "McLaren Cars",
  "Meilenwerke",
  "Mitsubishi Motor Deutschland GmbH",
  "Mitsubishi Motor Europe GmbH",
  "Mosler Automotive",
  "movisti GmbH",
  "Nürburgring GmbH",
  "Oldtimer Markt, Zeitschrift",
  "Phönix Racing",
  "Porsche Deutschland GmbH",
  "Pyritz Classics GmbH",
  "René Staud Photography",
  "Schlegelmilch Photography",
  "Sport Auto, Fachzeitschrift",
  "Subaru Deutschland GmbH",
  "Techart Automobildesign GmbH",
  "E. Thiesen KG",
  "TLT Silver Tiger Logistics (Netherlands) B.V.",
  "TLT Silver Tiger Logistics GmbH",
  "TLT Silver Tiger Logistics America's",
  "Volkswagen AG",
  "X-raid GmbH",
  "ZF Sachs AG",
] as const;

export const AA_FILM_CHAPTERS = [
  { at: 0, title: "Verladen", note: "Lift und absenkbare Ladefläche", src: AA_IMG.verladungRampe },
  { at: 1, title: "Unterwegs", note: "Bis ans vereinbarte Ziel", src: AA_IMG.moskau },
  { at: 2, title: "Präsentieren", note: "Ausleuchtung und Showfinish", src: AA_IMG.db10Showroom },
] as const;

export const AA_COLLAGE = [
  {
    src: AA_IMG.kran,
    label: "ÜBER FRANKFURT",
    rot: -6,
    shift: -70,
    pos: "left-[6%] top-[8%] w-[38%] sm:w-[32%]",
  },
  {
    src: AA_IMG.glastruck,
    label: "IM GLAS-TRUCK",
    rot: 3,
    shift: 40,
    pos: "left-[42%] top-[18%] w-[40%] sm:w-[34%]",
  },
  {
    src: AA_IMG.teppich,
    label: "AUF DEM ROTEN TEPPICH",
    rot: 7,
    shift: -28,
    pos: "left-[18%] top-[54%] w-[36%] sm:w-[30%]",
  },
  {
    src: AA_IMG.showtruckLounge,
    label: "IM SHOW-TRUCK",
    rot: -3,
    shift: 64,
    pos: "right-[8%] top-[52%] w-[34%] sm:w-[28%]",
  },
] as const;

export const AA_TIMELINE = [
  ["GRÜNDUNG DURCH MICHAEL A. BRAUN", "1989"],
  ["ASTON MARTIN „POWER BEAUTY & SOUL“-TOUR", "2012"],
  ["ASTON MARTIN DB10-TOUR", "2015"],
  ["ASTON MARTIN DB 11 EUROPA TOUR", "2016"],
  ["KÄSSBOHRER FÜR BIS ZU 9 FAHRZEUGE", "2019"],
] as const;

type AaNewsItem = {
  when: string;
  title: string;
  paragraphs: readonly string[];
  images: readonly { src: string; alt: string }[];
};

export const AA_NEWS: readonly AaNewsItem[] = [
  {
    when: "Januar 2019",
    title: "Wir expandieren weiter",
    paragraphs: [
      "Seit letztem Jahr haben wir 2 weitere geschlossene Kässbohrer-Fahrzeugtransporter für bis zu 6 Fahrzeuge.",
      "Des Weiteren ist seit Januar ein Kässbohrer-Fahrzeugtransporter für bis zu 9 Fahrzeuge neu in unserem Fuhrpark.",
    ],
    images: [],
  },
  {
    when: "November 2016",
    title: "Wir expandieren",
    paragraphs: [
      "Wir erweitern unseren Fuhrpark um einen weiteren geschlossenen Kässbohrer-Fahrzeugtransporter für bis zu 6 Fahrzeuge sowie einen weiteren geschlossenen Moetefindt-Fahrzeugtransporter für bis zu 4 Fahrzeuge.",
    ],
    images: [],
  },
  {
    when: "November 2015",
    title: "James Bond / Aston Martin DB10-Tour",
    paragraphs: [
      "James Bond feiert ein halbes Jahrhundert mit Aston Martin. Alles begann mit dem legendären Aston Martin DB5, und nun gibt der Aston Martin DB10 einen Einblick in die gestalterische Richtung für die künftigen Generationen bei Aston Martin.",
      "Exklusiv zum Kinostart des neuen James-Bond-Films „Spectre“ geht Braun Automobil Service GmbH auf große Aston Martin DB10-Tour. Hierzu wurde eines dieser seltenen Modelle in einen speziellen Glas-Truck verladen und ca. 15.000 km quer durch Europa zu den verschiedenen Veranstaltungen und Showrooms transportiert.",
    ],
    images: [
      { src: AA_IMG.db10Showroom, alt: "Aston Martin DB10 im Showroom" },
      { src: AA_IMG.db10Teppich, alt: "Aston Martin DB10 auf dem roten Teppich" },
    ],
  },
  {
    when: "Oktober 2012",
    title: "Aston Martin „Power Beauty & Soul“-Tour",
    paragraphs: [
      "Drei aufregende neue Highlights der Aston-Martin-Modellpalette begaben sich mit uns ab Mittwoch, den 22.08.2012, auf eine 15.000 km lange Rundreise durch Europa. In einer bislang einzigartigen Konstellation präsentierte der britische Hersteller luxuriöser Sportwagen den Aston Martin Vanquish, den V12 Zagato sowie den V12 Vantage Roadster erstmals an ausgesuchten Standorten in Europa.",
      "Als exklusiver Transport-Partner von Aston Martin wurde unser Spezialtransporter speziell für diese Tour gebrandet. Im Rahmen der „Power Beauty & Soul“-Tour machten unser Spezialtransporter und das außergewöhnliche Sportwagen-Trio Station bei 28 Aston-Martin-Händlern in acht Ländern, wo sie in den Showrooms der Händler oder an anderen ausgesuchten Plätzen ausgestellt und die Stars exklusiver Kundenveranstaltungen waren.",
    ],
    images: [{ src: AA_IMG.pbsTruck, alt: "BAS-Truck auf der Power-Beauty-&-Soul-Tour" }],
  },
];

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
    id: "spezialtransporte",
    label: "Spezialtransporte",
    from: "01",
    unit: "Leistung",
    wait: "Maßgeschneiderte Transportlösungen",
    pills: ["Neuwagen", "Prototypen", "Concept-Cars", "Oldtimer"],
    lead: "Eigene Flotte mit offenen und geschlossenen Fahrzeugen, maßgefertigten Ladevorrichtungen und Sonderaufbauten.",
    body: "Auslieferung exklusiver Neuwagen, Transport von Prototypen und Baugruppen, Plastilinmodelle gekühlt oder beheizt, tiefergelegte und überformatige Automobile wie Rennwagen und Concept-Cars, wertvolle Oldtimer. Auf Wunsch auch außerhalb Europas.",
    image: AA_IMG.spezialCabrio,
    stills: [
      AA_IMG.spezialCabrio,
      AA_IMG.spezialOldtimer,
      AA_IMG.verladungRampe,
      AA_IMG.verladungLaderaum,
      AA_IMG.spezialSattelzug,
      AA_IMG.spezialStrasse,
    ],
  },
  {
    id: "fuhrpark",
    label: "Fuhrpark",
    from: "02",
    unit: "Flotte",
    wait: "Sonderausstattung für Ausnahmefahrzeuge",
    pills: ["Offen", "Geschlossen", "Lift", "Temperaturführung"],
    lead: "Absenkbare Ladeflächen und ein maßgefertigter Lift für tiefergelegte Fahrzeuge wie Rennwagen oder Concept-Cars.",
    body: "Spezielle Lade- und Sicherungsvorrichtungen, Aufbauten mit Sondermaßen und integrierte Temperaturführung. Ob Einzel-, Zweier-, Dreier- oder Sammeltransport: Wir finden für Sie die passende Lösung.",
    image: AA_IMG.flotte,
    stills: [
      AA_IMG.flotte,
      AA_IMG.fuhrparkRennwagen,
      AA_IMG.fuhrparkJaguar,
      AA_IMG.autotransporter,
      AA_IMG.zugmaschinen,
    ],
  },
  {
    id: "weltweit",
    label: "Weltweiter Service",
    from: "03",
    unit: "Leistung",
    wait: "Luft- und Seefracht",
    pills: ["Übersee", "Formalitäten", "Koordination"],
    lead: "Individuell abgestimmte Transportlösungen zu allen erdenklichen Zielen weltweit.",
    body: "Für Überseetransporte stützen wir uns auf ein weltumspannendes Netz kompetenter und zuverlässiger Kooperationspartner aus Luft- und Seefracht. BAS kümmert sich um alle Formalitäten und koordiniert den Transport bis ans vereinbarte Ziel.",
    image: AA_IMG.moskau,
    stills: [AA_IMG.moskau, AA_IMG.weltweit, AA_IMG.kran, AA_IMG.suvKran],
  },
  {
    id: "messen",
    label: "Messen & Events",
    from: "04",
    unit: "Leistung",
    wait: "Messen, Promotions, Roadshows",
    pills: ["Standbetreuung", "Showfinish", "Fotoshootings"],
    lead: "Professionelle Ausleuchtung und ein Showfinish garantieren, dass die ausgestellten Automobile zum eindrucksvollen Mittelpunkt jeder Präsentation werden.",
    body: "Wir transportieren Ihre Fahrzeuge und positionieren sie am Messestand oder auf sonstigen Aktionsflächen. Unsere Mitarbeiter treten in gepflegter, repräsentativer Teamkleidung auf und sind über die komplette Dauer der Veranstaltung rund um die Uhr erreichbar. Auf Wunsch auch Reinigung, Dekorations- und Displaymaterial, Sicherheitsdienst, Gastronomie und Musik.",
    image: AA_IMG.messeShowroom,
    stills: [
      AA_IMG.messeShowroom,
      AA_IMG.teppich,
      AA_IMG.messeReinigung,
      AA_IMG.messeShooting,
      AA_IMG.glastruck,
    ],
  },
  {
    id: "showtruck",
    label: "Show-Truck",
    from: "05",
    unit: "Leistung",
    wait: "Auch als Werbefläche",
    pills: ["16,50 m", "ca. 200 qm", "ca. 55 Personen"],
    lead: "16,50\u00a0Meter lang, mit Zelt ca.\u00a0200\u00a0qm Gesamtfläche. Kapazität: ca.\u00a055\u00a0Personen.",
    body: "Breite im Fahrzustand 2,55\u00a0m, aufgebaut ohne Zelt 5,05\u00a0m, Höhe 4,0\u00a0m. Auch als Werbefläche in Ihrem Design.",
    image: AA_IMG.showtruckZelt,
    stills: [
      AA_IMG.showtruckZelt,
      AA_IMG.showtruckLounge,
      AA_IMG.showtruckBistro,
      AA_IMG.showtruckJaguar,
      AA_IMG.showtruckIaa,
    ],
  },
  {
    id: "motorsport",
    label: "Motorsport",
    from: "06",
    unit: "Leistung",
    wait: "Faszination Rennsport",
    pills: ["Formel 1", "Rennwagen", "Verladung"],
    lead: "In keinem anderen Bereich sind die Verlade- und Transportanforderungen so hoch wie in der Formel 1.",
    body: "Speziell entwickelte Ladelifte, absenkbare Ladeflächen und optimierte Sicherungsvorrichtungen. Mit erfahrenen Fahrern und Verladespezialisten sind wir ein anerkannter Dienstleistungspartner im internationalen Rennzirkus.",
    image: AA_IMG.motorsport138,
    stills: [
      AA_IMG.motorsport138,
      AA_IMG.motorsport006,
      AA_IMG.gtRennwagen,
      AA_IMG.motorsportPrototyp,
      AA_IMG.motorsportPrototyp2,
    ],
  },
  {
    id: "aufbereitung",
    label: "Aufbereitung",
    from: "07",
    unit: "Leistung",
    wait: "Glänzend in Form",
    pills: ["Lackschäden", "Politur", "Teflonversiegelung"],
    lead: "Kleinere Kratzer und Schäden im Lack beheben wir behutsam und fachmännisch.",
    body: "Grundreinigung, Feinreinigung und Pflege durch geschulte Mitarbeiter, auf Wunsch mit Politur oder Teflonversiegelung. Eigene Räume in Eschborn bei Frankfurt, Hol- und Liefer-Service im Umkreis von 100 Kilometern.",
    image: AA_IMG.lack,
    stills: [AA_IMG.lack, AA_IMG.politur, AA_IMG.oldtimer],
  },
];

export const AA_FAQ = [
  {
    q: "Transportieren Sie auch außerhalb Europas?",
    a: "Ja. Für Überseetransporte arbeiten wir mit Kooperationspartnern aus Luft- und Seefracht zusammen. BAS kümmert sich um alle Formalitäten und koordiniert den Transport bis ans vereinbarte Ziel.",
  },
  {
    q: "Welche Fahrzeuge transportieren Sie?",
    a: "Exklusive Neuwagen, Prototypen und Baugruppen, Plastilinmodelle gekühlt oder beheizt, tiefergelegte und überformatige Automobile wie Rennwagen und Concept-Cars sowie wertvolle Oldtimer.",
  },
  {
    q: "Wie viele Fahrzeuge passen auf einen Transport?",
    a: "Ob Einzel-, Zweier-, Dreier- oder Sammeltransport: Wir finden die passende Lösung. Zur Flotte gehören geschlossene Kässbohrer-Transporter für bis zu 6 und für bis zu 9 Fahrzeuge.",
  },
  {
    q: "Holen Sie mein Fahrzeug zur Aufbereitung ab?",
    a: "Ja, im Umkreis von 100 Kilometern. Nach Terminabsprache können Sie uns das Fahrzeug auch nach Eschborn bringen.",
  },
  {
    q: "Betreuen Sie auch unseren Messestand?",
    a: "Ja. BAS setzt geschultes und freundliches Fachpersonal in repräsentativer Teamkleidung ein. Die Mitarbeiter sind über die komplette Dauer der Veranstaltung rund um die Uhr erreichbar.",
  },
  {
    q: "Suchen Sie Fahrer?",
    a: "Ja. Wir suchen Kraftfahrer und Kraftfahrerinnen mit Führerscheinklasse CE und Fahrerkarte, Englischkenntnisse sind von Vorteil. Bewerbungen bitte schriftlich an mail@bas-international.de oder an die Schwalbacher Straße 56, 65760 Eschborn.",
  },
] as const;

export const AA_MARQUEE = [
  "Aston Martin",
  "Bentley",
  "BMW",
  "Porsche",
  "McLaren",
  "Jaguar",
  "Maserati",
  "Ferrari",
  "Nürburgring",
] as const;
