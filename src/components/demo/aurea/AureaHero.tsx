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
    const t = window.setTimeout(() => setReady(true), 3000);
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--aurea-ink)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-10%] lg:h-[120%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
        initial={reduceMotion ? false : { scale: 1.12 }}
        animate={ready ? { scale: 1 } : undefined}
        transition={{ duration: 1.7, ease: AUREA_EASE }}
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

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,7,0.58)_0%,rgba(8,8,7,0.2)_40%,rgba(8,8,7,0.92)_100%)] lg:bg-[linear-gradient(100deg,rgba(8,8,7,0.92)_0%,rgba(8,8,7,0.4)_50%,rgba(8,8,7,0.12)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[max(0.9rem,env(safe-area-inset-top))] sm:px-8 lg:px-14 lg:pb-16 lg:pt-8">
        <motion.header
          className="flex shrink-0 items-center justify-between gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: AUREA_EASE }}
        >
          <a href="#top" className="inline-flex flex-col" aria-label={AUREA_CONTACT.brand}>
            <span className="font-aurea-display text-[1.7rem] font-semibold leading-none tracking-[-0.05em] sm:text-[2rem]">
              {AUREA_CONTACT.short}
            </span>
            <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.32em] text-[var(--aurea-copper)]">
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
                className="transition-colors hover:text-white"
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
          className="flex flex-1 flex-col justify-end py-12 sm:py-16 lg:max-w-[880px] lg:py-8 lg:pt-24"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-5 font-aurea-display text-[clamp(2.8rem,9vw,6rem)] font-semibold leading-[0.88] tracking-[-0.055em]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: AUREA_EASE, delay: 0.08 }}
          >
            {AUREA_CONTACT.short}
          </motion.p>

          <h1 className="font-aurea-display text-[clamp(1.9rem,5.5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white/88">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.02em]">
                <motion.span
                  className={`block ${i === 2 ? "text-[var(--aurea-copper)]" : ""}`}
                  initial={reduceMotion ? false : { y: "115%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 1.05,
                    ease: AUREA_EASE,
                    delay: 0.2 + i * 0.1,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-[28rem] text-[1.05rem] leading-[1.7] text-white/55 sm:text-[1.1rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: AUREA_EASE, delay: 0.58 }}
          >
            {AUREA_CONTACT.pitch}
          </motion.p>

          <motion.div
            className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: AUREA_EASE, delay: 0.7 }}
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
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold tracking-wide text-white hover:border-white/40 sm:w-auto"
            >
              Looks ansehen
            </AureaButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
