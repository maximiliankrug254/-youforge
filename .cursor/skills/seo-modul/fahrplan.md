# Fahrplan SEO-Modul

## Aktuelle Version

**1.1** vom 28.09.2026

## Was das Modul kann

- Prüft Seiten wie ein Handy im 4G-Netz: Ladezeit, Layout-Stabilität, Datenmenge, Metadaten, Überschriften, Bilder, Firmeneintrag, Kontakt.
- Drei Modi: Einzelseite, ganze Website (Crawl), Vergleich mehrerer Adressen.
- Bericht als HTML (öffnet sich automatisch), Markdown, JSON, auf Wunsch PDF und Vorschau-Bild.
- Erkennt die Plattform (Next.js, WordPress, Wix, Jimdo, Shopify u. a.) und gibt passende Tipps.
- Vorlagen für neue YouForge-Websites: Firmeneintrag (JSON-LD), Metadaten, Sitemap, robots.txt.
- Regeln für SEO-Inhalte (`inhalte.md`) und Checkliste für den Betrieb (`checkliste-betrieb.md`).

## Testfälle (Referenz)

Nach jeder Änderung mindestens diese drei Läufe wiederholen und mit den Werten vergleichen:

| Aufruf | 1.0 | 1.1 |
|---|---|---|
| `--url https://room2build.com/ --site --max 10 --keyword "Marketingagentur Handwerk" --ort Kassel` | Start 83, Website 75 | Start 95, Website 95 |
| `--url https://you-forge.de/ --site --max 10 --keyword Digitalagentur --ort DACH` | Start 72, Website 64 | Start 83, Website 89 |
| `--url https://you-forge.de/demo/raumkontrast --ignoriere-noindex` | 60 (Fehlerseite bewertet) | 0, nur „nicht erreichbar“ |

room2build.com steht für eine typische WordPress-Agenturseite (Sitemap-Index, verknüpfter Firmeneintrag), you-forge.de für eine überregionale Next.js-Seite mit Rechtstexten und verborgenen Demos.

## Geplante Verbesserungen

- Texte, Seitentitel und FAQ nicht nur prüfen, sondern auf Wunsch Vorschläge schreiben (mit Lektorat).
- Google Search Console anbinden, um echte Platzierungen und Klicks zu zeigen.
- Mehrere Messungen der Ladezeit mitteln, damit knappe Werte nicht schwanken.
- Prüfung in die Post-Deploy-Checkliste aufnehmen.

## Entscheidungen

- Keine Platzierungen versprechen. Das Modul bewertet die Website, nicht Google-Profil, Bewertungen oder Wettbewerb.
- Berichte über fremde Websites erst selbst lesen, bevor sie jemand sieht. Falsche Befunde werden als Verbesserung ins Modul übernommen.
- Verkauf an Agenturen: Nutzungsrecht, einmaliger Preis (noch offen), kein Update-Paket. Details: `public/docs/SEO.docx` (intern).

## Änderungsprotokoll

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
