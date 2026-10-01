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

Optionen: `--keyword "Maler"` und `--ort "Rosenheim"` (Suchbegriff/Ort prüfen), `--ueberregional` (Anbieter ohne festen Ort; automatisch bei `--ort DACH`, `Deutschland`, `bundesweit` …), `--ignoriere-noindex` (Demo-Seiten), `--pdf` (Bericht als PDF), `--vorschau` (PNG vom Berichtskopf), `--kein-oeffnen`, `--ohne-drosselung`, `--ohne-google`, `--base URL`.

Ausgabe: `.seo/berichte/seo-<zeit>.html|.md|.json` (+ `.pdf`/`.png`). Der HTML-Bericht öffnet sich automatisch.

Gemessen wird wie auf einem Handy im 4G-Netz. Ladezeiten über 2,5 s misst das Modul selbst bis zu dreimal nach und nimmt den mittleren Wert; spätere Bildwechsel in Slidern zählen nicht. Mehrere Prüfungen nie gleichzeitig laufen lassen – das verfälscht die Ladezeit.

**Google-Nutzerdaten:** Für die Startseite (bzw. jede Adresse im Vergleich) fragt das Modul parallel Google PageSpeed Insights ab. Prüfpunkt „Echte Ladezeit (Google-Nutzerdaten)“: Ladezeit und Layout-Verschiebung echter Chrome-Nutzer der letzten 28 Tage (Seite oder ganze Domain). Hat Google zu wenige Besucherdaten, erscheint nur ein Hinweis mit Googles Testlauf (zählt nicht zur Note). Braucht `PAGESPEED_API_KEY` in der Umgebung oder in `.env.local` (kostenlos, [Anleitung](https://developers.google.com/speed/docs/insights/v5/get-started) → „Get a Key“); ohne Schlüssel läuft alles wie bisher, die Konsole meldet „Google: kein Schlüssel“. Lokale Adressen (localhost) werden nicht an Google geschickt.

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
- **Server-Schutz:** robots.txt und Sitemap werden notfalls über den Browser geholt (Cloudflare blockt einfache Abrufe). Blockt ein Server trotzdem, heißt es „konnte nicht geprüft werden“ – nicht „fehlt“. Sperrseiten („Sorry, you have been blocked“) werden nicht bewertet.
- **Cookie-Banner und Slider:** Überschriften und Aufklapp-Elemente aus Cookie-Bannern sowie kopierte Slider-Folien zählen nicht mit.
- **Ursachen:** Bei langsamer Ladezeit nennt der Bericht das Bild bzw. den Text, der zuletzt erscheint; bei Layout-Sprüngen die Art der Ursache (Popup, Cookie-Hinweis, Bild ohne Größe).

Stand, offene Punkte und Änderungen: [fahrplan.md](fahrplan.md). Nach jeder Änderung am Modul dort eintragen und `VERSION` in `scripts/lib.mjs` erhöhen.

### Tests (nach jeder Änderung am Modul)

```bash
npm run seo:test                                   # alle Testfälle ohne Internet neu auswerten (Sekunden)
npm run seo:test -- --fall grizzly                 # nur einen Testfall
npm run seo:test -- --aktualisieren                # gewollte Änderungen als neue Erwartung festschreiben
npm run seo:pruefen -- --url https://… --site --testfall name   # neue Website als Testfall aufnehmen
```

- `tests/faelle/*.json`: gespeicherte Rohdaten der Seiten (ohne Screenshot). Die Bewertung wird daraus neu berechnet, Ladezeiten sind damit fest und schwanken nicht.
- `tests/erwartet/*.json`: erwartete Befunde je Seite. Jede Abweichung wird angezeigt; erst prüfen, ob sie gewollt ist, dann `--aktualisieren`.
- `tests/kernbefunde.mjs`: Befunde, die immer stimmen müssen – frühere Fehler und bestätigte echte Befunde. Nach jedem behobenen Irrtum hier einen Eintrag ergänzen.
- Änderungen an der Messung selbst (`analyse.mjs`) prüfen die Tests nicht – dafür eine Referenzseite live neu prüfen und den Testfall mit `--testfall` neu aufnehmen.
- Befundtexte lassen sich in Kernbefunden mit `text: /Muster/` absichern (z. B. dass die Ursache genannt wird).
- Dateien nicht mit PowerShell `Get-Content`/`Set-Content` bearbeiten – das zerstört Umlaute.

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
