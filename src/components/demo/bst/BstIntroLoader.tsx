"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BST_EASE } from "@/components/demo/bst/bst-motion";
import { BST_CONTACT } from "@/components/demo/bst/bst-contact";

export function BstIntroLoader() {
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
    }, 2500);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bst-void)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: BST_EASE }}
          aria-hidden
        >
          <div className="relative px-8 text-center">
            <motion.div
              className="mx-auto mb-10 h-px w-20 origin-left bg-[var(--bst-accent)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.3, ease: BST_EASE }}
            />
            <div className="overflow-hidden">
              <motion.p
                className="font-bst-display text-[clamp(2.8rem,8vw,5.5rem)] font-semibold tracking-[-0.04em] text-[var(--bst-snow)]"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.05, ease: BST_EASE, delay: 0.15 }}
              >
                {BST_CONTACT.short}
              </motion.p>
            </div>
            <motion.p
              className="mt-5 text-[10px] font-medium uppercase tracking-[0.45em] text-[var(--bst-accent)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.7, ease: BST_EASE }}
            >
              Bestattungshaus
            </motion.p>
            <motion.div
              className="mx-auto mt-12 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full origin-left bg-[var(--bst-accent)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: BST_EASE, delay: 0.35 }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
