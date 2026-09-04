"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { VAULT, VAULT_IMG } from "@/components/demo/vault/vault-config";
import { useVaultLang } from "@/components/demo/vault/VaultLang";
import { VAULT_EASE } from "@/components/demo/vault/vault-motion";
import { VaultPhoto } from "@/components/demo/vault/VaultPhoto";

const KEY = "vault-age-ok";

export function VaultAgeGate({ onPassed }: { onPassed: () => void }) {
  const { t } = useVaultLang();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(true);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") {
        setOpen(false);
        onPassed();
      }
    } catch {
      onPassed();
    }
  }, [onPassed]);

  const accept = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
    onPassed();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[var(--vault-void)] px-6"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: reduce ? 0.2 : 0.7, ease: VAULT_EASE },
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="vault-age-title"
        >
          <div className="absolute inset-0">
            <VaultPhoto
              src={VAULT_IMG.warehouse}
              alt=""
              priority
              sizes="100vw"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-[var(--vault-void)]/62" />
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(232,228,220,0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(232,228,220,0.07) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-lg text-center">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[var(--vault-amber)]">
              {VAULT.brand.short} · 18+
            </p>
            <h1
              id="vault-age-title"
              className="mt-6 font-vault text-[clamp(1.6rem,4vw,2.4rem)] font-light uppercase tracking-[0.18em]"
            >
              {denied ? t.ageDenied : t.ageTitle}
            </h1>
            {!denied ? (
              <>
                <p className="mt-4 text-sm leading-relaxed text-[var(--vault-bone)]/65">
                  {t.ageLead}
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={accept}
                    className="border border-[var(--vault-amber)] bg-[var(--vault-amber)] px-7 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--vault-void)]"
                  >
                    {t.ageYes}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDenied(true)}
                    className="vault-box px-7 py-3 text-[10px] uppercase tracking-[0.22em] text-[var(--vault-bone)]/70"
                  >
                    {t.ageNo}
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/"
                className="vault-box mt-10 inline-block px-7 py-3 text-[10px] uppercase tracking-[0.22em]"
              >
                {t.ageBack}
              </Link>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
