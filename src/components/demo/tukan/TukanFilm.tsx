"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY } from "@/components/demo/tukan/tukan-content";

export function TukanFilm() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.28, 1]);
  const clip = useTransform(
    scrollYProgress,
    [0, 0.72],
    ["inset(16% 20% 16% 20%)", "inset(0% 0% 0% 0%)"],
  );
  const dim = useTransform(scrollYProgress, [0, 0.55, 1], [0.5, 0.18, 0.4]);

  return (
    <section ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { scale, clipPath: clip }}>
          <Image
            src={TUKAN_IMG.macro}
            alt="Nahaufnahme vom Maracuja-Eis"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <motion.div className="absolute inset-0 bg-[var(--tukan-void)]" style={reduce ? undefined : { opacity: dim }} />
        </motion.div>
        <div className="relative z-[1] flex h-dvh flex-col justify-end px-5 py-16 text-white sm:px-10 lg:px-14">
          <p className="font-tukan-mono text-[12px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
            {TUKAN_COPY.chapterFilm}
          </p>
          <h2 className="tukan-headline mt-3 max-w-[20rem] text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold">
            {TUKAN_COPY.filmTitle}
          </h2>
          <p className="mt-5 max-w-lg text-white/75">{TUKAN_COPY.heroLead}</p>
          <p className="mt-8 font-tukan-mono text-[11px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
            {TUKAN_COPY.filmHint}
          </p>
        </div>
      </div>
    </section>
  );
}
