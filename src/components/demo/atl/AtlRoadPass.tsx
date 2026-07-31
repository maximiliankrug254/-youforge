"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ATL_EASE } from "@/components/demo/atl/atl-motion";

export function AtlRoadPass({
  label,
  flip = false,
}: {
  label: string;
  flip?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-[var(--atl-panel)]"
      aria-hidden
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-5 py-5 sm:px-8 sm:py-6">
        <motion.div
          className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: ATL_EASE }}
          style={{ originX: flip ? 1 : 0 }}
        />
        <motion.p
          className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-[11px]"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: ATL_EASE, delay: 0.15 }}
        >
          {label}
        </motion.p>
        <motion.div
          className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--atl-red)]/50 to-transparent"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: ATL_EASE, delay: 0.1 }}
          style={{ originX: flip ? 0 : 1 }}
        />
      </div>

      {/* tire marks */}
      <motion.div
        className={`pointer-events-none absolute top-1/2 h-[2px] w-24 -translate-y-1/2 rounded-full bg-white/10 ${
          flip ? "right-[-10%]" : "left-[-10%]"
        }`}
        initial={reduceMotion ? false : { x: 0, opacity: 0 }}
        whileInView={
          reduceMotion
            ? undefined
            : { x: flip ? "-120vw" : "120vw", opacity: [0, 0.7, 0] }
        }
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1.35, ease: ATL_EASE, delay: 0.2 }}
      />
    </div>
  );
}
