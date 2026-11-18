"use client";

import { BbfButton } from "@/components/demo/bbf/BbfButton";
import { BBF_CONTACT } from "@/components/demo/bbf/bbf-contact";

export function BbfContact() {
  return (
    <section id="kontakt" className="bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--bbf-red)]">
            B &amp; B Fahrzeugtechnik
          </p>
          <h2 className="mt-4 font-bbf-display text-[clamp(1.65rem,8.4vw,4.75rem)] font-semibold leading-none tracking-[-0.04em] whitespace-nowrap">
            <a href={`tel:${BBF_CONTACT.phoneTel}`} className="hover:text-[var(--bbf-red)]">
              {BBF_CONTACT.phoneDisplay}
            </a>
          </h2>
          <div className="mt-8">
            <BbfButton
              href={BBF_CONTACT.maps}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.18}
              className="inline-flex items-center justify-center border border-white/30 px-6 py-3.5 text-sm font-semibold text-white"
            >
              Route planen
            </BbfButton>
          </div>
        </div>

        <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-5">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--bbf-red)]">
              Adresse
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-white/75">{BBF_CONTACT.address}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--bbf-red)]">
              Öffnungszeiten
            </dt>
            <dd className="mt-2 text-base text-white/75">{BBF_CONTACT.hours}</dd>
          </div>
        </dl>
      </div>

      <p className="mx-auto mt-16 max-w-[1440px] text-[11px] tracking-wide text-white/35">
        Living Demo von{" "}
        <a href="https://you-forge.de" className="underline-offset-2 hover:underline">
          YouForge
        </a>
        {" · "}
        Präsentation für B&nbsp;&amp;&nbsp;B Fahrzeugtechnik · Fotos sind Platzhalter
      </p>
    </section>
  );
}
