/**
 * Zentrale SEO-Daten eines Betriebs. Ziel im Kundenprojekt: src/lib/seo/seo-config.ts
 * Name, Adresse und Telefon exakt so schreiben wie im Google-Unternehmensprofil.
 */
export const SEO = {
  firma: "Malerbetrieb Müller GmbH",
  kurzname: "Maler Müller",
  typ: "HousePainter",
  hauptleistung: "Maler",
  website: "https://www.maler-mueller.de",
  telefon: "+49 8031 123456",
  telefonAnzeige: "08031 123456",
  email: "info@maler-mueller.de",
  adresse: {
    strasse: "Musterstraße 12",
    plz: "83022",
    ort: "Rosenheim",
    land: "DE",
  },
  geo: { lat: 47.8561, lng: 12.1289 },
  einsatzgebiet: ["Rosenheim", "Kolbermoor", "Bad Aibling", "Prien am Chiemsee"],
  oeffnungszeiten: [
    { tage: ["Monday", "Tuesday", "Wednesday", "Thursday"], von: "07:30", bis: "17:00" },
    { tage: ["Friday"], von: "07:30", bis: "13:00" },
  ],
  leistungen: ["Innenanstrich", "Fassadenanstrich", "Tapezierarbeiten", "Lackierarbeiten"],
  logo: "/logo.png",
  bild: "/og-bild.jpg",
  profile: ["https://www.instagram.com/maler.mueller", "https://g.page/maler-mueller"],
  faq: [
    {
      frage: "Wie schnell bekomme ich ein Angebot?",
      antwort: "In der Regel innerhalb von drei Werktagen nach dem Termin vor Ort.",
    },
    {
      frage: "In welchen Orten sind Sie tätig?",
      antwort: "In Rosenheim und Umgebung, unter anderem in Kolbermoor, Bad Aibling und Prien am Chiemsee.",
    },
  ],
} as const;

export type SeoConfig = typeof SEO;
