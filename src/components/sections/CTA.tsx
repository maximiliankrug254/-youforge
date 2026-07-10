import { FadeIn } from "@/components/animations/FadeIn";
import { DotGrid } from "@/components/animations/DotGrid";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32 lg:px-8">
      <DotGrid />

      <div className="relative z-10 mx-auto max-w-2xl">
        <FadeIn>
          <div className="glass-card rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Los geht&apos;s
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Bereit?
            </h2>
            <div className="mx-auto mt-4 h-1 w-1 rounded-full bg-foreground" />
            <p className="mx-auto mt-6 max-w-md text-muted">
              Kurz. Direkt. Kein Verkaufsdruck.
              <br />
              Erzähl uns von deiner Vision — wir finden den Weg.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={siteConfig.calendly} size="lg">
                Termin buchen →
              </Button>
              <Button href="/kontakt" variant="ghost" size="lg">
                Vision schmieden →
              </Button>
              <Button href="/leistungen" variant="ghost" size="lg" className="border-border/30">
                Leistungen
              </Button>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/50">
              Unverbindlich · Partnerschaftlich · Ehrlich
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
