"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";
import { GPF_COMPARE } from "@/components/demo/gpf/gpf-content";
import { GPF_DEMO } from "@/components/demo/gpf/gpf-config";

export function GpfCompare() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const project = GPF_COMPARE[index];

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(97, Math.max(3, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [updateFromClientX]);

  function startDrag(e: React.PointerEvent) {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  }

  return (
    <section
      id="referenzen"
      className="relative overflow-x-hidden bg-[var(--gpf-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GpfReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-sand)]">
              Vorher / Nachher
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
              Ziehen Sie den Regler.
            </h2>
          </GpfReveal>
          <GpfReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-white/55">
              {GPF_DEMO.compare.text}
            </p>
          </GpfReveal>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 sm:mt-14">
          {GPF_COMPARE.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setIndex(i);
                setPosition(50);
              }}
              aria-pressed={index === i}
              className={`rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                index === i
                  ? "border-[var(--gpf-accent)] bg-[var(--gpf-accent)] text-white"
                  : "border-white/20 text-white/55 hover:border-white/45 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <GpfReveal delay={0.05} className="mt-8">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-[2px] bg-[var(--gpf-panel)] sm:aspect-[16/9]"
            data-lenis-prevent
            onPointerDown={startDrag}
            role="img"
            aria-label={`Vorher-Nachher-Vergleich: ${project.title}`}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={project.id}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: GPF_EASE }}
              >
                <Image
                  src={project.after}
                  alt={project.afterAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                  <Image
                    src={project.before}
                    alt={project.beforeAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-[var(--gpf-ink)]/15" aria-hidden />
                </div>
              </motion.div>
            </AnimatePresence>

            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[var(--gpf-ink)]/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Vorher
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[var(--gpf-accent)]/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Nachher
            </span>

            <div
              className="absolute inset-y-0 z-10 w-px bg-white/90"
              style={{ left: `${position}%` }}
            >
              <button
                type="button"
                role="slider"
                aria-label="Vergleichsschieber"
                aria-valuemin={3}
                aria-valuemax={97}
                aria-valuenow={Math.round(position)}
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[var(--gpf-ink)]/85 text-white backdrop-blur-md transition-transform hover:scale-105"
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPosition((p) => Math.max(3, p - 4));
                  if (e.key === "ArrowRight") setPosition((p) => Math.min(97, p + 4));
                }}
              >
                <span className="text-sm tracking-[-0.1em]" aria-hidden>
                  ◀ ▶
                </span>
              </button>
            </div>
          </div>
        </GpfReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-12 sm:items-baseline">
          <GpfReveal className="sm:col-span-5">
            <h3 className="font-gpf-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
              {project.title}
            </h3>
          </GpfReveal>
          <GpfReveal delay={0.05} className="sm:col-span-6 sm:col-start-7">
            <p className="text-[1rem] leading-[1.7] text-white/55">
              {project.text}
            </p>
          </GpfReveal>
        </div>
      </div>
    </section>
  );
}
