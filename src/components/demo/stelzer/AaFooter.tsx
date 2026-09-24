"use client";

import { AA } from "@/components/demo/stelzer/aa-config";
import { AaButton } from "@/components/demo/stelzer/AaButton";

export function AaFooter() {
  return (
    <footer
      id="besuch"
      data-aa-tone="tan"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-[var(--aa-tan)] px-5 pb-10 pt-20 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="text-center font-aa-display text-[clamp(2rem,5vw,3.6rem)] tracking-[-0.03em]">
          Wir sind für Sie da.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-center text-[17px] leading-relaxed">
          Im Büro erreichen Sie uns unter der Festnetznummer. Wenn es drängt, erreichen Sie uns mobil und per WhatsApp.
        </p>

        <div className="mt-16 grid gap-12 border-t border-[var(--aa-ink)]/15 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[13px] uppercase tracking-[0.16em] opacity-55">Standort</p>
            <p className="mt-3 text-[16px] leading-relaxed">
              {AA.place.address1}
              <br />
              {AA.place.address2}
              <br />
              {AA.place.region}
            </p>
            <p className="mt-6 text-[15px] leading-relaxed opacity-70">
              {AA.legal.court}
              <br />
              {AA.legal.chamber}
            </p>
          </div>

          <div>
            <p className="text-[13px] uppercase tracking-[0.16em] opacity-55">Zeiten</p>
            <p className="mt-3 text-[16px] leading-relaxed">
              {AA.contact.hours}
              <br />
              {AA.contact.siteHours}
              <br />
              Mobil {AA.contact.mobileDisplay}
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href={`tel:${AA.contact.phoneTel}`}
              className="block font-aa-display text-2xl tracking-tight underline decoration-[var(--aa-ink)]/25 underline-offset-8"
            >
              {AA.contact.phoneDisplay}
            </a>
            <a
              href={`tel:${AA.contact.mobileTel}`}
              className="mt-4 block text-[13px] uppercase tracking-[0.16em] underline decoration-[var(--aa-ink)]/25 underline-offset-8"
            >
              {AA.contact.mobileDisplay}
            </a>
            <a
              href={`mailto:${AA.contact.email}`}
              className="mt-4 block text-[13px] uppercase tracking-[0.16em] underline decoration-[var(--aa-ink)]/25 underline-offset-8"
            >
              {AA.contact.email}
            </a>
            <AaButton
              href={AA.contact.whatsapp}
              className="mt-8 bg-[var(--aa-ink)] text-[var(--aa-cream)]"
            >
              WhatsApp
            </AaButton>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-[var(--aa-ink)]/15 pt-6 text-[15px] opacity-70">
          <p>© 2026 {AA.brand.full}</p>
          <p>
            {AA.youforge.label} ·{" "}
            <a href={AA.youforge.href} className="underline underline-offset-4">
              {AA.youforge.studio}
            </a>
          </p>
        </div>
      </div>

      <nav className="relative z-10 mt-12 bg-[var(--aa-ink)] px-5 py-5 text-[var(--aa-cream)] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-x-8 gap-y-3 text-[15px]">
          <a href="/demo/stelzer-hesselmann/impressum" className="underline underline-offset-4">
            Impressum
          </a>
          <a href="/demo/stelzer-hesselmann/datenschutz" className="underline underline-offset-4">
            Datenschutz
          </a>
          <a href="/demo/stelzer-hesselmann/cookies" className="underline underline-offset-4">
            Cookies
          </a>
          <a href="/demo/stelzer-hesselmann/agb" className="underline underline-offset-4">
            AGB
          </a>
        </div>
      </nav>
    </footer>
  );
}
