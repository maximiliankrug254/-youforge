import type { Metadata } from "next";
import Link from "next/link";
import { legalConfig, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hinweise zu KI-Inhalten",
  description:
    "Transparenz zu KI-Demo, automatisierten Assistenten und KI-unterstützten Inhalten auf youforge.de.",
};

export default function KiHinweisePage() {
  return (
    <div className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Transparenz · EU AI Act
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Hinweise zu KI-Inhalten
        </h1>
        <p className="mt-2 text-sm text-muted">Stand: {legalConfig.asOf}</p>

        <div className="mt-10 space-y-8 text-muted">
          <p className="text-sm leading-relaxed text-foreground/90">
            YouForge kennzeichnet automatisierte Systeme und informiert über
            KI-unterstützte Inhalte — klar, ohne Panik, im Sinne der
            Transparenzpflichten der EU-KI-Verordnung (AI Act, Art. 50).
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              1. Interaktive KI-Demo
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Auf der Startseite gibt es eine interaktive Demo eines
              Chat-Assistenten. Dabei handelt es sich um ein{" "}
              <strong className="font-medium text-foreground">
                automatisiertes System — kein Mensch
              </strong>
              . Die Demo läuft regelbasiert im Browser und dient nur zur
              Veranschaulichung. Details:{" "}
              <Link href="/datenschutz#ki-demo" className="text-accent hover:underline">
                Datenschutz
              </Link>
              {" · "}
              <Link href="/#ki-demo" className="text-accent hover:underline">
                Zur Demo
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              2. Texte &amp; Website-Inhalte
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Texte, Konzepte und Designentscheidungen auf dieser Website können
              unter Einsatz von KI-Tools entstanden sein. Die redaktionelle
              Verantwortung und die finale Freigabe liegen bei {siteConfig.name}.
              Marketing- und Informationsinhalte sind keine automatisierte
              Interaktion mit einem Chatbot.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              3. Bilder, Grafiken &amp; Illustrationen
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Portfolio-Vorschaubilder sind in der Regel Screenshots realer
              Website-Oberflächen. Illustrative Grafiken (z. B. die Wireframe-/
              Roboter-Darstellung in der KI-Section) sind{" "}
              <strong className="font-medium text-foreground">
                synthetische bzw. programmierte Visuals
              </strong>
              {" "}— keine Fotos realer Personen. Wo Inhalte klar KI-generiert
              oder synthetisch sind, kennzeichnen wir sie entsprechend.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              4. Living Demos / Referenzwebsites
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Unter{" "}
              <code className="text-foreground">/demo/…</code> und in Portfolio-
              Vorschauen gezeigte Auftritte sind von YouForge gestaltete
              Konzept- bzw. Pitch-Demos. Sie sind keine eigenständigen
              KI-Produkte; etwaige KI-Funktionen dort werden gesondert kenntlich
              gemacht, sofern vorhanden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              5. Verantwortung
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Anbieter dieser Website: siehe{" "}
              <Link href="/impressum" className="text-accent hover:underline">
                Impressum
              </Link>
              . Bei Fragen zu KI-Inhalten:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
