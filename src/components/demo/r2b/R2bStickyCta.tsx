"use client";

import { R2bButton } from "@/components/demo/r2b/R2bButton";

export function R2bStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(7,7,6,0.94)] px-3 py-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-2">
        <R2bButton
          href="#kontakt"
          className="flex-1 bg-[var(--r2b-brass)] py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--r2b-void)]"
        >
          Gespräch
        </R2bButton>
        <R2bButton
          href="#arbeit"
          className="flex-1 border border-white/20 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
        >
          Arbeit
        </R2bButton>
      </div>
    </div>
  );
}
