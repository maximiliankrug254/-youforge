"use client";

import Image from "next/image";
import { TiwoReveal } from "@/components/demo/tiwo/TiwoReveal";
import { TIWO_WHY, TIWO_PROCESS } from "@/components/demo/tiwo/tiwo-content";

export function TiwoWhy() {
  return (
    <section
      id="warum"
      className="relative overflow-x-hidden bg-[var(--tiwo-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <TiwoReveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:col-span-5 lg:aspect-[4/5]">
            <Image
              src="/demo/tiwo-fliesen/tile-stack.jpg"
              alt="Material und Architektur — klare Linien, echte Substanz"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--tiwo-ink)]/75 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 p-7 sm:p-9">
              <p className="font-tiwo-display text-2xl font-bold text-white sm:text-3xl">
                Material. Maß. Haltung.
              </p>
            </div>
          </TiwoReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <TiwoReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
                Warum TiWo
              </p>
              <h2 className="mt-5 max-w-[13ch] font-tiwo-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold leading-[0.94] tracking-[-0.04em]">
                Weniger Show.
                <br />
                Mehr Substanz.
              </h2>
            </TiwoReveal>

            <div className="mt-10 space-y-0 border-t border-white/10">
              {TIWO_WHY.map((item, i) => (
                <TiwoReveal key={item.title} delay={0.06 * (i + 1)}>
                  <div className="border-b border-white/10 py-6 sm:py-7">
                    <p className="font-tiwo-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50">
                      {item.text}
                    </p>
                  </div>
                </TiwoReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <TiwoReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-bronze)]">
              So läuft&apos;s
            </p>
            <h3 className="mt-4 max-w-[14ch] font-tiwo-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em]">
              Drei Schritte. Kein Theater.
            </h3>
          </TiwoReveal>
          <div className="mt-12 grid gap-0 lg:grid-cols-3">
            {TIWO_PROCESS.map((step, i) => (
              <TiwoReveal key={step.step} delay={0.08 * (i + 1)}>
                <div
                  className={`border border-white/10 bg-[var(--tiwo-panel)] px-7 py-10 lg:min-h-[280px] ${
                    i > 0 ? "lg:-ml-px" : ""
                  }`}
                >
                  <span className="font-tiwo-display text-sm tracking-[0.2em] text-[var(--tiwo-accent)]">
                    {step.step}
                  </span>
                  <h4 className="mt-5 font-tiwo-display text-2xl font-bold tracking-tight">
                    {step.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {step.text}
                  </p>
                </div>
              </TiwoReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
