"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AA, AA_IMG } from "@/components/demo/aa/aa-config";
import { AA_FACTS } from "@/components/demo/aa/aa-content";
import { AA_EASE } from "@/components/demo/aa/aa-motion";
import { AaButton } from "@/components/demo/aa/AaButton";

type Focus = "lea" | "nils" | null;

const CAST = {
  lea: {
    name: AA.makers.clay.name,
    role: AA.makers.clay.role,
    line: "Glasur aus der Asche, die Nils hobelt. Kein Rezept aus der Dose, keine Serie über zwölf.",
    still: AA_IMG.wheel,
    stillAlt: "Lea Somm an der Drehscheibe — nasse Hände, Steinzeug",
    cue: "Die Scheibe",
    pos: "22% 48%",
  },
  nils: {
    name: AA.makers.wood.name,
    role: AA.makers.wood.role,
    line: "Zapfen statt Beschlag. Ein Stuhl verlässt die Bank erst, wenn er ohne Leim stehen würde.",
    still: AA_IMG.joinery,
    stillAlt: "Handgezapfte Eichenfuge auf der Hobelbank",
    cue: "Die Fuge",
    pos: "78% 42%",
  },
} as const;

export function AaAbout() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [focus, setFocus] = useState<Focus>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const stageScale = useTransform(scrollYProgress, [0.12, 0.52], [1.1, 1]);
  const stageY = useTransform(scrollYProgress, [0, 1], ["-5%", "6%"]);
  const stillY = useTransform(scrollYProgress, [0.28, 0.75], [64, -20]);

  const line = focus ? CAST[focus].line : "Sie stehen nicht nebeneinander. Sie stehen im selben Feuer.";

  return (
    <section
      id="werkstatt"
      ref={ref}
      data-aa-tone="dark"
      className="relative z-10 scroll-mt-24 text-[var(--aa-tan)]"
    >
      <div
        className="relative min-h-[100dvh] overflow-hidden"
        onMouseLeave={() => setFocus(null)}
      >
        <motion.div
          className="absolute inset-0 origin-center will-change-transform"
          style={reduce ? undefined : { scale: stageScale, y: stageY }}
        >
          <Image
            src={AA_IMG.makers}
            alt="Nils Havel an der Hobelbank, Lea Somm an der Drehscheibe, Ofen dazwischen"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover transition-[object-position] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ objectPosition: focus ? CAST[focus].pos : "50% 42%" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,17,13,0.58)_0%,rgba(22,17,13,0.1)_36%,rgba(22,17,13,0.16)_56%,rgba(22,17,13,0.86)_100%)]" />
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-[46%] bg-gradient-to-r from-[var(--aa-ink)]/50 to-transparent transition-opacity duration-700 ${
            focus === "nils" ? "opacity-80" : "opacity-0"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-[46%] bg-gradient-to-l from-[var(--aa-ink)]/50 to-transparent transition-opacity duration-700 ${
            focus === "lea" ? "opacity-80" : "opacity-0"
          }`}
        />

        <button
          type="button"
          className="absolute inset-y-0 left-0 z-[1] w-1/2 bg-transparent max-lg:hidden"
          aria-label={`${CAST.lea.name} in den Vordergrund`}
          onMouseEnter={() => setFocus("lea")}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 z-[1] w-1/2 bg-transparent max-lg:hidden"
          aria-label={`${CAST.nils.name} in den Vordergrund`}
          onMouseEnter={() => setFocus("nils")}
        />

        <div className="relative z-10 flex min-h-[100dvh] flex-col justify-between px-5 pb-5 pt-24 sm:px-8 lg:px-12">
          <div className="flex items-start justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.42em] opacity-70">+++ Die Werkstatt +++</p>
            <p className="hidden max-w-xs text-right text-[10px] uppercase leading-relaxed tracking-[0.18em] opacity-55 sm:block">
              Kammwald · Hobelbank und Scheibe, sechs Meter auseinander
            </p>
          </div>

          <div className="mt-10 grid items-end gap-6 lg:grid-cols-2">
            <NamePlate
              who="lea"
              focus={focus}
              align="left"
              onEnter={() => setFocus("lea")}
            />
            <NamePlate
              who="nils"
              focus={focus}
              align="right"
              onEnter={() => setFocus("nils")}
            />
          </div>

          <div className="mt-8 grid items-end gap-5 lg:grid-cols-[minmax(0,280px)_1fr_minmax(0,280px)] lg:gap-10">
            <Still
              who="lea"
              focus={focus}
              y={reduce ? undefined : stillY}
              onEnter={() => setFocus("lea")}
            />

            <div className="order-first px-2 text-center lg:order-none">
              <p className="font-aa-display text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.03em]">
                Zwei Namen.
                <br />
                Ein Hof.
              </p>
              <div className="relative mx-auto mt-4 min-h-[4.5rem] max-w-md">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={line}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: AA_EASE }}
                    className="text-[13px] leading-relaxed tracking-wide opacity-85 sm:text-[15px]"
                  >
                    {line}
                  </motion.p>
                </AnimatePresence>
              </div>
              <AaButton href="#besuch" className="mt-6 bg-[var(--aa-tan)] text-[var(--aa-ink)]">
                Die beiden treffen
              </AaButton>
            </div>

            <Still
              who="nils"
              focus={focus}
              y={reduce ? undefined : stillY}
              onEnter={() => setFocus("nils")}
            />
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-px border-t border-[var(--aa-tan)]/20 sm:grid-cols-4">
            {AA_FACTS.map((f) => (
              <div key={f.label} className="px-3 py-4">
                <dt className="font-aa-display text-[clamp(1.5rem,2.8vw,2.1rem)] leading-none">{f.n}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.16em] opacity-55">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function NamePlate({
  who,
  focus,
  align,
  onEnter,
}: {
  who: "lea" | "nils";
  focus: Focus;
  align: "left" | "right";
  onEnter: () => void;
}) {
  const person = CAST[who];
  const dim = focus && focus !== who;

  return (
    <button
      type="button"
      className={`text-left transition-opacity duration-500 ${align === "right" ? "lg:text-right" : ""} ${
        dim ? "opacity-30" : "opacity-100"
      }`}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={() => onEnter()}
    >
      <p className="text-[10px] uppercase tracking-[0.32em] opacity-60">{person.role}</p>
      <p className="mt-2 font-aa-display text-[clamp(2.4rem,7.4vw,6.2rem)] leading-[0.82] tracking-[-0.045em]">
        {person.name}
      </p>
    </button>
  );
}

function Still({
  who,
  focus,
  y,
  onEnter,
}: {
  who: "lea" | "nils";
  focus: Focus;
  y?: MotionValue<number>;
  onEnter: () => void;
}) {
  const person = CAST[who];
  const on = focus === who;
  const dim = focus && !on;

  return (
    <motion.button
      type="button"
      className={`relative z-20 max-w-[280px] overflow-hidden text-left ${
        who === "lea" ? "lg:justify-self-start" : "ml-auto lg:justify-self-end"
      } ${dim ? "opacity-45" : "opacity-100"}`}
      style={y ? { y } : undefined}
      animate={{ scale: on ? 1.05 : 1 }}
      transition={{ duration: 0.55, ease: AA_EASE }}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={() => onEnter()}
    >
      <span className="relative block aspect-[5/4] w-[min(100%,280px)]">
        <Image src={person.still} alt={person.stillAlt} fill sizes="280px" className="object-cover" />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--aa-ink)]/85 to-transparent p-3">
          <span className="block text-[9px] uppercase tracking-[0.28em] opacity-70">Einstellung</span>
          <span className="block font-aa-display text-xl tracking-tight">{person.cue}</span>
        </span>
      </span>
    </motion.button>
  );
}
