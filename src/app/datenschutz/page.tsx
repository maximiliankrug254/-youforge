import type { Metadata } from "next";
import { legalConfig, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

const linkClass = "text-accent hover:underline";

export default function DatenschutzPage() {
  return (
    <div className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Datenschutzerklärung</h1>
        <p className="mt-2 text-sm text-muted">Stand: {legalConfig.asOf}</p>

        <section className="mt-12 space-y-8 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-foreground">1. Verantwortlicher</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              {legalConfig.company}
              <br />
              {legalConfig.street}
              <br />
              {legalConfig.cityLine}
              <br />
              {legalConfig.country}
              <br />
              <br />
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir
              verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung
              einer funktionsfähigen Website, zur Kommunikation mit Ihnen oder zur
              Terminvereinbarung erforderlich ist.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Personenbezogene Daten sind alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              3. Hosting und Server-Logfiles
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website
              werden automatisch technische Informationen erfasst und in
              Server-Logfiles gespeichert. Dazu können insbesondere gehören:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>aufgerufene Seite bzw. Datei</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              zur Sicherstellung eines stabilen und sicheren Betriebs der Website.
              Die Logfiles werden gelöscht, sobald sie für die Zwecke der Erhebung
              nicht mehr erforderlich sind.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Anbieter: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
              USA. Weitere Informationen finden Sie in der Datenschutzerklärung von{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              4. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
              dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
              und an dem Schloss-Symbol in der Browserzeile.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              5. Kontakt per E-Mail
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
              übermittelten Daten (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht)
              von uns gespeichert, um Ihre Anfrage zu bearbeiten. Die Verarbeitung
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
              zusammenhängt, andernfalls auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Die Daten verbleiben bei uns, bis der Zweck der Speicherung entfällt
              oder Sie uns zur Löschung auffordern, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">6. Projekt-Briefing</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Auf der Seite „Projekt-Briefing“ können Sie uns Ihr Vorhaben in
              strukturierter Form mitteilen (10 Fragen). Beim Absenden werden die
              Daten aus Ihrem Browser direkt an den kostenfreien Dienst Web3Forms (
              <a
                href="https://web3forms.com"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                web3forms.com
              </a>
              ), der die Nachricht per E-Mail an uns weiterleitet. Dabei werden
              u. a. folgende Daten verarbeitet:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Angaben zu Ihrem Projekt (Unternehmen, Ziel, Budget, Timeline u. a.)</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch
              Aktivierung der Checkbox beim Absenden) sowie lit. b DSGVO
              (vorvertragliche Maßnahmen). Die Daten werden gelöscht, sobald die
              Anfrage abschließend bearbeitet ist und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Weitere Informationen zum Datenschutz bei Web3Forms finden Sie unter{" "}
              <a
                href="https://web3forms.com/privacy"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                web3forms.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              7. Terminbuchung über Calendly
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Für die Online-Terminbuchung nutzen wir den Dienst Calendly. Über
              Links auf unserer Website (z. B. Kontakt, Startseite) gelangen Sie
              zur Buchungsseite von Calendly. Beim Buchen eines Termins werden
              die von Ihnen eingegebenen Daten direkt an Calendly übermittelt,
              z. B.:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>gewählter Termin</li>
              <li>ggf. weitere Angaben im Buchungsformular</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed">
              Zweck der Verarbeitung ist die Vereinbarung und Durchführung eines
              Beratungsgesprächs. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer effizienten Terminplanung).
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Anbieter: Calendly LLC, 3423 Piedmont Road NE, Atlanta, GA 30305, USA.
              Beim Aufruf der Buchungsseite können Cookies und
              ähnliche Technologien eingesetzt werden. Es kann zu einer
              Datenübermittlung in die USA kommen. Weitere Informationen finden Sie in
              der Datenschutzerklärung von{" "}
              <a
                href="https://calendly.com/privacy"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendly
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              8. KI-Demo auf der Website
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Auf dieser Website befindet sich eine interaktive Demo eines
              Chat-Assistenten. Diese Demo dient ausschließlich zur Veranschaulichung
              und läuft regelbasiert im Browser. Ihre Eingaben werden nicht an externe
              KI-Dienste übermittelt und nicht dauerhaft auf unseren Servern
              gespeichert.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">9. Vercel Analytics</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Wir nutzen Vercel Analytics, um die Nutzung unserer Website in
              aggregierter Form auszuwerten. Dabei werden keine Cookies gesetzt und
              keine personenbezogenen Profile erstellt. Die Verarbeitung erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              technischen Optimierung unseres Webauftritts).
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Weitere Informationen finden Sie in der Datenschutzerklärung von{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              10. Speicherdauer
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Wir speichern personenbezogene Daten nur so lange, wie dies für die
              jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
              bestehen. Nach Wegfall des Zwecks oder Ablauf einer Frist werden die
              Daten gelöscht, sofern keine gesetzlichen Pflichten einer weiteren
              Speicherung entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">11. Ihre Rechte</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed">
              Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter{" "}
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
              .
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen datenschutzrechtliche Vorschriften
              verstößt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              12. Aktualität dieser Datenschutzerklärung
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht oder Änderungen
              unserer Leistungen bzw. der eingesetzten Technologien abbildet. Für Ihren
              erneuten Besuch gilt dann die jeweils aktuelle Fassung.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
