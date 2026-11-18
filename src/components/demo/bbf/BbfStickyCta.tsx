"use client";

import { BbfButton } from "@/components/demo/bbf/BbfButton";
import { BBF_CONTACT } from "@/components/demo/bbf/bbf-contact";

export function BbfStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(8,8,8,0.92)] px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <BbfButton
          href={`tel:${BBF_CONTACT.phoneTel}`}
          strength={0}
          className="flex-1 bg-[var(--bbf-red)] py-3.5 text-center text-sm font-semibold text-black"
        >
          Anrufen
        </BbfButton>
        <BbfButton
          href={BBF_CONTACT.maps}
          target="_blank"
          rel="noopener noreferrer"
          strength={0}
          className="flex-1 rounded-sm border border-white/20 py-3 text-center text-sm font-semibold text-white"
        >
          Route
        </BbfButton>
      </div>
    </div>
  );
}
