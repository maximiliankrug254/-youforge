"use client";

import Image from "next/image";
import { useState } from "react";
import { AA_NEWS } from "@/components/demo/stelzer/aa-content";

export function AaSeasons() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="aktuelles"
      data-aa-tone="tan"
      className="relative z-10 scroll-mt-24 bg-[var(--aa-tan)] px-5 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1100px] border-y border-[var(--aa-ink)]/20">
        <button
          type="button"
          className="flex w-full items-end justify-between gap-6 py-8 text-left"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span>
            <span className="text-[13px] uppercase tracking-[0.18em] opacity-55">Aktuelles</span>
            <span className="mt-2 block font-aa-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.03em]">
              Messe, Maifest, Verein.
            </span>
          </span>
          <span className="pb-1 text-2xl leading-none" aria-hidden>
            {open ? "–" : "+"}
          </span>
        </button>

        {open ? (
          <div className="space-y-14 border-t border-[var(--aa-ink)]/15 pb-12 pt-8">
            {AA_NEWS.map((item) => (
              <article key={item.title}>
                <p className="text-[15px] opacity-60">{item.when}</p>
                <h3 className="mt-2 font-aa-display text-[clamp(1.7rem,3vw,2.4rem)] leading-none tracking-[-0.03em]">
                  {item.title}
                </h3>
                <div className="mt-4 max-w-2xl space-y-3 text-[17px] leading-relaxed">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div
                  className={`mt-6 grid gap-4 ${item.images.length > 1 ? "items-start md:grid-cols-[1.15fr_0.72fr]" : ""}`}
                >
                  {item.images.map((image, i) => (
                    <div
                      key={image.src}
                      className={`relative overflow-hidden rounded-[1.6rem] ${
                        item.images.length > 1 && i === 1 ? "aspect-[3/4]" : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={90}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
