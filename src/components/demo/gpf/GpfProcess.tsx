"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GpfImageReveal } from "@/components/demo/gpf/GpfImageReveal";
import { GPF_PROCESS, GPF_IMG } from "@/components/demo/gpf/gpf-content";

export function GpfProcess() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.7"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="ablauf"
      className="relative overflow-x-hidden bg-[var(--gpf-paper)] px-5 py-24 text-[var(--gpf-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GpfReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
              Ablauf
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
              Vier Schritte.
              <br />
              <span className="italic">Keine Überraschungen.</span>
            </h2>
          </GpfReveal>
          <GpfReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-[var(--gpf-muted)]">
              Kein Angebot ohne Besichtigung. Kein Termin ohne Absprache. Kein
              Abschluss ohne aufgeräumte Fläche.
            </p>
          </GpfReveal>
        </div>

        <div ref={ref} className="mt-16 lg:mt-20">
          <div className="relative hidden h-px bg-[var(--gpf-ink)]/12 lg:block">
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-[var(--gpf-accent)]"
              style={reduceMotion ? { scaleX: 1 } : { scaleX }}
            />
          </div>

          <div className="grid gap-y-12 lg:grid-cols-4 lg:gap-x-10">
            {GPF_PROCESS.map((step, i) => (
              <GpfReveal
                key={step.step}
                delay={0.07 * i}
                className="border-t border-[var(--gpf-ink)]/12 pt-8 lg:border-t-0 lg:pt-10"
              >
                <span className="font-gpf-display text-[clamp(2.75rem,5vw,4rem)] font-bold leading-none tracking-[-0.04em] text-[var(--gpf-accent)]/25">
                  {step.step}
                </span>
                <h3 className="mt-5 font-gpf-display text-[1.5rem] font-bold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-[var(--gpf-muted)]">
                  {step.text}
                </p>
              </GpfReveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-12 lg:items-center lg:gap-14">
          <GpfReveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
              Pflegepakete
            </p>
            <h3 className="mt-4 max-w-[15ch] font-gpf-display text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              Einmal einrichten, nie wieder dran denken.
            </h3>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.75] text-[var(--gpf-muted)]">
              Ein Pflegepaket setzt sich aus genau den Leistungen zusammen, die
              Ihr Garten braucht — und lässt sich jederzeit erweitern oder
              reduzieren. Für die Zusammenstellung brauchen wir Lage und Größe
              des Objekts, Ihre Kontaktdaten und die gewünschten Arbeiten.
              Fotos helfen bei der Vorabeinschätzung.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Saisonal", "Monatlich", "Auf Abruf", "Einmalig"].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[var(--gpf-ink)]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--gpf-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </GpfReveal>
          <GpfReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <GpfImageReveal
              src={GPF_IMG.parkanlage}
              alt="Mitarbeiter bei Pflegearbeiten entlang einer alten Natursteinmauer"
              className="aspect-[16/11] lg:min-h-[420px]"
            />
          </GpfReveal>
        </div>
      </div>
    </section>
  );
}
