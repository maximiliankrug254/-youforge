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
    const t = window.setTimeout(() => setIntroDone(true), 2600);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--gpf-ink)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-10%] lg:h-[120%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
        initial={reduceMotion ? false : { scale: 1.12 }}
        animate={ready ? { scale: 1 } : undefined}
        transition={{ duration: 1.7, ease: GPF_EASE }}
      >
        <Image
          src={GPF_IMG.hero}
          alt="Gepflegter Privatgarten mit klarer Struktur und ruhiger Atmosphäre"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,12,0.72)_0%,rgba(10,16,12,0.32)_38%,rgba(10,16,12,0.94)_100%)] lg:bg-[linear-gradient(105deg,rgba(10,16,12,0.92)_0%,rgba(10,16,12,0.55)_48%,rgba(10,16,12,0.18)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col justify-end px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">
        <motion.div
          className="lg:max-w-[980px]"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--gpf-moss)] sm:text-[11px]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.75, ease: GPF_EASE, delay: 0.08 }}
          >
            {hero.eyebrow}
            <span className="mx-3 inline-block h-1 w-1 rounded-full bg-[var(--gpf-accent)] align-middle" aria-hidden />
            {GPF_CONTACT.region}
          </motion.p>

          <h1 className="font-gpf-display">
            <span className="block overflow-hidden py-[0.02em]">
              <motion.span
                className="block text-[clamp(3.4rem,11vw,8.2rem)] font-bold leading-[0.88] tracking-[-0.045em]"
                initial={reduceMotion ? false : { y: "110%" }}
                animate={ready ? { y: "0%" } : undefined}
                transition={{ duration: 1.05, ease: GPF_EASE, delay: 0.14 }}
              >
                {hero.brandLine}
              </motion.span>
            </span>
            <span className="mt-4 block overflow-hidden sm:mt-5">
              <motion.span
                className="block max-w-[18ch] text-[clamp(1.35rem,3.4vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white/88"
                initial={reduceMotion ? false : { y: "115%" }}
                animate={ready ? { y: "0%" } : undefined}
                transition={{ duration: 1, ease: GPF_EASE, delay: 0.28 }}
              >
                {hero.headline}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 max-w-[34rem] text-[1.02rem] leading-[1.7] text-white/65 sm:mt-8 sm:text-[1.12rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: GPF_EASE, delay: 0.5 }}
          >
            {hero.text}
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: GPF_EASE, delay: 0.62 }}
          >
            <GpfButton
              href="#kontakt"
              className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--gpf-accent)] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[var(--gpf-accent-hot)] sm:w-auto"
            >
              Angebot anfragen
            </GpfButton>
            <GpfButton
              href="#leistungen"
              className="inline-flex w-full items-center justify-center rounded-sm border border-white/25 bg-white/[0.04] px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white/50 sm:w-auto"
            >
              Leistungen ansehen
            </GpfButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 right-5 hidden flex-col items-end gap-2 sm:right-8 lg:right-12 lg:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1, duration: 0.7 }}
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
