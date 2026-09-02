"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { BstReveal } from "@/components/demo/bst/BstReveal";

const SHOTS = [
  {
    src: "/demo/bestattung/section-path.jpg",
    alt: "Ruhiger Waldweg",
    label: "Weg",
  },
  {
    src: "/demo/bestattung/hero-light.jpg",
    alt: "Licht über der Landschaft",
    label: "Licht",
  },
  {
    src: "/demo/bestattung/section-flowers.jpg",
    alt: "Florale Stille",
    label: "Stille",
  },
] as const;

export function BstGallery() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--bst-void)] py-16 sm:py-24"
      aria-label="Atmosphäre"
    >
      <BstReveal className="mb-10 px-5 sm:mb-14 sm:px-8 lg:px-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--bst-accent)]">
          Atmosphäre
        </p>
        <h2 className="mt-4 font-bst-display text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.035em] text-[var(--bst-snow)]">
          Weniger Dekoration. Mehr Präsenz.
        </h2>
      </BstReveal>

      <motion.div
        className="flex gap-4 px-5 sm:gap-5 sm:px-8 lg:gap-6 lg:px-14"
        style={reduceMotion ? undefined : { x }}
      >
        {SHOTS.map((shot) => (
          <div
            key={shot.label}
            className="group relative h-[52vw] min-h-[240px] w-[78vw] shrink-0 overflow-hidden rounded-[1.25rem] sm:h-[42vw] sm:w-[48vw] lg:h-[28vw] lg:w-[32vw] lg:rounded-[1.5rem]"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 1024px) 78vw, 32vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,19,18,0.55)] to-transparent" />
            <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
              {shot.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
