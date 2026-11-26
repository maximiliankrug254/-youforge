"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";
import { ANA_GALLERY } from "@/components/demo/anatolia/ana-content";

const ITEMS = ANA_GALLERY;

/**
 * Dive-Scroll wie YouForge /arbeiten (WorkDiveShowcase):
 * sticky Vollbild, Bilder kommen nacheinander rein und raus.
 */
export function AnaGallery() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 48,
    damping: 32,
    mass: 0.5,
  });

  const introEnd = 0.08;
  const outroStart = 0.92;
  const span = (outroStart - introEnd) / Math.max(ITEMS.length, 1);
  const vh = 100 + ITEMS.length * 95 + 80;

  if (reduceMotion) {
    return <GalleryStatic />;
  }

  return (
    <section
      className="relative bg-[var(--ana-ink)] text-white"
      aria-label="Baustellenfotos"
    >
      <div ref={trackRef} className="relative" style={{ height: `${vh}vh` }}>
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_45%,transparent_28%,rgba(31,28,23,0.42)_100%)]"
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 z-30">
            <p className="absolute left-5 top-24 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/40 sm:left-8 lg:top-28">
              Scrollen
            </p>
            <p className="absolute left-1/2 top-24 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)] lg:top-28">
              Anatolia
            </p>
            <p className="absolute bottom-6 left-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35 sm:left-8">
              Baustellen
            </p>
            <p className="absolute bottom-6 right-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35 sm:right-8">
              Eigene Fotos
            </p>
          </div>

          <IntroLayer progress={smooth} introEnd={introEnd} count={ITEMS.length} />

          {ITEMS.map((item, i) => {
            const start = introEnd + i * span;
            const end = start + span;
            return (
              <ShotPlane
                key={item.src}
                item={item}
                index={i}
                progress={smooth}
                start={start}
                end={end}
              />
            );
          })}

          <OutroLayer progress={smooth} outroStart={outroStart} />
        </div>
      </div>
    </section>
  );
}

function IntroLayer({
  progress,
  introEnd,
  count,
}: {
  progress: MotionValue<number>;
  introEnd: number;
  count: number;
}) {
  const opacity = useTransform(progress, [0, introEnd * 0.4, introEnd], [1, 0.85, 0]);
  const scale = useTransform(progress, [0, introEnd], [1, 1.22]);
  const y = useTransform(progress, [0, introEnd], [0, -48]);
  const blur = useTransform(progress, [0, introEnd], [0, 8]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{ opacity, scale, y, filter }}
      className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
        Baustellen · {count} Aufnahmen
      </p>
      <h2 className="mt-6 max-w-[14ch] font-ana-display text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-white">
        Eigene Fotos.
        <br />
        <span className="text-white/50">Kein Katalog.</span>
      </h2>
      <p className="mt-8 max-w-md text-[11px] uppercase leading-relaxed tracking-[0.16em] text-white/50 sm:text-xs">
        Scrollen — jede Aufnahme kommt näher.
      </p>
    </motion.div>
  );
}

function ShotPlane({
  item,
  index,
  progress,
  start,
  end,
}: {
  item: (typeof ITEMS)[number];
  index: number;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const mid = (start + end) / 2;
  const appear = start + (end - start) * 0.14;
  const leave = end - (end - start) * 0.14;

  const opacity = useTransform(
    progress,
    [start, appear, mid, leave, end],
    [0, 1, 1, 0.4, 0],
  );
  const scale = useTransform(progress, [start, appear, mid, end], [0.62, 0.94, 1.02, 1.24]);
  const z = useTransform(progress, [start, mid, end], [-220, 0, 160]);
  const y = useTransform(progress, [start, mid, end], [64, 0, -40]);
  const blur = useTransform(
    progress,
    [start, appear, mid, leave, end],
    [10, 0, 0, 2, 10],
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const label = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        z,
        filter,
        transformPerspective: 1200,
      }}
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-8"
    >
      <article className="grid w-full max-w-5xl items-center gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div className="ana-media relative border border-white/8 bg-[var(--ana-stone)] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          <div
            className={`relative overflow-hidden ${
              item.portrait ? "aspect-[4/5] max-h-[70vh]" : "aspect-[16/10]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={90}
            />
          </div>
        </div>

        <div className="text-left lg:pl-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--ana-amber)]">
            Aufnahme {label}
          </p>
          <h3 className="mt-3 font-ana-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {item.label}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            {item.alt}
          </p>
        </div>
      </article>
    </motion.div>
  );
}

function OutroLayer({
  progress,
  outroStart,
}: {
  progress: MotionValue<number>;
  outroStart: number;
}) {
  const opacity = useTransform(progress, [outroStart, outroStart + 0.05, 1], [0, 1, 1]);
  const y = useTransform(progress, [outroStart, 1], [36, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
    >
      <div className="max-w-xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--ana-amber)]">
          Weiter
        </p>
        <h3 className="mt-5 font-ana-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Vom Gespräch zur Übergabe.
        </h3>
        <p className="mt-5 text-white/55">
          Als Nächstes: der Ablauf — dann der direkte Draht zu{" "}
          {ANA_CONTACT.owner} in Essen.
        </p>
      </div>
    </motion.div>
  );
}

function GalleryStatic() {
  return (
    <section className="bg-[var(--ana-ink)] px-5 py-24 text-white sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1480px]">
        <AnaReveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
            Baustellen
          </p>
          <h2 className="mt-5 font-ana-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1] tracking-[-0.03em]">
            Eigene Fotos.
            <br />
            Kein Katalog.
          </h2>
        </AnaReveal>
        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <figure
              key={item.src}
              className="ana-media relative aspect-[4/5] bg-[var(--ana-stone)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
