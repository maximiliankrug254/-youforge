"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";
import { AUREA_MARQUEE } from "@/components/demo/aurea/aurea-content";

export function AureaMarquee({ flip = false }: { flip?: boolean }) {
  const reduceMotion = useReducedMotion();
  const row = [...AUREA_MARQUEE, ...AUREA_MARQUEE];

  return (
    <div
      className="relative overflow-hidden border-y border-white/8 bg-[var(--aurea-ink)] py-4 text-white"
      aria-hidden
    >
      <motion.div
        className={`aurea-marquee flex w-max gap-12 whitespace-nowrap ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: AUREA_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center gap-12 text-[10px] font-medium uppercase tracking-[0.4em] text-white/30"
          >
            {word}
            <span className="h-px w-4 bg-[var(--aurea-copper)]/70" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
