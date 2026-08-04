"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NOVUS_EASE } from "@/components/demo/novus/novus-motion";
import { NOVUS_CONTACT } from "@/components/demo/novus/novus-contact";

export function NovusIntroLoader() {
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
    }, 3000);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--novus-ink)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: NOVUS_EASE, delay: 0.05 },
          }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.32 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 2.8, ease: NOVUS_EASE }}
          >
            <Image
              src="/demo/novus-hair/10-team.jpg"
              alt=""
              fill
              priority
              quality={92}
              sizes="100vw"
              className="object-cover object-[center_28%]"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-[var(--novus-ink)]"
            initial={{ opacity: 0.78 }}
            animate={{ opacity: 0.52 }}
            transition={{ duration: 2.3, ease: NOVUS_EASE }}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[var(--novus-gold)]"
              initial={{ opacity: 0, y: 14, letterSpacing: "0.7em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.5em" }}
              transition={{ duration: 0.95, ease: NOVUS_EASE, delay: 0.12 }}
            >
              Hair & Colour Artists · Alsfeld
            </motion.p>

            <div className="mt-7 overflow-hidden">
              <motion.p
                className="font-novus-display text-[clamp(4rem,14vw,9.5rem)] font-bold leading-none tracking-[-0.055em] text-white"
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, ease: NOVUS_EASE, delay: 0.32 }}
              >
                {NOVUS_CONTACT.short}
              </motion.p>
            </div>

            <motion.p
              className="mt-6 max-w-sm text-sm tracking-wide text-white/55 sm:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: NOVUS_EASE, delay: 0.9 }}
            >
              Junges Team. Verdammt gute Looks.
            </motion.p>

            <motion.div
              className="mt-11 h-px origin-center bg-[var(--novus-gold)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: NOVUS_EASE, delay: 1.15 }}
              style={{ width: 110 }}
            />
          </div>

          <motion.div
            className="absolute inset-x-0 bottom-0 h-[44%] bg-[var(--novus-ink)]"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: NOVUS_EASE, delay: 2.05 }}
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-[44%] bg-[var(--novus-ink)]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: NOVUS_EASE, delay: 2.05 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
