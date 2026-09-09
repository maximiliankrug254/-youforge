"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkImageReveal } from "@/components/demo/rk/RkImageReveal";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_PROCESS } from "@/components/demo/rk/rk-content";
import { RK_IMG } from "@/components/demo/rk/rk-config";

export function RkProcess() {
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
      className="relative overflow-x-clip bg-[var(--rk-paper-deep)] px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <RkReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
            Ablauf
          </p>
          <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.3rem,5.4vw,4.4rem)] tracking-[0.01em] uppercase">
            <span>Vier Schritte.</span>
            <span>Keine Überraschung.</span>
          </h2>
        </RkReveal>

        <div ref={ref} className="mt-16 lg:mt-20">
          <div className="relative hidden h-px bg-black/10 lg:block">
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-[var(--rk-lime)]"
              style={reduceMotion ? { scaleX: 1 } : { scaleX }}
            />
          </div>
          <div className="grid gap-y-12 lg:grid-cols-4 lg:gap-x-10">
            {RK_PROCESS.map((step, i) => (
              <RkReveal
                key={step.step}
                delay={0.07 * i}
                className="border-t border-black/10 pt-8 lg:border-t-0 lg:pt-10"
              >
                <span className="font-rk-display text-[clamp(2.75rem,5vw,4rem)] leading-none tracking-[0.02em] text-[var(--rk-purple)]/25">
                  {step.step}
                </span>
                <h3 className="font-rk-display mt-5 text-[1.45rem] tracking-[0.01em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-[var(--rk-muted)]">
                  {step.text}
                </p>
              </RkReveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-14">
          <RkReveal className="lg:col-span-6">
            <RkImageReveal
              src={RK_IMG.beratung}
              alt="Beratung mit Markisenstoffen und Farbmustern am Wohnzimmertisch"
              className="aspect-[16/11]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </RkReveal>
          <RkReveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Beratung
            </p>
            <h3 className="font-rk-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] tracking-[0.01em] uppercase">
              Farbe und Ausfall entscheidet man am Fenster — nicht am Tresen.
            </h3>
            <p className="mt-5 text-[1.02rem] leading-[1.75] text-[var(--rk-muted)]">
              Wir legen Stoffe an die Fassade, prüfen den Untergrund für die
              Konsolen und sagen, wenn ein ZIP-Screen mehr Sinn ergibt als eine
              Gelenkarmmarkise. Das Gespräch ist unverbindlich — das Aufmaß
              auch.
            </p>
            <RkButton
              href="/demo/raumkontrast/kontakt"
              className="rk-shine mt-8 inline-flex rounded-sm bg-[var(--rk-purple)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
            >
              Termin vor Ort
            </RkButton>
          </RkReveal>
        </div>
      </div>
    </section>
  );
}
