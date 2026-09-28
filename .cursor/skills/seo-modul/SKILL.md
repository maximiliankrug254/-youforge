---
name: seo-modul
description: >-
  YouForge-SEO-Modul für Handwerker-Websites (Next.js). Prüft Seiten auf Technik, Inhalte und
  lokale Auffindbarkeit mit Playwright und erzeugt einen HTML-/PDF-Bericht. Enthält Vorlagen für
  Firmeneintrag (JSON-LD), Metadaten, Sitemap und robots.txt sowie Regeln für SEO-Inhalte. Nutzen
  bei neuen Kundenwebsites, vor dem Live-Gang, bei SEO-Fragen, Vergleich alte vs. neue Website.
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

Optionen: `--keyword "Maler"` und `--ort "Rosenheim"` (Suchbegriff/Ort prüfen), `--ignoriere-noindex` (Demo-Seiten), `--pdf` (Bericht als PDF), `--vorschau` (PNG vom Berichtskopf), `--kein-oeffnen`, `--ohne-drosselung`, `--base URL`.

Ausgabe: `.seo/berichte/seo-<zeit>.html|.md|.json` (+ `.pdf`/`.png`). Der HTML-Bericht öffnet sich automatisch.

Gemessen wird wie auf einem Handy im 4G-Netz. Ladezeiten schwanken; bei knappen Werten zweimal messen.

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

Vergleich alte Website des Betriebs gegen eine YouForge-Demo:

```bash
npm run seo:pruefen -- --url https://alte-seite.de --url https://you-forge.de/demo/garten --ignoriere-noindex --pdf
```

`--ignoriere-noindex` nötig, weil YouForge-Demos absichtlich nicht indexiert werden.
