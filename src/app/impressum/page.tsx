import type { Metadata } from "next";
import { legalConfig, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  const addressLine = `${legalConfig.street}, ${legalConfig.cityLine}, ${legalConfig.country}`;

  return (
    <div className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>
        <p className="mt-2 text-sm text-muted">Stand: {legalConfig.asOf}</p>

        <section className="mt-12 space-y-8 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-2">
              {legalConfig.company}
              <br />
              {legalConfig.street}
              <br />
              {legalConfig.cityLine}
              <br />
              {legalConfig.country}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-2">
              {legalConfig.company}
              <br />
              {addressLine}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Haftungsausschluss
            </h2>
            <h3 className="mt-4 font-medium text-foreground">Haftung für Inhalte</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
              die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
              jedoch keine Gewähr übernehmen.
            </p>
            <h3 className="mt-4 font-medium text-foreground">Haftung für Links</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
