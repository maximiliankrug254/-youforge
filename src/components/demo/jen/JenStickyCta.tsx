"use client";

import { JenButton } from "@/components/demo/jen/JenButton";
import { JEN_CONTACT } from "@/components/demo/jen/jen-contact";

export function JenStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(12,15,18,0.94)] px-3 py-2.5 backdrop-blur-xl lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <JenButton
          href={`tel:${JEN_CONTACT.phoneTel}`}
          strength={0}
          className="flex-1 bg-[var(--jen-accent)] py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Anrufen
        </JenButton>
        <JenButton
          href={JEN_CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          strength={0}
          className="flex-1 border border-white/20 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          WhatsApp
        </JenButton>
      </div>
    </div>
  );
}
