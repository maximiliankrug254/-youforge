"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AA, AA_IMG } from "@/components/demo/stelzer/aa-config";
import { AA_EASE } from "@/components/demo/stelzer/aa-motion";

const HOLD_MS = 4000;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function AaIntroLoader() {
  const reduceMotion = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);
  const visible = !reduceMotion && !dismissed;

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setDismissed(true), HOLD_MS);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--aa-tan)] text-[var(--aa-ink)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: AA_EASE } }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0 origin-center"
            initial={{ clipPath: "circle(0% at 68% 52%)", scale: 1.14 }}
            animate={{ clipPath: "circle(130% at 68% 52%)", scale: 1 }}
            transition={{
              clipPath: { duration: 1.35, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 4.4, ease: "linear" },
            }}
          >
            <Image
              src={AA_IMG.hero}
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,232,0.2)_0%,rgba(246,241,232,0.05)_40%,rgba(246,241,232,0.78)_100%)]" />

          <motion.p
            className="absolute left-5 top-8 max-w-[12rem] text-[10px] uppercase leading-relaxed tracking-[0.28em] opacity-80 sm:left-10"
            {...fadeUp}
            transition={{ duration: 0.7, ease: AA_EASE, delay: 0.35 }}
          >
            {AA.place.village}
            <br />
            {AA.place.region}
          </motion.p>
          <motion.p
            className="absolute right-5 top-8 text-right text-[10px] uppercase leading-relaxed tracking-[0.28em] opacity-80 sm:right-10"
            {...fadeUp}
            transition={{ duration: 0.7, ease: AA_EASE, delay: 0.48 }}
          >
            Dach
            <br />
            Handwerk
          </motion.p>

          <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-[16vh] text-center">
            <motion.p
              className="text-[10px] uppercase tracking-[0.42em] opacity-70"
              {...fadeUp}
              transition={{ duration: 0.65, ease: AA_EASE, delay: 0.7 }}
            >
              Nah. Lokal. Präsent.
            </motion.p>
            <h1 className="mt-4 flex flex-wrap items-baseline justify-center gap-x-[0.18em] font-aa-display text-[clamp(2.4rem,8vw,6.2rem)] leading-[0.9] tracking-[-0.04em]">
              {AA.brand.stacked.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block"
                  initial={{ opacity: 0, y: 42, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.75, ease: AA_EASE, delay: 0.95 + i * 0.14 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="mt-6 max-w-md text-[clamp(0.95rem,2vw,1.25rem)] font-medium uppercase tracking-[0.22em]"
              {...fadeUp}
              transition={{ duration: 0.7, ease: AA_EASE, delay: 1.55 }}
            >
              {AA.brand.profession}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

