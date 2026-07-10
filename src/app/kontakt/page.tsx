import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Termin buchen oder Projekt-Briefing ausfüllen — zwei Wege zu YouForge.",
};

export default function KontaktPage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              label="Kontakt"
              title="Wie möchtest du starten?"
              description="Zwei Wege — du entscheidest. Kein Umweg, kein Warten."
              align="center"
              className="mx-auto"
            />
          </FadeIn>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            <FadeIn delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/30 p-8 transition-colors hover:border-accent/30">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Weg 1
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Termin buchen
                </h2>
                <p className="mt-3 flex-1 text-muted">
                  30 Minuten, unverbindlich — du wählst direkt bei Calendly
                  deinen Slot. Öffnet sofort in neuem Tab.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  <li>✓ Direkter Austausch</li>
                  <li>✓ Sofort Klarheit</li>
                  <li>✓ Termin in 2 Klicks</li>
                </ul>
                <Button href={siteConfig.calendly} size="lg" className="mt-8 w-full">
                  Termin wählen →
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/30 p-8 transition-colors hover:border-accent/30">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Weg 2
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Projekt-Briefing
                </h2>
                <p className="mt-3 flex-1 text-muted">
                  10 kurze Fragen — schriftlich, in ca. 5 Minuten. Wir melden
                  uns mit einer Einschätzung per E-Mail.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  <li>✓ Kein Call nötig</li>
                  <li>✓ Klare Projektinfos</li>
                  <li>✓ Antwort in 24h</li>
                </ul>
                <Button href="/briefing" size="lg" variant="secondary" className="mt-8 w-full">
                  Briefing starten →
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-10 text-center text-sm text-muted">
              Oder schreib uns direkt:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
