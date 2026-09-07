"use client";

import type { ReactNode } from "react";
import { TUKAN } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY } from "@/components/demo/tukan/tukan-content";
import { TukanButton } from "@/components/demo/tukan/TukanButton";
import { TukanOrder } from "@/components/demo/tukan/TukanOrder";
import { TukanFooter } from "@/components/demo/tukan/TukanFooter";

function Panel({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-tukan-panel={id}
      className="flex min-h-[100svh] scroll-mt-20 flex-col justify-center px-6 py-20 sm:px-10 lg:min-h-dvh lg:px-14 lg:py-24"
    >
      <p className="font-tukan-mono text-[12px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
        {kicker}
      </p>
      <h2 className="tukan-headline mt-3 text-[clamp(1.85rem,3.4vw,2.8rem)] font-semibold text-white">
        {title}
      </h2>
      <div className="mt-6 max-w-md space-y-4 text-[1.04rem] leading-relaxed text-white/78">
        {children}
      </div>
    </section>
  );
}

export function TukanStory() {
  return (
    <div className="relative bg-[var(--tukan-void)] lg:border-l lg:border-white/10">
      <Panel
        id="home"
        kicker={TUKAN_COPY.heroKicker}
        title={
          <>
            <span className="font-tukan-display mb-3 block whitespace-nowrap text-[clamp(2.4rem,4.8vw,3.8rem)] leading-none text-white">
              {TUKAN_COPY.heroTitle}
            </span>
            <span className="block max-w-[20rem]">{TUKAN_COPY.heroLine}</span>
          </>
        }
      >
        <p>{TUKAN_COPY.heroLead}</p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <TukanButton href="#bestellen" className="bg-[var(--tukan-sun)] text-[var(--tukan-void)]">
            {TUKAN_COPY.heroCta}
          </TukanButton>
          <a
            href="#eis"
            className="font-tukan-mono text-[12px] uppercase tracking-[0.16em] text-white/50 hover:text-white"
          >
            {TUKAN_COPY.heroSecondary}
          </a>
        </div>
        <p className="font-tukan-mono pt-2 text-[11px] uppercase tracking-[0.16em] text-white/40">
          {TUKAN_COPY.rating} · {TUKAN_COPY.ratingNote}
        </p>
      </Panel>

      <Panel
        id="eis"
        kicker="Was drin ist"
        title={
          <>
            <span className="block">Die Frucht siehst du.</span>
            <span className="mt-1 block">Die 14 Gramm merkst du.</span>
          </>
        }
      >
        <p>{TUKAN_COPY.tasteLead}</p>
        {TUKAN_COPY.tastePoints.map((item) => (
          <p key={item.title}>
            <span className="font-semibold text-white">{item.title}. </span>
            {item.text}
          </p>
        ))}
      </Panel>

      <Panel
        id="bali"
        kicker="Bali"
        title={
          <>
            <span className="block">Es schmeckt nach Bali.</span>
            <span className="mt-1 block">Den Flug kannst du dir sparen.</span>
          </>
        }
      >
        <p>{TUKAN_COPY.baliLead}</p>
        <p className="text-white/65">{TUKAN_COPY.baliBody}</p>
      </Panel>

      <Panel id="pack" kicker={TUKAN_COPY.factsKicker} title={TUKAN_COPY.packTitle}>
        <p>{TUKAN_COPY.packLead}</p>
        <ul className="grid grid-cols-2 gap-3 pt-2">
          {TUKAN_COPY.facts.map((item) => (
            <li key={item.label} className="rounded-2xl border border-white/12 px-4 py-4">
              <p className="font-tukan-display text-[1.85rem] leading-none text-[var(--tukan-sun)]">
                {item.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
                {item.label}
              </p>
              <p className="mt-0.5 text-[12px] text-white/45">{item.hint}</p>
            </li>
          ))}
        </ul>
      </Panel>

      <section
        id="bestellen"
        data-tukan-panel="bestellen"
        className="flex min-h-[100svh] scroll-mt-20 flex-col justify-center px-6 py-20 sm:px-10 lg:min-h-dvh lg:px-14 lg:py-24"
      >
        <TukanOrder />
      </section>

      <TukanFooter />
      <p className="sr-only">{TUKAN.brand.full}</p>
    </div>
  );
}
