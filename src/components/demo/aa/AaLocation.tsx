"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AA } from "@/components/demo/aa/aa-config";
import { AA_NEAR } from "@/components/demo/aa/aa-content";
import { AaButton } from "@/components/demo/aa/AaButton";
import { AaCircleCta } from "@/components/demo/aa/AaCircleCta";

const HOLD_MS = 1800;

export function AaLocation() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.28 });
  const [i, setI] = useState(0);
  const slide = AA_NEAR[i];
  const live = inView;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pan = useTransform(scrollYProgress, [0, 1], ["14%", "-18%"]);

  useEffect(() => {
    if (!live) return;
    const t = window.setTimeout(() => {
      setI((n) => (n + 1) % AA_NEAR.length);
    }, HOLD_MS);
    return () => window.clearTimeout(t);
  }, [i, live]);

  function go(next: number) {
    setI((next + AA_NEAR.length) % AA_NEAR.length);
  }

  return (
    <section
      id="ort"
      ref={ref}
      data-aa-tone="dark"
      className="relative z-10 min-h-dvh scroll-mt-24 overflow-hidden text-[var(--aa-tan)]"
    >
      <motion.div className="absolute inset-0" style={reduce ? undefined : { x: pan }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.img + slide.label}
            className="absolute inset-y-0 -left-[14%] h-full w-[128%]"
            initial={reduce ? { opacity: 0 } : { x: "42%", opacity: 1 }}
            animate={reduce ? { opacity: 1 } : { x: "0%", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { x: "-42%", opacity: 1 }}
            transition={{
              x: { duration: reduce ? 0.4 : 0.55, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.35 },
            }}
          >
            <Image
              src={slide.img}
              alt={slide.label}
              fill
              sizes="130vw"
              quality={85}
              className="object-cover"
              priority={i === 0}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(22,17,13,0.82)_0%,rgba(22,17,13,0.45)_38%,rgba(22,17,13,0.12)_62%,rgba(22,17,13,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(22,17,13,0.35)_0%,transparent_28%,rgba(22,17,13,0.7)_100%)]" />

      <div className="relative z-10 grid min-h-dvh lg:grid-cols-12">
        <div className="flex flex-col justify-between px-5 py-28 sm:px-8 lg:col-span-6 lg:px-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.42em] opacity-60">+++ Der Ort +++</p>
            <p className="mt-5 font-aa-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.9] tracking-[-0.03em]">
              Der Wald
              <br />
              wartet.
            </p>
            <p className="mt-8 max-w-sm text-[12px] uppercase leading-[1.9] tracking-[0.14em] opacity-80">
              Ast & Asche liegt am Fuß des Westerwalds, im Kammwald — zwischen
              Lehmgrube, Eichenstand und der Keramikstadt Höhr-Grenzhausen.
            </p>
            <AaButton href="#besuch" className="pointer-events-auto mt-8 bg-[var(--aa-tan)] text-[var(--aa-ink)]">
              Besuch
            </AaButton>
          </div>

          <div className="mt-16">
            <p className="text-[10px] uppercase tracking-[0.28em] opacity-50">Location</p>
            <p className="mt-3 max-w-xs text-[12px] uppercase leading-relaxed tracking-[0.16em]">
              {AA.place.address1}
              <br />
              {AA.place.address2}
              <br />
              {AA.place.region}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between px-5 pb-8 pt-4 sm:px-8 lg:col-span-6 lg:items-end lg:px-12 lg:py-16">
          <div className="hidden lg:block">
            <AaCircleCta href="#besuch">Atelier besuchen</AaCircleCta>
          </div>

          <div className="w-full max-w-md lg:text-right">
            <p className="font-aa-display leading-none">
              <span className="text-[clamp(4.5rem,12vw,7.2rem)]">{slide.n}</span>
              <span className="ml-2 text-2xl">{slide.unit}</span>
            </p>
            <p className="mt-3 text-[13px] uppercase tracking-[0.18em]">{slide.label}</p>

            <div className="mt-8 h-px overflow-hidden bg-[var(--aa-tan)]/25">
              <motion.div
                key={slide.label}
                className="h-full origin-left bg-[var(--aa-tan)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: live && !reduce ? 1 : 0 }}
                transition={{ duration: live && !reduce ? HOLD_MS / 1000 : 0, ease: "linear" }}
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 lg:justify-end">
              <p className="text-[11px] tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")} <span className="opacity-40">|</span>{" "}
                {String(AA_NEAR.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-full border border-current"
                  onClick={() => go(i - 1)}
                  aria-label="Vorheriger Ort"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-full border border-current"
                  onClick={() => go(i + 1)}
                  aria-label="Nächster Ort"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
