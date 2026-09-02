"use client";

import { useEffect, useRef, useState } from "react";
import { AA_IMG } from "@/components/demo/aa/aa-config";
import { AA_FILM_CHAPTERS } from "@/components/demo/aa/aa-content";
import { AaReveal } from "@/components/demo/aa/AaReveal";

export function AaGrow() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(0);
  const [ready, setReady] = useState(false);

  const chapter = [...AA_FILM_CHAPTERS].reverse().find((c) => time >= c.at) ?? AA_FILM_CHAPTERS[0];

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onTime = () => setTime(el.currentTime);
    el.addEventListener("timeupdate", onTime);
    return () => el.removeEventListener("timeupdate", onTime);
  }, []);

  return (
    <section
      id="ofen"
      data-aa-tone="tan"
      className="relative isolate z-10 scroll-mt-24 overflow-hidden px-5 py-16 text-[var(--aa-ink)] sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <AaReveal>
          <p className="text-[10px] uppercase tracking-[0.42em] opacity-50">+++ Der Weg eines Stücks +++</p>
          <h2 className="mt-4 max-w-3xl font-aa-display text-[clamp(2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.03em]">
            Zwölf Wochen.
            <br />
            Ein Feuer.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed opacity-75">
            Stamm, Grube, Fuge, Scheibe, Asche, Ofen. Kein Moodfilm — der Ablauf,
            den jedes Stück hier nimmt, bevor es den Hof verlässt.
          </p>
        </AaReveal>

        <div className="relative mt-12 overflow-hidden bg-[var(--aa-ink)]">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={AA_IMG.kiln}
            onCanPlay={() => setReady(true)}
          >
            <source src={AA_IMG.film} type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--aa-ink)]/80 via-transparent to-[var(--aa-ink)]/20" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--aa-tan)]/70">
                {String(AA_FILM_CHAPTERS.findIndex((c) => c.title === chapter.title) + 1).padStart(2, "0")}{" "}
                / {String(AA_FILM_CHAPTERS.length).padStart(2, "0")}
              </p>
              <p className="mt-1 font-aa-display text-3xl text-[var(--aa-tan)] sm:text-5xl">
                {chapter.title}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--aa-tan)]/75">
                {chapter.note}
              </p>
            </div>
            <p className="hidden text-[10px] uppercase tracking-[0.22em] text-[var(--aa-tan)]/50 sm:block">
              {ready ? "Läuft in der Schleife" : "Lädt …"}
            </p>
          </div>
        </div>

        <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {AA_FILM_CHAPTERS.map((c) => {
            const active = chapter.title === c.title;
            return (
              <li key={c.title}>
                <button
                  type="button"
                  onClick={() => {
                    const el = videoRef.current;
                    if (!el) return;
                    el.currentTime = c.at + 0.05;
                    void el.play();
                  }}
                  className={`w-full border-t pt-3 text-left text-[10px] uppercase tracking-[0.16em] ${
                    active
                      ? "border-[var(--aa-ink)] opacity-100"
                      : "border-[var(--aa-ink)]/20 opacity-45 hover:opacity-80"
                  }`}
                >
                  {c.title}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
