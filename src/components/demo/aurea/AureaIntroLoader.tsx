"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";
import { AUREA_CONTACT } from "@/components/demo/aurea/aurea-contact";

const LETTERS = AUREA_CONTACT.short.split("");
const SLIDES = [
  "/demo/aurea/01-hero.jpg",
  "/demo/aurea/03-craft.jpg",
  "/demo/aurea/10-team.jpg",
] as const;

const INTRO_MS = 3600;

export function AureaIntroLoader() {
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
      const t = Math.min(1, (now - start) / (INTRO_MS - 700));
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const slideTimers = [
      window.setTimeout(() => setSlide(1), 1100),
      window.setTimeout(() => setSlide(2), 2200),
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
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--aurea-ink)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          aria-hidden
        >
          {/* Background slides */}
          <div className="absolute inset-0">
            {SLIDES.map((src, i) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: slide === i ? 1 : 0,
                  scale: slide === i ? 1.06 : 1.14,
                }}
                transition={{ duration: 1.15, ease: AUREA_EASE }}
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

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,7,0.35)_0%,rgba(8,8,7,0.78)_70%,rgba(8,8,7,0.92)_100%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Top meta */}
          <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-10">
            <motion.p
              className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/40"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: AUREA_EASE, delay: 0.1 }}
            >
              YouForge · Living Demo
            </motion.p>
            <motion.p
              className="font-aurea-display text-sm font-medium tabular-nums tracking-wide text-white/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {String(progress).padStart(2, "0")}
            </motion.p>
          </div>

          {/* Center brand */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
            <motion.p
              className="mb-8 text-[10px] font-medium uppercase tracking-[0.5em] text-[var(--aurea-copper)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: AUREA_EASE, delay: 0.25 }}
            >
              Colour Atelier
            </motion.p>

            <h1 className="flex items-baseline justify-center gap-[0.02em] overflow-hidden">
              {LETTERS.map((letter, i) => (
                <span key={`${letter}-${i}`} className="overflow-hidden">
                  <motion.span
                    className="inline-block font-aurea-display text-[clamp(4.5rem,16vw,11rem)] font-semibold leading-none tracking-[-0.06em] text-white"
                    initial={{ y: "120%", rotate: 4 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{
                      duration: 1.05,
                      ease: AUREA_EASE,
                      delay: 0.35 + i * 0.07,
                    }}
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-8 max-w-xs text-center text-sm leading-relaxed tracking-wide text-white/45"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: AUREA_EASE, delay: 1.05 }}
            >
              Präzision. Charakter. Präsenz.
            </motion.p>

            {/* Progress rail */}
            <div className="mt-14 h-[1px] w-[min(220px,55vw)] overflow-hidden bg-white/15">
              <motion.div
                className="h-full origin-left bg-[var(--aurea-copper)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </div>
          </div>

          {/* Cinematic exit curtains */}
          <motion.div
            className="absolute inset-y-0 left-0 z-30 w-1/2 bg-[var(--aurea-ink)]"
            initial={{ x: "-101%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.95, ease: AUREA_EASE, delay: 2.75 }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 z-30 w-1/2 bg-[var(--aurea-ink)]"
            initial={{ x: "101%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.95, ease: AUREA_EASE, delay: 2.75 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
