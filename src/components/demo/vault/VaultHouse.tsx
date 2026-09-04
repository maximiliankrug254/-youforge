"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { VAULT, VAULT_IMG } from "@/components/demo/vault/vault-config";
import { VAULT_CASKS } from "@/components/demo/vault/vault-content";
import { VaultPhoto } from "@/components/demo/vault/VaultPhoto";
import { useVaultLang } from "@/components/demo/vault/VaultLang";

export function VaultHouse() {
  const { t, lang } = useVaultLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section
        id="house"
        className="relative min-h-[80dvh] overflow-hidden px-4 pb-20 pt-24 sm:px-8"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--vault-bone)]/40">
              {t.houseKicker}
            </p>
            <h2 className="mt-3 font-vault text-[clamp(2.2rem,6vw,4.4rem)] font-light uppercase leading-[0.95] tracking-[0.1em]">
              {t.houseTitle}
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--vault-bone)]/62">
              {t.houseBody}
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
            <VaultPhoto
              src={VAULT_IMG.casksRow}
              alt="Dunnage East"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="absolute inset-0 vault-ken"
            />
          </div>
        </div>
      </section>

      <section
        id="ledger"
        className="relative overflow-hidden px-4 pb-28 pt-10 sm:px-8"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--vault-amber)]">
              {t.ledgerKicker}
            </p>
            <h2 className="mt-3 font-vault text-[clamp(2rem,5vw,3.6rem)] font-light uppercase tracking-[0.14em]">
              {t.ledgerTitle}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--vault-bone)]/55">
              {t.ledgerLead}
            </p>
            <div className="mt-10 space-y-3 text-[11px] uppercase leading-relaxed tracking-[0.16em] text-[var(--vault-bone)]/50">
              <p>
                {VAULT.place.glen}
                <br />
                {VAULT.place.region} · {VAULT.place.country}
                <br />
                {VAULT.place.warehouse}
              </p>
              <p>
                T {VAULT.contact.phoneDisplay}
                <br />
                {VAULT.contact.email}
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-px bg-[var(--vault-bone)]/12">
            <label className="block bg-[var(--vault-void)] px-4 py-3">
              <span className="sr-only">{t.name}</span>
              <input
                required
                name="name"
                placeholder={t.name}
                className="w-full bg-transparent text-sm uppercase tracking-[0.14em] outline-none placeholder:text-[var(--vault-bone)]/30"
              />
            </label>
            <label className="block bg-[var(--vault-void)] px-4 py-3">
              <span className="sr-only">{t.email}</span>
              <input
                required
                type="email"
                name="email"
                placeholder={t.email}
                className="w-full bg-transparent text-sm uppercase tracking-[0.14em] outline-none placeholder:text-[var(--vault-bone)]/30"
              />
            </label>
            <div className="grid grid-cols-2 gap-px">
              <label className="block bg-[var(--vault-void)] px-4 py-3">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[var(--vault-bone)]/35">
                  {t.expression}
                </span>
                <select
                  name="expression"
                  className="w-full bg-transparent text-sm uppercase tracking-[0.14em] outline-none"
                  defaultValue="12"
                >
                {VAULT_CASKS.map((cask) => (
                  <option key={cask.id} value={cask.no}>
                    {cask.no} · {cask[lang].name}
                  </option>
                ))}
                </select>
              </label>
              <label className="block bg-[var(--vault-void)] px-4 py-3">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[var(--vault-bone)]/35">
                  {t.channel}
                </span>
                <select
                  name="channel"
                  className="w-full bg-transparent text-sm uppercase tracking-[0.14em] outline-none"
                  defaultValue="private"
                >
                  <option value="private">{t.private}</option>
                  <option value="trade">{t.trade}</option>
                </select>
              </label>
            </div>
            <label className="block bg-[var(--vault-void)] px-4 py-3">
              <span className="sr-only">{t.message}</span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder={t.message}
                className="w-full resize-none bg-transparent text-sm uppercase tracking-[0.12em] outline-none placeholder:text-[var(--vault-bone)]/30"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-[var(--vault-amber)] px-4 py-4 text-[10px] uppercase tracking-[0.24em] text-[var(--vault-void)]"
            >
              {sent ? t.sent : t.send}
            </button>
          </form>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1400px] flex-wrap items-end justify-between gap-4 border-t border-[var(--vault-bone)]/12 pt-6 text-[9px] uppercase tracking-[0.18em] text-[var(--vault-bone)]/35">
          <p className="max-w-xl leading-relaxed">{t.legal}</p>
          <Link href="/" className="hover:text-[var(--vault-bone)]">
            {VAULT.youforge.studio} · {t.demo}
          </Link>
        </div>
      </section>
    </>
  );
}
