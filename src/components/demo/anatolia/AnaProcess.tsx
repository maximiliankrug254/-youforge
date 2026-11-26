"use client";

import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_PROCESS } from "@/components/demo/anatolia/ana-content";

export function AnaProcess() {
  return (
    <section className="bg-[var(--ana-paper)] px-5 py-24 text-[var(--ana-ink)] sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1480px]">
        <AnaReveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber-deep)]">
            Ablauf
          </p>
          <h2 className="mt-5 font-ana-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1] tracking-[-0.03em]">
            Vom Gespräch
            <br />
            zur Übergabe.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-[var(--ana-muted)]">
            Danach der Kontakt nach Essen — Anruf oder Nachricht an Ali
            Sertpolat.
          </p>
        </AnaReveal>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {ANA_PROCESS.map((step, i) => (
            <AnaReveal key={step.step} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--ana-ink)]/8 bg-white/55 p-7 sm:p-8">
                <span className="font-mono text-[11px] tracking-[0.28em] text-[var(--ana-amber-deep)]">
                  {step.step}
                </span>
                <h3 className="mt-6 font-ana-display text-2xl font-semibold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-[1.7] text-[var(--ana-muted)]">
                  {step.text}
                </p>
              </article>
            </AnaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
