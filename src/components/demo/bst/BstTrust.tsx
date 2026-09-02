"use client";

import { BstReveal } from "@/components/demo/bst/BstReveal";
import { BstCountUp } from "@/components/demo/bst/BstCountUp";
import { BstImageReveal } from "@/components/demo/bst/BstImageReveal";
import { BST_TRUST } from "@/components/demo/bst/bst-content";
import { BST_METRICS } from "@/components/demo/bst/bst-contact";

export function BstTrust() {
  return (
    <section
      id="vertrauen"
      className="relative overflow-x-hidden bg-[var(--bst-snow)] px-5 py-28 text-[var(--bst-void)] sm:px-8 sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 border-b border-[var(--bst-line-dark)] pb-14 sm:grid-cols-3 sm:pb-16">
          {BST_METRICS.map((m, i) => (
            <BstReveal key={m.label} delay={0.08 * i}>
              <p className="font-bst-display text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]">
                <BstCountUp value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--bst-muted)]">
                {m.label}
              </p>
            </BstReveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <BstImageReveal
            src="/demo/bestattung/section-path.jpg"
            alt="Ruhiger Waldweg im Licht"
            className="aspect-[4/5] rounded-[1.25rem] sm:aspect-[16/10] lg:col-span-5 lg:aspect-[4/5]"
          />

          <div className="lg:col-span-6 lg:col-start-7">
            <BstReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--bst-muted)]">
                Warum Lindenhof
              </p>
              <h2 className="mt-5 max-w-[12ch] font-bst-display text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                Nähe mit System.
              </h2>
            </BstReveal>

            <div className="mt-12 space-y-0">
              {BST_TRUST.map((item, i) => (
                <BstReveal key={item.title} delay={0.08 * (i + 1)}>
                  <div className="flex gap-6 border-t border-[var(--bst-line-dark)] py-7 sm:gap-8 sm:py-8">
                    <span className="font-bst-display text-sm font-semibold tracking-[0.16em] text-[var(--bst-muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-bst-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                        {item.title}
                      </p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--bst-muted)] sm:text-[0.95rem]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </BstReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
