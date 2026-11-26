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
import { ANA_IMG } from "@/components/demo/anatolia/ana-content";

export function AnaAtelier() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["8%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.12, 1]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--ana-stone)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-12 lg:gap-8 lg:items-center">
        <AnaReveal className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
            Atelier
          </p>
          <h2 className="mt-5 font-ana-display text-[clamp(2.5rem,5.5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            Material.
            <br />
            Licht.
            <br />
            Präzision.
          </h2>
          <p className="mt-7 max-w-md text-[1.05rem] leading-[1.8] text-white/60">
            Stein, Erde und Pflaster brauchen Haltung. Wir zeigen die Fläche, die
            bleibt — nicht die Broschüre.
          </p>
          <ul className="mt-10 space-y-4 border-t border-white/10 pt-8">
            {[
              "Naturstein mit klarer Fuge",
              "Unterbau, der trägt",
              "Kanten, die sitzen",
              "Grün, das anschließt",
            ].map((line) => (
              <li
                key={line}
                className="flex items-center gap-3 text-sm tracking-wide text-white/80"
              >
                <span className="h-px w-8 bg-[var(--ana-amber)]" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </AnaReveal>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <motion.div
            className="ana-media relative aspect-[4/5]"
            style={{ y: y1 }}
          >
            <motion.div className="absolute inset-0" style={{ scale }}>
              <Image
                src={ANA_IMG.lawn}
                alt="Neu angelegte Gartenanlage mit Rasen und Einfassung"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/5 to-transparent" />
            <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/85">
              Garten
            </p>
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              className="ana-media relative aspect-[16/11]"
              style={{ y: y2 }}
            >
              <Image
                src={ANA_IMG.driveway}
                alt="Frisch gepflasterte Einfahrt"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/26 via-black/5 to-transparent" />
              <p className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/85">
                Pflaster
              </p>
            </motion.div>
            <div className="ana-media relative aspect-[16/11]">
              <Image
                src={ANA_IMG.pavingWet}
                alt="Frisch verlegte dunkle Plattenfläche"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/26 via-black/5 to-transparent" />
              <p className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/85">
                Platten
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
