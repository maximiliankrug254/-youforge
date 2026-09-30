/**
 * Befunde, die bei den Testfällen immer so herauskommen müssen – auch nach „--aktualisieren“.
 * Jeder Eintrag hält einen früheren Fehler oder einen bestätigten echten Befund fest.
 * pfad: Seitenpfad oder "website"; id: Prüfungs-ID oder "typ" (Einordnung der Seite).
 * erwartet: Status bzw. Einordnung; text (optional): Muster, das im Befundtext vorkommen muss.
 */
export const KERNBEFUNDE = [
  // room2build.com (WordPress, lokal)
  { fall: "room2build", pfad: "website", id: "schema-website", erwartet: "ok", warum: "Verknüpfter Firmeneintrag (@id, provider) muss erkannt werden (1.1)." },
  { fall: "room2build", pfad: "/", id: "sitemap-benutzer", erwartet: "warnung", warum: "Öffentliche Benutzer-Sitemap ist ein echter Befund (1.1)." },
  { fall: "room2build", pfad: "/", id: "sitemap", erwartet: "ok", warum: "Sitemap-Index muss komplett gelesen werden (1.1)." },

  // you-forge.de (Next.js, überregional)
  { fall: "you-forge", pfad: "/impressum", id: "typ", erwartet: "rechtstext", warum: "Rechtstexte zählen nicht zur Gesamtnote (1.1)." },
  { fall: "you-forge", pfad: "/demo/syn", id: "typ", erwartet: "versteckt", warum: "Bewusst verborgene Demos zählen nicht (1.1)." },
  { fall: "you-forge", pfad: "/", id: "schema", erwartet: "fehler", warum: "Kein Organization-Eintrag ist ein echter Befund." },
  { fall: "you-forge", pfad: "website", id: "faq", erwartet: "warnung", warum: "„Dein Projekt in 10 Fragen“ ist kein FAQ-Bereich (1.4)." },

  // isabellmerklinger.de (statisches HTML, zweisprachig)
  { fall: "isabell", pfad: "/index.html", id: "typ", erwartet: "kopie", warum: "Canonical auf / → Kopie, nicht gewertet (1.2)." },
  { fall: "isabell", pfad: "/impressum-en.html", id: "typ", erwartet: "rechtstext", warum: "Rechtstext mit Sprachkürzel und Endung (1.2)." },
  { fall: "isabell", pfad: "/index-en.html", id: "lang", erwartet: "ok", warum: "lang=\"en\" auf englischer Seite ist richtig (1.2)." },
  { fall: "isabell", pfad: "website", id: "hreflang", erwartet: "warnung", warum: "Rückverweis von /index-en.html fehlt – echter Befund (1.2)." },
  { fall: "isabell", pfad: "website", id: "verwaist", erwartet: "info", warum: "Landingpage nur über die Sitemap erreichbar (1.2)." },
  { fall: "isabell", pfad: "/fragebogen.html", id: "kontakt", erwartet: "ok", warum: "Fragebogen ist selbst das Kontaktformular (1.2)." },

  // grizzlyfoods.de (Shopify)
  { fall: "grizzly", pfad: "/", id: "h1", erwartet: "warnung", warum: "H1 ist nur das Logo – echter Befund (1.3)." },
  { fall: "grizzly", pfad: "/products/carnivore-beef-bars", id: "typ", erwartet: "normal", warum: "?variant= darf keine Kopie auslösen (1.3)." },
  { fall: "grizzly", pfad: "/", id: "schema", erwartet: "fehler", warum: "Nur BreadcrumbList, kein Organization-Eintrag – echter Befund." },

  // dachprofis.jimdosite.com (Jimdo hinter Cloudflare)
  { fall: "dachprofis", pfad: "/", id: "robots", erwartet: "ok", warum: "Cloudflare blockt Node mit 403 – Abruf über den Browser (1.4)." },
  { fall: "dachprofis", pfad: "/", id: "sitemap", erwartet: "ok", warum: "Sitemap ebenfalls nur über den Browser abrufbar (1.4)." },
  { fall: "dachprofis", pfad: "/", id: "h1", erwartet: "warnung", text: /^2 H1/, warum: "Slider-Kopien (swiper-slide-duplicate) nicht mitzählen: 2 statt 4 H1 (1.4)." },
  { fall: "dachprofis", pfad: "/galerie", id: "gliederung", erwartet: "ok", warum: "Überschrift „Cookie-Richtlinie“ aus dem Jimdo-Banner zählt nicht (1.4)." },

  // malermeister-kassel.de (Schöneweiß, WordPress/Divi)
  { fall: "schoeneweiss", pfad: "website", id: "faq", erwartet: "warnung", warum: "<details> im Complianz-Cookie-Banner sind kein FAQ-Bereich (1.4)." },
  { fall: "schoeneweiss", pfad: "/", id: "tel", erwartet: "fehler", warum: "Telefonnummer nicht antippbar – echter Befund." },
  { fall: "schoeneweiss", pfad: "website", id: "schema-website", erwartet: "fehler", warum: "Kein Firmeneintrag – echter Befund." },

  // malermeister-bong.de (WordPress/Elementor)
  { fall: "bong", pfad: "/unternehmen/", id: "cls", erwartet: "fehler", text: /Popup/, warum: "Elementor-Popup als Ursache des Layout-Sprungs benennen (1.4)." },
  { fall: "bong", pfad: "/unternehmen/", id: "tel", erwartet: "fehler", warum: "Keine Telefonnummer auf Unterseiten – echter Befund." },

  // elektro-zuehlke.de (Wix ohne Handy-Ansicht)
  { fall: "zuehlke", pfad: "/", id: "viewport", erwartet: "fehler", text: /980 Pixel/, warum: "Feste Breite (Wix width=980) klar benennen (1.4)." },
  { fall: "zuehlke", pfad: "/", id: "h1", erwartet: "fehler", warum: "Startseite ohne H1 – echter Befund." },

  // dachdecker-hammermeister.de (WordPress/Elementor)
  { fall: "hammermeister", pfad: "website", id: "faq", erwartet: "warnung", warum: "„Partner in allen Fragen rund um Ihr Dach“ ist kein FAQ-Bereich (1.4)." },
  { fall: "hammermeister", pfad: "website", id: "schema-website", erwartet: "warnung", text: /allgemeiner Eintrag/, warum: "Organization vorhanden, nur LocalBusiness fehlt – nicht „kein Eintrag“ (1.4)." },
  { fall: "hammermeister", pfad: "/dachdeckerarbeiten/", id: "lcp", erwartet: "fehler", text: /Hammermeister_27\.png/, warum: "3-MB-Titelbild als Ursache der Ladezeit nennen (1.4)." },
];
