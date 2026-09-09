"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkGhostWord } from "@/components/demo/rk/RkGhostWord";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";
import { RK_EASE } from "@/components/demo/rk/rk-motion";

export function RkStatement() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const drift = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section
      ref={ref}
      id="statement"
      className="relative bg-[var(--rk-paper)] px-5 py-24 pb-32 sm:px-8 sm:py-32 lg:pb-40 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-[1480px] overflow-x-clip">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <RkReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
                {RK_CONTACT.short}
              </p>
            </RkReveal>
            <RkReveal delay={0.06}>
              <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.8rem,7.5vw,6.2rem)] tracking-[0.01em] uppercase">
                <span>Wohn(t)räume</span>
                <span>werden</span>
                <span className="relative inline-block text-[var(--rk-purple)]">
                  Wirklichkeit.
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] origin-left bg-[var(--rk-lime)] sm:-bottom-2 sm:h-1"
                    style={
                      reduceMotion
                        ? { width: "100%" }
                        : { scaleX: lineScale, width: "100%" }
                    }
                    aria-hidden
                  />
                </span>
              </h2>
            </RkReveal>
          </div>

          <motion.div
            className="flex flex-col justify-end gap-8 lg:col-span-4"
            style={reduceMotion ? undefined : { y: drift }}
          >
            <RkReveal delay={0.1}>
              <p className="text-[1.08rem] leading-[1.8] text-[var(--rk-muted)]">
                Meisterbetrieb fürs ganze Haus — im Sommer zählt zuerst die
                Markise. Außenliegender Schatten hält die Hitze draußen. Boden,
                Stoffe, Polster und Insektenschutz machen wir mit: ein Termin,
                ein Ansprechpartner.
              </p>
            </RkReveal>
            <RkReveal delay={0.14}>
              <dl className="grid grid-cols-3 gap-4 border-t border-[var(--rk-ink)]/10 pt-6">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--rk-purple)]">
                    Seit
                  </dt>
                  <dd className="font-rk-display mt-1 text-2xl text-[var(--rk-ink)] sm:text-3xl">
                    {RK_CONTACT.since}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--rk-purple)]">
                    Ausstellung
                  </dt>
                  <dd className="font-rk-display mt-1 text-2xl text-[var(--rk-ink)] sm:text-3xl">
                    {RK_CONTACT.trailerSqm} m²
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--rk-purple)]">
                    Aufmaß
                  </dt>
                  <dd className="font-rk-display mt-1 text-[1.35rem] uppercase leading-none text-[var(--rk-ink)] sm:text-2xl">
                    Kostenlos
                  </dd>
                </div>
              </dl>
              <RkButton
                href="/demo/raumkontrast/kontakt"
                className="rk-shine mt-8 inline-flex rounded-sm bg-[var(--rk-purple)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
              >
                Kostenloses Aufmaß
              </RkButton>
            </RkReveal>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative z-0 mx-auto mt-16 w-full min-w-0 max-w-[1480px] sm:mt-20"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: RK_EASE }}
      >
        <RkGhostWord>Meisterhandwerk</RkGhostWord>
      </motion.div>
    </section>
  );
}
