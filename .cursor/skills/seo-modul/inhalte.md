# SEO-Inhalte für Handwerker-Websites

Ziel: Menschen und Google (inkl. KI-Suchen) verstehen sofort, **was** der Betrieb macht, **wo** und **warum er gut ist**. Echte Fakten, keine Füllwörter.

## Seitentypen

| Seite | Seitentitel (30–65 Zeichen) | H1 | Inhalt |
|---|---|---|---|
| Startseite | `Maler in Rosenheim \| Maler Müller` | Leistung + Ort + Nutzen | Kurzvorstellung, Top-Leistungen, Einsatzgebiet, Vertrauen (Jahre, Referenzen), FAQ, Kontakt |
| Leistungsseite (je Leistung eine) | `Fassadenanstrich in Rosenheim \| Maler Müller` | Leistung + Ort | Was gehört dazu, Ablauf, Materialien, typische Dauer, Beispiele/Fotos, FAQ zur Leistung, Anfrage |
| Über uns | `Über uns – Malerbetrieb seit 1998 \| Maler Müller` | Team/Geschichte | Menschen, Meistertitel, Werte, Fotos vom echten Team |
| Referenzen | `Referenzen aus Rosenheim & Umgebung \| Maler Müller` | Projekte | Projekte mit Ort, Leistung, Vorher/Nachher |
| Kontakt | `Kontakt & Anfahrt \| Maler Müller` | Kontakt | Adresse, Telefon (antippbar), Karte, Öffnungszeiten, Formular |

## Regeln

- **Beschreibung (Meta-Description):** 70–160 Zeichen, Leistung + Ort + Nutzen + Aufforderung („Jetzt unverbindlich anfragen“).
- **Eine H1 pro Seite**, darunter H2/H3 ohne Sprünge.
- **Ort natürlich nennen:** in Titel, H1, Einleitung, Einsatzgebiet. Nicht in jeden Satz stopfen.
- **Keine Orts-Doppelseiten:** keine 20 fast gleichen „Maler in X“-Seiten. Ortsseiten nur mit echtem Bezug (Projekte, Anfahrt, Besonderheiten vor Ort).
- **Textumfang:** Startseite und Leistungsseiten mindestens ca. 300 Wörter echter Inhalt.
- **FAQ:** 4–8 echte Kundenfragen (Kosten-Rahmen, Dauer, Ablauf, Einsatzgebiet, Termin). Sichtbar auf der Seite **und** als `<FaqJsonLd />`.
- **Bilder:** echte Fotos, Alt-Text beschreibt das Bild („Frisch gestrichene Fassade eines Einfamilienhauses in Kolbermoor“). Deko-Bilder `alt=""`.
- **Kontakt:** Telefonnummer als `tel:`-Link, Anfrage-Button auf jeder Seite.
- **Gleiche Daten überall:** Name, Adresse, Telefon identisch zu `seo-config.ts` und Google-Profil.
- **KI-Suchen:** klare, zitierbare Sätze („Maler Müller streicht seit 1998 Fassaden in Rosenheim und Umgebung.“), Fakten statt Werbesprache.

## Prompt-Bausteine

**Leistungsseite:**
> Schreibe eine Leistungsseite für {Firma} in {Ort} zur Leistung {Leistung}. Nutze nur diese Fakten: {Fakten aus Briefing/alter Website}. Aufbau: H1 mit Leistung und Ort, Einleitung (2–3 Sätze), Was gehört dazu, Ablauf in Schritten, Materialien/Qualität, Einsatzgebiet ({Orte}), 4 FAQ, Aufforderung zur Anfrage. Ca. 350–500 Wörter, Sie-Form, einfache Sprache, keine erfundenen Zahlen. Liefere zusätzlich Seitentitel (max. 60 Zeichen) und Beschreibung (max. 155 Zeichen).

**FAQ:**
> Erstelle 6 häufige Kundenfragen mit kurzen Antworten (je 2–3 Sätze) für {Leistung} bei {Firma} in {Ort}. Nur Fakten aus: {Fakten}. Keine Preise nennen, wenn keine vorliegen – stattdessen erklären, wovon der Preis abhängt.

Danach immer: Lektorat, dann `npm run seo:pruefen`.
