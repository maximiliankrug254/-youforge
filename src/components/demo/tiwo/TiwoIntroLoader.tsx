"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TIWO_EASE } from "@/components/demo/tiwo/tiwo-motion";
import { TIWO_CONTACT } from "@/components/demo/tiwo/tiwo-contact";

export function TiwoIntroLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const done = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return;
    }
    const t = window.setTimeout(() => {
      if (!done.current) {
        done.current = true;
        setVisible(false);
      }
    }, 2800);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--tiwo-ink)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.85, ease: TIWO_EASE, delay: 0.05 },
          }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.28 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 2.6, ease: TIWO_EASE }}
          >
            <Image
              src="/demo/tiwo-fliesen/hero-bad.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-[var(--tiwo-ink)]"
            initial={{ opacity: 0.72 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 2.2, ease: TIWO_EASE }}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="text-[10px] font-semibold uppercase tracking-[0.48em] text-[var(--tiwo-bronze)]"
              initial={{ opacity: 0, y: 12, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.48em" }}
              transition={{ duration: 0.9, ease: TIWO_EASE, delay: 0.15 }}
            >
              Marburg · Meisterbetrieb
            </motion.p>

            <div className="mt-6 overflow-hidden">
              <motion.p
                className="font-tiwo-display text-[clamp(3.5rem,12vw,8rem)] font-bold leading-none tracking-[-0.05em] text-white"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.05, ease: TIWO_EASE, delay: 0.35 }}
              >
                {TIWO_CONTACT.short}
              </motion.p>
            </div>

            <motion.p
              className="mt-5 max-w-xs text-sm tracking-wide text-white/55 sm:text-base"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: TIWO_EASE, delay: 0.85 }}
            >
              Junges Team. Präzises Handwerk.
            </motion.p>

            <motion.div
              className="mt-10 h-px origin-center bg-[var(--tiwo-accent)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.35, ease: TIWO_EASE, delay: 1.05 }}
              style={{ width: 96 }}
            />
          </div>

          <motion.div
            className="absolute inset-x-0 bottom-0 h-[42%] bg-[var(--tiwo-ink)]"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.95, ease: TIWO_EASE, delay: 1.85 }}
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-[42%] bg-[var(--tiwo-ink)]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.95, ease: TIWO_EASE, delay: 1.85 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
