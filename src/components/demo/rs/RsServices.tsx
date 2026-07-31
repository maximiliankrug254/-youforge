"use client";

import { RsReveal } from "@/components/demo/rs/RsReveal";

const services = [
  {
    title: "Entrümpelung",
    text: "Wohnung, Keller, Garage, Dachboden oder ganzes Haus — wir räumen schnell, sauber und diskret.",
  },
  {
    title: "Umzug",
    text: "Privat- und Firmenumzüge, auch überregional — inkl. Be-/Entladen und Möbelmontage auf Wunsch.",
  },
  {
    title: "Haushaltsauflösung",
    text: "Inklusive Wertanrechnung, diskret und respektvoll — auch in Erbschaftssituationen.",
  },
  {
    title: "Sperrmüll & Schrott",
    text: "Fachgerechte Entsorgung nach Vorschrift — Abholung direkt vor Ort.",
  },
] as const;

export function RsServices() {
  return (
    <section className="bg-[var(--rs-cream-deep)] px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <RsReveal className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
            Leistungen
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-rs-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-[var(--rs-ink)]">
            Was wir für Sie übernehmen
          </h2>
          <p className="mt-4 text-[var(--rs-muted)]">
            Klar, ruhig, ohne Überraschungen — damit Sie den Kopf frei behalten.
          </p>
        </RsReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((item, i) => (
            <RsReveal key={item.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-[rgba(28,25,23,0.08)] bg-[var(--rs-cream)] p-7 shadow-[0_16px_40px_rgba(28,25,23,0.05)] transition hover:border-[rgba(196,163,90,0.35)] sm:p-8">
                <span className="font-[family-name:var(--font-rs-display)] text-3xl font-medium text-[var(--rs-ochre)]">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-rs-display)] text-xl font-medium text-[var(--rs-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--rs-muted)]">
                  {item.text}
                </p>
              </article>
            </RsReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
