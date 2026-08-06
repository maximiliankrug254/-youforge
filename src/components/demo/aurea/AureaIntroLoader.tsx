"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";
import { AUREA_CONTACT } from "@/components/demo/aurea/aurea-contact";

export function AureaIntroLoader() {
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
    }, 2900);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--aurea-ink)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.95, ease: AUREA_EASE },
          }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.28 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 2.7, ease: AUREA_EASE }}
          >
            <Image
              src="/demo/aurea/01-hero.jpg"
              alt=""
              fill
              priority
              quality={92}
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-[var(--aurea-ink)]"
            initial={{ opacity: 0.82 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 2.2, ease: AUREA_EASE }}
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="text-[10px] font-medium uppercase tracking-[0.55em] text-[var(--aurea-copper)]"
              initial={{ opacity: 0, letterSpacing: "0.75em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 1, ease: AUREA_EASE, delay: 0.15 }}
            >
              Living Demo · YouForge
            </motion.p>
            <div className="mt-8 overflow-hidden">
              <motion.p
                className="font-aurea-display text-[clamp(4.2rem,15vw,10rem)] font-semibold leading-none tracking-[-0.06em] text-white"
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.15, ease: AUREA_EASE, delay: 0.35 }}
              >
                {AUREA_CONTACT.short}
              </motion.p>
            </div>
            <motion.p
              className="mt-6 text-sm tracking-[0.12em] text-white/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: AUREA_EASE, delay: 0.95 }}
            >
              Colour Atelier
            </motion.p>
            <motion.div
              className="mt-12 h-px origin-center bg-[var(--aurea-copper)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.35, ease: AUREA_EASE, delay: 1.2 }}
              style={{ width: 72 }}
            />
          </div>
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[46%] bg-[var(--aurea-ink)]"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: AUREA_EASE, delay: 2 }}
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-[46%] bg-[var(--aurea-ink)]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: AUREA_EASE, delay: 2 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
