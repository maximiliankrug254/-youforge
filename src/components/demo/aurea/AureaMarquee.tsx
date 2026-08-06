"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";
import { AUREA_MARQUEE } from "@/components/demo/aurea/aurea-content";

export function AureaMarquee({ flip = false }: { flip?: boolean }) {
  const reduceMotion = useReducedMotion();
  const row = [...AUREA_MARQUEE, ...AUREA_MARQUEE];

  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-[var(--aurea-ink)] py-6 text-white sm:py-7"
      aria-hidden
    >
      <motion.div
        className={`aurea-marquee flex w-max items-center gap-10 whitespace-nowrap sm:gap-14 ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: AUREA_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center gap-10 font-aurea-display text-[clamp(1.35rem,3.2vw,2.35rem)] font-semibold tracking-[-0.03em] text-white/25 sm:gap-14"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--aurea-copper)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
