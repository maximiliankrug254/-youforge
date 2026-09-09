"use client";

import Image from "next/image";
import { RkPageHero } from "@/components/demo/rk/RkPageHero";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RK_REFERENCES } from "@/components/demo/rk/rk-content";
import { RK_IMG } from "@/components/demo/rk/rk-config";

export function RkReferenzenPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <RkPageHero
        kicker="Unternehmen · Referenzen"
        title="Gebaut. Gemessen. Montage fertig."
        text="Ausgewählte Projekte aus Markise, Sonnenschutz, Boden und Polster — typisch für die Arbeit von Raumkontrast Baumann in Oberbayern."
        image={RK_IMG.montage}
        alt="Montage einer Markise an der Fassade"
      />

      <section className="relative overflow-hidden bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative mx-auto max-w-[1480px]">
          <RkReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Projekte
            </p>
            <h2 className="font-rk-display mt-5 max-w-[18ch] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1] uppercase">
              So sieht fertig aus.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.75] text-[var(--rk-muted)]">
              Living-Demo-Beispiele — anonymisiert, nah an realen Aufträgen:
              Aufmaß, Maßarbeit, Montage.
            </p>
          </RkReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {RK_REFERENCES.map((ref, i) => (
              <RkReveal key={ref.title} delay={0.04 * i}>
                <article className="group flex h-full flex-col overflow-hidden bg-[var(--rk-paper-deep)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={ref.image}
                      alt={ref.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap gap-2">
                      {ref.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[var(--rk-lime)]/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--rk-ink)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-rk-display mt-4 text-2xl uppercase tracking-[0.01em]">
                      {ref.title}
                    </h3>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--rk-purple)]">
                      {ref.place} · {ref.year}
                    </p>
                    <p className="mt-4 flex-1 text-[0.98rem] leading-[1.7] text-[var(--rk-muted)]">
                      {ref.text}
                    </p>
                  </div>
                </article>
              </RkReveal>
            ))}
          </div>
        </div>
      </section>

      <RkContact />
    </main>
  );
}
