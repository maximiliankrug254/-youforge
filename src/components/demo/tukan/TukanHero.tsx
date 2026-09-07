"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY, TUKAN_RAIL } from "@/components/demo/tukan/tukan-content";
import { TUKAN_EASE } from "@/components/demo/tukan/tukan-motion";
import { TukanButton } from "@/components/demo/tukan/TukanButton";
import { TukanBird } from "@/components/demo/tukan/TukanBird";
import { TukanRail } from "@/components/demo/tukan/TukanRail";

const RAIL_IMG = {
  popsicle: TUKAN_IMG.popsicle,
  passion: TUKAN_IMG.passion,
  macro: TUKAN_IMG.macro,
  bali: TUKAN_IMG.bali,
} as const;

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useHeroLook(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--look-x", x.toFixed(3));
      el.style.setProperty("--look-y", y.toFixed(3));
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return ref;
}

export function TukanHero() {
  const reduce = useReducedMotion();
  const scene = useHeroLook(!reduce);

  return (
    <section id="home" className="relative isolate overflow-hidden pb-4 pt-[4.6rem] sm:pt-[5rem]">
      <div className="px-3 sm:px-4 lg:px-5">
        <div
          ref={scene}
          className="tukan-glass relative min-h-[calc(100dvh-5.6rem)] overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]"
          style={{ "--look-x": 0, "--look-y": 0 } as React.CSSProperties}
        >
          <div className="tukan-look-bg absolute inset-[-8%] z-0">
            <div className={reduce ? "absolute inset-0" : "tukan-ken absolute inset-0"}>
              <Image
                src={TUKAN_IMG.hero}
                alt=""
                fill
                priority
                quality={92}
                sizes="100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>

          <div className="tukan-sun" />
          <div className="tukan-rays" />
          <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(7,20,14,0.9)_0%,rgba(7,20,14,0.5)_34%,rgba(7,20,14,0.08)_64%,transparent_100%)]" />
          <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(7,20,14,0.18)_0%,transparent_28%,rgba(7,20,14,0.55)_100%)]" />
          <div className="tukan-dust" />
          <div className="tukan-dust tukan-dust-slow" />
          <TukanBird />

          <div className="relative z-10 flex min-h-[calc(100dvh-5.6rem)] flex-col justify-end px-5 pb-8 pt-[48vh] sm:px-8 sm:pb-10 lg:max-w-[52%] lg:px-12 lg:pb-12">
            <p className="font-tukan-mono text-[12px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
              {TUKAN_COPY.chapterHome}
            </p>
            <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.28em] text-white/75">
              {TUKAN_COPY.heroKicker}
            </p>
            <h1 className="font-tukan-display mt-1 whitespace-nowrap text-[clamp(2.8rem,10.5vw,7.2rem)] leading-none text-white">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "0.35em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: TUKAN_EASE }}
              >
                {TUKAN_COPY.heroTitle}
              </motion.span>
            </h1>
            <p className="mt-4 max-w-md text-[1.08rem] font-medium leading-snug text-[var(--tukan-sun)] sm:text-[1.25rem]">
              {TUKAN_COPY.heroLine}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <TukanButton href="#bestellen" className="bg-[var(--tukan-sun)] text-[var(--tukan-void)]">
                {TUKAN_COPY.heroCta}
                <Arrow />
              </TukanButton>
              <a
                href="#eis"
                className="font-tukan-mono text-[12px] uppercase tracking-[0.16em] text-white/55 hover:text-[var(--tukan-sun)]"
              >
                [ {TUKAN_COPY.heroSecondary} ]
              </a>
            </div>
            <p className="mt-6 font-tukan-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
              {TUKAN_COPY.rating} · {TUKAN_COPY.ratingNote}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 px-3 sm:mt-8 sm:px-4 lg:px-5">
        <div className="mb-4 flex items-end justify-between gap-4">
          <p className="font-tukan-mono text-[12px] uppercase tracking-[0.18em] text-white/45">
            {TUKAN_COPY.chapterHome}
          </p>
          <p className="font-tukan-mono text-[12px] uppercase tracking-[0.18em] text-[var(--tukan-sun)]">
            [ {TUKAN_COPY.railHint} ]
          </p>
        </div>
        <TukanRail>
          {TUKAN_RAIL.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group w-[72vw] shrink-0 sm:w-[38vw] lg:w-[22vw]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                <Image
                  src={RAIL_IMG[card.image]}
                  alt={card.title}
                  fill
                  sizes="30vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,20,14,0.85)] via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="font-tukan-display text-[1.55rem] leading-none text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-tukan-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
                    {card.meta}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </TukanRail>
      </div>
    </section>
  );
}
