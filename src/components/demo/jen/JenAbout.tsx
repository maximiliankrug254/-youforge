"use client";

import Image from "next/image";
import { JenReveal } from "@/components/demo/jen/JenReveal";
import { JenImageReveal } from "@/components/demo/jen/JenImageReveal";
import { JEN_PROCESS, JEN_WHY } from "@/components/demo/jen/jen-content";
import { JEN_CONTACT } from "@/components/demo/jen/jen-contact";

export function JenAbout() {
  return (
    <section
      id="ueber-uns"
      className="relative overflow-x-hidden bg-[var(--jen-mist)] px-5 py-24 text-[var(--jen-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <JenImageReveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/demo/dachservice-jennebach/about-craft.jpg"
                alt="Handwerksarbeit — Präzision und Erfahrung"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[var(--jen-ink)]/75 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--jen-bronze)]">
                  Inhaber
                </p>
                <p className="mt-2 font-jen-display text-3xl font-bold text-white">
                  {JEN_CONTACT.owner}
                </p>
                <p className="mt-1 text-sm text-white/65">Dachservice · Gießen</p>
              </div>
            </div>
          </JenImageReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <JenReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-accent)]">
                Über uns
              </p>
              <h2 className="mt-5 max-w-[14ch] font-jen-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[0.94] tracking-[-0.035em]">
                Handwerk mit Haltung.
              </h2>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-[1.7] text-[var(--jen-muted)]">
                Traditioneller Handwerksbetrieb mit langjähriger Erfahrung. Wir
                prüfen zuerst — und beraten ehrlich, bevor wir handeln.
              </p>
            </JenReveal>

            <div className="mt-12 space-y-0 border-t border-[var(--jen-ink)]/10">
              {JEN_WHY.map((item, i) => (
                <JenReveal key={item.title} delay={0.08 * (i + 1)}>
                  <div className="border-b border-[var(--jen-ink)]/10 py-7">
                    <p className="font-jen-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-[var(--jen-muted)]">
                      {item.text}
                    </p>
                  </div>
                </JenReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <JenReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-accent)]">
              Ablauf
            </p>
            <h3 className="mt-5 max-w-[16ch] font-jen-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[0.98] tracking-[-0.03em]">
              Drei Schritte. Klar geführt.
            </h3>
          </JenReveal>

          <div className="mt-12 grid gap-0 lg:grid-cols-3">
            {JEN_PROCESS.map((step, i) => (
              <JenReveal key={step.step} delay={0.08 * (i + 1)}>
                <div
                  className={`border border-[var(--jen-ink)]/10 bg-white px-7 py-10 lg:min-h-[280px] ${
                    i > 0 ? "lg:-ml-px" : ""
                  }`}
                >
                  <span className="font-jen-display text-sm tracking-[0.2em] text-[var(--jen-accent)]">
                    {step.step}
                  </span>
                  <h4 className="mt-6 font-jen-display text-2xl font-bold tracking-[-0.02em]">
                    {step.title}
                  </h4>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--jen-muted)]">
                    {step.text}
                  </p>
                </div>
              </JenReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
