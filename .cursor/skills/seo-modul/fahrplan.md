# Fahrplan SEO-Modul

## Aktuelle Version

**1.3** vom 28.09.2026

## Was das Modul kann

- Prüft Seiten wie ein Handy im 4G-Netz: Ladezeit, Layout-Stabilität, Datenmenge, Metadaten, Überschriften, Bilder, Firmeneintrag, Kontakt.
- Drei Modi: Einzelseite, ganze Website (Crawl), Vergleich mehrerer Adressen.
- Bericht als HTML (öffnet sich automatisch), Markdown, JSON, auf Wunsch PDF und Vorschau-Bild.
- Erkennt die Plattform (Next.js, WordPress, Wix, Jimdo, Shopify u. a.) und gibt passende Tipps.
- Vorlagen für neue YouForge-Websites: Firmeneintrag (JSON-LD), Metadaten, Sitemap, robots.txt.
- Regeln für SEO-Inhalte (`inhalte.md`) und Checkliste für den Betrieb (`checkliste-betrieb.md`).

## Testfälle (Referenz)

Nach jeder Änderung diese Läufe wiederholen und mit den Werten vergleichen. **Nacheinander laufen lassen, nicht gleichzeitig** – parallele Läufe teilen sich den Rechner und verfälschen die Ladezeit.

| Aufruf | 1.0 | 1.1 | 1.2 |
|---|---|---|---|
| `--url https://room2build.com/ --site --max 10 --keyword "Marketingagentur Handwerk" --ort Kassel` | Start 83, Website 75 | Start 95, Website 95 | Start 95, Website 95 |
| `--url https://you-forge.de/ --site --max 10 --keyword Digitalagentur --ort DACH` | Start 72, Website 64 | Start 83, Website 89 | Start 83, Website 89 |
| `--url https://isabellmerklinger.de/ --site --max 10 --keyword Finanzcoaching --ort Deutschland` | – | Start 98, Website 87 (teils Abbruch) | Start 98, Website 92 |
| `--url https://you-forge.de/demo/raumkontrast --ignoriere-noindex` | 60 (Fehlerseite bewertet) | 0, nur „nicht erreichbar“ | 0 |

Gegenprobe 1.3: gleiche Befunde wie 1.2, nur die Ladezeiten lagen bei allen drei Seiten gleichzeitig höher (Website 94 / 87 / 91). Die eigene Messung hängt von der Internetverbindung des Rechners ab – bei Abweichungen erst die Ladezeit-Zeilen vergleichen.

- room2build.com: typische WordPress-Agenturseite (Sitemap-Index, verknüpfter Firmeneintrag).
- you-forge.de: überregionale Next.js-Seite mit Rechtstexten und verborgenen Demos.
- isabellmerklinger.de: selbst gebaute HTML-Seite, zweisprachig (de/en), `index.html` als Kopie der Startseite, Landingpage nur in der Sitemap, Server mit gelegentlichen Aussetzern.

Erwartete echte Befunde bei isabellmerklinger.de: hreflang-Rückverweis von `/index-en.html` fehlt; Fragebogen ohne Beschreibung, H1 und Canonical; englische Seite ohne Canonical.

## Getestete Websites

| Datum | Website | Art | Was das Modul daraus gelernt hat |
|---|---|---|---|
| 28.09.2026 | room2build.com | WordPress, Agentur, lokal | Sitemap-Index, verknüpfter Firmeneintrag, Rechtstexte (1.1) |
| 28.09.2026 | you-forge.de | Next.js, überregional | verborgene Demos, überregionaler Modus (1.1) |
| 28.09.2026 | isabellmerklinger.de | statisches HTML, zweisprachig, Coaching | Kopien per Canonical, Sprachfassungen, Sitemap als Quelle, Wiederholung bei Aussetzern (1.2) |
| 28.09.2026 | grizzlyfoods.de | Shopify-Onlineshop, deutschlandweit | Slider verfälscht Ladezeit, Shopify-Adresszusätze (?variant=), Logo als H1, Shop-Tipps (1.3) |

Erwartete echte Befunde bei grizzlyfoods.de: H1 der Startseite ist nur das Logo; kein Organization-Eintrag (nur BreadcrumbList); Suchbegriff „Beef Jerky“ nicht in Titel/H1 der Startseite; wenig eigener Text auf Kategorieseiten; 2,5–3 MB pro Seite. Ladezeiten der Unterseiten schwanken dort zwischen Läufen stark (unter 2,5 s bis 7 s) – für Aussagen gegenüber Kunden mit echten Nutzerdaten gegenprüfen.

## Geplante Verbesserungen

