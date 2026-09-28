---
name: seo-modul
description: >-
  YouForge-SEO-Modul für Handwerker-Websites. Prüft beliebige Websites (Next.js, WordPress, Baukästen)
  auf Technik, Inhalte und lokale Auffindbarkeit mit Playwright und erzeugt einen HTML-/PDF-Bericht.
  Enthält Vorlagen für Firmeneintrag (JSON-LD), Metadaten, Sitemap und robots.txt sowie Regeln für
  SEO-Inhalte. Nutzen bei neuen Kundenwebsites, vor dem Live-Gang, bei SEO-Fragen, Vergleich alte vs.
  neue Website.
---

# YouForge-SEO-Modul

Drei Teile: **Technik** (Vorlagen, automatisch), **Inhalte** (KI + Lektorat, Regeln in `inhalte.md`), **Checkliste & Erfolgskontrolle** (`checkliste-betrieb.md`).

Keine Platzierungen versprechen. Das Modul bewertet die Website; Google-Profil, Bewertungen und Wettbewerb liegen außerhalb.

## Prüfen

```bash
npm run seo:pruefen -- --url https://kunde.de
npm run seo:pruefen -- --url /demo/garten --ignoriere-noindex        # lokal (http://localhost:3000) oder Pfad
npm run seo:pruefen -- --url https://kunde.de --site --max 10         # ganze Website abgehen
npm run seo:pruefen -- --url https://alt.de --url https://neu.de      # Vergleich
```

Optionen: `--keyword "Maler"` und `--ort "Rosenheim"` (Suchbegriff/Ort prüfen), `--ueberregional` (Anbieter ohne festen Ort; automatisch bei `--ort DACH`, `Deutschland`, `bundesweit` …), `--ignoriere-noindex` (Demo-Seiten), `--pdf` (Bericht als PDF), `--vorschau` (PNG vom Berichtskopf), `--kein-oeffnen`, `--ohne-drosselung`, `--base URL`.

Ausgabe: `.seo/berichte/seo-<zeit>.html|.md|.json` (+ `.pdf`/`.png`). Der HTML-Bericht öffnet sich automatisch.

Gemessen wird wie auf einem Handy im 4G-Netz. Ladezeiten über 2,5 s misst das Modul selbst bis zu dreimal nach und nimmt den mittleren Wert. Mehrere Prüfungen nie gleichzeitig laufen lassen – das verfälscht die Ladezeit.

### So bewertet das Modul

- **Seiten einordnen:** Rechtstexte (Impressum, Datenschutz, AGB …) bekommen nur die Grundtechnik geprüft. Bewusst verborgene Seiten (noindex oder robots.txt und nicht in der Sitemap) werden gezeigt, zählen aber nicht zur Gesamtnote. Gesperrte Startseite oder noindex trotz Sitemap-Eintrag bleiben Fehler.
- **Website-Modus:** Suchbegriff und Ort mit vollem Gewicht nur auf der Startseite, auf Unterseiten der Ort als Tipp. Firmeneintrag und FAQ werden einmal für die ganze Website geprüft. Nur gewertete Seiten zählen gegen `--max`; nach der ersten verborgenen Seite eines Bereichs (z. B. `/demo`) wird der Rest übersprungen.
- **Suchbegriff wortweise:** „Maler Rosenheim“ zählt auch bei „Malerbetrieb in Rosenheim“; fehlt ein Wort, gibt es eine Teilwertung.
- **Sitemap:** Sitemap-Index (WordPress, Yoast, Rank Math) wird komplett gelesen. Eine öffentliche Autoren-/Benutzer-Sitemap wird gemeldet.
- **Firmeneintrag:** Verknüpfte Angaben (`@id`, `provider`, `parentOrganization`) zählen mit. Überregional reicht ein Organization-Eintrag.
- **Plattform:** Next.js, WordPress, Wix, Jimdo, Shopify u. a. werden erkannt; die „So beheben“-Tipps passen zur Plattform (`scripts/tipps.mjs`).
- **Fehlerseiten:** Antwortet eine Adresse mit 4xx/5xx, wird nur das gemeldet – der Inhalt der Fehlerseite wird nicht bewertet. Lädt eine Seite beim ersten Versuch nicht, gibt es einen zweiten Anlauf.
- **Kopien:** Seiten, deren Canonical auf eine andere Adresse zeigt (z. B. `/index.html`), werden gezeigt, zählen aber nicht zur Gesamtnote.
- **Mehrsprachig:** Jede Sprache in `lang` ist gültig; bei mehreren Sprachen wird geprüft, ob die Fassungen per hreflang gegenseitig verknüpft sind.
- **Sitemap als Quelle:** Im Website-Modus werden auch Seiten geprüft, die nur in der Sitemap stehen (Hinweis „nicht verlinkt“).

Stand, offene Punkte und Änderungen: [fahrplan.md](fahrplan.md). Nach jeder Änderung am Modul dort eintragen und `VERSION` in `scripts/lib.mjs` erhöhen.

## Neue Kundenwebsite (Ablauf)

1. Vorlagen aus `vorlagen/` kopieren:
   - `seo-config.ts` → `src/lib/seo/seo-config.ts` und mit echten Firmendaten füllen (exakt wie im Google-Profil)
   - `metadata.ts` → `src/lib/seo/metadata.ts`; Root-Layout `export const metadata = basisMetadata`, Unterseiten `seiteMetadata({...})`
   - `LocalBusinessJsonLd.tsx` → `src/components/seo/`; `<LocalBusinessJsonLd />` ins Root-Layout, `<FaqJsonLd />` auf die Seite mit sichtbarem FAQ
   - `sitemap.ts`, `robots.ts` → `src/app/`; alle öffentlichen Seiten in die Sitemap
2. Inhalte nach `inhalte.md` schreiben, danach Lektorat.
3. Prüfen: `npm run seo:pruefen -- --url http://localhost:3000 --site --keyword "<Hauptleistung>" --ort "<Ort>"`. Ziel: keine kritischen Befunde, Gesamt ≥ 90.
4. Nach Live-Gang erneut gegen die Live-Domain prüfen, dann Punkte aus `checkliste-betrieb.md` mit dem Betrieb durchgehen.

Vor Code-Änderungen die Next.js-Doku in `node_modules/next/dist/docs/` lesen (Metadata: `01-app/03-api-reference/04-functions/generate-metadata.md`, JSON-LD: `01-app/02-guides/json-ld.md`).

## Befunde beheben

Der Bericht nennt pro Befund „So beheben“. Reihenfolge: Kritisch → Wichtig → Tipp. Nur echte Fakten des Betriebs verwenden, nichts erfinden (keine Fake-Bewertungen, keine erfundenen Orte oder Leistungen). Danach erneut prüfen.

## Vorführen (Vertrieb)

Den Bericht über eine fremde Website nie ungeprüft weitergeben: erst selbst lesen, falsche Befunde als Verbesserung ins Modul übernehmen.

Vergleich alte Website des Betriebs gegen eine YouForge-Demo:

```bash
npm run seo:pruefen -- --url https://alte-seite.de --url https://you-forge.de/demo/garten --ignoriere-noindex --pdf
```

`--ignoriere-noindex` nötig, weil YouForge-Demos absichtlich nicht indexiert werden.
