"use client";

import { AureaReveal } from "@/components/demo/aurea/AureaReveal";

export function AureaStatement() {
  return (
    <section className="relative overflow-x-hidden bg-[var(--aurea-ink)] px-5 py-28 text-white sm:px-8 sm:py-36 lg:py-48">
      <div className="mx-auto max-w-[1500px]">
        <AureaReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--aurea-copper)]">
            Prinzip
          </p>
        </AureaReveal>
        <AureaReveal delay={0.08}>
          <p className="mt-8 max-w-[15ch] font-aurea-display text-[clamp(2.8rem,7.8vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            Weniger Lärm.
            <br />
            <span className="text-[var(--aurea-copper)]">Mehr Charakter.</span>
          </p>
        </AureaReveal>
        <AureaReveal delay={0.16}>
          <p className="mt-10 max-w-xl text-[1.1rem] leading-[1.75] text-white/45 sm:text-[1.2rem]">
            Eine Salon-Website darf nicht aussehen wie 2014. Sie muss sich anfühlen
            wie euer Handwerk: präzise, ruhig, teuer — ohne laut zu sein.
          </p>
        </AureaReveal>
      </div>
    </section>
  );
}
