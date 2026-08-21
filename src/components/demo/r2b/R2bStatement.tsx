"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { R2bReveal } from "@/components/demo/r2b/R2bReveal";
import { R2bImageReveal } from "@/components/demo/r2b/R2bImageReveal";
import { R2B_IMG } from "@/components/demo/r2b/r2b-content";

export function R2bStatement() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden bg-[var(--r2b-bone)] px-5 py-24 text-[var(--r2b-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <motion.div
          className="lg:col-span-7"
          style={reduceMotion ? undefined : { y }}
        >
          <R2bReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[var(--r2b-brass-deep)]">
              Prinzip
            </p>
          </R2bReveal>
          <R2bReveal delay={0.08}>
            <h2 className="mt-6 max-w-[16ch] font-r2b-display text-[clamp(2.6rem,6.2vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.045em]">
              Ihr macht das, was man anfassen kann.
              <span className="mt-4 block italic text-[var(--r2b-brass-deep)]">
                Wir machen das, was man nicht mehr ignoriert.
              </span>
            </h2>
          </R2bReveal>
          <R2bReveal delay={0.16}>
            <p className="mt-10 max-w-lg text-[1.08rem] leading-[1.8] text-[var(--r2b-muted)]">
              Handwerk wird nicht digital ersetzt. Es wird digital verstärkt.
              Strategie, Bild, Kampagne — damit der Betrieb online genauso sitzt
              wie vor Ort.
            </p>
          </R2bReveal>
        </motion.div>

        <R2bReveal delay={0.12} className="lg:col-span-5">
          <R2bImageReveal
            src={R2B_IMG.material}
            alt="Material, Werkzeug, Präzision — das Gewerk unter der Marke"
            className="aspect-[4/5] min-h-[420px] lg:min-h-[560px]"
            objectPosition="center"
          />
        </R2bReveal>
      </div>
    </section>
  );
}
