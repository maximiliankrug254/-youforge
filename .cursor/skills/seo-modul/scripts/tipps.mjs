/**
 * „So beheben“-Texte je Plattform. Fehlt eine Variante, gilt „allgemein“.
 */
const TIPPS = {
  noindex: {
    nextjs: "noindex entfernen: metadata.robots in layout.tsx bzw. page.tsx.",
    wordpress:
      "Einstellungen → Lesen → „Suchmaschinen davon abhalten …“ ausschalten und im SEO-Plugin (Yoast/Rank Math) die Seite auf „index“ stellen.",
    allgemein: "noindex-Anweisung in den SEO-Einstellungen der Seite entfernen.",
  },
  robotsFehlt: {
    nextjs: "src/app/robots.ts anlegen (Vorlage: vorlagen/robots.ts).",
    wordpress: "robots.txt im SEO-Plugin anlegen (Yoast: Werkzeuge → Datei-Editor, Rank Math: Allgemein → robots.txt).",
    allgemein: "robots.txt im Hauptverzeichnis anlegen und darin auf die Sitemap verweisen.",
  },
  robotsSperrt: {
    nextjs: "Disallow-Regel in src/app/robots.ts entfernen.",
    wordpress: "Disallow-Regel im robots.txt-Editor des SEO-Plugins entfernen.",
    shopify: "Disallow-Regel in der Theme-Datei robots.txt.liquid entfernen.",
    allgemein: "Disallow-Regel in der robots.txt entfernen.",
  },
  sitemapFehlt: {
    nextjs: "src/app/sitemap.ts anlegen (Vorlage: vorlagen/sitemap.ts).",
    wordpress: "XML-Sitemap im SEO-Plugin aktivieren. WordPress hat außerdem eine eingebaute unter /wp-sitemap.xml.",
    allgemein: "XML-Sitemap erzeugen und in der robots.txt sowie in der Google Search Console eintragen.",
  },
  sitemapSeite: {
    nextjs: "Route in src/app/sitemap.ts ergänzen.",
    wordpress: "Seite im SEO-Plugin auf „index“ stellen, dann erscheint sie automatisch in der Sitemap.",
    shopify: "Shopify erzeugt die Sitemap selbst – prüfen, ob die Seite veröffentlicht und nicht für Suchmaschinen ausgeblendet ist.",
    allgemein: "Seite in die XML-Sitemap aufnehmen.",
  },
  sitemapBenutzer: {
    wordpress:
      "Autoren-Sitemap abschalten: Yoast → Darstellung in der Suche → Archive → Autorenarchive deaktivieren; Rank Math → Sitemap → Autoren ausschließen.",
    allgemein: "Autoren- bzw. Benutzerseiten aus der Sitemap entfernen.",
  },
  https: {
    nextjs: "Bei Vercel automatisch – Domain-Einstellungen prüfen.",
    allgemein: "SSL-Zertifikat beim Hoster aktivieren (z. B. Let’s Encrypt) und alle Adressen auf https umleiten.",
  },
  titel: {
    nextjs: "metadata.title setzen: Leistung + Ort + Firmenname.",
    wordpress: "SEO-Titel im SEO-Plugin setzen: Leistung + Ort + Firmenname.",
    shopify: "Seite, Produkt oder Kategorie bearbeiten → unten „Suchmaschineneintrag bearbeiten“ → Seitentitel. Startseite: Onlineshop → Einstellungen.",
    allgemein: "Seitentitel setzen: Leistung + Ort + Firmenname.",
  },
  beschreibung: {
    nextjs: "metadata.description setzen: 1–2 Sätze mit Leistung, Ort und Nutzen.",
    wordpress: "Meta-Beschreibung im SEO-Plugin setzen: 1–2 Sätze mit Leistung, Ort und Nutzen.",
    shopify: "Seite, Produkt oder Kategorie bearbeiten → unten „Suchmaschineneintrag bearbeiten“ → Meta-Beschreibung. Startseite: Onlineshop → Einstellungen.",
    allgemein: "Meta-Beschreibung setzen: 1–2 Sätze mit Leistung, Ort und Nutzen.",
  },
  canonical: {
    nextjs: "metadata.alternates.canonical setzen, damit Google die Haupt-Adresse kennt.",
    wordpress: "Den Canonical-Link setzen SEO-Plugins automatisch – Plugin aktivieren bzw. Einstellung prüfen.",
    allgemein: "Canonical-Link setzen, damit Google die Haupt-Adresse kennt.",
  },
  sprache: {
    nextjs: '<html lang="de"> im Root-Layout setzen.',
    wordpress: "Einstellungen → Allgemein → Sprache der Website auf Deutsch stellen.",
    allgemein: '<html lang="de"> setzen – bei anderssprachigen Seiten die passende Sprache, z. B. lang="en".',
  },
  viewport: {
    nextjs: "viewport-Export mit width=device-width setzen.",
    wordpress: "Responsives Theme verwenden bzw. viewport-Meta im Theme ergänzen.",
    allgemein: "viewport-Meta mit width=device-width setzen.",
  },
  vorschau: {
    nextjs: "metadata.openGraph mit Titel und Bild setzen.",
    wordpress: "Social-Vorschau (Titel und Bild) im SEO-Plugin unter „Social“ einstellen.",
    shopify: "Onlineshop → Einstellungen → Bild für soziale Medien hochladen.",
    allgemein: "Open-Graph-Titel und -Bild für die Vorschau beim Teilen setzen.",
  },
  ladezeit: {
    nextjs: "Große Bilder mit next/image ausliefern, Intro-Animationen kürzen, Schriften sparsam laden.",
    wordpress: "Bilder als WebP komprimieren, ein Caching-Plugin nutzen, Slider und Videos im oberen Bereich reduzieren.",
    shopify: "Bilder im Theme in passender Breite ausliefern, Slider im oberen Bereich reduzieren, nicht genutzte Apps mit eigenen Skripten entfernen.",
    allgemein: "Große Bilder verkleinern, Animationen im oberen Bereich kürzen, Schriften sparsam laden.",
  },
  firmeneintrag: {
    nextjs: "Vorlage vorlagen/LocalBusinessJsonLd.tsx einbauen.",
    wordpress: "Firmeneintrag über das SEO-Plugin einrichten (Yoast Local SEO oder Rank Math → Local SEO).",
    allgemein: "Strukturierten Firmeneintrag (JSON-LD, Typ LocalBusiness) einbauen.",
  },
  organisation: {
    nextjs: "Organization-Eintrag als JSON-LD ins Root-Layout: Name, Logo, Adresse, Kontakt, Profile.",
    wordpress: "Im SEO-Plugin unter „Organisation“ Name, Logo, Adresse und Profile hinterlegen.",
    shopify: "Organization-Eintrag als JSON-LD in theme.liquid ergänzen (Name, Logo, Kontakt, Social-Media-Profile) oder eine SEO-App dafür nutzen.",
    allgemein: "Strukturierten Firmeneintrag (JSON-LD, Typ Organization) einbauen.",
  },
  firmendaten: {
    wordpress: "Fehlende Angaben im SEO-Plugin (Local SEO) ergänzen – exakt wie im Google-Profil.",
    allgemein: "Fehlende Angaben im JSON-LD ergänzen – exakt wie im Google-Profil.",
  },
};

export function tipp(key, plattform) {
  const eintrag = TIPPS[key];
  if (!eintrag) return "";
  return eintrag[plattform] ?? eintrag.allgemein ?? "";
}
