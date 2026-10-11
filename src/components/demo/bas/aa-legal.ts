import { AA } from "@/components/demo/bas/aa-config";

export type AaLegalBlock = { heading: string; paragraphs: readonly string[] };

const firm = AA.brand.full;
const address = `${AA.place.address1}, ${AA.place.address2} ${AA.place.region}`;

export const AA_LEGAL_NOTE =
  "Angaben zum Betrieb nach der veröffentlichten Website. Dies ist eine Living Demo von YouForge.";

export const AA_IMPRESSUM: AaLegalBlock[] = [
  {
    heading: "Herausgeber",
    paragraphs: [firm, AA.place.address1, `${AA.place.address2} ${AA.place.region}`],
  },
  {
    heading: "Vertreten durch",
    paragraphs: [`Geschäftsführer: ${AA.founder.name}`],
  },
  {
    heading: "Kontakt",
    paragraphs: [
      `Telefon: ${AA.contact.phoneDisplay}`,
      `Telefax: ${AA.contact.faxDisplay}`,
      `E-Mail: ${AA.contact.email}`,
    ],
  },
  {
    heading: "Register",
    paragraphs: [`Registergericht: ${AA.legal.court}`],
  },
  {
    heading: "Umsatzsteuer",
    paragraphs: [AA.legal.vat],
  },
  {
    heading: "Urheberrecht",
    paragraphs: [
      "Alle Inhalte und die Gestaltung dieser Seiten sind urheberrechtlich geschützt.",
      `Alle Urheber- und Nutzungsrechte liegen bei der Firma ${firm}.`,
    ],
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
      "Wenn Sie anrufen, eine E-Mail schreiben oder Facebook öffnen, verlassen Sie diese Seite. Für diesen Weg gilt dann der jeweilige Dienst.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: ["Auf dieser Demo setzen wir keine Cookies für Statistik oder Werbung."],
  },
  {
    heading: "Ihre Rechte",
    paragraphs: ["Auskunft, Berichtigung und Löschung richten Sie an die Adresse oben."],
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
