"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { R2B_EASE, R2B_INTRO_MS } from "@/components/demo/r2b/r2b-motion";
import { R2B_CONTACT } from "@/components/demo/r2b/r2b-contact";
import { R2B_IMG } from "@/components/demo/r2b/r2b-content";

export function R2bIntroLoader() {
  const reduceMotion = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);
  const [phase, setPhase] = useState(0);
  const visible = !reduceMotion && !dismissed;

  useEffect(() => {
    if (reduceMotion) return;

    const timers = [
      window.setTimeout(() => setPhase(1), 180),
      window.setTimeout(() => setPhase(2), 900),
      window.setTimeout(() => setPhase(3), 1680),
      window.setTimeout(() => setPhase(4), 2680),
      window.setTimeout(() => setDismissed(true), R2B_INTRO_MS),
    ];

    return () => timers.forEach(clearTimeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--r2b-void)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: R2B_EASE, delay: 0.05 },
          }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.18 }}
            animate={{ scale: phase >= 2 ? 1.04 : 1.18 }}
            transition={{ duration: 2.4, ease: R2B_EASE }}
          >
            <Image
              src={R2B_IMG.hero}
              alt=""
              fill
              priority
              quality={92}
              sizes="100vw"
              className="object-cover object-[center_42%]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,6,0.55)_0%,rgba(7,7,6,0.22)_45%,rgba(7,7,6,0.72)_100%)]" />

          <motion.div
            className="absolute inset-x-0 top-0 bg-[var(--r2b-void)]"
            initial={{ height: "50%" }}
            animate={{ height: phase >= 2 ? "0%" : "50%" }}
            transition={{ duration: 1.35, ease: R2B_EASE, delay: phase >= 2 ? 0 : 0 }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-[var(--r2b-void)]"
            initial={{ height: "50%" }}
            animate={{ height: phase >= 2 ? "0%" : "50%" }}
            transition={{ duration: 1.35, ease: R2B_EASE }}
          />

          <motion.div
            className="absolute left-0 right-0 top-1/2 z-20 h-px origin-center -translate-y-1/2 bg-[var(--r2b-brass)]"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{
              scaleX: phase >= 1 ? 1 : 0,
              opacity: phase >= 3 ? 0 : 1,
            }}
            transition={{ duration: 0.85, ease: R2B_EASE }}
          />

          <div className="absolute inset-x-0 top-0 z-30 flex justify-between px-6 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-10">
            <motion.p
              className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/40"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: R2B_EASE, delay: 0.2 }}
            >
              YouForge · Pitch
            </motion.p>
            <motion.p
              className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/35"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {R2B_CONTACT.region}
            </motion.p>
          </div>

          <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="overflow-hidden">
              <motion.p
                className="font-r2b-display text-[clamp(2.4rem,8vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.045em] text-white"
                initial={{ y: "120%" }}
                animate={{ y: phase >= 3 ? "0%" : "120%" }}
                transition={{ duration: 1.05, ease: R2B_EASE }}
              >
                Handwerk ist unsichtbar.
              </motion.p>
            </div>
            <div className="mt-3 overflow-hidden sm:mt-4">
              <motion.p
                className="font-r2b-display text-[clamp(2.4rem,8vw,6.4rem)] font-medium italic leading-[0.9] tracking-[-0.045em] text-[var(--r2b-brass)]"
                initial={{ y: "120%" }}
                animate={{ y: phase >= 4 ? "0%" : "120%" }}
                transition={{ duration: 1.05, ease: R2B_EASE }}
              >
                Bis jemand hinsieht.
              </motion.p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
