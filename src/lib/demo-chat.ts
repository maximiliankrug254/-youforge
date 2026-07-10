export const DEMO_MESSAGE_LIMIT = 8;

export const demoQuickReplies = [
  "Was kostet eine Website?",
  "Wie läuft die Zusammenarbeit?",
  "Bietet ihr KI an?",
  "Kontakt aufnehmen",
] as const;

export const demoWelcomeMessage =
  "Hallo! Ich bin die YouForge-Demo — genau so könnte ein Assistent auf deiner Website aussehen. Stell mir eine Frage oder wähle eine Option unten.";

export const demoLimitMessage =
  "Das war die Demo — in der Vollversion antwortet dein Assistent ohne Limit. Klingt interessant? Lass uns deine Vision schmieden.";

export function getDemoResponse(input: string): string {
  const text = input.toLowerCase().trim();

  if (/preis|kost|budget|teuer|euro|€|angebot|paket/.test(text)) {
    return "Jedes Projekt ist individuell — Landingpages starten unter 1.000 €. Wir bieten Festpreis-Pakete und maßgeschneiderte Lösungen. Fair, transparent, ohne versteckte Kosten.";
  }

  if (/website|webseite|landing|homepage|auftritt/.test(text)) {
    return "Wir bauen moderne Websites und Landingpages — schnell, responsiv und auf dein Business zugeschnitten. Typische Projekte sind in 1–2 Wochen live.";
  }

  if (/ki|künstlich|automatis|chatbot|bot|intelligenz/.test(text)) {
    return "Ja — KI-Integration und Automatisierung gehören zu unserem Angebot. Genau wie diese Demo hier: Assistenten, die Anfragen beantworten und Prozesse vereinfachen. Auf deiner Website, 24/7.";
  }

  if (/dauer|zeit|woche|monat|schnell|lang/.test(text)) {
    return "Eine Landingpage ist oft in 1–2 Wochen fertig. Größere Projekte liefern wir in Etappen — du siehst Fortschritt, nicht nur Versprechen.";
  }

  if (/kontakt|projekt|start|termin|anfrage|mail|schreib/.test(text)) {
    return 'Super — buche direkt ein kostenloses Erstgespräch unter /kontakt oder nutze den Button „Termin buchen". Wir melden uns schnell bei dir.';
  }

  if (/handwerk|dienstleister|restaurant|coach|fitness|makler|gastro/.test(text)) {
    return "Wir arbeiten vor allem mit Handwerk, Dienstleistern und KMU in DACH — Betriebe, die digital professioneller auftreten und Prozesse vereinfachen wollen.";
  }

  if (/prozess|ablauf|zusammenarbeit|wie läuft|vorgehen/.test(text)) {
    return "Kennenlernen → Konzept → Schmieden → Launch. Wir denken in Lösungen, handeln schnell und arbeiten partnerschaftlich. Kein Bullshit, kein endloses Warten.";
  }

  if (/hosting|wartung|betreu/.test(text)) {
    return "Ja — Hosting und laufende Wartung bieten wir als monatlichen Service an. Deine Website läuft, wir schauen drauf.";
  }

  if (/hallo|hi|hey|moin|servus|guten/.test(text)) {
    return "Hey! Schön, dass du die Demo testest. Frag mich zu Websites, KI, Preisen oder dem Ablauf — oder nutz die Schnell-Buttons.";
  }

  if (/danke|thx|super|cool|geil|nice/.test(text)) {
    return "Gerne! So ein Assistent auf deiner Website — das bauen wir für dich. Noch Fragen?";
  }

  return "Gute Frage! In der Vollversion würde hier eine KI antworten. Für YouForge: Wir schmieden Websites, Web-Apps und KI-Lösungen. Probier die Schnell-Buttons oder frag nach Preis, Ablauf oder KI.";
}
