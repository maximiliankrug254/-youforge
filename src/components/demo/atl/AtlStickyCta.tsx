"use client";

import { AtlButton } from "@/components/demo/atl/AtlButton";
import { ATL_CONTACT } from "@/components/demo/atl/atl-contact";

export function AtlStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(8,8,8,0.92)] px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <AtlButton
          href={`tel:${ATL_CONTACT.phoneTel}`}
          strength={0}
          className="flex-1 rounded-sm bg-[var(--atl-red)] py-3 text-center text-sm font-semibold text-white"
        >
          Anrufen
        </AtlButton>
        <AtlButton
          href={ATL_CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          strength={0}
          className="flex-1 rounded-sm border border-white/20 py-3 text-center text-sm font-semibold text-white"
        >
          WhatsApp
        </AtlButton>
      </div>
    </div>
  );
}
