"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RK_EASE } from "@/components/demo/rk/rk-motion";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";
import { RK_BASE } from "@/components/demo/rk/rk-config";
import { RkMark } from "@/components/demo/rk/RkLogo";

const WORD = "RAUMKONTRAST";

/** Marke hält → Text aus → Overlay aus → Hero startet */
export const RK_INTRO_TEXT_OUT_MS = 2000;
export const RK_INTRO_DISMISS_MS = 2550;
export const RK_INTRO_EXIT_MS = 750;
export const RK_INTRO_HERO_READY_MS = RK_INTRO_DISMISS_MS + 80;

export function RkIntroLoader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isHome = pathname === RK_BASE || pathname === `${RK_BASE}/`;
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  const show = isHome && !reduceMotion && phase !== "gone";

  useEffect(() => {
    if (!isHome || reduceMotion) return;

    const out = window.setTimeout(() => setPhase("out"), RK_INTRO_TEXT_OUT_MS);
    const gone = window.setTimeout(
      () => setPhase("gone"),
      RK_INTRO_DISMISS_MS,
    );
    return () => {
      window.clearTimeout(out);
      window.clearTimeout(gone);
    };
  }, [isHome, reduceMotion]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="rk-intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--rk-purple-ink)]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: RK_INTRO_EXIT_MS / 1000, ease: RK_EASE }}
          aria-hidden
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(130,33,130,0.42) 0%, transparent 72%)",
            }}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-[920px] flex-col items-center px-6 text-center"
            animate={
              phase === "out"
                ? { opacity: 0, y: -18 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.55, ease: RK_EASE }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: RK_EASE, delay: 0.08 }}
            >
              <RkMark onDark className="h-[4.5rem] w-auto sm:h-24" />
            </motion.div>

            <motion.p
              className="mb-6 text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--rk-lime)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: RK_EASE, delay: 0.12 }}
            >
              Irschenberg · Oberbayern
            </motion.p>

            <h1 className="font-rk-display w-full max-w-full text-center text-[clamp(1.85rem,8.5vw,5.2rem)] uppercase leading-none tracking-[0.04em] text-white">
              <span className="inline-flex max-w-full flex-nowrap justify-center">
                {WORD.split("").map((letter, i) => (
                  <motion.span
                    key={`${letter}-${i}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: "0.35em" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: RK_EASE,
                      delay: 0.25 + i * 0.032,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.div
              className="mt-7 h-px w-full max-w-[200px] origin-center bg-[var(--rk-lime)]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: RK_EASE, delay: 0.78 }}
            />

            <motion.p
              className="mt-6 max-w-sm text-sm leading-relaxed text-white/55 sm:text-[15px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: RK_EASE, delay: 0.98 }}
            >
              {RK_CONTACT.tagline}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
