"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { RsReveal } from "@/components/demo/rs/RsReveal";

export function RsBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(52);
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
    <section className="bg-[var(--rs-cream)] px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <RsReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
            Vorher / Nachher
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-rs-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-[var(--rs-ink)]">
            So sieht Feierabend bei uns aus
          </h2>
          <p className="mt-4 text-[var(--rs-muted)]">
            2-Zimmer nach Auszug, 2. OG ohne Aufzug. Morgens voll, abends leer — inklusive
            Entsorgung und besenreiner Übergabe.
          </p>
        </RsReveal>

        <RsReveal delay={0.12} className="mt-12">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full touch-none overflow-hidden rounded-2xl bg-[var(--rs-ink)] shadow-[0_28px_80px_rgba(28,25,23,0.22)] select-none"
            data-lenis-prevent
            onPointerDown={startDrag}
            role="img"
            aria-label="Vorher-Nachher-Vergleich: ziehen zum Vergleichen"
          >
            {/* After (clean) — full base */}
            <Image
              src="/demo/rs-entruempelung/after-clean.jpg"
              alt="Nachher: aufgeräumter, heller Raum"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              draggable={false}
            />

            {/* Before (clutter) — clipped */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/demo/rs-entruempelung/before-clutter.jpg"
                alt="Vorher: vollgestellter Raum"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                draggable={false}
              />
            </div>

            {/* Labels — not over critical image details, edge placement */}
            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[rgba(28,25,23,0.72)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--rs-cream)] backdrop-blur-sm">
              Vorher
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[rgba(28,25,23,0.72)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--rs-cream)] backdrop-blur-sm">
              Nachher
            </span>

            {/* Divider handle */}
            <div
              className="absolute inset-y-0 z-10 w-px bg-[var(--rs-cream)] shadow-[0_0_24px_rgba(0,0,0,0.45)]"
              style={{ left: `${position}%` }}
            >
              <button
                type="button"
                aria-label="Vergleichsschieber — ziehen"
                aria-valuemin={4}
                aria-valuemax={96}
                aria-valuenow={Math.round(position)}
                role="slider"
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-[rgba(245,241,235,0.35)] bg-[var(--rs-ink)] text-[var(--rs-cream)] shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
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
          <p className="mt-4 text-center text-xs leading-relaxed text-[var(--rs-muted)]">
            Drei Mann, ein Nachmittag. Schieber ziehen — auf dem Handy wischen.
          </p>
        </RsReveal>
      </div>
    </section>
  );
}
