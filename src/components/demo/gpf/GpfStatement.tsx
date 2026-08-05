"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GpfCountUp } from "@/components/demo/gpf/GpfCountUp";
import { GPF_STATS } from "@/components/demo/gpf/gpf-content";

const SENTENCE =
  "Ein Garten ist kein Projekt mit Enddatum. Er ist ein Zustand — und den halten wir für Sie.";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

export function GpfStatement() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const words = SENTENCE.split(" ");

  return (
    <section className="relative overflow-x-hidden bg-[var(--gpf-paper)] px-5 py-24 text-[var(--gpf-ink)] sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1480px]">
        <GpfReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
            Haltung
          </p>
        </GpfReveal>

        <div ref={ref} className="mt-8 max-w-[22ch] sm:max-w-[26ch]">
          <p className="font-gpf-display text-[clamp(1.85rem,4.6vw,3.9rem)] font-bold leading-[1.14] tracking-[-0.025em]">
            {reduceMotion
              ? SENTENCE
              : words.map((word, i) => {
                  const start = i / words.length;
                  const end = (i + 1.6) / words.length;
                  return (
                    <Word
                      key={`${word}-${i}`}
                      word={word}
                      progress={scrollYProgress}
                      range={[start, Math.min(1, end)]}
                    />
                  );
                })}
          </p>
        </div>

        <GpfReveal delay={0.08}>
          <p className="mt-10 max-w-xl text-[1.05rem] leading-[1.75] text-[var(--gpf-muted)]">
            Deshalb denken wir über den Feierabend hinaus: Welcher Schnitt trägt
            nächstes Jahr? Hält der Unterbau den nächsten Winter? Wächst diese
            Pflanze an dieser Ecke überhaupt? Wer das vorher klärt, muss es
            hinterher nicht reparieren.
          </p>
        </GpfReveal>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-[var(--gpf-ink)]/12 pt-14 lg:mt-24 lg:grid-cols-4">
          {GPF_STATS.map((stat, i) => (
            <GpfReveal key={stat.label} delay={0.06 * i}>
              <p className="font-gpf-display text-[clamp(2.6rem,6vw,4.25rem)] font-bold leading-none tracking-[-0.03em] text-[var(--gpf-ink)]">
                <GpfCountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 text-[0.95rem] font-semibold tracking-tight">
                {stat.label}
              </p>
              <p className="mt-1 text-[0.8rem] text-[var(--gpf-muted)]">
                {stat.hint}
              </p>
            </GpfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
