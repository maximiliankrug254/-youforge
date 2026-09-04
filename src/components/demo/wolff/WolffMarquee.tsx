"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";
import { WOLFF_MARQUEE } from "@/components/demo/wolff/wolff-content";

export function WolffMarquee({ flip = false }: { flip?: boolean }) {
  const reduceMotion = useReducedMotion();
  const row = [...WOLFF_MARQUEE, ...WOLFF_MARQUEE];

  return (
    <div
      className="relative overflow-hidden border-y border-[var(--wolff-brass)]/25 bg-[var(--wolff-burgundy)] py-5 text-[var(--wolff-cream)] sm:py-6"
      aria-hidden
    >
      <motion.div
        className={`wolff-marquee flex w-max items-center gap-10 whitespace-nowrap sm:gap-14 ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: WOLFF_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center gap-10 font-wolff-display text-[clamp(1.45rem,3.4vw,2.5rem)] font-medium italic tracking-[-0.02em] text-[var(--wolff-cream)]/80 sm:gap-14"
          >
            {word}
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[var(--wolff-brass)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
