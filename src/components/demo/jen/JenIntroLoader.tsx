"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { JEN_EASE } from "@/components/demo/jen/jen-motion";

export function JenIntroLoader() {
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
    }, 2100);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--jen-ink)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: JEN_EASE }}
          aria-hidden
        >
          <div className="relative px-8 text-center">
            <motion.p
              className="text-[10px] font-medium uppercase tracking-[0.42em] text-[var(--jen-bronze)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: JEN_EASE }}
            >
              Dachservice
            </motion.p>
            <motion.p
              className="mt-4 font-jen-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: JEN_EASE, delay: 0.15 }}
            >
              Otto Jennebach
            </motion.p>
            <motion.div
              className="mx-auto mt-8 h-px origin-center bg-[var(--jen-accent)]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: JEN_EASE, delay: 0.35 }}
              style={{ width: 120 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
