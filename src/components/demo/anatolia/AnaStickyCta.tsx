"use client";

import { AnaButton } from "@/components/demo/anatolia/AnaButton";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";

export function AnaStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(26,24,20,0.9)] px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <AnaButton
          href={`tel:${ANA_CONTACT.phoneTel}`}
          strength={0}
          className="flex-1 rounded-xl bg-[var(--ana-amber)] py-3.5 text-center text-sm font-semibold tracking-wide text-[var(--ana-ink)]"
        >
          Anrufen
        </AnaButton>
        <AnaButton
          href="#kontakt"
          strength={0}
          className="flex-1 rounded-xl border border-white/20 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Anfrage
        </AnaButton>
      </div>
    </div>
  );
}
