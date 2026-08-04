"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { TiwoButton } from "@/components/demo/tiwo/TiwoButton";
import { TIWO_EASE } from "@/components/demo/tiwo/tiwo-motion";
import { TIWO_CONTACT } from "@/components/demo/tiwo/tiwo-contact";

const LINES = ["Flächen,", "die man", "fühlen will."] as const;

export function TiwoHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOn, setParallaxOn] = useState(false);
  const [ready, setReady] = useState(!!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 2900);
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
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--tiwo-ink)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-12%] lg:h-[124%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
        initial={reduceMotion ? false : { scale: 1.14 }}
        animate={ready ? { scale: 1 } : undefined}
        transition={{ duration: 1.6, ease: TIWO_EASE }}
      >
        <Image
          src="/demo/tiwo-fliesen/hero-bad.jpg"
          alt="Modernes Bad mit Natursteinfliesen — Meisterarbeit von TiWo Fliesen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.5)_0%,rgba(12,11,10,0.22)_38%,rgba(12,11,10,0.88)_100%)] lg:bg-[linear-gradient(105deg,rgba(12,11,10,0.88)_0%,rgba(12,11,10,0.42)_52%,rgba(12,11,10,0.12)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
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
          transition={{ duration: 0.8, ease: TIWO_EASE, delay: 0.05 }}
        >
          <a href="#top" className="inline-flex flex-col" aria-label={TIWO_CONTACT.brand}>
            <span className="font-tiwo-display text-[1.55rem] font-bold leading-none tracking-[-0.04em] sm:text-[1.9rem]">
              {TIWO_CONTACT.short}
            </span>
            <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--tiwo-bronze)]">
              Fliesen · Marburg
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-[12px] font-medium text-white/55 lg:flex">
            {[
              ["#team", "Team"],
              ["#leistungen", "Leistungen"],
              ["#referenzen", "Referenzen"],
              ["#kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--tiwo-accent)] after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <TiwoButton
            href={`tel:${TIWO_CONTACT.phoneTel}`}
            className="shrink-0 rounded-full bg-white px-4 py-2.5 text-xs font-semibold tracking-wide text-[var(--tiwo-ink)] hover:bg-white/90 sm:px-6 sm:text-sm"
          >
            Anrufen
          </TiwoButton>
        </motion.header>

        <motion.div
          className="flex flex-1 flex-col justify-end py-10 sm:py-14 lg:max-w-[900px] lg:py-6 lg:pt-20"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--tiwo-bronze)] sm:mb-7 sm:text-[11px]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: TIWO_EASE, delay: 0.12 }}
          >
            Junges Meister-Team · {TIWO_CONTACT.region}
          </motion.p>

          <h1 className="font-tiwo-display text-[clamp(2.85rem,10vw,7.25rem)] font-bold leading-[0.88] tracking-[-0.045em]">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.04em]">
                <motion.span
                  className={`block ${i === 2 ? "text-[var(--tiwo-accent)]" : ""}`}
                  initial={reduceMotion ? false : { y: "115%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 1.05,
                    ease: TIWO_EASE,
                    delay: 0.18 + i * 0.1,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-[32rem] text-[1.05rem] leading-[1.65] text-white/68 sm:mt-9 sm:text-[1.15rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: TIWO_EASE, delay: 0.55 }}
          >
            Innen. Außen. Individuell. Wir legen Fliesen, Platten und Mosaik so,
            dass Räume sofort anders wirken — und Jahre später noch sitzen.
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: TIWO_EASE, delay: 0.68 }}
          >
            <TiwoButton
              href={`tel:${TIWO_CONTACT.phoneTel}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--tiwo-accent)] px-8 py-4 text-sm font-semibold tracking-wide text-white hover:bg-[var(--tiwo-accent-hot)] sm:w-auto"
            >
              Lass uns starten
            </TiwoButton>
            <TiwoButton
              href="#team"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/[0.04] px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm hover:border-white/45 sm:w-auto"
            >
              Das Team kennenlernen
            </TiwoButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-hidden
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">
            Scroll
          </span>
          <motion.span
            className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"
            animate={reduceMotion ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
