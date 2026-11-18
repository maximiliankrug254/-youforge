"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BBF_EASE } from "@/components/demo/bbf/bbf-motion";
import { BBF_CONTACT } from "@/components/demo/bbf/bbf-contact";

export function BbfIntroLoader() {
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bbf-void)]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: BBF_EASE }}
          aria-hidden
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: BBF_EASE }}
          >
            <p className="font-bbf-display text-6xl font-semibold tracking-[0.12em] text-white sm:text-8xl">
              {BBF_CONTACT.short}
            </p>
            <motion.div
              className="mx-auto mt-6 h-[3px] origin-left bg-[var(--bbf-red)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: BBF_EASE, delay: 0.12 }}
              style={{ width: 120 }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
