"use client";

import Image from "next/image";
import Link from "next/link";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RK_MARKISEN_TYPES } from "@/components/demo/rk/rk-content";

export function RkTypes() {
  return (
    <section id="systeme" className="relative overflow-x-clip bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <RkReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Systeme
            </p>
            <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.3rem,5.4vw,4.4rem)] tracking-[0.01em] uppercase">
              <span className="whitespace-nowrap">Fünf Arten um</span>
              <span className="whitespace-nowrap">Schatten zu bauen.</span>
            </h2>
          </RkReveal>
          <RkReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-[var(--rk-muted)]">
              Welches System zur Fassade passt, sieht man am Haus — nicht im
              Katalog. Wir sagen es Ihnen vor Ort, mit Stoff in der Hand.
            </p>
            <Link
              href="/demo/raumkontrast/markisen"
              className="mt-5 inline-flex text-sm font-semibold text-[var(--rk-purple)] underline-offset-4 hover:underline"
            >
              Alle Markisen-Typen →
            </Link>
          </RkReveal>
        </div>

        {/* Asymmetric: first large, rest staggered */}
        <div className="mt-14 space-y-4 lg:mt-20">
          <RkReveal>
            <Link
              href="/demo/raumkontrast/markisen"
              className="group grid overflow-hidden bg-white lg:grid-cols-12"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-8 lg:aspect-[21/10]">
                <Image
                  src={RK_MARKISEN_TYPES[0].image}
                  alt={RK_MARKISEN_TYPES[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-[var(--rk-purple-ink)]/0 transition-colors duration-500 group-hover:bg-[var(--rk-purple-ink)]/15" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:col-span-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--rk-purple)]">
                  {RK_MARKISEN_TYPES[0].kicker}
                </p>
                <h3 className="font-rk-display mt-2 text-[clamp(1.8rem,3vw,2.6rem)] tracking-[0.01em] uppercase">
                  {RK_MARKISEN_TYPES[0].title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-[1.7] text-[var(--rk-muted)]">
                  {RK_MARKISEN_TYPES[0].text}
                </p>
                <span className="mt-6 text-sm font-semibold text-[var(--rk-purple)] transition-transform duration-300 group-hover:translate-x-1">
                  Details →
                </span>
              </div>
            </Link>
          </RkReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RK_MARKISEN_TYPES.slice(1).map((item, i) => (
              <RkReveal key={item.slug} delay={0.05 * i}>
                <Link
                  href="/demo/raumkontrast/markisen"
                  className="group block h-full overflow-hidden bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.07]"
                    />
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--rk-lime)] transition-all duration-500 group-hover:w-full" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rk-purple)]">
                      {item.kicker}
                    </p>
                    <h3 className="font-rk-display mt-1.5 text-xl tracking-[0.01em] uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[0.88rem] leading-[1.65] text-[var(--rk-muted)]">
                      {item.text}
                    </p>
                  </div>
                </Link>
              </RkReveal>
            ))}

            <RkReveal delay={0.2}>
              <div className="flex h-full min-h-[280px] flex-col justify-between bg-[var(--rk-purple)] p-6 text-white sm:p-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--rk-lime)]">
                    Nächster Schritt
                  </p>
                  <h3 className="font-rk-display mt-3 text-[1.55rem] leading-[1.05] tracking-[0.01em] uppercase">
                    Stoff und Gestell sehen — nicht raten.
                  </h3>
                  <p className="mt-4 text-[0.9rem] leading-[1.7] text-white/70">
                    15 m² mobile Ausstellung. Kostenlos bei Ihnen.
                  </p>
                </div>
                <Link
                  href="/demo/raumkontrast/kontakt"
                  className="mt-8 inline-flex items-center justify-center rounded-sm bg-[var(--rk-lime)] px-5 py-3.5 text-sm font-semibold text-[var(--rk-ink)] transition-colors hover:bg-white"
                >
                  Anhänger kommen lassen
                </Link>
              </div>
            </RkReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
