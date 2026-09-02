"use client";

import { BstReveal } from "@/components/demo/bst/BstReveal";
import { BST_STEPS } from "@/components/demo/bst/bst-content";

export function BstProcess() {
  return (
    <section
      id="ablauf"
      className="relative overflow-x-hidden bg-[var(--bst-elevated)] px-5 py-28 text-[var(--bst-snow)] sm:px-8 sm:py-36 lg:py-44"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[var(--bst-accent)] opacity-[0.06] blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1480px]">
        <BstReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--bst-accent)]">
            Der Weg
          </p>
          <h2 className="mt-5 max-w-[11ch] font-bst-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
            Vier Schritte. Absolute Klarheit.
          </h2>
        </BstReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-[var(--bst-line)] bg-[var(--bst-line)] sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {BST_STEPS.map((step, i) => (
            <BstReveal key={step.num} delay={0.07 * i}>
              <article className="group flex h-full min-h-[280px] flex-col bg-[var(--bst-elevated)] p-7 transition-colors hover:bg-[var(--bst-panel)] sm:min-h-[320px] sm:p-8 lg:p-9">
                <span className="font-bst-display text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-none tracking-[-0.05em] text-[var(--bst-accent)]">
                  {step.num}
                </span>
                <div className="mt-6 h-px w-10 origin-left bg-[var(--bst-accent)]/50 transition-transform duration-500 group-hover:scale-x-150" />
                <h3 className="mt-auto pt-14 font-bst-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/38">
                  {step.text}
                </p>
              </article>
            </BstReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
