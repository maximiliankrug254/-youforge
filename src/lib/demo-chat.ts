export const DEMO_MESSAGE_LIMIT = 8;

export const demoScenarios = [
  {
    id: "anfrage",
    label: "Kundenanfrage",
    prompt: "Habt ihr noch Termin frei diese Woche?",
  },
  {
    id: "preis",
    label: "Preisfrage",
    prompt: "Was kostet eine Website?",
  },
  {
    id: "ablauf",
    label: "Ablauf",
    prompt: "Wie läuft die Zusammenarbeit?",
  },
  {
    id: "ki",
    label: "KI für mein Business",
    prompt: "Bietet ihr KI an?",
  },
] as const;

/** @deprecated use demoScenarios */
export const demoQuickReplies = demoScenarios.map((s) => s.prompt);

export const demoWelcomeMessage =
  "Ich bin dein Website-Assistent — Demo von YouForge. Frag nach Preis, Ablauf oder KI — oder tipp eine echte Kundenfrage.";

export const demoLimitMessage =
  "Demo-Limit erreicht. In der Vollversion antwortet dein Assistent ohne Limit — mit deinem Wissen, deinem Ton, 24/7.";

export function getDemoResponse(input: string): string {
  const text = input.toLowerCase().trim();

  if (/preis|kost|budget|teuer|euro|€|angebot|paket/.test(text)) {
    return "Festpreis, klarer Scope. Landingpages starten unter 1.000 € — größere Auftritte und Systeme danach. Transparent, ohne Nachverrechnungs-Theater.";
  }

  if (/termin|frei|diese woche|öffnungs|wann/.test(text)) {
    return "So antwortet ein Assistent auf deiner Seite: verfügbare Slots prüfen, vorqualifizieren, Termin vorschlagen — du bekommst nur noch heiße Leads.";
  }

  if (/website|webseite|landing|homepage|auftritt/.test(text)) {
    return "Wir schmieden moderne Websites und Landingpages — schnell, responsiv, auf dein Business zugeschnitten. Oft in 1–2 Wochen live.";
  }

  if (/ki|künstlich|automatis|chatbot|bot|intelligenz|assistent/.test(text)) {
    return "Genau das hier — nur mit deinem Wissen und deinem Ton. FAQ, Anfragen, Vorqualifizierung. Auf deiner Website, rund um die Uhr.";
  }

  if (/dauer|zeit|woche|monat|schnell|lang/.test(text)) {
    return "Landingpage oft in 1–2 Wochen. Größere Systeme in Etappen — du siehst Fortschritt, nicht nur Versprechen.";
  }

  if (/kontakt|projekt|start|anfrage|mail|schreib|gespräch/.test(text)) {
    return "Dann lass uns sprechen. Unter /kontakt buchst du ein kurzes Erstgespräch — ohne Pitch-Druck, mit klarem nächsten Schritt.";
  }

  if (/handwerk|dienstleister|restaurant|coach|fitness|makler|gastro|salon|garten/.test(text)) {
    return "Genau dafür: Handwerk, Dienstleister, KMU. Weniger WhatsApp-Chaos, mehr qualifizierte Anfragen — digital, aber menschlich.";
  }

  if (/prozess|ablauf|zusammenarbeit|wie läuft|vorgehen/.test(text)) {
    return "Kennenlernen → Konzept → Schmieden → Launch. Kurz, direkt, partnerschaftlich. Kein Bullshit, kein monatelanges Warten.";
  }

  if (/hosting|wartung|betreu/.test(text)) {
    return "Hosting und Wartung als laufender Service — optional. Deine Seite läuft, wir behalten den Überblick.";
  }

  if (/hallo|hi|hey|moin|servus|guten/.test(text)) {
    return "Hey. Frag nach Preis, Ablauf oder KI — oder tipp, was ein Kunde dich sonst per WhatsApp fragt.";
  }

  if (/danke|thx|super|cool|geil|nice/.test(text)) {
    return "Gerne. So einen Assistenten schmieden wir für dich — mit deinem Business-Wissen hinter den Antworten.";
  }

  return "In der Vollversion antwortet hier echte Logik mit deinem Wissen. Für YouForge: Websites, Systeme und KI-Assistenten. Probier die Szenarien oben.";
}
