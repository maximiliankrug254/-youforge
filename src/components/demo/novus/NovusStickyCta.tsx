"use client";

import { NovusButton } from "@/components/demo/novus/NovusButton";
import { NOVUS_CONTACT } from "@/components/demo/novus/novus-contact";

export function NovusStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(10,9,8,0.94)] px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <NovusButton
          href={`tel:${NOVUS_CONTACT.phoneTel}`}
          className="flex-1 rounded-full bg-[var(--novus-gold)] py-3.5 text-center text-sm font-semibold tracking-wide text-[var(--novus-ink)]"
        >
          Anrufen
        </NovusButton>
        <NovusButton
          href="#kontakt"
          className="flex-1 rounded-full border border-white/20 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Termin
        </NovusButton>
      </div>
    </div>
  );
}
