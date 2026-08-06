"use client";

import { AureaButton } from "@/components/demo/aurea/AureaButton";
import { AUREA_CONTACT } from "@/components/demo/aurea/aurea-contact";

export function AureaStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(8,8,7,0.94)] px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <AureaButton
          href={AUREA_CONTACT.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-[var(--aurea-copper)] py-3.5 text-center text-sm font-semibold tracking-wide text-[var(--aurea-ink)]"
        >
          Gespräch
        </AureaButton>
        <AureaButton
          href="#kontakt"
          className="flex-1 rounded-full border border-white/20 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Mehr
        </AureaButton>
      </div>
    </div>
  );
}
