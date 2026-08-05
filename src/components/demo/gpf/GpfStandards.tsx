"use client";

import Image from "next/image";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_STANDARDS, GPF_IMG } from "@/components/demo/gpf/gpf-content";

export function GpfStandards() {
  return (
    <section className="relative isolate overflow-x-hidden bg-[var(--gpf-panel)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={GPF_IMG.baumAeste}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.13]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,32,26,0.9)_0%,rgba(15,21,17,0.96)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GpfReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-sand)]">
              Standards &amp; Technik
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
              Nach Norm.
              <br />
              <span className="italic text-[var(--gpf-accent-hot)]">
                Nicht nach Gefühl.
              </span>
            </h2>
          </GpfReveal>
          <GpfReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-white/55">
              Baumarbeiten sind Sicherheitsarbeiten. Deshalb sind Schulung,
              Ausrüstung und Regelwerk bei uns kein Extra, sondern Grundlage.
            </p>
          </GpfReveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {GPF_STANDARDS.map((item, i) => (
            <GpfReveal
              key={item.title}
              delay={0.04 * i}
              className="bg-[var(--gpf-ink)] p-7 sm:p-9"
            >
              <div
                className="h-px w-10 bg-[var(--gpf-accent)]"
                aria-hidden
              />
              <h3 className="mt-6 font-gpf-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-white/50">
                {item.text}
              </p>
            </GpfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
