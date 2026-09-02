# YouForge — Deploy auf Vercel (kostenlos)

## Voraussetzungen

- [GitHub-Account](https://github.com/signup) (kostenlos)
- [Vercel-Account](https://vercel.com/signup) (kostenlos, mit GitHub anmelden)
- Git installieren: [git-scm.com/download/win](https://git-scm.com/download/win)  
  *(Alternative: [GitHub Desktop](https://desktop.github.com/))*

## Schritt 1 — Code auf GitHub

Im Projektordner (PowerShell **nach Git-Installation neu öffnen**):

```powershell
cd c:\Users\max90\Desktop\Cursor\YouForge
git init
git add .
git commit -m "YouForge website — ready for Vercel"
```

Auf GitHub: **New repository** → Name `youforge` → **ohne** README erstellen.

```powershell
git remote add origin https://github.com/DEIN-USERNAME/youforge.git
git branch -M main
git push -u origin main
```

## Schritt 2 — Vercel verbinden

1. [vercel.com/new](https://vercel.com/new)
2. Repository **youforge** importieren
3. Framework: **Next.js** (automatisch)
4. **Environment Variables** hinzufügen:

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Key aus deiner `.env.local` |

5. **Deploy** klicken

Nach ~2 Minuten: `https://youforge-xxxx.vercel.app`

## Schritt 3 — Web3Forms

Im [Web3Forms-Dashboard](https://web3forms.com):

- Domain **`deine-url.vercel.app`** eintragen (zusätzlich zu `localhost`)

## Schritt 4 — Live testen

- [ ] Homepage + Intro
- [ ] `/briefing` — Test absenden
- [ ] `/kontakt` — Calendly-Link
- [ ] `/opengraph-image` — OG-Bild
- [ ] Link auf WhatsApp/LinkedIn teilen — Vorschau mit Bild?

## URL & Meta-Tags

Die Site erkennt die Vercel-URL **automatisch** (`VERCEL_URL`).  
OG-Image und Sitemap zeigen auf deine `.vercel.app`-Adresse — kein manuelles Anpassen nötig.

**Später mit eigener Domain:** In Vercel unter *Settings → Environment Variables*:

```
NEXT_PUBLIC_SITE_URL=https://you-forge.de
```

Dann Domain in Vercel unter *Settings → Domains* verbinden und neu deployen.

## Kosten

| Posten | Kosten |
|--------|--------|
| Vercel Hobby | 0 € |
| GitHub | 0 € |
| Web3Forms Free | 0 € |

## Alternative ohne Git (Vercel CLI)

```powershell
npx vercel login
npx vercel --prod
```

Env-Variable im Vercel-Dashboard setzen, wenn per CLI deployed.
