"use client";

import { VAULT_CASKS } from "@/components/demo/vault/vault-content";
import { useVaultLang } from "@/components/demo/vault/VaultLang";

export function VaultMarquee() {
  const { lang } = useVaultLang();
  const notes = VAULT_CASKS.flatMap((c) => c[lang].notes);
  const line = `${notes.join("   ·   ")}   ·   `;

  return (
    <div className="relative overflow-hidden border-y border-[var(--vault-bone)]/12 py-3">
      <div className="vault-marquee whitespace-nowrap text-[11px] uppercase tracking-[0.28em] text-[var(--vault-bone)]/45">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
