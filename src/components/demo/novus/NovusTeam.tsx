"use client";

import Image from "next/image";
import { NovusReveal } from "@/components/demo/novus/NovusReveal";
import { NovusCountUp } from "@/components/demo/novus/NovusCountUp";
import { NOVUS_TEAM } from "@/components/demo/novus/novus-content";
import { NOVUS_CONTACT } from "@/components/demo/novus/novus-contact";

export function NovusTeam() {
  return (
    <section
      id="team"
      className="relative overflow-x-hidden bg-[var(--novus-stone)] px-5 py-24 text-[var(--novus-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-5">
          <NovusReveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:col-span-7 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/demo/novus-hair/10-team.jpg"
              alt="Junges Novus-Team — Colour Artists mit Attitude"
              fill
              quality={92}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_30%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--novus-ink)]/80 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--novus-gold)]">
                Das Team
              </p>
              <p className="mt-3 max-w-md font-novus-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Jung. Laut. Verdammt gut.
              </p>
            </div>
          </NovusReveal>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <NovusReveal className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[280px]">
              <Image
                src="/demo/novus-hair/03-colour-craft.jpg"
                alt="Colour Artist trägt Farbe auf — echte Arbeit"
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </NovusReveal>
            <NovusReveal
              delay={0.08}
              className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[280px]"
            >
              <Image
                src="/demo/novus-hair/08-colour-bowl.jpg"
                alt="Farbmischung im Bowl — Präzision im Detail"
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </NovusReveal>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <NovusReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--novus-gold-deep)]">
                Warum Novus
              </p>
              <h2 className="mt-5 max-w-[13ch] font-novus-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.04em]">
                Ein Team, das aussieht wie seine Arbeit.
              </h2>
            </NovusReveal>
            <NovusReveal delay={0.1}>
              <p className="mt-7 max-w-lg text-[1.08rem] leading-[1.7] text-[var(--novus-muted)]">
                Unter {NOVUS_CONTACT.owner} arbeiten Colour Artists mit
                technischem Know-how und null Kompromiss-Attitüde. Regelmäßig
                geschult. Offen für Neues. Fixiert auf Looks, die sitzen — und
                auf Kund:innen, die wiederkommen.
              </p>
            </NovusReveal>

            <NovusReveal delay={0.16}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--novus-ink)]/10 pt-8">
                <div>
                  <p className="font-novus-display text-3xl font-bold tracking-tight sm:text-4xl">
                    <NovusCountUp value={NOVUS_CONTACT.seats} />
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--novus-muted)]">
                    Plätze
                  </p>
                </div>
                <div>
                  <p className="font-novus-display text-3xl font-bold tracking-tight sm:text-4xl">
                    300+
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--novus-muted)]">
                    Nuancen
                  </p>
                </div>
                <div>
                  <p className="font-novus-display text-3xl font-bold tracking-tight sm:text-4xl">
                    1
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--novus-muted)]">
                    Attitude
                  </p>
                </div>
              </div>
            </NovusReveal>
          </div>

          <div className="space-y-0 border-t border-[var(--novus-ink)]/10 lg:col-span-5 lg:col-start-8">
            {NOVUS_TEAM.map((item, i) => (
              <NovusReveal key={item.title} delay={0.08 * (i + 1)}>
                <div className="border-b border-[var(--novus-ink)]/10 py-7">
                  <p className="font-novus-display text-2xl font-bold tracking-[-0.02em]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--novus-muted)]">
                    {item.text}
                  </p>
                </div>
              </NovusReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
