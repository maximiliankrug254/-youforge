"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { JenButton } from "@/components/demo/jen/JenButton";
import { JEN_EASE } from "@/components/demo/jen/jen-motion";
import { JEN_CONTACT } from "@/components/demo/jen/jen-contact";

export function JenHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOn, setParallaxOn] = useState(false);

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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0.35]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--jen-ink)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-10%] lg:h-[120%]"
        style={useParallax ? { y: bgY } : undefined}
      >
        <Image
          src="/demo/dachservice-jennebach/hero-roof.jpg"
          alt="Ziegelgedecktes Dach — Symbol für Schutz und Substanz"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] scale-105"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,18,0.55)_0%,rgba(12,15,18,0.35)_40%,rgba(12,15,18,0.88)_100%)] lg:bg-[linear-gradient(105deg,rgba(12,15,18,0.92)_0%,rgba(12,15,18,0.55)_48%,rgba(12,15,18,0.15)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[max(0.85rem,env(safe-area-inset-top))] sm:px-8 lg:px-12 lg:pb-20 lg:pt-8">
        <header className="flex shrink-0 items-center justify-between gap-4">
          <a
            href="#top"
            className="group inline-flex flex-col"
            aria-label={JEN_CONTACT.brand}
          >
            <span className="font-jen-display text-[1.55rem] font-bold leading-none tracking-[-0.03em] text-white sm:text-[1.85rem]">
              Otto Jennebach
            </span>
            <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--jen-bronze)] transition-colors group-hover:text-[var(--jen-accent)]">
              Dachservice · Gießen
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-[12px] font-medium tracking-wide text-white/55 lg:flex">
            {[
              ["#loesung", "Lösung"],
              ["#leistungen", "Leistungen"],
              ["#ueber-uns", "Über uns"],
              ["#kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--jen-accent)] after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <JenButton
            href={`tel:${JEN_CONTACT.phoneTel}`}
            strength={0.18}
            className="shrink-0 bg-[var(--jen-accent)] px-4 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[var(--jen-accent-hot)] sm:px-6 sm:text-sm"
          >
            Anrufen
          </JenButton>
        </header>

        <motion.div
          className="flex flex-1 flex-col justify-end py-10 sm:py-14 lg:max-w-[820px] lg:py-8 lg:pt-24"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-bronze)] sm:mb-7 sm:text-[11px]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: JEN_EASE, delay: 0.35 }}
          >
            {JEN_CONTACT.region}
          </motion.p>

          <motion.h1
            className="font-jen-display text-[clamp(2.7rem,9.2vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: JEN_EASE, delay: 0.42 }}
          >
            Substanz
            <br />
            schützen.
            <br />
            <span className="text-[var(--jen-accent)]">Wert steigern.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[34rem] text-[1rem] leading-[1.65] text-white/65 sm:mt-8 sm:text-[1.125rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: JEN_EASE, delay: 0.7 }}
          >
            Frühzeitige Dachbeschichtung — die intelligente Alternative zur
            Neueindeckung. 100&nbsp;% Reinacrylat. 10 Jahre Garantie.
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: JEN_EASE, delay: 0.85 }}
          >
            <JenButton
              href={`tel:${JEN_CONTACT.phoneTel}`}
              strength={0.2}
              className="inline-flex w-full items-center justify-center bg-[var(--jen-accent)] px-8 py-4 text-sm font-semibold tracking-wide text-white hover:bg-[var(--jen-accent-hot)] sm:w-auto"
            >
              Beratung anfordern
            </JenButton>
            <JenButton
              href="#vorher-nachher"
              strength={0}
              className="inline-flex w-full items-center justify-center border border-white/20 bg-white/[0.03] px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/[0.06] sm:w-auto"
            >
              Vorher / Nachher
            </JenButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
