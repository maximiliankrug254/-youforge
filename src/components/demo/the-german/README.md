# THE GERMAN – Dental & Skin Aesthetics

Produktionsreife Neuumsetzung der Klinik-Website [the-german.clinic](https://www.the-german.clinic/).  
Living Demo in YouForge: `/demo/the-german`

Alle Texte, Namen, Preise (PDFs), Bilder und Kontaktdaten stammen von der Live-Quelle. Es wurden keine medizinischen Claims, Ärzte, Preise oder Leistungen erfunden.

## 1. Installieren

Im YouForge-Projektroot:

```bash
npm install
```

## 2. Lokal starten

```bash
npm run dev
```

Dann öffnen: [http://localhost:3000/demo/the-german](http://localhost:3000/demo/the-german)

## 3. Build

```bash
npm run build
npm start
```

## 4. Deploy

Wie das restliche YouForge-Projekt (Vercel). Die Klinik-Routen liegen unter `/demo/the-german/*`.

Für einen **Standalone-Launch** auf `the-german.clinic`:

- `GERMAN_BASE` in `german-config.ts` auf `""` setzen
- `robots.index` in `german-seo.ts` auf `true`
- Redirects in `next.config.ts` auf Root-Pfade anpassen (siehe Redirect-Map unten)

## 5. Bilder

`public/demo/the-german/images/`

| Ordner | Inhalt |
|---|---|
| `branding/` | Logo, Favicon |
| `icons/` | Pfeil, WhatsApp, Instagram, Fach-Icons |
| `home/` | Hero, Klinik, Footer, Galerie |
| `dental/` | Dental Care inkl. Header |
| `orthodontics/` | Kieferorthopädie |
| `dermatology/` | Haut / Ästhetik |
| `technology/` | Technologie |
| `about/` | About-Header und Klinikfoto |
| `team/` | Founder und Teamfotos |

Originaldateinamen der Quelle sind in den Zielnamen erhalten, wo sinnvoll.

## 6. Texte

| Datei | Inhalt |
|---|---|
| `src/components/demo/the-german/german-content.ts` | Homepage, About-Copy, SEO-Titel |
| `src/components/demo/the-german/german-services.ts` | Alle Behandlungen (Dental, Ortho, Derma, Tech) |
| `src/components/demo/the-german/german-team.ts` | Team und Founder |

Texte nicht umschreiben. Die Live-Website ist die Quelle.

## 7. Preise

PDFs (unverändert von der Quelle):

- `public/demo/the-german/documents/THE-GERMAN-Dental-Menu.pdf`
- `public/demo/the-german/documents/THE-GERMAN-Dermatology-Menu.pdf`

Buttons und Pfade: `GERMAN_PDF` in `german-config.ts`

Es gibt **keine** manuell abgeschriebenen Preise. Fehlende Preise nie raten.

## 8. Kontaktdaten ändern

Nur `src/components/demo/the-german/german-config.ts`:

- Telefon, WhatsApp-Nummer, E-Mail
- Adresse, Geo-Koordinaten
- Instagram
- Buchungs-Nachricht
- Öffnungszeiten (aktuell aus dem JSON-LD der Quelle: Mo–Sa 09:00–18:00)

## 9. Navigation ändern

`src/components/demo/the-german/german-nav.ts`

Dropdowns, Anker und PDF-Links sitzen dort. Das Header-Menü liest nur diese Datei.

## 10. Neue Behandlung hinzufügen

1. Objekt in `german-services.ts` ins passende `treatments`-Array einfügen
2. `id` = URL-Anker (z. B. `preventive-care`)
3. Bild nach `public/demo/the-german/images/{bereich}/` legen
4. Optional denselben Eintrag in `german-nav.ts` ergänzen

Kein JSX duplizieren — `GermanServicePageView` rendert die Liste.

## 11. PDFs aktualisieren

Die Dateien in `public/demo/the-german/documents/` ersetzen. Dateinamen beibehalten, sonst `GERMAN_PDF` in `german-config.ts` anpassen.

## 12. SEO-Metadaten ändern

`GERMAN_SEO` in `german-content.ts` plus Helper `german-seo.ts`.

Pro Seite: Title, Description, Canonical, Open Graph.

Strukturierte Daten (MedicalClinic / Dentist / LocalBusiness): `GermanJsonLd.tsx`

**Indexierung:** In YouForge absichtlich `noindex` (die Original-Klinik bleibt die kanonische Domain). Für den Live-Launch `robots.index` auf `true` setzen.

---

## Seiten

| Quelle | Neue Route |
|---|---|
| `/index.html` | `/demo/the-german` |
| `/dental-care-bali.html` | `/demo/the-german/dental-care-bali` |
| `/orthodontics-bali.html` | `/demo/the-german/orthodontics-bali` |
| `/skin-aesthetics-dermatology-bali.html` | `/demo/the-german/skin-aesthetics-dermatology-bali` |
| `/technology.html` | `/demo/the-german/technology` |
| `/about-us.html` | `/demo/the-german/about-us` |

HTML-Dateinamen unter `/demo/the-german/*.html` werden per Redirect in `next.config.ts` auf die neuen Pfade geleitet.

## Nicht übernommen (Quelle 404 oder auskommentiert)

- `blog.html`, `publication.html`, `home-1.html` — 404 auf der Live-Seite
- Blog-Block auf der Homepage — im Quell-HTML auskommentiert
- Team-Galerie `img/team/1.jpg`–`12.jpg` — auskommentiert
- **Dr. Itha** — im Live-HTML auskommentiert, daher nicht angezeigt
- Generische `facebook.com/` / `instagram.com/` sameAs-Platzhalter im JSON-LD der Quelle. Echter Instagram-Link: `https://www.instagram.com/the_german_aesthetics/`

## Design

- Dunkler Hintergrund `#1e2025`
- Akzentgelb `#fafa00` (wie Quelle)
- Body: Poppins
- Suptitles/Links: Cormorant Garamond (Ersatz für Adobe-Font „the-seasons“, der an Typekit-Domains gebunden ist)
- WhatsApp-CTA: `wa.me/6281125025022`

## Analytics

IDs in `german-config.ts` → `analytics`. Solange leer, wird **nichts** geladen.

```ts
gaId: "",      // z. B. G-XXXXXXXX
gtmId: "",     // z. B. GTM-XXXXXXX
metaPixelId: "",
```

## Komponenten

`src/components/demo/the-german/`

Header, Footer, Hero, Service-Seiten, Team, WhatsApp, JSON-LD, Progress.

## Redirect-Map (Standalone)

Wenn die Site direkt auf `the-german.clinic` läuft:

```
/index.html                              → /
/dental-care-bali.html                   → /dental-care-bali
/orthodontics-bali.html                  → /orthodontics-bali
/skin-aesthetics-dermatology-bali.html   → /skin-aesthetics-dermatology-bali
/skin-aesthetics-bali.html               → /skin-aesthetics-dermatology-bali
/technology.html                         → /technology
/about-us.html                           → /about-us
/home-1.html                             → /
```
