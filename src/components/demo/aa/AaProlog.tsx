"use client";

import Image from "next/image";
import { AA_STEPS } from "@/components/demo/aa/aa-content";
import { AaReveal } from "@/components/demo/aa/AaReveal";

export function AaProlog() {
  return (
    <section
      data-aa-tone="dark"
      className="relative z-10 px-5 py-24 text-[var(--aa-tan)] sm:px-8 sm:py-32 lg:px-12"
    >
      <AaReveal className="mx-auto max-w-[1400px]">
        <p className="text-[10px] uppercase tracking-[0.42em] opacity-55">+++ Warum zwei Gewerke +++</p>
        <h2 className="mt-5 max-w-4xl font-aa-display text-[clamp(1.9rem,4.6vw,3.8rem)] leading-[1.12] tracking-[-0.03em]">
          Tisch und Schale gehören nur zusammen, wenn sie denselben Winter
          und dasselbe Feuer kennen.
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed tracking-wide opacity-75">
          Deshalb sitzen Hobelbank und Drehscheibe auf einem Hof. Nicht als
          Konzept — als Arbeitsweg. Vier Schritte, ohne die kein Stück rausgeht.
        </p>
      </AaReveal>

      <div className="mx-auto mt-16 grid max-w-[1400px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {AA_STEPS.map((step, i) => (
          <AaReveal key={step.n} delay={i * 0.08}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={step.img}
                alt={step.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--aa-ink)] via-[var(--aa-ink)]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] opacity-70">
                  {step.n} · {step.fact}
                </p>
                <p className="mt-1 font-aa-display text-2xl tracking-tight">{step.title}</p>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed tracking-wide opacity-75">{step.text}</p>
          </AaReveal>
        ))}
      </div>
    </section>
  );
}
