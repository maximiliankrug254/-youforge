"use client";

import { RsReveal } from "@/components/demo/rs/RsReveal";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

const services = [
  {
    title: "Entrümpelung",
    price: `ab ${RS_CONTACT.kellerFrom}`,
    text: "Keller, Dachboden, Garage, Wohnung oder ganzes Haus. Sie müssen nichts vorsortieren — wir kommen mit Wagen und Team.",
  },
  {
    title: "Haushaltsauflösung",
    price: `ab ${RS_CONTACT.wohnungFrom}`,
    text: "Nach Auszug oder Erbfall. Verwertbares rechnen wir an, den Rest entsorgen wir getrennt und mit Nachweis. Diskret, ohne Theater im Haus.",
  },
  {
    title: "Umzug",
    price: "nach Volumen",
    text: "Privat und Gewerbe, auch überregional. Be- und Entladen, Möbelmontage auf Wunsch. Ein Termin, ein Ansprechpartner.",
  },
  {
    title: "Sperrmüll & Schrott",
    price: "Abholung vor Ort",
    text: "Sperrmülltermin verpasst oder Schrott im Hof: wir holen ab, trennen fachgerecht und fahren zur Annahmestelle.",
  },
] as const;

export function RsServices() {
  return (
    <section id="leistungen" className="scroll-mt-20 bg-[var(--rs-cream-deep)] px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <RsReveal className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
            Leistungen
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-rs-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-[var(--rs-ink)]">
            Keller, Wohnung, Haus — wir kommen mit Wagen und Leuten
          </h2>
          <p className="mt-4 text-[var(--rs-muted)]">
            Sie müssen nichts vorsortieren. Den Schlüssel behalten Sie. Den Festpreis auch.
          </p>
        </RsReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((item, i) => (
            <RsReveal key={item.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-[rgba(28,25,23,0.08)] bg-[var(--rs-cream)] p-7 shadow-[0_16px_40px_rgba(28,25,23,0.05)] transition hover:border-[rgba(196,163,90,0.35)] sm:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-[family-name:var(--font-rs-display)] text-3xl font-medium text-[var(--rs-ochre)]">
                    0{i + 1}
                  </span>
                  <span className="text-[12px] font-medium text-[var(--rs-sage)]">{item.price}</span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-rs-display)] text-xl font-medium text-[var(--rs-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--rs-muted)]">{item.text}</p>
              </article>
            </RsReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
