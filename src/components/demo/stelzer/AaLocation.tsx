"use client";

import { AA } from "@/components/demo/stelzer/aa-config";
import { AaButton } from "@/components/demo/stelzer/AaButton";

export function AaLocation() {
  return (
    <section
      id="ort"
      data-aa-tone="tan"
      className="relative z-10 scroll-mt-24 bg-[var(--aa-tan)] px-5 py-24 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] opacity-55">Oberhausen</p>
          <h2 className="mt-3 font-aa-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-[-0.04em]">
            Nah. In Holten.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed opacity-80">
            {AA.place.address1}
            <br />
            {AA.place.address2}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p>{AA.contact.siteHours}</p>
          <p>{AA.contact.hours}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <AaButton href={`tel:${AA.contact.phoneTel}`} className="bg-[var(--aa-ink)] text-[var(--aa-cream)]">
              {AA.contact.phoneDisplay}
            </AaButton>
            <AaButton href={`tel:${AA.contact.mobileTel}`} className="border border-[var(--aa-ink)]/15 bg-transparent">
              {AA.contact.mobileDisplay}
            </AaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
