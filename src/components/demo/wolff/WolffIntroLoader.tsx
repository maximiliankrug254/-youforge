"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";
import { WOLFF_CONTACT } from "@/components/demo/wolff/wolff-contact";
import { WolffMark } from "@/components/demo/wolff/WolffMark";

const LETTERS = WOLFF_CONTACT.short.split("");
const SLIDES = [
  "/demo/wolff/00-hero.jpg",
  "/demo/wolff/03-shave.jpg",
  "/demo/wolff/08-team.jpg",
] as const;

const INTRO_MS = 3800;

export function WolffIntroLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [slide, setSlide] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (INTRO_MS - 750));
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const slideTimers = [
      window.setTimeout(() => setSlide(1), 1150),
      window.setTimeout(() => setSlide(2), 2300),
    ];

    const end = window.setTimeout(() => {
      if (!done.current) {
        done.current = true;
        setProgress(100);
        setVisible(false);
      }
    }, INTRO_MS);

    return () => {
      cancelAnimationFrame(raf);
      slideTimers.forEach(clearTimeout);
      window.clearTimeout(end);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--wolff-ink)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          aria-hidden
        >
          <div className="absolute inset-0">
            {SLIDES.map((src, i) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: slide === i ? 1 : 0,
                  scale: slide === i ? 1.05 : 1.16,
                }}
                transition={{ duration: 1.2, ease: WOLFF_EASE }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={i === 0}
                  quality={92}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,11,8,0.28)_0%,rgba(18,11,8,0.72)_62%,rgba(18,11,8,0.94)_100%)]" />

          <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-10">
            <motion.p
              className="text-[10px] font-medium uppercase tracking-[0.42em] text-[var(--wolff-cream)]/40"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: WOLFF_EASE, delay: 0.1 }}
            >
              YouForge · Living Demo
            </motion.p>
            <motion.p
              className="font-wolff-sans text-sm tabular-nums tracking-wide text-[var(--wolff-cream)]/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {String(progress).padStart(2, "0")}
            </motion.p>
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: WOLFF_EASE, delay: 0.2 }}
            >
              <WolffMark className="mb-7 h-11 w-11 text-[var(--wolff-brass)]" />
            </motion.div>

            <motion.p
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.5em] text-[var(--wolff-brass)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: WOLFF_EASE, delay: 0.28 }}
            >
              Herrenbarber
            </motion.p>

            <h1 className="flex items-baseline justify-center gap-[0.04em] overflow-hidden">
              {LETTERS.map((letter, i) => (
                <span key={`${letter}-${i}`} className="overflow-hidden">
                  <motion.span
                    className="inline-block font-wolff-display text-[clamp(4.2rem,15vw,10.5rem)] font-medium leading-none tracking-[-0.03em] text-[var(--wolff-cream)]"
                    initial={{ y: "118%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.05,
                      ease: WOLFF_EASE,
                      delay: 0.38 + i * 0.08,
                    }}
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="mt-8 h-px w-0 bg-[var(--wolff-brass)]"
              animate={{ width: "min(180px, 42vw)" }}
              transition={{ duration: 1.1, ease: WOLFF_EASE, delay: 0.95 }}
            />

            <motion.p
              className="mt-8 max-w-xs text-center font-wolff-display text-lg italic leading-relaxed text-[var(--wolff-cream)]/45 sm:text-xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: WOLFF_EASE, delay: 1.15 }}
            >
              {WOLFF_CONTACT.tagline}
            </motion.p>
          </div>

          <motion.div
            className="absolute inset-x-0 top-0 z-30 h-full origin-top bg-[var(--wolff-ink)]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: WOLFF_EASE, delay: 2.85 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
