/**
 * Kunden-Fassung („--kunde“): je Prüfpunkt nur, WAS zu tun ist – ohne Klickwege, Code oder Plugin-Namen.
 * Der Betrieb soll verstehen, was fehlt, die Umsetzung aber mit YouForge machen, nicht allein mit seinem IT-Dienstleister.
 * Die technischen „So beheben“-Texte bleiben im internen Bericht.
 */
const AUFGABEN = {
  status: "Fehler der Seite beheben, damit sie normal lädt.",
  indexierbar: "Seite für Google freigeben.",
  robots: { warnung: "robots.txt anlegen.", fehler: "Sperre für Google aufheben." },
  sitemap: "Sitemap anlegen bzw. vervollständigen.",
  "sitemap-benutzer": "Benutzerseiten aus der Sitemap entfernen.",
  https: "Verschlüsselung (HTTPS) einrichten.",
  title: "Seitentitel neu formulieren – mit Leistung und Ort.",
  description: "Beschreibung für Google neu formulieren – mit Leistung, Ort und Nutzen.",
  canonical: "Haupt-Adresse der Seite für Google festlegen.",
  lang: "Sprache der Seite hinterlegen.",
  viewport: "Website für Handys anpassen.",
  h1: "Eine klare Hauptüberschrift festlegen.",
  gliederung: "Überschriften sauber ordnen.",
  alt: "Bilder für Google beschreiben.",
  og: "Vorschau für WhatsApp, Facebook & Co. einrichten.",
  lcp: "Ladezeit verkürzen – vor allem im oberen Bereich der Seite.",
  "google-feld": "Ladezeit und Seitenaufbau für echte Besucher verbessern.",
  cls: "Seitenaufbau beruhigen, damit beim Laden nichts verrutscht.",
  gewicht: "Datenmenge der Seite verringern.",
  woerter: "Mehr eigenen Text: Leistungen, Ablauf, Einsatzgebiet.",
  "kw-title": "Suchbegriff in den Seitentitel aufnehmen.",
  "kw-h1": "Suchbegriff in die Hauptüberschrift aufnehmen.",
  "kw-text": "Suchbegriff natürlich im Text verwenden.",
  faq: "Häufige Kundenfragen auf der Website beantworten.",
  links: "Unterseiten besser miteinander verlinken.",
  kontakt: "Gut sichtbaren Anruf- und Kontakt-Knopf einbauen.",
  schema: "Firmeneintrag für Google einbauen.",
  nap: "Firmendaten im Eintrag vervollständigen – genau wie im Google-Profil.",
  "schema-extra": "Firmeneintrag um weitere Angaben ergänzen.",
  tel: "Telefonnummer antippbar machen.",
  adresse: "Adresse sichtbar auf der Seite zeigen.",
  ort: "Ort bzw. Einsatzgebiet deutlicher nennen.",
  "schema-website": "Firmeneintrag auf allen wichtigen Seiten einbauen.",
  hreflang: "Sprachfassungen für Google miteinander verknüpfen.",
  verwaist: "Diese Seiten von anderen Seiten aus verlinken.",
  "dup-title": "Jeder Seite einen eigenen Titel geben.",
  "dup-desc": "Jeder Seite eine eigene Beschreibung geben.",
};

export function aufgabe(c) {
  const eintrag = AUFGABEN[c.id];
  if (typeof eintrag === "string") return eintrag;
  return eintrag?.[c.status] ?? eintrag?.fehler ?? "Beheben – sprich uns an.";
}
