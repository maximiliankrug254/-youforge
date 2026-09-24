import { AA } from "@/components/demo/stelzer/aa-config";

export type AaLegalBlock = { heading: string; paragraphs: readonly string[] };

const firm = AA.brand.full;
const address = `${AA.place.address1}, ${AA.place.address2}`;

export const AA_LEGAL_NOTE =
  "Angaben zum Betrieb nach der veröffentlichten Website. Dies ist eine Living Demo von YouForge.";

export const AA_IMPRESSUM: AaLegalBlock[] = [
  {
    heading: "Anbieter",
    paragraphs: [
      firm,
      AA.place.address1,
      AA.place.address2,
      "Deutschland",
    ],
  },
  {
    heading: "Vertreten durch",
    paragraphs: ["Geschäftsführer: Marcel Stelzer und Georg Heßelmann"],
  },
  {
    heading: "Kontakt",
    paragraphs: [
      `Telefon: ${AA.contact.phoneDisplay}`,
      `Mobil: ${AA.contact.mobileDisplay}`,
      `E-Mail: ${AA.contact.email}`,
    ],
  },
  {
    heading: "Register",
    paragraphs: [AA.legal.court],
  },
  {
    heading: "Kammer",
    paragraphs: [`Handwerkskammer ${AA.legal.chamber.replace("HWK ", "")}`],
  },
  {
    heading: "Umsatzsteuer",
    paragraphs: [AA.legal.vat],
  },
];

export const AA_DATENSCHUTZ: AaLegalBlock[] = [
  {
    heading: "Verantwortlich",
    paragraphs: [
      `${firm}, ${address}.`,
      `E-Mail: ${AA.contact.email}. Telefon: ${AA.contact.phoneDisplay}.`,
    ],
  },
  {
    heading: "Diese Demo",
    paragraphs: [
      "Die Seite hat kein Formular und kein Kundenkonto. Es wird hier kein Profil von Ihnen angelegt.",
      "Wenn Sie anrufen, eine E-Mail schreiben oder WhatsApp öffnen, verlassen Sie diese Seite. Für diesen Weg gilt dann der jeweilige Dienst.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "Auf dieser Demo setzen wir keine Cookies für Statistik oder Werbung.",
    ],
  },
  {
    heading: "Ihre Rechte",
    paragraphs: [
      "Auskunft, Berichtigung und Löschung richten Sie an die Adresse oben.",
    ],
  },
];

export const AA_COOKIES: AaLegalBlock[] = [
  {
    heading: "Keine Tracking-Cookies",
    paragraphs: [
      "Diese Demo setzt keine Cookies für Statistik oder Werbung. Ein Einwilligungsbanner ist deshalb nicht eingeblendet.",
      "Technisch nötige Daten Ihres Browsers verarbeitet der Server nur, um die Seite auszuliefern.",
    ],
  },
];

export const AA_AGB: AaLegalBlock[] = [
  {
    heading: "Angebot und Annahme",
    paragraphs: [
      `Aufträge der ${firm} kommen durch Angebot und Annahme zustande.`,
      "Maßgeblich ist das schriftliche Angebot, das Sie von uns erhalten.",
    ],
  },
  {
    heading: "Hinweis zur Demo",
    paragraphs: [
      "Diese Seite ist eine Living Demo. Sie ersetzt keine Vertragsunterlagen des Betriebs.",
      `Fragen zum Auftrag richten Sie an ${AA.contact.email} oder unter ${AA.contact.phoneDisplay}.`,
    ],
  },
];