- Texte, Seitentitel und FAQ nicht nur prüfen, sondern auf Wunsch Vorschläge schreiben (mit Lektorat).
- Google Search Console anbinden, um echte Platzierungen und Klicks zu zeigen.
- Echte Ladezeiten von Google-Nutzern (Chrome-Nutzerdaten über die PageSpeed-Insights-Schnittstelle) zusätzlich zur eigenen Messung zeigen – die eigene Messung schwankt je nach Verbindung.
- Shop-Modus: Produkt-Einträge (Preis, Verfügbarkeit, Bewertungen) auf Produktseiten prüfen.
- Prüfung in die Post-Deploy-Checkliste aufnehmen.
- Weitere echte Seiten testen: alte Handwerker-WordPress-Seiten, Jimdo, Wix, Betriebe mit mehreren Standorten, Österreich/Schweiz.

## Entscheidungen

- Keine Platzierungen versprechen. Das Modul bewertet die Website, nicht Google-Profil, Bewertungen oder Wettbewerb.
- Berichte über fremde Websites erst selbst lesen, bevor sie jemand sieht. Falsche Befunde werden als Verbesserung ins Modul übernommen.
- Verkauf an Agenturen: Nutzungsrecht, einmaliger Preis (noch offen), kein Update-Paket. Details: `public/docs/SEO.docx` (intern).

## Änderungsprotokoll

- **1.3 – 28.09.2026** – Nach Test mit grizzlyfoods.de (Shopify):
  - Ladezeit: Wechselt ein Slider nach dem Laden ein fast gleich großes Bild ein, zählt das nicht mehr als Hauptinhalt (vorher 14 s statt 2,6 s).
  - Canonical-Vergleich ohne Adresszusätze wie `?variant=…` – Shopify-Produktseiten gelten nicht mehr fälschlich als Kopie.
  - Neu: H1, die nur ein Bild bzw. Logo enthält, wird gemeldet (häufig bei Shopify-Themes).
  - Shopify-Tipps für Titel, Beschreibung, Vorschaubild, Firmeneintrag, Ladezeit, Sitemap, robots.txt.
  - Bei Shops und Kategorieseiten passender Texttipp statt „Leistungen, Ablauf, Einsatzgebiet“.

- **1.2 – 28.09.2026** – Nach Test mit isabellmerklinger.de:
  - Seiten, die per Canonical auf eine andere Adresse zeigen (z. B. `/index.html` → `/`), gelten als Kopie und zählen nicht zur Gesamtnote. Zeigt der Canonical einer gewerteten Seite woanders hin, ist das ein Fehler.
  - Sprache: Jede angegebene Sprache ist richtig (`lang="en"` auf einer englischen Seite ist kein Fehler).
  - Neu: Prüfung der Sprachfassungen (hreflang) bei mehrsprachigen Websites, inklusive Rückverweis.
  - Rechtstexte und Kontaktseiten auch mit Endung und Sprachkürzel erkannt (`/impressum-en.html`, `/kontakt.php`, „Imprint“); Fragebogen und Buchungsseiten zählen als Kontaktseite. Ein Formular auf der Kontaktseite gilt als Kontaktweg.
  - Crawl liest zusätzlich die Sitemap; Seiten, die nur dort stehen, werden geprüft und als Hinweis gemeldet.
  - Ladezeit über 2,5 s wird nachgemessen (bis zu dreimal, mittlerer Wert). Bewertet wird der angezeigte, gerundete Wert.
  - Lädt eine Seite beim ersten Versuch nicht, gibt es einen zweiten Anlauf, statt sie als „nicht erreichbar“ zu werten.

- **1.1 – 28.09.2026** – Faire Bewertung nach Tests mit room2build.com und you-forge.de:
  - Rechtstexte und bewusst verborgene Seiten zählen nicht zur Gesamtnote.
  - Suchbegriff wortweise statt nur als exakte Wortfolge; Suchbegriff und Ort mit vollem Gewicht nur auf der Startseite.
  - Sitemap-Index (WordPress, Yoast, Rank Math) wird komplett gelesen; öffentliche Benutzer-Sitemap wird gemeldet.
  - Firmeneintrag: verknüpfte Angaben (@id, provider) zählen mit; im Website-Modus einmal pro Website geprüft.
  - Überregionaler Modus (DACH, Deutschland, bundesweit …): Firmenangaben statt Ortsbezug.
  - Adressen auch aus Österreich, der Schweiz und den USA erkannt.
  - Plattform-Erkennung und passende „So beheben“-Tipps (`scripts/tipps.mjs`).
  - Fehlerseiten (4xx/5xx) werden nicht mehr inhaltlich bewertet.
  - Telefonnummer: Hinweis, wenn die Nummer sichtbar, aber nicht antippbar ist.
  - Crawl: nur gewertete Seiten zählen gegen `--max`, verborgene Bereiche werden übersprungen, Rechtstexte zuletzt.
- **1.0 – 28.09.2026** – Erste Version: Prüfung, Bericht, Vorlagen, Inhaltsregeln, Checkliste.
