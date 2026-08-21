"use client";

import { R2bReveal } from "@/components/demo/r2b/R2bReveal";
import { R2B_STEPS } from "@/components/demo/r2b/r2b-content";

export function R2bApproach() {
  return (
    <section
      id="ansatz"
      className="relative overflow-x-hidden bg-[var(--r2b-void)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <R2bReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass)]">
            Ansatz
          </p>
          <h2 className="mt-5 max-w-[12ch] font-r2b-display text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[0.92] tracking-[-0.045em]">
            Hören. Schärfen.{" "}
            <span className="italic text-[var(--r2b-brass)]">Sichtbar machen.</span>
          </h2>
        </R2bReveal>

        <div className="mt-16 grid gap-0 border-t border-white/10 lg:mt-20 lg:grid-cols-3">
          {R2B_STEPS.map((step, i) => (
            <R2bReveal key={step.title} delay={i * 0.08}>
              <article className="border-b border-white/10 py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-14 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <p className="font-r2b-display text-sm tracking-[0.2em] text-[var(--r2b-brass)]">
                  {step.index}
                </p>
                <h3 className="mt-6 font-r2b-display text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-sm text-[1.02rem] leading-[1.75] text-white/48">
                  {step.text}
                </p>
              </article>
            </R2bReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
