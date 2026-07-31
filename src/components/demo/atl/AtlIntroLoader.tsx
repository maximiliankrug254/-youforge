"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ATL_EASE } from "@/components/demo/atl/atl-motion";
import { ATL_CONTACT } from "@/components/demo/atl/atl-contact";

export function AtlIntroLoader() {
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
    }, 1600);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--atl-void)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: ATL_EASE }}
          aria-hidden
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ATL_EASE }}
          >
            <p className="font-atl-display text-5xl font-semibold tracking-[0.08em] text-white sm:text-6xl">
              {ATL_CONTACT.short}
            </p>
            <motion.div
              className="mx-auto mt-5 h-[2px] origin-left bg-[var(--atl-red)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: ATL_EASE, delay: 0.15 }}
              style={{ width: 72 }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
