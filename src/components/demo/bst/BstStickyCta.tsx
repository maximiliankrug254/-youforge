"use client";

import { BstButton } from "@/components/demo/bst/BstButton";
import { BST_CONTACT } from "@/components/demo/bst/bst-contact";

export function BstStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(20,19,18,0.94)] px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <BstButton
          href={`tel:${BST_CONTACT.phoneTel}`}
          className="flex-1 rounded-full bg-[var(--bst-accent)] py-3.5 text-center text-sm font-semibold text-[var(--bst-void)]"
        >
          Anrufen
        </BstButton>
        <BstButton
          href="#kontakt"
          className="flex-1 rounded-full border border-white/18 py-3.5 text-center text-sm font-semibold text-white"
        >
          Kontakt
        </BstButton>
      </div>
    </div>
  );
}
