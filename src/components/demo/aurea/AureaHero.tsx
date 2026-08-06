"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AureaButton } from "@/components/demo/aurea/AureaButton";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";
import { AUREA_CONTACT } from "@/components/demo/aurea/aurea-contact";

const LINES = ["Farbe,", "die man", "fühlen will."] as const;

export function AureaHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOn, setParallaxOn] = useState(false);
  const [ready, setReady] = useState(!!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 3700);
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--aurea-ink)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-12%] lg:h-[124%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
        initial={reduceMotion ? false : { scale: 1.18 }}
        animate={ready ? { scale: 1 } : undefined}
        transition={{ duration: 2, ease: AUREA_EASE }}
      >
        <Image
          src="/demo/aurea/01-hero.jpg"
          alt="Honey-Balayage im goldenen Gegenlicht"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,7,0.55)_0%,rgba(8,8,7,0.15)_38%,rgba(8,8,7,0.94)_100%)] lg:bg-[linear-gradient(105deg,rgba(8,8,7,0.9)_0%,rgba(8,8,7,0.35)_52%,rgba(8,8,7,0.1)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />

      {/* Ambient copper glow */}
      <motion.div
        className="pointer-events-none absolute -right-24 top-1/4 h-[50vh] w-[50vh] rounded-full bg-[var(--aurea-copper)]/15 blur-[120px]"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[max(0.9rem,env(safe-area-inset-top))] sm:px-8 lg:px-14 lg:pb-16 lg:pt-8">
        <motion.header
          className="flex shrink-0 items-center justify-between gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: AUREA_EASE }}
        >
          <a href="#top" className="inline-flex flex-col" aria-label={AUREA_CONTACT.brand}>
            <span className="font-aurea-display text-[1.75rem] font-semibold leading-none tracking-[-0.05em] sm:text-[2.1rem]">
              {AUREA_CONTACT.short}
            </span>
            <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.34em] text-[var(--aurea-copper)]">
              Colour Atelier
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-[11px] font-medium tracking-wide text-white/50 lg:flex">
            {[
              ["#team", "Team"],
              ["#service", "Service"],
              ["#looks", "Looks"],
              ["#kontakt", "Gespräch"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--aurea-copper)] after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <AureaButton
            href={AUREA_CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-[var(--aurea-ink)] hover:bg-white/90 sm:px-6"
          >
            Demo anfragen
          </AureaButton>
        </motion.header>

        <motion.div
          className="flex flex-1 flex-col justify-end py-12 sm:py-16 lg:max-w-[920px] lg:py-8 lg:pt-24"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.42em] text-[var(--aurea-copper)] sm:mb-5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: AUREA_EASE, delay: 0.05 }}
          >
            Living Demo · YouForge
          </motion.p>

          <motion.p
            className="mb-4 font-aurea-display text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.055em]"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: AUREA_EASE, delay: 0.1 }}
          >
            {AUREA_CONTACT.short}
          </motion.p>

          <h1 className="font-aurea-display text-[clamp(2rem,5.8vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white/90">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.03em]">
                <motion.span
                  className={`block ${i === 2 ? "text-[var(--aurea-copper)]" : ""}`}
                  initial={reduceMotion ? false : { y: "118%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 1.1,
                    ease: AUREA_EASE,
                    delay: 0.22 + i * 0.11,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-[30rem] text-[1.08rem] leading-[1.7] text-white/58 sm:mt-9 sm:text-[1.15rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: AUREA_EASE, delay: 0.62 }}
          >
            {AUREA_CONTACT.pitch}
          </motion.p>

          <motion.div
            className="mt-10 flex w-full flex-col gap-3 sm:mt-11 sm:flex-row sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: AUREA_EASE, delay: 0.75 }}
          >
            <AureaButton
              href={AUREA_CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--aurea-copper)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--aurea-ink)] hover:bg-[var(--aurea-copper-hot)] sm:w-auto"
            >
              30 Min. Gespräch
            </AureaButton>
            <AureaButton
              href="#looks"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/[0.03] px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm hover:border-white/45 sm:w-auto"
            >
              Looks ansehen
            </AureaButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/30">
            Scroll
          </span>
          <motion.span
            className="h-10 w-px bg-gradient-to-b from-[var(--aurea-copper)] to-transparent"
            animate={
              reduceMotion
                ? undefined
                : { scaleY: [0.35, 1, 0.35], opacity: [0.35, 1, 0.35] }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
