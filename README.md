# YouForge

**Wir schmieden deine Vision.**

Premium-Digitalagentur-Website für YouForge — gebaut mit Next.js, TypeScript, Tailwind CSS und Framer Motion.

## Starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Seiten

| Route | Beschreibung |
|-------|-------------|
| `/` | Homepage mit 8 Kapiteln |
| `/leistungen` | Alle Leistungen + Prozess |
| `/arbeiten` | Portfolio (Coming Soon) |
| `/kontakt` | Kontaktformular |
| `/impressum` | Impressum (Platzhalter) |
| `/datenschutz` | Datenschutz (Vorlage) |

## Vor dem Launch

1. **Domain** registrieren und in `src/lib/constants.ts` → `siteConfig.url` eintragen
2. **E-Mail** in `siteConfig.email` anpassen
3. **Impressum** — Platzhalter in `/impressum` ersetzen
4. **Datenschutz** — rechtlich prüfen lassen
5. **Deploy** auf [Vercel](https://vercel.com)

## Tech-Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes (Dark/Light Toggle)
- Vercel Analytics

## Anpassungen

Design Tokens und Farben: `src/app/globals.css`  
Texte und Inhalte: `src/lib/constants.ts`
