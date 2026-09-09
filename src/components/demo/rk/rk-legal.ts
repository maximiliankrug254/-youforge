import { RK_BASE } from "@/components/demo/rk/rk-config";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";

export const RK_LEGAL_AS_OF = "März 2026";

export const RK_LEGAL_LINKS = [
  { href: `${RK_BASE}/impressum`, label: "Impressum" },
  { href: `${RK_BASE}/datenschutz`, label: "Datenschutz" },
  { href: `${RK_BASE}/agb`, label: "AGB" },
  { href: `${RK_BASE}/cookies`, label: "Cookies" },
] as const;

export type RkLegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string[];
};

export type RkLegalDoc = {
  slug: "impressum" | "datenschutz" | "agb" | "cookies";
  title: string;
  lead: string;
  sections: RkLegalSection[];
};

const contactBlock = [
  RK_CONTACT.legalName,
  `Inhaber: ${RK_CONTACT.owner}`,
  RK_CONTACT.addressLine1,
  RK_CONTACT.addressLine2,
  "Deutschland",
  "",
  `Telefon: ${RK_CONTACT.phoneDisplay}`,
  `E-Mail: ${RK_CONTACT.email}`,
].join("\n");

export const RK_LEGAL_DOCS: Record<RkLegalDoc["slug"], RkLegalDoc> = {
  impressum: {
    slug: "impressum",
    title: "Impressum",
    lead:
      "Angaben gemäß § 5 TMG. Diese Seite ist Teil einer YouForge Living Demo und ersetzt nicht die Live-Website von Raumkontrast Baumann.",
    sections: [
      {
        heading: "Anbieter",
        paragraphs: [contactBlock],
      },
      {
        heading: "Berufsbezeichnung",
        paragraphs: [
          `${RK_CONTACT.profession}. Die Berufsbezeichnung wurde in Deutschland verliehen.`,
        ],
      },
      {
        heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        paragraphs: [
          `${RK_CONTACT.owner}\n${RK_CONTACT.addressLine1}\n${RK_CONTACT.addressLine2}`,
        ],
      },
      {
        heading: "Umsatzsteuer",
        paragraphs: [
          "Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG wird auf der Live-Website bzw. in Angebotsunterlagen angegeben. In dieser Demo wird sie bewusst nicht veröffentlicht.",
        ],
      },
      {
        heading: "Haftung für Inhalte",
        paragraphs: [
          "Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte übernehmen wir keine Gewähr. Die Nutzung der Inhalte erfolgt auf eigene Gefahr. Mit der reinen Nutzung der Website kommt kein Vertragsverhältnis zustande.",
        ],
      },
      {
        heading: "Haftung für Links",
        paragraphs: [
          "Diese Website kann Verknüpfungen zu Websites Dritter enthalten. Für deren Inhalte sind ausschließlich die jeweiligen Betreiber verantwortlich. Bei Kenntnis von Rechtsverstößen werden entsprechende Links unverzüglich entfernt.",
        ],
      },
      {
        heading: "Urheberrecht",
        paragraphs: [
          "Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Rechteinhabers.",
          "Bildmaterial und Produktfotos können von Herstellern und Partnern stammen und sind entsprechend gekennzeichnet bzw. geschützt. Unerlaubte Nutzung kann zivil- und strafrechtlich verfolgt werden.",
        ],
      },
      {
        heading: "Online-Streitbeilegung",
        paragraphs: [
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr",
          `${RK_CONTACT.legalName} ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
        ],
      },
      {
        heading: "Hinweis zur Living Demo",
        paragraphs: [
          "Gestaltung und technische Umsetzung dieser Präsentation: YouForge (youforge.de). Die Demo dient der Veranschaulichung eines Redesign-Konzepts und ist kein verbindliches Rechtsangebot der Live-Website.",
        ],
      },
    ],
  },

  datenschutz: {
    slug: "datenschutz",
    title: "Datenschutzerklärung",
    lead:
      "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO. Stand gilt für diese Living Demo; die Live-Website kann abweichende Tools nutzen.",
    sections: [
      {
        heading: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlich für die Datenverarbeitung im Sinne dieser Demo-Darstellung ist:",
          contactBlock,
        ],
      },
      {
        heading: "2. Allgemeine Hinweise",
        paragraphs: [
          "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website, zur Kommunikation mit Ihnen oder zur Terminvereinbarung erforderlich ist.",
          "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
        ],
      },
      {
        heading: "3. Hosting und Server-Logfiles",
        paragraphs: [
          "Diese Demo wird über YouForge auf Infrastruktur von Vercel Inc. bereitgestellt. Beim Aufruf der Website können technisch bedingt Server-Logfiles entstehen, etwa:",
        ],
        list: [
          "IP-Adresse",
          "Datum und Uhrzeit der Anfrage",
          "aufgerufene Seite bzw. Datei",
          "Browsertyp und -version",
          "verwendetes Betriebssystem",
          "Referrer-URL",
        ],
        afterList: [
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabilem und sicherem Betrieb). Die Speicherdauer richtet sich nach den Einstellungen des Hostinganbieters.",
        ],
      },
      {
        heading: "4. Kontaktaufnahme",
        paragraphs: [
          "Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt), um Ihre Anfrage zu bearbeiten.",
          "In dieser Living Demo öffnet das Kontaktformular Ihr lokales E-Mail-Programm (mailto). Es findet keine serverseitige Speicherung der Formulardaten durch uns statt.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, wenn der Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        ],
      },
      {
        heading: "5. Cookies und lokale Speicherung",
        paragraphs: [
          "Wir setzen nur technisch notwendige Speichermechanismen ein, insbesondere localStorage bzw. sessionStorage zur Speicherung Ihrer Cookie-Einwilligung. Details finden Sie auf der Seite Cookies.",
          "Es werden in dieser Demo keine Marketing-, Tracking- oder Analyse-Cookies von Drittanbietern eingesetzt.",
        ],
      },
      {
        heading: "6. Social-Media-Links",
        paragraphs: [
          "Auf der Website finden sich Links zu Facebook und Instagram. Beim Anklicken verlassen Sie unsere Website; es gelten die Datenschutzbestimmungen der jeweiligen Anbieter.",
        ],
      },
      {
        heading: "7. Ihre Rechte",
        paragraphs: [
          "Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:",
        ],
        list: [
          "Auskunft (Art. 15 DSGVO)",
          "Berichtigung (Art. 16 DSGVO)",
          "Löschung (Art. 17 DSGVO)",
          "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
          "Datenübertragbarkeit (Art. 20 DSGVO)",
          "Widerspruch (Art. 21 DSGVO)",
          "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
        ],
        afterList: [
          `Zur Ausübung Ihrer Rechte genügt eine Nachricht an ${RK_CONTACT.email}.`,
        ],
      },
      {
        heading: "8. Pflicht zur Bereitstellung",
        paragraphs: [
          "Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne Kontaktdaten können wir Anfragen jedoch nicht beantworten.",
        ],
      },
    ],
  },

  agb: {
    slug: "agb",
    title: "Allgemeine Geschäftsbedingungen",
    lead:
      `AGB für Beratungs-, Liefer- und Montageleistungen von ${RK_CONTACT.legalName}. Abweichende schriftliche Vereinbarungen gehen vor.`,
    sections: [
      {
        heading: "1. Geltungsbereich",
        paragraphs: [
          `Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen ${RK_CONTACT.legalName} (nachfolgend „Anbieter“) und Verbraucherinnen sowie Unternehmern (nachfolgend „Kunde“) über Beratung, Aufmaß, Lieferung und Montage von Raumausstattung, Sonnenschutz, Markisen, Insektenschutz, Bodenbelägen und verwandten Leistungen.`,
          "Entgegenstehende oder abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.",
        ],
      },
      {
        heading: "2. Angebote und Vertragsschluss",
        paragraphs: [
          "Angebote sind freibleibend, sofern nicht ausdrücklich als verbindlich gekennzeichnet. Ein Vertrag kommt durch schriftliche Auftragsbestätigung des Anbieters oder durch Beginn der Ausführung nach Auftrag zustande.",
          "Maß- und Ausführungsangaben beruhen auf dem Aufmaß vor Ort bzw. den vom Kunden bereitgestellten Unterlagen. Änderungen nach Auftragsbestätigung bedürfen der Abstimmung und können Mehrkosten verursachen.",
        ],
      },
      {
        heading: "3. Preise und Zahlung",
        paragraphs: [
          "Es gelten die im Angebot genannten Preise. Gesetzliche Umsatzsteuer wird ausgewiesen, sofern anwendbar.",
          "Sofern nichts anderes vereinbart ist, sind Anzahlungen oder Teilzahlungen gemäß Zahlungsplan fällig. Der Restbetrag ist nach Fertigstellung bzw. Abnahme zahlbar.",
          "Bei Zahlungsverzug ist der Anbieter berechtigt, gesetzliche Verzugszinsen und angemessene Mahnkosten zu verlangen.",
        ],
      },
      {
        heading: "4. Lieferzeiten und Montage",
        paragraphs: [
          "Liefer- und Montagetermine sind unverbindlich, soweit nicht ausdrücklich als Fixtermin vereinbart. Verzögerungen durch Hersteller, höhere Gewalt oder fehlende Mitwirkung des Kunden verlängern Fristen angemessen.",
          "Der Kunde stellt rechtzeitig Zugang, Strom, ausreichende Arbeitsbedingungen und die erforderlichen Genehmigungen (z. B. Eigentümerzustimmung) sicher.",
        ],
      },
      {
        heading: "5. Eigentumsvorbehalt",
        paragraphs: [
          "Gelieferte Waren bleiben bis zur vollständigen Zahlung Eigentum des Anbieters.",
        ],
      },
      {
        heading: "6. Gewährleistung",
        paragraphs: [
          "Es gelten die gesetzlichen Gewährleistungsrechte. Offensichtliche Mängel sind unverzüglich nach Entdeckung zu melden.",
          "Für herstellerseitige Garantien gelten die jeweiligen Herstellerbedingungen; der Anbieter unterstützt bei der Abwicklung im üblichen Rahmen.",
        ],
      },
      {
        heading: "7. Haftung",
        paragraphs: [
          "Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit.",
          "Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den vorhersehbaren, vertragstypischen Schaden. Im Übrigen ist die Haftung ausgeschlossen, soweit gesetzlich zulässig.",
        ],
      },
      {
        heading: "8. Widerruf für Verbraucher",
        paragraphs: [
          "Bei Fernabsatzverträgen stehen Verbraucherinnen und Verbrauchern gesetzliche Widerrufsrechte zu, soweit anwendbar. Bei individuell angefertigten Waren und bei Dienstleistungen, die mit ausdrücklicher Zustimmung vor Ablauf der Widerrufsfrist vollständig erbracht wurden, kann das Widerrufsrecht erlöschen.",
          "Details werden im jeweiligen Angebot bzw. in der Widerrufsbelehrung mitgeteilt.",
        ],
      },
      {
        heading: "9. Schlussbestimmungen",
        paragraphs: [
          "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
          "Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
          "Gerichtsstand für Kaufleute ist der Sitz des Anbieters, soweit gesetzlich zulässig.",
        ],
      },
    ],
  },

  cookies: {
    slug: "cookies",
    title: "Cookie-Hinweis",
    lead:
      "Informationen zu Cookies und ähnlichen Technologien auf dieser Living Demo.",
    sections: [
      {
        heading: "Was sind Cookies?",
        paragraphs: [
          "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Ähnliche Technologien sind z. B. localStorage und sessionStorage im Browser.",
        ],
      },
      {
        heading: "Welche Technologien nutzen wir?",
        paragraphs: [
          "In dieser Demo setzen wir ausschließlich technisch notwendige Speicherung ein:",
        ],
        list: [
          "Einwilligungsstatus für den Cookie-Hinweis (localStorage, Schlüssel rk-cookies)",
          "optionale UI-Zustände der Demo (z. B. Intro), soweit technisch erforderlich",
        ],
        afterList: [
          "Es werden keine Cookies zu Werbezwecken, kein Tracking und keine Analyse-Tools Dritter eingesetzt.",
        ],
      },
      {
        heading: "Rechtsgrundlage",
        paragraphs: [
          "Technisch notwendige Speicherung erfolgt auf Grundlage von § 25 Abs. 2 TTDSG sowie Art. 6 Abs. 1 lit. f DSGVO. Soweit eine Einwilligung abgefragt wird, ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO.",
        ],
      },
      {
        heading: "Verwaltung",
        paragraphs: [
          "Sie können gespeicherte Einträge jederzeit in den Browser-Einstellungen löschen. Nach dem Löschen erscheint der Cookie-Hinweis erneut.",
          "Weitere Informationen zur Datenverarbeitung finden Sie in der Datenschutzerklärung.",
        ],
      },
    ],
  },
};
