import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process, pricingTiers, services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Websites, Landingpages, Web-Apps, KI-Automatisierung und mehr — digitale Lösungen von YouForge.",
};

export default function LeistungenPage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              label="Leistungen"
              title="Alles, was wir schmieden"
              description="Von der ersten Idee bis zum Launch — und mit optionaler laufender Betreuung."
            />
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.05}>
              <article className="group rounded-2xl border border-border bg-surface/30 p-8 transition-colors hover:border-accent/20 hover:bg-surface/50 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-4 max-w-2xl text-lg text-muted">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-4xl font-bold text-foreground/5 transition-colors group-hover:text-accent/20">
                    0{i + 1}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              label="Prozess"
              title="So arbeiten wir zusammen"
              description="Transparent, partnerschaftlich und ohne Umwege."
            />
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-sm font-mono font-medium text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        id="preise"
        className="border-t border-border px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              label="Orientierung"
              title="Was es ungefähr kostet"
              description="Keine Katalog-Preisliste. Festpreis nach Briefing — du weißt vorher, was du zahlst. Kein Nachverrechnungs-Theater."
            />
          </FadeIn>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <FadeIn key={tier.label} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/30 p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    {tier.label}
                  </h3>
                  <p className="mt-3 text-2xl font-bold tracking-tight text-accent">
                    {tier.price}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {tier.hint}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm text-muted">
              Ein Ansprechpartner. Von Briefing bis Launch. Hosting und
              Betreuung optional.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Button href="/briefing" size="lg">
                Briefing starten →
              </Button>
              <Button href="/kontakt" variant="ghost" size="lg">
                Lass uns reden
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
