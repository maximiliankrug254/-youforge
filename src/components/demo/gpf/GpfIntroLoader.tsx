"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";
import { GPF_IMG } from "@/components/demo/gpf/gpf-content";
import { GPF_DEMO } from "@/components/demo/gpf/gpf-config";

export function GpfIntroLoader() {
  const reduceMotion = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);
  const visible = !reduceMotion && !dismissed;

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setDismissed(true), 2700);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--gpf-ink)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: GPF_EASE, delay: 0.05 },
          }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.3 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 2.6, ease: GPF_EASE }}
          >
            <Image
              src={GPF_IMG.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-[var(--gpf-ink)]"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2.2, ease: GPF_EASE }}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="text-[10px] font-semibold uppercase tracking-[0.46em] text-[var(--gpf-sand)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: GPF_EASE, delay: 0.15 }}
            >
              {GPF_DEMO.intro.label} · seit {GPF_CONTACT.since}
            </motion.p>

            <div className="mt-6 overflow-hidden">
              <motion.p
                className="font-gpf-display text-[clamp(3.25rem,12vw,8rem)] font-bold leading-none tracking-[-0.035em] text-white"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.05, ease: GPF_EASE, delay: 0.32 }}
              >
                {GPF_CONTACT.short}
              </motion.p>
            </div>

            <motion.p
              className="mt-5 max-w-xs text-sm tracking-wide text-white/55 sm:text-base"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: GPF_EASE, delay: 0.8 }}
            >
              Gartenpflege &amp; Landschaftsbau
            </motion.p>

            <motion.div
              className="mt-10 h-px origin-center bg-[var(--gpf-accent)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.35, ease: GPF_EASE, delay: 1 }}
              style={{ width: 96 }}
            />
          </div>

          <motion.div
            className="absolute inset-x-0 bottom-0 h-[42%] bg-[var(--gpf-ink)]"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.95, ease: GPF_EASE, delay: 1.8 }}
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-[42%] bg-[var(--gpf-ink)]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.95, ease: GPF_EASE, delay: 1.8 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
