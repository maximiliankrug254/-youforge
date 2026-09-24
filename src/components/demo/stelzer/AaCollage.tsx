"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AA_COLLAGE } from "@/components/demo/stelzer/aa-content";
import { AaReveal } from "@/components/demo/stelzer/AaReveal";

export function AaCollage() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      data-aa-tone="tan"
      className="relative z-10 overflow-hidden bg-[var(--aa-tan)] px-5 py-20 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <AaReveal className="relative z-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.42em] opacity-50">+++ Auf dem Dach +++</p>
        <h2 className="mt-6 font-aa-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95] tracking-[-0.03em]">
          Fläche, First,
          <br />
          Fenster, Blech.
        </h2>
      </AaReveal>

      <div className="relative mx-auto mt-16 min-h-[92vw] max-w-[1200px] sm:min-h-[760px]">
        {AA_COLLAGE.map((card) => (
          <Frame key={card.label} card={card} progress={scrollYProgress} reduce={!!reduce} />
        ))}
      </div>
    </section>
  );
}

function Frame({
  card,
  progress,
  reduce,
}: {
  card: (typeof AA_COLLAGE)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const y = useTransform(progress, [0, 1], [card.shift, -card.shift]);

  return (
    <motion.article
      className={`absolute rounded-[1.4rem] bg-[var(--aa-tan-hot)] p-3 pb-10 shadow-[0_18px_40px_rgba(42,30,20,0.1)] ${card.pos}`}
      style={reduce ? { rotate: card.rot } : { rotate: card.rot, y }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
        <Image src={card.src} alt={card.label} fill sizes="40vw" quality={90} className="object-cover" />
      </div>
      <p className="mt-3 px-1 text-[10px] uppercase tracking-[0.2em]">{card.label}</p>
    </motion.article>
  );
}
