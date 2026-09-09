"use client";

import Image from "next/image";
import Link from "next/link";
import { RkPageHero } from "@/components/demo/rk/RkPageHero";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RkMarquee } from "@/components/demo/rk/RkMarquee";
import { RK_TRENDS } from "@/components/demo/rk/rk-content";

export function RkTrendsPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--rk-purple-ink)] text-white">
        <Image
          src={RK_TRENDS[0].image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(160deg,rgba(28,7,28,0.92)_0%,rgba(28,7,28,0.45)_45%,rgba(28,7,28,0.95)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-40 sm:px-8 lg:px-12 lg:pb-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--rk-lime)]">
            Inspiration · Jetzt
          </p>
          <h1 className="rk-display-lines font-rk-display mt-4 text-[clamp(4rem,18vw,11rem)] tracking-[0.01em] uppercase">
            <span>Trends</span>
            <span className="text-[var(--rk-lime)]">die man anfasst.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[1.15rem] leading-[1.7] text-white/70">
            Cord-Comeback. Textilien, die heizen mit. Leinen, das atmet.
            Aktuelle Kollektionen — Muster im Anhänger, nicht nur auf dem Screen.
          </p>
        </div>
      </section>

      <RkMarquee
        words={["Cord", "Leinen", "Energie", "Kollektion", "Struktur", "Farbe", "Haptik", "Jetzt"]}
        tone="dark"
      />

      <div className="space-y-0">
        {RK_TRENDS.map((trend, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={trend.slug}
              id={trend.slug}
              className={`relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:py-40 ${
                i % 2 === 0 ? "bg-[var(--rk-paper)]" : "bg-[var(--rk-purple-ink)] text-white"
              }`}
            >
              <div className="mx-auto grid max-w-[1480px] items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <RkReveal
                  className={
                    reverse
                      ? "lg:col-span-6 lg:col-start-7 lg:row-start-1"
                      : "lg:col-span-6"
                  }
                >
                  <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
                    <Image
                      src={trend.image}
                      alt={trend.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 bg-[var(--rk-lime)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--rk-ink)]">
                      {trend.kicker}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={trend.detail} alt="" fill sizes="25vw" className="object-cover" />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={trend.detail2} alt="" fill sizes="25vw" className="object-cover" />
                    </div>
                  </div>
                </RkReveal>
                <RkReveal
                  delay={0.08}
                  className={
                    reverse
                      ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                      : "lg:col-span-5 lg:col-start-8"
                  }
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.36em] ${
                      i % 2 === 0 ? "text-[var(--rk-purple)]" : "text-[var(--rk-lime)]"
                    }`}
                  >
                    0{i + 1} · {trend.kicker}
                  </p>
                  <h2 className="font-rk-display mt-5 text-[clamp(2.4rem,5.5vw,4.6rem)] tracking-[0.01em] uppercase">
                    {trend.title}
                  </h2>
                  <p
                    className={`mt-6 text-[1.15rem] leading-[1.75] ${
                      i % 2 === 0 ? "text-[var(--rk-ink)]" : "text-white/90"
                    }`}
                  >
                    {trend.lead}
                  </p>
                  <p
                    className={`mt-5 text-[1.05rem] leading-[1.8] ${
                      i % 2 === 0 ? "text-[var(--rk-muted)]" : "text-white/60"
                    }`}
                  >
                    {trend.text}
                  </p>
                </RkReveal>
              </div>
            </section>
          );
        })}
      </div>

      <section className="relative overflow-hidden bg-[var(--rk-lime)] px-5 py-24 text-[var(--rk-ink)] sm:px-8 sm:py-32">
        <div className="relative mx-auto max-w-[1480px]">
          <RkReveal>
            <h2 className="font-rk-display max-w-[16ch] text-[clamp(2.4rem,6vw,5rem)] uppercase">
              Muster sehen. Nicht scrollen.
            </h2>
            <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.8]">
              15 m² mobile Ausstellung — Stoffe, Böden, Sonnenschutz. Kostenlos
              bei Ihnen. Termine nach Vereinbarung.
            </p>
            <Link
              href="/demo/raumkontrast/kontakt"
              className="rk-shine mt-10 inline-flex rounded-sm bg-[var(--rk-purple)] px-8 py-4 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
            >
              Trend-Termin holen
            </Link>
          </RkReveal>
        </div>
      </section>

      <RkContact />
    </main>
  );
}
