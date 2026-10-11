"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AA, AA_IMG } from "@/components/demo/bas/aa-config";

const SLIDES = [
  { src: AA_IMG.heroPanorama, alt: "Die BAS-Flotte in einer Reihe" },
  { src: AA_IMG.glastruck, alt: "Glas-Truck bei Nacht" },
  { src: AA_IMG.moskau, alt: "BAS-Transporter in Moskau" },
  { src: AA_IMG.teppich, alt: "Sportwagen auf dem roten Teppich" },
] as const;

const SLIDE_MS = 5200;

export function AaHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const edgeY = useTransform(scrollYProgress, [0.12, 0.82], reduce ? ["0%", "0%"] : ["0%", "8%"]);
  const edgeX = useTransform(scrollYProgress, [0.12, 0.82], reduce ? ["0%", "0%"] : ["0%", "12%"]);
  const ui = useTransform(scrollYProgress, [0, 0.42, 0.72], [1, 1, 0]);
  const current = SLIDES[reduce ? 0 : slide];

  return (
    <section id="top" ref={ref} data-aa-tone="dark" className="relative z-10 h-[175vh] bg-[var(--aa-tan)] text-white">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <div className="absolute inset-0 bg-[var(--aa-ink)]">
          <AnimatePresence initial={false}>
            <motion.div
              key={current.src}
              className="absolute inset-0 z-[1]"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.4, ease: "easeInOut" },
                scale: { duration: SLIDE_MS / 1000 + 1.4, ease: "linear" },
              }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={current.src === SLIDES[0].src}
                quality={90}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/45 via-black/15 to-black/55" />
          <motion.div className="absolute inset-x-0 top-0 z-[3] bg-[var(--aa-tan)]" style={{ height: edgeY }} />
          <motion.div className="absolute inset-x-0 bottom-0 z-[3] bg-[var(--aa-tan)]" style={{ height: edgeY }} />
          <motion.div className="absolute inset-y-0 left-0 z-[3] bg-[var(--aa-tan)]" style={{ width: edgeX }} />
          <motion.div className="absolute inset-y-0 right-0 z-[3] bg-[var(--aa-tan)]" style={{ width: edgeX }} />
          <motion.div
            className="pointer-events-none absolute z-[4] border border-[var(--aa-cream)]/45"
            style={{ top: edgeY, right: edgeX, bottom: edgeY, left: edgeX }}
          />
        </div>

        <motion.div
          className="relative z-10 flex h-full flex-col justify-between px-5 pb-8 pt-24 sm:px-8 lg:px-12"
          style={reduce ? undefined : { opacity: ui }}
        >
          <div className="flex items-start justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.32em]">Seit {AA.brand.founded}</p>
            <p className="hidden max-w-xs text-right text-[10px] uppercase leading-relaxed tracking-[0.18em] sm:block">
              {AA.place.city} {AA.place.region}
            </p>
          </div>

          <div className="text-center">
            <p className="mx-auto max-w-[19rem] text-[10px] uppercase leading-relaxed tracking-[0.32em] sm:max-w-none">
              {AA.brand.tagline}
            </p>
            <h1 className="mt-4 font-aa-display text-[clamp(2.6rem,7.4vw,6rem)] leading-[0.9] tracking-[-0.04em]">
              {AA.brand.short}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[clamp(0.95rem,2vw,1.35rem)] font-medium uppercase leading-snug tracking-[0.2em]">
              {AA.brand.profession}
            </p>
          </div>

          <div className="grid items-end gap-6 sm:grid-cols-3">
            <div className="flex gap-2" aria-hidden>
              {SLIDES.map((s, i) => (
                <span
                  key={s.src}
                  className={`h-px w-8 transition-colors duration-700 ${i === slide ? "bg-white" : "bg-white/35"}`}
                />
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] sm:text-center">Eigene Flotte</p>
            <p className="hidden text-[10px] uppercase tracking-[0.2em] sm:block sm:text-right">
              Flexibilität · Professionalität · Zuverlässigkeit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
