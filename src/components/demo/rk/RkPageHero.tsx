"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkButton } from "@/components/demo/rk/RkButton";

export function RkPageHero({
  kicker,
  title,
  text,
  image,
  alt,
}: {
  kicker: string;
  title: ReactNode;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate min-h-[70svh] overflow-hidden bg-[var(--rk-purple-ink)] text-white lg:min-h-[78svh]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,7,28,0.7)_0%,rgba(28,7,28,0.35)_40%,rgba(28,7,28,0.92)_100%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1480px] flex-col justify-end px-5 pb-[max(7.5rem,calc(env(safe-area-inset-bottom)+5.5rem))] pt-40 sm:px-8 lg:min-h-[78svh] lg:px-12 lg:pb-20">
        <RkReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--rk-lime)]">
            {kicker}
          </p>
          <h1 className="font-rk-display mt-4 max-w-[22ch] text-[clamp(2.4rem,7vw,5.6rem)] tracking-[0.01em] uppercase">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-white/70">
            {text}
          </p>
          <RkButton
            href="/demo/raumkontrast/kontakt"
            className="rk-shine mt-8 inline-flex w-full items-center justify-center rounded-sm bg-[var(--rk-lime)] px-8 py-4 text-sm font-semibold text-[var(--rk-ink)] hover:bg-[var(--rk-lime-deep)] hover:text-white sm:w-auto"
          >
            Kostenloses Aufmaß
          </RkButton>
        </RkReveal>
      </div>
    </section>
  );
}
