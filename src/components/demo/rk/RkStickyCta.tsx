"use client";

import { RK_CONTACT } from "@/components/demo/rk/rk-contact";
import { RkButton } from "@/components/demo/rk/RkButton";

export function RkStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[color-mix(in_srgb,var(--rk-purple-ink)_94%,transparent)] px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <RkButton
          href={`tel:${RK_CONTACT.phoneTel}`}
          strength={0}
          className="flex-1 rounded-sm bg-[var(--rk-lime)] py-3.5 text-center text-sm font-semibold tracking-wide text-[var(--rk-ink)]"
        >
          Anrufen
        </RkButton>
        <RkButton
          href="/demo/raumkontrast/kontakt"
          strength={0}
          className="flex-1 rounded-sm border border-white/25 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
        >
          Aufmaß
        </RkButton>
      </div>
    </div>
  );
}
