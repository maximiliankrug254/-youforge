"use client";

import { VAULT_IMG } from "@/components/demo/vault/vault-config";
import { VAULT_CASKS } from "@/components/demo/vault/vault-content";
import { VaultPhoto } from "@/components/demo/vault/VaultPhoto";
import { useVaultLang } from "@/components/demo/vault/VaultLang";

export function VaultTaste() {
  const { lang, t } = useVaultLang();

  return (
    <section
      id="taste"
      className="relative overflow-hidden px-4 pb-24 pt-24 sm:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--vault-amber)]">
              {t.tasteKicker}
            </p>
            <h2 className="mt-3 font-vault text-[clamp(2.2rem,6vw,4.2rem)] font-light uppercase leading-[0.95] tracking-[0.1em]">
              {t.tasteTitle}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--vault-bone)]/62">
              {t.tasteLead}
            </p>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <VaultPhoto
              src={VAULT_IMG.tasting}
              alt=""
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="absolute inset-0 vault-ken"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-[var(--vault-bone)]/12 md:grid-cols-3">
          {VAULT_CASKS.map((cask) => {
            const copy = cask[lang];
            return (
              <article
                key={cask.id}
                className="bg-[var(--vault-void)] p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: cask.color }}>
                  {cask.no} · {copy.name}
                </p>
                <dl className="mt-6 space-y-3 text-[12px] uppercase leading-relaxed tracking-[0.12em] text-[var(--vault-bone)]/55">
                  <div>
                    <dt className="text-[9px] tracking-[0.2em] text-[var(--vault-bone)]/35">
                      {t.glassLabel}
                    </dt>
                    <dd className="mt-1">{copy.glass}</dd>
                  </div>
                  <div>
                    <dt className="text-[9px] tracking-[0.2em] text-[var(--vault-bone)]/35">
                      {t.tempLabel}
                    </dt>
                    <dd className="mt-1">{copy.temp}</dd>
                  </div>
                  <div>
                    <dt className="text-[9px] tracking-[0.2em] text-[var(--vault-bone)]/35">
                      {t.waterLabel}
                    </dt>
                    <dd className="mt-1">{copy.water}</dd>
                  </div>
                  <div>
                    <dt className="text-[9px] tracking-[0.2em] text-[var(--vault-bone)]/35">
                      {t.pairingLabel}
                    </dt>
                    <dd className="mt-1">{copy.pairing}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>

        <div className="relative mt-px min-h-[240px] md:min-h-[320px]">
          <VaultPhoto
            src={VAULT_IMG.glass}
            alt=""
            sizes="100vw"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,11,0.72)_0%,rgba(12,12,11,0.2)_55%,transparent_100%)]" />
          <p className="absolute bottom-8 left-6 max-w-sm text-[12px] uppercase leading-relaxed tracking-[0.16em] text-[var(--vault-bone)]/80">
            {t.tasteLead}
          </p>
        </div>
      </div>
    </section>
  );
}
