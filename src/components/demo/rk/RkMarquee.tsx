"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RK_EASE } from "@/components/demo/rk/rk-motion";

export function RkMarquee({
  words,
  flip = false,
  tone = "dark",
}: {
  words: readonly string[];
  flip?: boolean;
  tone?: "dark" | "light";
}) {
  const reduceMotion = useReducedMotion();
  const row = [...words, ...words];
  const dark = tone === "dark";

  return (
    <div
      className={`relative overflow-hidden py-5 ${
        dark
          ? "border-y border-white/10 bg-[var(--rk-purple-ink)] text-white"
          : "border-y border-black/8 bg-[var(--rk-paper-deep)] text-[var(--rk-ink)]"
      }`}
      aria-hidden
    >
      <motion.div
        className={`rk-marquee flex w-max gap-10 whitespace-nowrap ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: RK_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`inline-flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.38em] ${
              dark ? "text-white/40" : "text-[var(--rk-ink)]/45"
            }`}
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--rk-lime)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
