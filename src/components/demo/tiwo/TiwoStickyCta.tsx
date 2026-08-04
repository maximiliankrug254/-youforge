"use client";

import { TiwoButton } from "@/components/demo/tiwo/TiwoButton";
import { TIWO_CONTACT } from "@/components/demo/tiwo/tiwo-contact";

export function TiwoStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(20,18,16,0.94)] px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <TiwoButton
          href={`tel:${TIWO_CONTACT.phoneTel}`}
          className="flex-1 rounded-full bg-[var(--tiwo-accent)] py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Anrufen
        </TiwoButton>
        <TiwoButton
          href="#kontakt"
          className="flex-1 rounded-full border border-white/20 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Loslegen
        </TiwoButton>
      </div>
    </div>
  );
}
