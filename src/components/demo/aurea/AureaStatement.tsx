"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AureaReveal } from "@/components/demo/aurea/AureaReveal";

export function AureaStatement() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7], [0.35, 1, 0.55]);

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden bg-[var(--aurea-ink)] px-5 py-32 text-white sm:px-8 sm:py-40 lg:py-52"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--aurea-copper)]/10 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        className="relative mx-auto max-w-[1500px]"
        style={reduceMotion ? undefined : { y, opacity }}
      >
        <AureaReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--aurea-copper)]">
            Prinzip
          </p>
        </AureaReveal>
        <AureaReveal delay={0.08}>
          <p className="mt-8 max-w-[14ch] font-aurea-display text-[clamp(3rem,8.5vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
            Weniger Lärm.
            <br />
            <span className="text-[var(--aurea-copper)]">Mehr Charakter.</span>
          </p>
        </AureaReveal>
        <AureaReveal delay={0.16}>
          <p className="mt-12 max-w-xl text-[1.15rem] leading-[1.75] text-white/42 sm:text-[1.25rem]">
            Eine Salon-Website darf nicht aussehen wie 2014. Sie muss sich
            anfühlen wie euer Handwerk: präzise, lebendig, teuer — ohne laut zu
            sein.
          </p>
        </AureaReveal>
      </motion.div>
    </section>
  );
}
