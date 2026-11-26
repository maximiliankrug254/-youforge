"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_CINEMA } from "@/components/demo/anatolia/ana-content";
import { ANA_EASE } from "@/components/demo/anatolia/ana-motion";

function CinemaCard({
  item,
  active,
  onEnter,
}: {
  item: (typeof ANA_CINEMA)[number];
  active: boolean;
  onEnter: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    if (active) v.play().catch(() => undefined);
    else {
      v.pause();
      v.currentTime = 0;
    }
  }, [active, reduce]);

  return (
    <button
      type="button"
      data-ana-hot={item.title}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className={`ana-media group relative min-h-[58vh] text-left transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        active ? "flex-[2.2]" : "flex-[0.85]"
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
        src={item.src}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          active
            ? "bg-[linear-gradient(180deg,transparent_42%,rgba(31,28,23,0.62)_100%)]"
            : "bg-black/32"
        }`}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--ana-amber)]">
          Film
        </p>
        <h3 className="mt-2 font-ana-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          {item.title}
        </h3>
        <motion.p
          className="mt-3 max-w-xs text-sm leading-relaxed text-white/70"
          initial={false}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
          transition={{ duration: 0.35, ease: ANA_EASE }}
        >
          {item.text}
        </motion.p>
      </div>
    </button>
  );
}

export function AnaCinema() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="cinema"
      className="relative overflow-hidden bg-[var(--ana-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.18),transparent_70%)] blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-[1480px]">
        <AnaReveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
            Bewegung
          </p>
          <h2 className="mt-5 font-ana-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            Die Baustelle
            <br />
            atmet.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-white/55">
            Film statt Stillstand. Drei Atmosphären — Pflaster, Gerät, Grün.
            Überfahren und der Clip läuft.
          </p>
        </AnaReveal>

        <div className="mt-14 hidden gap-4 lg:mt-20 lg:flex">
          {ANA_CINEMA.map((item, i) => (
            <CinemaCard
              key={item.title}
              item={item}
              active={active === i}
              onEnter={() => setActive(i)}
            />
          ))}
        </div>

        <div className="mt-12 grid gap-3 lg:hidden">
          {ANA_CINEMA.map((item) => (
            <div
              key={item.title}
              className="ana-media relative aspect-[16/11]"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={item.src}
                muted
                loop
                playsInline
                autoPlay={!reduce}
                preload="metadata"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(31,28,23,0.62)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--ana-amber)]">
                  Film
                </p>
                <h3 className="mt-1 font-ana-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/65">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
