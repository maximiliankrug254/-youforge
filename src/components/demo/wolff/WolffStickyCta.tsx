"use client";

import { WolffButton } from "@/components/demo/wolff/WolffButton";
import { WOLFF_CONTACT } from "@/components/demo/wolff/wolff-contact";

export function WolffStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--wolff-brass)]/20 bg-[rgba(18,11,8,0.95)] px-3 py-2.5 lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <WolffButton
          href={`tel:${WOLFF_CONTACT.phoneTel}`}
          className="flex-1 bg-[var(--wolff-brass)] py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[var(--wolff-ink)]"
        >
          Anrufen
        </WolffButton>
        <WolffButton
          href="#stuhl"
          className="flex-1 border border-[var(--wolff-cream)]/25 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[var(--wolff-cream)]"
        >
          Stuhl
        </WolffButton>
      </div>
    </div>
  );
}
