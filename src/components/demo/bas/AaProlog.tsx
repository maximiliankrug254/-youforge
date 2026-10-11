"use client";

import Image from "next/image";
import { AA_STEPS } from "@/components/demo/bas/aa-content";

const TILE = [
  "lg:col-span-7 lg:row-span-3 min-h-[460px] lg:min-h-[760px]",
  "lg:col-span-5 min-h-[380px] lg:min-h-[300px]",
  "lg:col-span-5 min-h-[380px] lg:min-h-[300px]",
  "lg:col-span-5 min-h-[380px] lg:min-h-[300px]",
] as const;

export function AaProlog() {
  return (
    <section
      data-aa-tone="tan"
      className="relative z-10 bg-[var(--aa-tan)] px-5 py-24 text-[var(--aa-ink)] sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[13px] uppercase tracking-[0.18em] opacity-55">Services</p>
        <h2 className="mt-4 max-w-4xl font-aa-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] tracking-[-0.03em]">
          Vom hochklassigen Neuwagen über wertvolle Oldtimer bis hin zu Formel-1-Wagen und Prototypen.
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed">
          Messen Sie uns an den BAS-Leistungsversprechen: Flexibilität, Professionalität und Zuverlässigkeit.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-12">
        {AA_STEPS.map((step, i) => (
          <article key={step.n} className={`group relative overflow-hidden rounded-[1.8rem] ${TILE[i]}`}>
            <Image
              src={step.img}
              alt={step.title}
              fill
              sizes={i === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 50vw, 30vw"}
              quality={90}
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[var(--aa-tan)] from-30% via-[var(--aa-tan)]/60 via-55% to-transparent ${
                i === 0 ? "lg:from-10% lg:via-[var(--aa-tan)]/40 lg:via-35%" : ""
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--aa-ink)] sm:p-7">
              <p className="text-[13px] tracking-[0.14em] opacity-80">
                {step.n} · {step.fact}
              </p>
              <h3 className="mt-1 font-aa-display text-[clamp(1.8rem,3vw,2.8rem)] leading-none">{step.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
