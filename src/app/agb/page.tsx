import type { Metadata } from "next";
import { legalConfig, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen von YouForge (MK VENTURES 360 LLC) für Geschäftskunden.",
  robots: { index: false },
};

export default function AgbPage() {
  const addressLine = `${legalConfig.street}, ${legalConfig.cityLine}, ${legalConfig.country}`;

  return (
    <div className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="mt-2 text-sm text-muted">Stand: {legalConfig.asOf}</p>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Dies ist eine Vertragsgrundlage für Geschäftskunden. Bei Widerspruch
          zwischen diesen AGB und einem individuellen Angebot gilt das Angebot.
        </p>

        <section className="mt-12 space-y-8 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              1. Anbieter
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Anbieter der Leistungen unter der Marke YouForge ist:
              <br />
              <br />
              {legalConfig.company}
              <br />
              {addressLine}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              2. Geltungsbereich
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne des
              geltenden Rechts (B2B). Verträge mit Verbrauchern werden über diese
              Website nicht geschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              3. Leistungen
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Gegenstand ist die Erstellung von Websites und Landingpages nach
              individuellem Angebot. Art und Umfang der Leistung ergeben sich
              ausschließlich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">4. Zahlung</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Sofern im Angebot nichts anderes geregelt ist, sind 50&nbsp;% des
              vereinbarten Preises bei Auftragserteilung und 50&nbsp;% bei
              Live-Schaltung der Website (Launch) fällig.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              5. Nutzungsrechte
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Nutzungsrechte an Code, Design und der fertigen Website gehen erst
              nach vollständiger Zahlung auf den Kunden über — nicht bereits nach
              der ersten Rate.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              6. Korrekturen
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Im Preis sind drei Korrekturrunden enthalten. Weitere Änderungen
              erfolgen nach Aufwand oder auf Grundlage eines neuen Angebots.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              7. Mitwirkung des Kunden
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Texte, Logo und Bilder stellt der Kunde bereit, sofern sie nicht
              gesondert beauftragt wurden. Verzögerungen durch fehlende Inhalte
              verlängern die vereinbarte Umsetzungszeit entsprechend.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              8. Rechtstexte des Kunden
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Impressum, Datenschutzerklärung und vergleichbare Rechtstexte der
              Kunden-Website sind Sache des Kunden bzw. seines Rechtsberaters.
              YouForge setzt gelieferte Texte nach Weisung ein, ohne sie
              rechtlich zu prüfen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              9. Keine Erfolgsgarantie
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Es wird keine Garantie für Suchmaschinen-Rankings oder bestimmte
              PageSpeed-Werte übernommen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">10. Haftung</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Die Haftung richtet sich nach den gesetzlichen Vorschriften. Bei
              leichter Fahrlässigkeit haften wir nicht, es sei denn, es handelt
              sich um die Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten), um Schäden aus der Verletzung des Lebens, des
              Körpers oder der Gesundheit oder um zwingende gesetzliche
              Haftungstatbestände. Bei Verletzung von Kardinalpflichten ist die
              Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              11. Hosting und Domain
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Hosting und Domain können über Drittanbieter laufen (z.&nbsp;B.
              Vercel). Sie sind nicht automatisch im Website-Preis enthalten,
              sofern im Angebot nichts anderes steht.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              12. Anwendbares Recht
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Es gilt das Recht des Staates Wyoming, USA, soweit gesetzlich
              zulässig. Zwingendes Recht am Sitz des Kunden bleibt unberührt.
              Weicht das individuelle Angebot hiervon ab, gilt das im Angebot
              genannte Recht.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
