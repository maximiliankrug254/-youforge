"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

const INTRO_MS = 2100;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function RsIntroLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const done = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      done.current = true;
      setVisible(false);
      return;
    }

    const t = window.setTimeout(() => {
      if (!done.current) {
        done.current = true;
        setVisible(false);
      }
    }, INTRO_MS);

    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--rs-ink)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.45, ease: EASE }}
          aria-label={`${RS_CONTACT.brand} Intro`}
          role="presentation"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.4, ease: EASE }}
          >
            <Image
              src="/demo/rs-entruempelung/hero-room.jpg"
              alt=""
              fill
              priority
              quality={92}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          <div
            className="absolute inset-0 bg-gradient-to-r from-[rgba(28,25,23,0.88)] via-[rgba(28,25,23,0.62)] to-[rgba(28,25,23,0.28)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[rgba(28,25,23,0.75)] via-transparent to-[rgba(28,25,23,0.35)]"
            aria-hidden
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="font-[family-name:var(--font-rs-sans)] text-[10px] font-medium uppercase tracking-[0.42em] text-[var(--rs-ochre)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, 0] }}
              transition={{ duration: 2.05, times: [0, 0.2, 0.58, 1], ease: EASE }}
            >
              {RS_CONTACT.profession}
            </motion.p>

            <div className="mt-5 overflow-hidden">
              <motion.p
                className="font-[family-name:var(--font-rs-display)] text-[clamp(3.2rem,11vw,6.5rem)] font-medium leading-none tracking-[-0.03em] text-[var(--rs-cream)]"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: ["100%", "0%", "0%"], opacity: [0, 1, 0] }}
                transition={{ duration: 2.05, times: [0, 0.28, 1], ease: EASE }}
              >
                {RS_CONTACT.brand}
              </motion.p>
            </div>

            <motion.div
              className="mt-8 h-px origin-center bg-[var(--rs-ochre)]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 2.05, times: [0.22, 0.5, 1], ease: EASE }}
              style={{ width: 88 }}
              aria-hidden
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
