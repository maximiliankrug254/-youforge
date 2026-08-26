import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { serviceCards } from "@/lib/constants";

export function ServicesShowcase() {
  return (
    <section className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel number="03" title="LEISTUNGEN" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Was wir für dich schmieden.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {serviceCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-surface/40 p-8 transition-colors hover:border-foreground/10 hover:bg-surface/70">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {card.label}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight">{card.title}</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chaos" />
                    {card.problem}
                  </li>
                  <li className="flex gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {card.solution}
                  </li>
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10">
          <Link
            href="/leistungen"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Alle Leistungen ansehen →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
