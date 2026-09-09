"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  motionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkGhostWord } from "@/components/demo/rk/RkGhostWord";
import { RK_GALLERY } from "@/components/demo/rk/rk-content";
import { useRkMediaQuery } from "@/components/demo/rk/useRkMediaQuery";

const COUNT = RK_GALLERY.length;
const STILL = motionValue(0);

const FRAMES = [
  "h-[32vh] w-[min(46vw,600px)]",
  "h-[40vh] w-[min(26vw,320px)]",
  "h-[28vh] w-[min(42vw,520px)]",
  "h-[38vh] w-[min(24vw,300px)]",
  "h-[30vh] w-[min(44vw,560px)]",
  "h-[36vh] w-[min(28vw,340px)]",
] as const;

function GalleryIntro() {
  return (
    <div className="mx-auto max-w-[1480px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-8 lg:pt-36">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <RkReveal className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-lime)]">
            Atmosphäre
          </p>
          <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.3rem,5.4vw,4.4rem)] tracking-[0.01em] uppercase text-white">
            <span>Licht, Stoff,</span>
            <span>Schattenkante.</span>
          </h2>
        </RkReveal>
        <RkReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
          <p className="text-[1.05rem] leading-[1.75] text-white/60">
            So sieht der Auftrag aus, wenn er hängt — nicht der Katalog. Stoff,
            Ausfall, Lichtkante: gebaut für genau dieses Haus.
          </p>
        </RkReveal>
      </div>
    </div>
  );
}

function SalonFrame({
  item,
  index,
  progress,
  sizes,
  frameClass,
}: {
  item: (typeof RK_GALLERY)[number];
  index: number;
  progress?: MotionValue<number>;
  sizes: string;
  frameClass: string;
}) {
  const imgX = useTransform(progress ?? STILL, [0, 1], ["9%", "-9%"]);
  const imgScale = useTransform(progress ?? STILL, [0, 1], [1.2, 1.06]);

  return (
    <figure className="flex shrink-0 flex-col">
      <div
        className={`relative overflow-hidden bg-[var(--rk-purple-ink)] ring-1 ring-white/15 ${frameClass}`}
      >
        <motion.div
          className="absolute inset-0"
          style={{ x: imgX, scale: imgScale }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,7,28,0.08)_0%,transparent_38%,rgba(28,7,28,0.25)_100%)]"
          aria-hidden
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4 pr-2">
        <span className="font-rk-display text-[1.15rem] uppercase tracking-[0.04em] text-white">
          {item.caption}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--rk-lime)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </figcaption>
    </figure>
  );
}

function GalleryPin() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;
      setMaxX(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    restDelta: 0.001,
  });
  const x = useTransform(smooth, [0, 1], [0, -maxX]);

  useMotionValueEvent(smooth, "change", (value) => {
    setActive(Math.min(COUNT - 1, Math.round(value * (COUNT - 1))));
  });

  return (
    <div
      ref={scrollerRef}
      className="relative mt-10"
      style={{ height: `${130 + COUNT * 44}vh` }}
    >
      <div
        ref={viewportRef}
        className="sticky top-0 h-[100svh] overflow-hidden"
      >
        <RkGhostWord
          onDark
          className="absolute inset-x-0 top-[5%] z-0 px-8 sm:px-12 lg:px-16"
        >
          Schatten
        </RkGhostWord>

        <div className="absolute bottom-[58svh] left-5 z-20 sm:left-8 lg:left-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--rk-lime)]">
            {String(active + 1).padStart(2, "0")}
            <span className="text-white/35"> / {String(COUNT).padStart(2, "0")}</span>
          </p>
          <p className="mt-2 max-w-[18ch] font-rk-display text-lg uppercase tracking-[0.04em] text-white">
            {RK_GALLERY[active]?.caption}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 flex h-[52svh] items-end pb-10 pt-4">
          <motion.div
            ref={trackRef}
            className="flex items-end gap-10 will-change-transform pl-5 sm:gap-14 sm:pl-8 lg:pl-12"
            style={{ x }}
          >
            {RK_GALLERY.map((item, i) => (
              <SalonFrame
                key={item.caption}
                item={item}
                index={i}
                progress={smooth}
                sizes="60vw"
                frameClass={FRAMES[i] ?? FRAMES[0]}
              />
            ))}
            <div className="w-8 shrink-0" aria-hidden />
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 z-[11] h-[52svh] w-16 bg-gradient-to-r from-[var(--rk-purple-ink)] to-transparent sm:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 z-[11] h-[52svh] w-16 bg-gradient-to-l from-[var(--rk-purple-ink)] to-transparent sm:w-28"
          aria-hidden
        />

        <div className="absolute inset-x-5 bottom-8 h-px bg-white/10 sm:inset-x-8">
          <motion.div
            className="h-full origin-left bg-[var(--rk-lime)]"
            style={{ scaleX: smooth }}
          />
        </div>
      </div>
    </div>
  );
}

function GallerySwipe() {
  return (
    <div className="relative mt-10 overflow-x-clip pb-24">
      <RkGhostWord onDark className="px-5 sm:px-8">
        Schatten
      </RkGhostWord>
      <div className="mt-6 flex items-end gap-6 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:gap-8 sm:px-8 [&::-webkit-scrollbar]:hidden">
        {RK_GALLERY.map((item, i) => (
          <SalonFrame
            key={item.caption}
            item={item}
            index={i}
            sizes="80vw"
            frameClass={
              i % 2 === 1
                ? "h-[52vh] w-[min(70vw,280px)]"
                : "h-[44vh] w-[min(78vw,340px)]"
            }
          />
        ))}
      </div>
    </div>
  );
}

export function RkGallery() {
  const reduceMotion = useReducedMotion();
  const desktop = useRkMediaQuery("(min-width: 1024px)");
  const pin = desktop && !reduceMotion;

  return (
    <section
      id="referenzen"
      className="relative bg-[var(--rk-purple-ink)]"
      aria-label="Atmosphäre: Licht, Stoff, Schattenkante"
    >
      <GalleryIntro />
      {pin ? <GalleryPin /> : <GallerySwipe />}
    </section>
  );
}
