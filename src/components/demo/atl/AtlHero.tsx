"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AtlButton } from "@/components/demo/atl/AtlButton";
import { ATL_EASE } from "@/components/demo/atl/atl-motion";
import { ATL_CONTACT } from "@/components/demo/atl/atl-contact";

export function AtlHero() {
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

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--atl-void)] text-white"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-8%] lg:h-[116%]"
        style={useParallax ? { y: bgY } : undefined}
      >
        <Image
          src="/demo/atl-lauber/hero-workshop.jpg"
          alt="Werkstattatmosphäre — Präzisionsarbeit an Fahrzeugen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[var(--atl-void)] lg:bg-gradient-to-r lg:from-black/92 lg:via-black/55 lg:to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8 lg:px-10 lg:pb-16 lg:pt-7">
        <header className="flex shrink-0 items-center justify-between gap-3">
          <a href="#top" className="group inline-flex flex-col" aria-label={ATL_CONTACT.brand}>
            <span className="font-atl-display text-[1.65rem] font-semibold leading-none tracking-[0.06em] text-white sm:text-3xl">
              {ATL_CONTACT.short}
            </span>
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 sm:block">
              Automobil-Technik Lauber
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-white/65 md:flex">
            <a href="#saeulen" className="transition-colors hover:text-white">
              Leistungen
            </a>
            <a href="#warum" className="transition-colors hover:text-white">
              Warum ATL
            </a>
            <a href="#kontakt" className="transition-colors hover:text-white">
              Kontakt
            </a>
          </nav>

          <AtlButton
            href={`tel:${ATL_CONTACT.phoneTel}`}
            strength={0}
            className="shrink-0 rounded-sm bg-[var(--atl-red)] px-3.5 py-2 text-xs font-semibold uppercase tracking-wide text-white sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Anrufen
          </AtlButton>
        </header>

        <motion.div
          className="flex flex-1 flex-col justify-end py-8 sm:py-12 lg:max-w-[720px] lg:py-6 lg:pt-20"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--atl-red)] sm:mb-6 sm:text-[11px] sm:tracking-[0.34em]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: ATL_EASE, delay: 0.2 }}
          >
            {ATL_CONTACT.region} · Karosserie · KFZ · Tuning
          </motion.p>

          <motion.h1
            className="font-atl-display text-[clamp(2.6rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: ATL_EASE, delay: 0.28 }}
          >
            Pole Position
            <br />
            <span className="text-white/88">in Leistung</span>
            <br />
            <span className="text-[var(--atl-red)]">und Qualität.</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/68 sm:mt-7 sm:text-[1.05rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ATL_EASE, delay: 0.55 }}
          >
            Vom Unfallschaden bis zum Chip-Tuning — Meisterbetrieb in Grünberg.
            Präzise. Direkt. Aus einer Hand.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ATL_EASE, delay: 0.7 }}
          >
            <AtlButton
              href={`tel:${ATL_CONTACT.phoneTel}`}
              strength={0}
              className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--atl-red)] px-6 py-3.5 text-sm font-semibold text-white sm:w-auto sm:px-7"
            >
              Jetzt anrufen
            </AtlButton>
            <AtlButton
              href={ATL_CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              strength={0}
              className="inline-flex w-full items-center justify-center rounded-sm border border-white/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-white sm:w-auto sm:px-7"
            >
              WhatsApp schreiben
            </AtlButton>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-6 text-[11px] uppercase tracking-[0.16em] text-white/45 sm:mt-12"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.7, ease: ATL_EASE }}
          >
            <span>Karosserie</span>
            <span>KFZ-Technik</span>
            <span>Tuning</span>
            <span>Grünberg</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
