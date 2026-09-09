"use client";

import Image from "next/image";
import Link from "next/link";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_PRODUCTS } from "@/components/demo/rk/rk-content";

export function RkServices() {
  return (
    <section
      id="leistungen"
      className="relative overflow-x-clip bg-[var(--rk-purple-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <RkReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-lime)]">
              Leistungen
            </p>
            <h2 className="rk-display-lines font-rk-display mt-5 max-w-[18ch] text-[clamp(2.3rem,5.4vw,4.4rem)] tracking-[0.01em] uppercase">
              <span>Sechs Gewerke.</span>
              <span>Ein Ansprechpartner.</span>
            </h2>
          </RkReveal>
          <RkReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-white/60">
              Ein Anruf, ein Termin vor Ort — vom ZIP-Screen bis zum Boden.
              Sie müssen nicht drei Betriebe koordinieren.
            </p>
          </RkReveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {RK_PRODUCTS.map((item, i) => (
            <RkReveal key={item.slug} delay={0.04 * i} className="h-full">
              <Link
                href={item.href}
                className="group relative flex h-full flex-col overflow-hidden bg-white/[0.06] ring-1 ring-white/10"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-0 bg-[var(--rk-purple-ink)]/0 transition-colors duration-500 group-hover:bg-[var(--rk-purple-ink)]/25" />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--rk-lime)] transition-all duration-500 group-hover:w-full" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rk-lime)]">
                    {item.kicker}
                  </p>
                  <h3 className="font-rk-display mt-1.5 text-[1.45rem] tracking-[0.01em] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[0.9rem] leading-[1.65] text-white/55">
                    {item.text}
                  </p>
                </div>
              </Link>
            </RkReveal>
          ))}
        </div>

        <RkReveal delay={0.12}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-[0.98rem] leading-[1.7] text-white/50">
              Unsicher, wo Sie anfangen? Wir kommen mit der Ausstellung — und
              sagen Ihnen, was die Fassade wirklich braucht.
            </p>
            <RkButton
              href="/demo/raumkontrast/kontakt"
              className="rk-shine inline-flex shrink-0 items-center justify-center rounded-sm bg-[var(--rk-lime)] px-7 py-4 text-sm font-semibold text-[var(--rk-ink)] hover:bg-[var(--rk-lime-deep)] hover:text-white"
            >
              Kostenloses Aufmaß
            </RkButton>
          </div>
        </RkReveal>
      </div>
    </section>
  );
}
