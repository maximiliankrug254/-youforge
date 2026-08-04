"use client";

import Image from "next/image";
import { TiwoReveal } from "@/components/demo/tiwo/TiwoReveal";
import { TiwoCountUp } from "@/components/demo/tiwo/TiwoCountUp";
import { TIWO_TEAM } from "@/components/demo/tiwo/tiwo-content";
import { TIWO_CONTACT } from "@/components/demo/tiwo/tiwo-contact";

export function TiwoTeam() {
  return (
    <section
      id="team"
      className="relative overflow-x-hidden bg-[var(--tiwo-mist)] px-5 py-24 text-[var(--tiwo-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-5">
          <TiwoReveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:col-span-7 lg:aspect-auto lg:min-h-[620px]">
            <Image
              src="/demo/tiwo-fliesen/handwerk.jpg"
              alt="Präzisionsarbeit auf der Baustelle — echtes Handwerk"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--tiwo-ink)]/75 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--tiwo-bronze)]">
                Auf der Baustelle
              </p>
              <p className="mt-3 max-w-md font-tiwo-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Kein Showroom-Theater. Echtes Handwerk.
              </p>
            </div>
          </TiwoReveal>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <TiwoReveal className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[280px]">
              <Image
                src="/demo/tiwo-fliesen/craft-hands.jpg"
                alt="Junges Team — Fokus und Präzision"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </TiwoReveal>
            <TiwoReveal delay={0.08} className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[280px]">
              <Image
                src="/demo/tiwo-fliesen/fugen.jpg"
                alt="Präzises Fugenbild — Detailqualität"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </TiwoReveal>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <TiwoReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
                Das Team
              </p>
              <h2 className="mt-5 max-w-[14ch] font-tiwo-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.04em]">
                Jung. Schnell. Verdammt gut.
              </h2>
            </TiwoReveal>
            <TiwoReveal delay={0.1}>
              <p className="mt-7 max-w-lg text-[1.08rem] leading-[1.7] text-[var(--tiwo-muted)]">
                Wir sind ein kleines, engagiertes Meister-Team um{" "}
                {TIWO_CONTACT.owner}. Frisch im Auftritt, altmodisch streng bei
                Qualität. Seit {TIWO_CONTACT.years} Jahren legen wir Flächen, die
                sich nach fertig anfühlen — privat und gewerblich, in Marburg und
                Umgebung.
              </p>
            </TiwoReveal>

            <TiwoReveal delay={0.16}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--tiwo-ink)]/10 pt-8">
                <div>
                  <p className="font-tiwo-display text-3xl font-bold tracking-tight sm:text-4xl">
                    <TiwoCountUp value={20} suffix="+" />
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--tiwo-muted)]">
                    Jahre
                  </p>
                </div>
                <div>
                  <p className="font-tiwo-display text-3xl font-bold tracking-tight sm:text-4xl">
                    100%
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--tiwo-muted)]">
                    Vor Ort
                  </p>
                </div>
                <div>
                  <p className="font-tiwo-display text-3xl font-bold tracking-tight sm:text-4xl">
                    1 Team
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--tiwo-muted)]">
                    Ein Anspruch
                  </p>
                </div>
              </div>
            </TiwoReveal>
          </div>

          <div className="space-y-0 border-t border-[var(--tiwo-ink)]/10 lg:col-span-5 lg:col-start-8">
            {TIWO_TEAM.map((item, i) => (
              <TiwoReveal key={item.title} delay={0.08 * (i + 1)}>
                <div className="border-b border-[var(--tiwo-ink)]/10 py-7">
                  <p className="font-tiwo-display text-2xl font-bold tracking-[-0.02em]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--tiwo-muted)]">
                    {item.text}
                  </p>
                </div>
              </TiwoReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
