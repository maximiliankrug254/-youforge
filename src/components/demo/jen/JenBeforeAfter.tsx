"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { JenReveal } from "@/components/demo/jen/JenReveal";
import { JenImageReveal } from "@/components/demo/jen/JenImageReveal";

export function JenBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(46);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
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
      id="vorher-nachher"
      className="bg-[var(--jen-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-14">
          <JenReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-accent)]">
              Vorher / Nachher
            </p>
            <h2 className="mt-5 font-jen-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.035em]">
              Vom bewuchsten Dach zur klaren Oberfläche
            </h2>
          </JenReveal>
          <JenReveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-relaxed text-white/50 lg:text-right">
              Zieh den Schieber — der Moment, in dem Bewuchs weicht und die
              Beschichtung greift.
            </p>
          </JenReveal>
        </div>

        <JenImageReveal delay={0.05} className="mt-14 overflow-hidden lg:mt-16">
          <div
            ref={containerRef}
            className="relative aspect-[16/11] w-full touch-none overflow-hidden bg-[var(--jen-panel)] select-none sm:aspect-[16/9]"
            data-lenis-prevent
            onPointerDown={startDrag}
            role="img"
            aria-label="Vorher-Nachher-Vergleich: ziehen zum Vergleichen"
          >
            <Image
              src="/demo/dachservice-jennebach/after-coated.jpg"
              alt="Nachher: klare, gepflegte Dachziegel"
              fill
              sizes="(max-width: 1480px) 100vw, 1480px"
              className="object-cover"
              draggable={false}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/demo/dachservice-jennebach/before-moss.jpg"
                alt="Vorher: verwitterte, bewuchses Dachziegel"
                fill
                sizes="(max-width: 1480px) 100vw, 1480px"
                className="object-cover"
                draggable={false}
              />
            </div>

            <span className="pointer-events-none absolute left-5 top-5 bg-[var(--jen-ink)]/80 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              Vorher
            </span>
            <span className="pointer-events-none absolute right-5 top-5 bg-[var(--jen-ink)]/80 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              Nachher
            </span>

            <div
              className="absolute inset-y-0 z-10 w-px bg-[var(--jen-accent)]"
              style={{ left: `${position}%` }}
            >
              <button
                type="button"
                aria-label="Vergleichsschieber — ziehen"
                aria-valuemin={4}
                aria-valuemax={96}
                aria-valuenow={Math.round(position)}
                role="slider"
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[var(--jen-ink)] text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 3));
                  if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 3));
                }}
              >
                <span className="text-sm tracking-tighter" aria-hidden>
                  ‹ ›
                </span>
              </button>
            </div>
          </div>
        </JenImageReveal>
        <p className="mt-5 text-xs tracking-wide text-white/35">
          Schieber ziehen — auf dem Handy wischen.
        </p>
      </div>
    </section>
  );
}
