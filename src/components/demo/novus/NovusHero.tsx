"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { NovusButton } from "@/components/demo/novus/NovusButton";
import { NOVUS_EASE } from "@/components/demo/novus/novus-motion";
import { NOVUS_CONTACT } from "@/components/demo/novus/novus-contact";

const LINES = ["Too much", "of you", "is never enough."] as const;

export function NovusHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOn, setParallaxOn] = useState(false);
  const [ready, setReady] = useState(!!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 3100);
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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-9%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0.28]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--novus-ink)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-12%] lg:h-[124%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
        initial={reduceMotion ? false : { scale: 1.16 }}
        animate={ready ? { scale: 1 } : undefined}
        transition={{ duration: 1.7, ease: NOVUS_EASE }}
      >
        <Image
          src="/demo/novus-hair/01-hero-glow.jpg"
          alt="Voluminöse Balayage im goldenen Gegenlicht — Novus Hair & Colour Artists"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.55)_0%,rgba(10,9,8,0.18)_36%,rgba(10,9,8,0.9)_100%)] lg:bg-[linear-gradient(105deg,rgba(10,9,8,0.9)_0%,rgba(10,9,8,0.45)_48%,rgba(10,9,8,0.15)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[max(0.9rem,env(safe-area-inset-top))] sm:px-8 lg:px-12 lg:pb-16 lg:pt-8">
        <motion.header
          className="flex shrink-0 items-center justify-between gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: NOVUS_EASE, delay: 0.05 }}
        >
          <a
            href="#top"
            className="inline-flex flex-col"
            aria-label={NOVUS_CONTACT.brand}
          >
            <span className="font-novus-display text-[1.65rem] font-bold leading-none tracking-[-0.045em] sm:text-[2rem]">
              {NOVUS_CONTACT.short}
            </span>
            <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--novus-gold)]">
              Hair & Colour · Alsfeld
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-[12px] font-medium text-white/55 lg:flex">
            {[
              ["#team", "Team"],
              ["#service", "Service"],
              ["#looks", "Looks"],
              ["#braeute", "Bräute"],
              ["#kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--novus-gold)] after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <NovusButton
            href={`tel:${NOVUS_CONTACT.phoneTel}`}
            className="shrink-0 rounded-full bg-white px-4 py-2.5 text-xs font-semibold tracking-wide text-[var(--novus-ink)] hover:bg-white/90 sm:px-6 sm:text-sm"
          >
            Termin
          </NovusButton>
        </motion.header>

        <motion.div
          className="flex flex-1 flex-col justify-end py-10 sm:py-14 lg:max-w-[920px] lg:py-6 lg:pt-20"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-4 font-novus-display text-[clamp(2.4rem,8vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white sm:mb-5"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: NOVUS_EASE, delay: 0.1 }}
          >
            {NOVUS_CONTACT.short}
          </motion.p>

          <h1 className="font-novus-display text-[clamp(1.85rem,5.8vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white/90">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.03em]">
                <motion.span
                  className={`block ${i === 2 ? "text-[var(--novus-gold)]" : ""}`}
                  initial={reduceMotion ? false : { y: "115%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 1.05,
                    ease: NOVUS_EASE,
                    delay: 0.22 + i * 0.1,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-[30rem] text-[1.05rem] leading-[1.65] text-white/65 sm:mt-9 sm:text-[1.12rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: NOVUS_EASE, delay: 0.58 }}
          >
            Colour Artists mit Attitude. Echte Looks. Ein junges Team, das
            weiß, wann genug — und wann noch lange nicht.
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: NOVUS_EASE, delay: 0.72 }}
          >
            <NovusButton
              href={`tel:${NOVUS_CONTACT.phoneTel}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--novus-gold)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--novus-ink)] hover:bg-[var(--novus-gold-hot)] sm:w-auto"
            >
              Termin anrufen
            </NovusButton>
            <NovusButton
              href="#team"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/[0.04] px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm hover:border-white/45 sm:w-auto"
            >
              Das Team
            </NovusButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.15, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">
            Scroll
          </span>
          <motion.span
            className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"
            animate={
              reduceMotion
                ? undefined
                : { scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
