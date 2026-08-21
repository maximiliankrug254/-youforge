"use client";

import { motion, useReducedMotion } from "framer-motion";
import { R2B_EASE } from "@/components/demo/r2b/r2b-motion";
import { R2B_MARQUEE } from "@/components/demo/r2b/r2b-content";

export function R2bMarquee({ flip = false }: { flip?: boolean }) {
  const reduceMotion = useReducedMotion();
  const row = [...R2B_MARQUEE, ...R2B_MARQUEE];

  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-[var(--r2b-void)] py-5 text-white sm:py-6"
      aria-hidden
    >
      <motion.div
        className={`r2b-marquee flex w-max items-center gap-10 whitespace-nowrap sm:gap-14 ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: R2B_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center gap-10 font-r2b-display text-[clamp(1.2rem,2.8vw,1.85rem)] font-medium tracking-[-0.02em] text-white/28 sm:gap-14"
          >
            {word}
            <span className="h-[3px] w-[3px] rotate-45 bg-[var(--r2b-brass)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
