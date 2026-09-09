"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkGhostWord } from "@/components/demo/rk/RkGhostWord";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_EASE } from "@/components/demo/rk/rk-motion";
import { RK_IMG } from "@/components/demo/rk/rk-config";

const SYSTEMS = [
  "Gelenkarm",
  "Kassette",
  "ZIP-Screen",
  "Wintergarten",
  "Pergola",
] as const;

export function RkMarkisenSpotlight() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.08]);

  return (
    <section
      ref={ref}
      id="markisen"
      className="relative isolate min-h-[92svh] overflow-hidden bg-[var(--rk-purple-ink)] text-white lg:min-h-[100svh]"
    >
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: imgY, scale: imgScale }}
      >
        <Image
          src={RK_IMG.abend}
          alt="Terrasse unter einer Markise mit LED-Licht in der Dämmerung"
          fill
          sizes="100vw"
          className="object-cover object-[center_40%]"
          priority={false}
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,7,28,0.55)_0%,rgba(28,7,28,0.25)_38%,rgba(28,7,28,0.88)_100%)] lg:bg-[linear-gradient(105deg,rgba(28,7,28,0.92)_0%,rgba(28,7,28,0.55)_42%,rgba(28,7,28,0.22)_68%,rgba(28,7,28,0.7)_100%)]"
        aria-hidden
      />

      {/* Soft lime wash */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[50%] w-[40%] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(158,196,16,0.35) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-[1480px] flex-col justify-end px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[100svh] lg:justify-center lg:px-12 lg:py-28">
        <div className="lg:max-w-[640px]">
          <RkReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-lime)]">
              Schwerpunkt
            </p>
            <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.8rem,7vw,5.8rem)] tracking-[0.01em] uppercase">
              <span className="whitespace-nowrap">Markisen im</span>
              <span className="text-[var(--rk-lime)] whitespace-nowrap">Gesamtpaket.</span>
            </h2>
          </RkReveal>

          <RkReveal delay={0.08}>
            <p className="mt-7 max-w-lg text-[1.05rem] leading-[1.8] text-white/70">
              Außenliegender Schatten hält die Hitze draußen — bevor sie durchs
              Glas will. Gelenkarm, Kassette, ZIP-Screen, Wintergarten, Pergola:
              auf Maß, Montage durch uns. Aufmaß kostenlos.
            </p>
          </RkReveal>

          <RkReveal delay={0.12}>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              {SYSTEMS.map((s, i) => (
                <motion.li
                  key={s}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.05,
                    ease: RK_EASE,
                  }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </RkReveal>

          <RkReveal delay={0.16}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <RkButton
                href="/demo/raumkontrast/markisen"
                className="rk-shine inline-flex items-center justify-center rounded-sm bg-[var(--rk-lime)] px-7 py-4 text-sm font-semibold tracking-wide text-[var(--rk-ink)] hover:bg-[var(--rk-lime-deep)] hover:text-white"
              >
                Alle Markisen-Typen
              </RkButton>
              <Link
                href="/demo/raumkontrast/kontakt"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:border-[var(--rk-lime)] hover:text-[var(--rk-lime)]"
              >
                Kostenloses Aufmaß
              </Link>
            </div>
          </RkReveal>
        </div>
      </div>

      <RkGhostWord
        onDark
        align="right"
        className="absolute right-10 top-10 z-[1] hidden w-[min(40vw,28rem)] lg:block"
      >
        Schatten
      </RkGhostWord>
    </section>
  );
}
