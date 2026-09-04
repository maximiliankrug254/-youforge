"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LANE } from "@/components/demo/lane/lane-config";
import { LANE_INTRO_SLIDES } from "@/components/demo/lane/lane-content";
import { LANE_EASE } from "@/components/demo/lane/lane-motion";

const LETTERS = LANE.brand.short.split("");
const INTRO_MS = 4200;
const SLIDE_MS = 720;

export function LaneIntro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [slide, setSlide] = useState(0);
  const [flash, setFlash] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (reduce) {
      setVisible(false);
      return;
    }

    const slideTimers = LANE_INTRO_SLIDES.map((_, i) =>
      window.setTimeout(() => {
        setSlide(i);
        setFlash((n) => n + 1);
      }, i * SLIDE_MS),
    );

    const end = window.setTimeout(() => {
      if (!done.current) {
        done.current = true;
        setVisible(false);
      }
    }, INTRO_MS);

    return () => {
      slideTimers.forEach(clearTimeout);
      window.clearTimeout(end);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--lane-void)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: LANE_EASE }}
          aria-hidden
        >
          <div className="absolute inset-0">
            {LANE_INTRO_SLIDES.map((item, i) => (
              <motion.div
                key={item.src}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: slide === i ? 1 : 0,
                  scale: slide === i ? 1.08 : 1.22,
                }}
                transition={{ duration: 0.7, ease: LANE_EASE }}
              >
                <Image
                  src={item.src}
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

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,6,5,0.05)_0%,rgba(7,6,5,0.45)_70%,rgba(7,6,5,0.78)_100%)]" />
          <motion.div
            key={flash}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,26,0.38),transparent_55%)]"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
            <motion.p
              className="text-[11px] uppercase tracking-[0.5em] text-[var(--lane-ember)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: LANE_EASE, delay: 0.15 }}
            >
              {LANE.brand.line}
            </motion.p>

            <h1 className="mt-4 flex overflow-hidden">
              {LETTERS.map((letter, i) => (
                <span key={`${letter}-${i}`} className="overflow-hidden">
                  <motion.span
                    className="inline-block font-lane-display text-[clamp(4.8rem,18vw,12rem)] font-semibold leading-none tracking-[0.12em] text-[var(--lane-bone)]"
                    style={{
                      textShadow: "0 0 40px rgba(255,106,26,0.45)",
                    }}
                    initial={{ y: "110%", rotate: 8 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{
                      duration: 0.85,
                      ease: LANE_EASE,
                      delay: 1.85 + i * 0.07,
                    }}
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              key={LANE_INTRO_SLIDES[slide]?.word}
              className="mt-8 font-lane-display text-[clamp(1.4rem,4vw,2.4rem)] uppercase tracking-[0.28em] text-[var(--lane-ember)]"
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: LANE_EASE }}
            >
              {LANE_INTRO_SLIDES[slide]?.word}
            </motion.p>
          </div>

          <motion.div
            className="absolute inset-y-0 left-0 z-30 w-1/2 bg-[var(--lane-void)]"
            initial={{ x: "-101%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.7, ease: LANE_EASE, delay: 3.35 }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 z-30 w-1/2 bg-[var(--lane-void)]"
            initial={{ x: "101%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.7, ease: LANE_EASE, delay: 3.35 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
