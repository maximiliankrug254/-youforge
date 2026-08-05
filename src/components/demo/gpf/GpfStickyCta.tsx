"use client";

import { GpfButton } from "@/components/demo/gpf/GpfButton";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";

export function GpfStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(15,21,17,0.94)] px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <GpfButton
          href={`tel:${GPF_CONTACT.phoneTel}`}
          strength={0}
          className="flex-1 rounded-full bg-[var(--gpf-accent)] py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Anrufen
        </GpfButton>
        <GpfButton
          href="#kontakt"
          strength={0}
          className="flex-1 rounded-full border border-white/20 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Angebot
        </GpfButton>
      </div>
    </div>
  );
}
