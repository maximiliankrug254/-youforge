"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { BstButton } from "@/components/demo/bst/BstButton";
import { BstMagnetic } from "@/components/demo/bst/BstMagnetic";
import { BST_EASE } from "@/components/demo/bst/bst-motion";
import { BST_CONTACT } from "@/components/demo/bst/bst-contact";

export function BstHero() {
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
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.35]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--bst-void)] text-[var(--bst-snow)]"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-10%] lg:h-[120%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
      >
        <Image
          src="/demo/bestattung/hero-light.jpg"
          alt="Sanftes Licht über der Landschaft"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,19,18,0.48)_0%,rgba(20,19,18,0.22)_34%,rgba(20,19,18,0.68)_70%,rgba(20,19,18,0.94)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] sm:px-8 lg:px-14 lg:pb-16 lg:pt-10">
        <header className="flex shrink-0 items-center justify-between gap-4">
          <a
            href="#top"
            className="font-bst-display text-[1.05rem] font-semibold tracking-[-0.03em] text-white/90 lg:hidden"
            aria-label={BST_CONTACT.brand}
          >
            {BST_CONTACT.short}
          </a>
          <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45 lg:flex">
            {[
              ["#moment", "Erlebnis"],
              ["#leistungen", "Leistungen"],
              ["#ablauf", "Weg"],
              ["#kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="ml-auto">
            <BstButton
              href={`tel:${BST_CONTACT.phoneTel}`}
              className="rounded-full border border-white/18 bg-white/[0.06] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-colors hover:border-[var(--bst-accent)] hover:text-[var(--bst-accent)]"
            >
              24/7 · Anrufen
            </BstButton>
          </div>
        </header>

        <motion.div
          className="flex flex-1 flex-col items-center justify-center text-center"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-6 text-[10px] font-semibold uppercase tracking-[0.48em] text-[var(--bst-accent)] sm:mb-8 sm:text-[11px]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: BST_EASE, delay: 0.2 }}
          >
            Bestattungshaus · {BST_CONTACT.region}
          </motion.p>

          <h1 className="font-bst-display text-[clamp(3.8rem,14vw,11rem)] font-semibold leading-[0.88] tracking-[-0.045em]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.15, ease: BST_EASE, delay: 0.28 }}
              >
                {BST_CONTACT.short}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-8 max-w-md text-[1.05rem] leading-[1.75] text-white/58 sm:mt-10 sm:text-[1.15rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: BST_EASE, delay: 0.55 }}
          >
            {BST_CONTACT.tagline}
            <span className="mt-3 block text-white/38">
              Klar. Ruhig. Auf dem Niveau, das Vertrauen schafft.
            </span>
          </motion.p>

          <motion.div
            className="mt-12 flex w-full max-w-md flex-col items-center gap-3 sm:mt-14 sm:flex-row sm:justify-center"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: BST_EASE, delay: 0.72 }}
          >
            <BstMagnetic>
              <BstButton
                href={`tel:${BST_CONTACT.phoneTel}`}
                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-[var(--bst-accent)] px-8 py-4 text-sm font-semibold text-[var(--bst-void)] hover:bg-[var(--bst-accent-hot)]"
              >
                Sofort sprechen
              </BstButton>
            </BstMagnetic>
            <BstButton
              href="#haltung"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/18 px-8 py-4 text-sm font-semibold text-white hover:border-white/40"
            >
              Den Auftritt erleben
            </BstButton>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          <motion.p
            className="max-w-sm text-center text-[11px] leading-relaxed tracking-wide text-white/32"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {BST_CONTACT.emergencyNote}
          </motion.p>
          <motion.a
            href="#haltung"
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/30 transition-colors hover:text-white/55"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.8 }}
            aria-label="Weiter scrollen"
          >
            <span>Scroll</span>
            <motion.span
              className="block h-8 w-px bg-gradient-to-b from-[var(--bst-accent)] to-transparent"
              animate={reduceMotion ? undefined : { scaleY: [0.55, 1, 0.55], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
