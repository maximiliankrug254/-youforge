"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_IMG, ANA_STATEMENT } from "@/components/demo/anatolia/ana-content";

export function AnaStatement() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.35, 0.35, 0.12]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--ana-paper)] px-5 py-28 text-[var(--ana-ink)] sm:px-8 sm:py-36 lg:py-48"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY, opacity }} aria-hidden>
        <Image
          src={ANA_IMG.atmGravel}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.2),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px]">
        <AnaReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber-deep)]">
            {ANA_STATEMENT.eyebrow}
          </p>
          <h2 className="mt-7 font-ana-display text-[clamp(2.8rem,8vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
            {ANA_STATEMENT.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </AnaReveal>
        <AnaReveal delay={0.12} className="mt-12 max-w-2xl">
          <p className="text-[1.12rem] leading-[1.85] text-[var(--ana-muted)] sm:text-xl">
            {ANA_STATEMENT.text}
          </p>
        </AnaReveal>
      </div>
    </section>
  );
}
