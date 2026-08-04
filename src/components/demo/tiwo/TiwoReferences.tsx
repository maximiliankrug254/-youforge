"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { TiwoReveal } from "@/components/demo/tiwo/TiwoReveal";
import { TiwoImageReveal } from "@/components/demo/tiwo/TiwoImageReveal";

const GALLERY = [
  {
    src: "/demo/tiwo-fliesen/luxus-bad.jpg",
    label: "Bad",
    alt: "Modernes Bad mit großformatigen Fliesen",
  },
  {
    src: "/demo/tiwo-fliesen/terrasse.jpg",
    label: "Terrasse",
    alt: "Terrasse mit Feinsteinzeug",
  },
  {
    src: "/demo/tiwo-fliesen/wohnbereich.jpg",
    label: "Wohnen",
    alt: "Wohnbereich mit Fliesenboden",
  },
  {
    src: "/demo/tiwo-fliesen/naturstein.jpg",
    label: "Naturstein",
    alt: "Naturstein-Oberfläche im Detail",
  },
] as const;

export function TiwoReferences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(48);
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
      id="referenzen"
      className="relative overflow-x-hidden bg-[var(--tiwo-mist)] px-5 py-24 text-[var(--tiwo-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <TiwoReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
              Referenzen
            </p>
            <h2 className="mt-5 font-tiwo-display text-[clamp(2.5rem,5.8vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              Beweis statt BlaBla.
            </h2>
          </TiwoReveal>
          <TiwoReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-relaxed text-[var(--tiwo-muted)] lg:text-right">
              Bad, Terrasse, Wohnen, Naturstein — Flächen, die nach Arbeit
              aussehen. Guter Arbeit.
            </p>
          </TiwoReveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {GALLERY.map((item, i) => (
            <TiwoReveal key={item.src} delay={0.05 * i}>
              <div className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--tiwo-ink)]/55 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  {item.label}
                </p>
              </div>
            </TiwoReveal>
          ))}
        </div>

        <div className="mt-20 lg:mt-28">
          <TiwoReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
              Vorher / Nachher
            </p>
            <h3 className="mt-4 max-w-[16ch] font-tiwo-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em]">
              Vom Altbestand zur klaren Fläche
            </h3>
          </TiwoReveal>

          <TiwoReveal delay={0.06} className="mt-10 overflow-hidden">
            <div
              ref={containerRef}
              className="relative aspect-[16/11] w-full touch-none overflow-hidden bg-[var(--tiwo-ink)] select-none sm:aspect-[16/9]"
              data-lenis-prevent
              onPointerDown={startDrag}
              role="img"
              aria-label="Vorher-Nachher-Vergleich Bad"
            >
              <Image
                src="/demo/tiwo-fliesen/hero-bad.jpg"
                alt="Nachher: modernes Bad"
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
                  src="/demo/tiwo-fliesen/before-clutter.jpg"
                  alt="Vorher: älteres Bad"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  draggable={false}
                />
              </div>
              <span className="pointer-events-none absolute left-4 top-4 bg-[var(--tiwo-ink)]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                Vorher
              </span>
              <span className="pointer-events-none absolute right-4 top-4 bg-[var(--tiwo-ink)]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                Nachher
              </span>
              <div
                className="absolute inset-y-0 z-10 w-px bg-[var(--tiwo-accent)]"
                style={{ left: `${position}%` }}
              >
                <button
                  type="button"
                  aria-label="Vergleichsschieber"
                  role="slider"
                  aria-valuemin={4}
                  aria-valuemax={96}
                  aria-valuenow={Math.round(position)}
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[var(--tiwo-ink)] text-white"
                  onKeyDown={(e) => {
                    if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 3));
                    if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 3));
                  }}
                >
                  <span aria-hidden>‹ ›</span>
                </button>
              </div>
            </div>
          </TiwoReveal>
        </div>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:items-center lg:gap-14">
          <TiwoReveal className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
              Bemusterung
            </p>
            <h3 className="mt-4 max-w-[16ch] font-tiwo-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em]">
              Fliesen auswählen — mit Begleitung
            </h3>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-[1.7] text-[var(--tiwo-muted)]">
              Wir begleiten Sie zu einem erfahrenen Fachhändler. Materialien
              vergleichen, Oberflächen fühlen, Design finden — in Ruhe, mit
              fachkundiger Beratung an Ihrer Seite.
            </p>
          </TiwoReveal>
          <TiwoReveal delay={0.1} className="lg:col-span-6">
            <TiwoImageReveal
              src="/demo/tiwo-fliesen/fugen.jpg"
              alt="Präzises Fugenbild und Materialqualität"
              className="aspect-[16/11] lg:min-h-[360px]"
            />
          </TiwoReveal>
        </div>
      </div>
    </section>
  );
}
