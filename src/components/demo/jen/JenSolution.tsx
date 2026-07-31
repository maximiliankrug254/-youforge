"use client";

import Image from "next/image";
import { JenReveal } from "@/components/demo/jen/JenReveal";
import { JenButton } from "@/components/demo/jen/JenButton";
import { JenImageReveal } from "@/components/demo/jen/JenImageReveal";
import { JenCountUp } from "@/components/demo/jen/JenCountUp";

export function JenSolution() {
  return (
    <section
      id="loesung"
      className="relative overflow-x-hidden bg-[var(--jen-mist)] px-5 py-24 text-[var(--jen-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <JenReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-accent)]">
              Unsere Lösung
            </p>
            <h2 className="mt-5 max-w-[12ch] font-jen-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold leading-[0.94] tracking-[-0.035em]">
              Nicht neu decken. Neu denken.
            </h2>
          </JenReveal>

          <JenReveal delay={0.08}>
            <p className="mt-7 max-w-md text-[1.05rem] leading-[1.7] text-[var(--jen-muted)]">
              Tonziegel halten oft 20–30 Jahre Garantie — Experten rechnen mit bis
              zu 70 Jahren Lebensdauer. Ein unansehnliches Dach muss deshalb
              nicht durch eine teure Neueindeckung ersetzt werden.
            </p>
            <p className="mt-5 max-w-md text-[1.05rem] leading-[1.7] text-[var(--jen-muted)]">
              Bei guter Substanz: Beschichtung mit wasserdampfdurchlässigem
              100&nbsp;%-Reinacrylat. Regenwasser läuft ab. Moos und Algen finden
              weniger Halt. Die Substanz bleibt — die Optik wird neu.
            </p>
          </JenReveal>

          <JenReveal delay={0.14}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--jen-ink)]/10 pt-8">
              <div>
                <p className="font-jen-display text-3xl font-bold tracking-tight sm:text-4xl">
                  <JenCountUp value={10} />
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--jen-muted)]">
                  Jahre Garantie
                </p>
              </div>
              <div>
                <p className="font-jen-display text-3xl font-bold tracking-tight sm:text-4xl">
                  <JenCountUp value={100} suffix="%" />
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--jen-muted)]">
                  Reinacrylat
                </p>
              </div>
              <div>
                <p className="font-jen-display text-3xl font-bold tracking-tight sm:text-4xl">
                  <JenCountUp value={70} />
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--jen-muted)]">
                  Jahre Potenzial*
                </p>
              </div>
            </div>
          </JenReveal>

          <JenReveal delay={0.18}>
            <div className="mt-10">
              <JenButton
                href="#vorher-nachher"
                strength={0.15}
                className="inline-flex items-center justify-center bg-[var(--jen-ink)] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
              >
                Transformation ansehen
              </JenButton>
            </div>
          </JenReveal>
        </div>

        <JenImageReveal delay={0.1} className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[5/4]">
            <Image
              src="/demo/dachservice-jennebach/coating-detail.jpg"
              alt="Wettergegerbte Ziegel — Substanz, die Schutz verdient"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--jen-ink)]/70 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--jen-bronze)]">
                Wertsteigerung
              </p>
              <p className="mt-3 max-w-sm font-jen-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Eine Beschichtung erhält Substanz — und hebt die Optik Ihres
                Hauses.
              </p>
            </div>
          </div>
        </JenImageReveal>
      </div>

      <p className="mx-auto mt-12 max-w-[1480px] text-[11px] text-[var(--jen-muted)]/60">
        * Expertenangabe zur möglichen Lebensdauer von Tonziegeln und Dachsteinen.
      </p>
    </section>
  );
}
