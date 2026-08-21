"use client";

import { R2bReveal } from "@/components/demo/r2b/R2bReveal";
import { R2B_VOICES } from "@/components/demo/r2b/r2b-content";

export function R2bVoices() {
  return (
    <section className="relative overflow-x-hidden bg-[var(--r2b-void)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <R2bReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass)]">
            Stimmen
          </p>
        </R2bReveal>

        <div className="mt-14 grid gap-16 lg:mt-16 lg:grid-cols-2 lg:gap-20">
          {R2B_VOICES.map((voice, i) => (
            <R2bReveal key={voice.name} delay={i * 0.1}>
              <blockquote>
                <p className="font-r2b-display text-[clamp(1.45rem,2.6vw,2.05rem)] font-medium leading-[1.28] tracking-[-0.03em] text-white/88">
                  „{voice.quote}“
                </p>
                <footer className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-medium tracking-wide text-white">
                    {voice.name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--r2b-brass)]">
                    {voice.firm}
                  </p>
                </footer>
              </blockquote>
            </R2bReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
