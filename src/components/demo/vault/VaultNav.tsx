"use client";

import { useState } from "react";
import { VAULT, VAULT_NAV } from "@/components/demo/vault/vault-config";
import { VaultClock } from "@/components/demo/vault/VaultClock";
import { useVaultLang } from "@/components/demo/vault/VaultLang";

export function VaultNav() {
  const { lang, setLang } = useVaultLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="vault-nav pointer-events-none fixed inset-x-0 top-0 z-[90] px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="pointer-events-auto flex items-start justify-between gap-3">
        <nav className="flex flex-wrap" aria-label="Vault">
          <a href="#hero" className="vault-box bg-[var(--vault-void)]/70 px-3 py-2 text-[10px] uppercase tracking-[0.22em]">
            {VAULT.brand.short}
          </a>
          <button
            type="button"
            className="vault-box px-3 py-2 text-[10px] uppercase tracking-[0.22em] sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            M
          </button>
          <div className={`${open ? "flex" : "hidden"} sm:flex`}>
            {VAULT_NAV.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="vault-box px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--vault-bone)]/80 hover:bg-[var(--vault-olive)] hover:text-[var(--vault-bone)]"
                onClick={() => setOpen(false)}
              >
                {lang === "de" ? item.label : item.labelEn}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex">
          <div className="vault-box flex">
            <button
              type="button"
              className={`px-2.5 py-2 text-[10px] uppercase tracking-[0.18em] ${lang === "en" ? "text-[var(--vault-bone)]" : "text-[var(--vault-bone)]/35"}`}
              onClick={() => setLang("en")}
              aria-label="English"
            >
              EN
            </button>
            <button
              type="button"
              className={`px-2.5 py-2 text-[10px] uppercase tracking-[0.18em] ${lang === "de" ? "text-[var(--vault-bone)]" : "text-[var(--vault-bone)]/35"}`}
              onClick={() => setLang("de")}
              aria-label="Deutsch"
            >
              DE
            </button>
          </div>
          <div className="vault-box px-3 py-2">
            <VaultClock />
          </div>
        </div>
      </div>
    </header>
  );
}
