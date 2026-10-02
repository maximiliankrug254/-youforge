import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WebsiteCheck } from "@/components/website-check/WebsiteCheck";

export const metadata: Metadata = {
  title: "Kostenloser Website-Check",
  description:
    "Wie gut findet Google deine Website? Kostenloser Schnell-Check in unter einer Minute: Handytauglichkeit, Ladezeit, Firmeneintrag und mehr.",
  alternates: { canonical: "/website-check" },
};

export default async function WebsiteCheckPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { url } = await searchParams;
  const startUrl = typeof url === "string" ? url.slice(0, 300) : "";

  return (
    <div className="pt-24">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeading
              as="h1"
              label="Website-Check"
              title="Wie gut findet Google deine Website?"
              description="Kostenloser Schnell-Check: Handytauglichkeit, Ladezeit, Firmeneintrag, Telefon und mehr – mit deinen drei wichtigsten Baustellen."
              align="center"
            />
          </FadeIn>

          <div className="mt-12">
            <WebsiteCheck startUrl={startUrl} />
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionHeading
              label="Prüfpunkte"
              title="Was der Website-Check prüft"
              description="Der Schnell-Check schaut sich deine Startseite so an, wie Google und deine Kunden sie sehen."
            />
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pruefpunkte.map((punkt, i) => (
              <FadeIn key={punkt.titel} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-surface/30 p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{punkt.titel}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{punkt.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-16 max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight">Was du bekommst</h2>
              <p className="mt-4 text-muted">
                Nach etwa einer Minute siehst du eine Note von 0 bis 100 und die drei wichtigsten Baustellen deiner
                Startseite. Kostenlos und ohne Anmeldung. So weißt du in kurzer Zeit, ob deine Website Interessenten
                überzeugt oder ob sich ein genauerer Blick lohnt.
              </p>
              <p className="mt-4 text-muted">
                Im vollständigen Bericht prüfen wir zusätzlich alle wichtigen Unterseiten, messen die Ladezeit jeder
                Seite und sortieren, was dringend ist und was warten kann. Jeden Bericht schaut sich Max persönlich an,
                bevor er verschickt wird – auf Wunsch setzen wir alles für dich um.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

const pruefpunkte = [
  {
    titel: "Handytauglichkeit",
    text: "Die meisten Kunden suchen am Handy. Wir prüfen, ob sich deine Seite an kleine Bildschirme anpasst.",
  },
  {
    titel: "Ladezeit",
    text: "Mit Googles eigenem Testlauf: Wie schnell ist der Hauptinhalt am Handy sichtbar? Wer zu lange wartet, springt ab.",
  },
  {
    titel: "Firmeneintrag für Google",
    text: "Kann Google Name, Adresse und Telefonnummer deines Betriebs eindeutig auslesen? Das zählt besonders bei der Suche in deiner Region.",
  },
  {
    titel: "Seitentitel und Beschreibung",
    text: "Das sehen Interessenten in den Suchergebnissen zuerst. Sind beide vorhanden, passend lang und aussagekräftig?",
  },
  {
    titel: "Überschriften und Text",
    text: "Gibt es eine klare Hauptüberschrift, und steht genug Inhalt auf der Seite, damit Google versteht, was du anbietest?",
  },
  {
    titel: "Telefon und Technik",
    text: "Lässt sich deine Nummer am Handy antippen? Ist die Verbindung verschlüsselt? Gibt es Sitemap, robots.txt und Bildbeschreibungen?",
  },
];
