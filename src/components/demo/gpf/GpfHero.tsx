"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { GpfButton } from "@/components/demo/gpf/GpfButton";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";
import { GPF_IMG } from "@/components/demo/gpf/gpf-content";
import { GPF_DEMO } from "@/components/demo/gpf/gpf-config";
import { useGpfMediaQuery } from "@/components/demo/gpf/useGpfMediaQuery";

const { hero } = GPF_DEMO;

export function GpfHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxOn = useGpfMediaQuery("(min-width: 1024px)");
  const [introDone, setIntroDone] = useState(false);
  const ready = !!reduceMotion || introDone;

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setIntroDone(true), 2800);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--gpf-ink)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-12%] lg:h-[124%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
        initial={reduceMotion ? false : { scale: 1.16 }}
        animate={ready ? { scale: 1 } : undefined}
        transition={{ duration: 1.8, ease: GPF_EASE }}
      >
        <Image
          src={GPF_IMG.hero}
          alt="Gepflegter Privatgarten mit Rasenfläche, Beeten und Terrasse"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,21,17,0.62)_0%,rgba(15,21,17,0.28)_36%,rgba(15,21,17,0.92)_100%)] lg:bg-[linear-gradient(102deg,rgba(15,21,17,0.9)_0%,rgba(15,21,17,0.5)_50%,rgba(15,21,17,0.14)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col justify-end px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">
        <motion.div
          className="lg:max-w-[960px]"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-sand)] sm:text-[11px]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: GPF_EASE, delay: 0.1 }}
          >
            <span>{hero.eyebrow}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--gpf-accent)]" aria-hidden />
            <span>{GPF_CONTACT.region}</span>
          </motion.p>

          <h1 className="font-gpf-display text-[clamp(2.9rem,9.5vw,7rem)] font-bold leading-[0.92] tracking-[-0.035em]">
            {hero.lines.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.03em]">
                <motion.span
                  className={`block ${i === 2 ? "italic text-[var(--gpf-accent-hot)]" : ""}`}
                  initial={reduceMotion ? false : { y: "115%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 1.1,
                    ease: GPF_EASE,
                    delay: 0.16 + i * 0.1,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-[34rem] text-[1.05rem] leading-[1.7] text-white/70 sm:text-[1.15rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: GPF_EASE, delay: 0.56 }}
          >
            {hero.text}
          </motion.p>

          <motion.div
            className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: GPF_EASE, delay: 0.68 }}
          >
            <GpfButton
              href="#kontakt"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--gpf-accent)] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[var(--gpf-accent-hot)] sm:w-auto"
            >
              Angebot anfragen
            </GpfButton>
            <GpfButton
              href="#leistungen"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/[0.05] px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white/50 sm:w-auto"
            >
              Leistungen ansehen
            </GpfButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 right-5 hidden flex-col items-end gap-2 sm:right-8 lg:right-12 lg:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">
            Scroll
          </span>
          <motion.span
            className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent"
            animate={
              reduceMotion
                ? undefined
                : { scaleY: [0.35, 1, 0.35], opacity: [0.3, 1, 0.3] }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
