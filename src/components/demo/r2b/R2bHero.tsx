"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { R2bButton } from "@/components/demo/r2b/R2bButton";
import { R2B_EASE, R2B_INTRO_MS } from "@/components/demo/r2b/r2b-motion";
import { R2B_CONTACT } from "@/components/demo/r2b/r2b-contact";
import { R2B_IMG } from "@/components/demo/r2b/r2b-content";

const LINES = ["Handwerk ist", "unsichtbar.", "Bis jemand hinsieht."] as const;

export function R2bHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOn, setParallaxOn] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const ready = !!reduceMotion || introDone;

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setIntroDone(true), R2B_INTRO_MS - 200);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setParallaxOn(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.72], [1, 0.18]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--r2b-void)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-12%] lg:h-[124%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
      >
        <Image
          src={R2B_IMG.hero}
          alt="Ruhige, präzise gestaltete Fläche — Handwerk, das man sieht"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,6,0.62)_0%,rgba(7,7,6,0.18)_38%,rgba(7,7,6,0.92)_100%)] lg:bg-[linear-gradient(108deg,rgba(7,7,6,0.88)_0%,rgba(7,7,6,0.38)_48%,rgba(7,7,6,0.12)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute -left-24 bottom-0 h-[46vh] w-[46vh] rounded-full bg-[var(--r2b-brass)]/12 blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.2, 0.42, 0.2], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-32">
        <motion.div
          className="mt-auto max-w-[980px] pb-6 lg:pb-4"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-5 text-[10px] font-medium uppercase tracking-[0.42em] text-[var(--r2b-brass)] sm:mb-6"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: R2B_EASE }}
          >
            Atelier · {R2B_CONTACT.region}
          </motion.p>

          <h1 className="font-r2b-display">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.02em]">
                <motion.span
                  className={`block text-[clamp(2.8rem,9vw,7.2rem)] font-medium leading-[0.88] tracking-[-0.05em] ${
                    i === 2 ? "italic text-[var(--r2b-brass)]" : ""
                  }`}
                  initial={reduceMotion ? false : { y: "118%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 1.15,
                    ease: R2B_EASE,
                    delay: 0.08 + i * 0.12,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-[32rem] text-[1.08rem] leading-[1.75] text-white/58 sm:mt-10 sm:text-[1.16rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.95, ease: R2B_EASE, delay: 0.55 }}
          >
            Ihr macht das Gewerk. Wir bauen den Auftritt, den es verdient —
            Marke, Bild, Kampagne. Damit der richtige Kunde euch findet.
          </motion.p>

          <motion.div
            className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.95, ease: R2B_EASE, delay: 0.7 }}
          >
            <R2bButton
              href="#kontakt"
              className="inline-flex w-full items-center justify-center bg-[var(--r2b-brass)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--r2b-void)] hover:bg-[var(--r2b-brass-hot)] sm:w-auto"
            >
              Auftrag anfragen
            </R2bButton>
            <R2bButton
              href="#arbeit"
              className="inline-flex w-full items-center justify-center border border-white/25 bg-white/[0.03] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm hover:border-white/50 sm:w-auto"
            >
              Arbeit ansehen
            </R2bButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.3, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/30">
            Scroll
          </span>
          <motion.span
            className="h-11 w-px bg-gradient-to-b from-[var(--r2b-brass)] to-transparent"
            animate={
              reduceMotion
                ? undefined
                : { scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
