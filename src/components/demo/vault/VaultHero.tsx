"use client";

import { VAULT, VAULT_IMG } from "@/components/demo/vault/vault-config";
import { VaultPhoto } from "@/components/demo/vault/VaultPhoto";
import { useVaultLang } from "@/components/demo/vault/VaultLang";

export function VaultHero() {
  const { t } = useVaultLang();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-8"
    >
      <div className="absolute inset-0">
        <VaultPhoto
          src={VAULT_IMG.warehouse}
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-0 vault-ken"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,11,0.55)_0%,rgba(12,12,11,0.38)_42%,rgba(12,12,11,0.72)_100%)]" />
      </div>

      <p className="absolute left-5 top-28 z-10 max-w-[11rem] text-[9px] uppercase leading-relaxed tracking-[0.22em] text-[var(--vault-bone)]/45 sm:left-8 sm:top-32">
        {t.meta[0]}
      </p>
      <p className="absolute right-5 top-28 z-10 max-w-[12rem] text-right text-[9px] uppercase leading-relaxed tracking-[0.22em] text-[var(--vault-bone)]/45 sm:right-8 sm:top-32">
        {t.meta[1]}
      </p>
      <p className="absolute bottom-16 left-5 z-10 max-w-[14rem] text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[var(--vault-bone)]/45 sm:bottom-20 sm:left-8">
        {t.meta[2]}
        <span className="mt-2 block opacity-80">
          T: {VAULT.contact.phoneDisplay}
          <br />M: {VAULT.contact.email}
        </span>
      </p>
      <p className="absolute bottom-16 right-5 z-10 max-w-[11rem] text-right text-[9px] uppercase leading-relaxed tracking-[0.22em] text-[var(--vault-bone)]/45 sm:bottom-20 sm:right-8">
        {t.meta[3]}
      </p>

      <div className="relative z-10 grid w-full max-w-[1200px] items-center gap-4 lg:grid-cols-[1fr_minmax(240px,42vh)_1fr]">
        <h1 className="text-center font-vault text-[clamp(1.4rem,3.4vw,2.6rem)] font-light uppercase leading-[1.05] tracking-[0.18em] text-[var(--vault-bone)]/88 lg:text-right">
          {t.heroLeft[0]}
          <span className="block">{t.heroLeft[1]}</span>
        </h1>

        <div className="relative mx-auto aspect-square w-full max-w-[min(42vh,420px)]">
          <span className="vault-corner vault-corner-tl" />
          <span className="vault-corner vault-corner-tr" />
          <span className="vault-corner vault-corner-bl" />
          <span className="vault-corner vault-corner-br" />
          <VaultPhoto
            src={VAULT_IMG.caskEnd}
            alt="Eichenfass"
            priority
            sizes="(min-width: 1024px) 42vh, 80vw"
            className="absolute inset-[10px]"
          />
        </div>

        <h2 className="text-center font-vault text-[clamp(1.4rem,3.4vw,2.6rem)] font-light uppercase leading-[1.05] tracking-[0.18em] text-[var(--vault-bone)]/88 lg:text-left">
          {t.heroRight[0]}
          <span className="block">{t.heroRight[1]}</span>
        </h2>
      </div>

      <a
        href="#casks"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[9px] uppercase tracking-[0.32em] text-[var(--vault-bone)]/40"
      >
        {t.scroll}
      </a>
    </section>
  );
}
