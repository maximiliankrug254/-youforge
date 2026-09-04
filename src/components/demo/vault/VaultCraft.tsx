"use client";

import { VAULT_IMG } from "@/components/demo/vault/vault-config";
import { VaultPhoto } from "@/components/demo/vault/VaultPhoto";
import { VaultCount } from "@/components/demo/vault/VaultCount";
import { useVaultLang } from "@/components/demo/vault/VaultLang";

export function VaultCraft() {
  const { t } = useVaultLang();

  return (
    <section
      id="craft"
      className="relative min-h-dvh overflow-hidden px-4 pb-24 pt-24 sm:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--vault-bone)]/40">
              {t.craftKicker}
            </p>
            <h2 className="mt-2 font-vault text-[clamp(1.8rem,4.5vw,3.2rem)] font-light uppercase tracking-[0.14em]">
              {t.craftTitle}
            </h2>
          </div>
          <a
            href="#ledger"
            className="text-[10px] uppercase tracking-[0.22em] text-[var(--vault-bone)]/55 underline decoration-[var(--vault-bone)]/20 underline-offset-8"
          >
            {t.touch}
          </a>
        </div>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--vault-bone)]/55">
          {t.craftLead}
        </p>

        <div className="mt-12 grid gap-px bg-[var(--vault-bone)]/12 lg:grid-cols-12">
          <article className="bg-[var(--vault-void)] p-6 lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--vault-bone)]/40">
              01
            </p>
            <h3 className="mt-6 font-vault text-3xl font-light lowercase tracking-[0.08em]">
              {t.pillars[0].title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--vault-bone)]/55">
              {t.pillars[0].body}
            </p>
          </article>

          <div className="relative min-h-[240px] lg:col-span-4 lg:min-h-[320px]">
            <VaultPhoto
              src={VAULT_IMG.stills}
              alt="Kupferblasen"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="absolute inset-0"
            />
          </div>

          <article className="bg-[var(--vault-void)] p-6 lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--vault-bone)]/40">
              02
            </p>
            <h3 className="mt-6 font-vault text-3xl font-light lowercase tracking-[0.08em]">
              {t.pillars[1].title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--vault-bone)]/55">
              {t.pillars[1].body}
            </p>
          </article>

          <article className="bg-[var(--vault-void)] p-6 lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--vault-bone)]/40">
              03
            </p>
            <h3 className="mt-6 font-vault text-2xl font-light lowercase tracking-[0.08em]">
              {t.pillars[2].title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--vault-bone)]/55">
              {t.pillars[2].body}
            </p>
          </article>

          <div className="relative min-h-[180px] lg:col-span-6 lg:min-h-[220px]">
            <VaultPhoto
              src={VAULT_IMG.casksRow}
              alt="Fassreihe"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 grid grid-cols-3 bg-[var(--vault-void)]/55">
              {t.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-end border-r border-[var(--vault-bone)]/10 p-6 last:border-r-0"
                >
                  <p className="font-vault text-[clamp(2rem,5vw,3.4rem)] font-extralight leading-none tracking-[0.04em]">
                    <VaultCount value={Number.parseInt(stat.value, 10)} />
                  </p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[var(--vault-bone)]/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article className="bg-[var(--vault-void)] p-6 lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--vault-bone)]/40">
              04
            </p>
            <h3 className="mt-6 font-vault text-2xl font-light lowercase tracking-[0.08em]">
              {t.pillars[3].title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--vault-bone)]/55">
              {t.pillars[3].body}
            </p>
          </article>
        </div>

        <div className="mt-px grid gap-px bg-[var(--vault-bone)]/12 md:grid-cols-2">
          <div className="relative min-h-[220px]">
            <VaultPhoto
              src={VAULT_IMG.pour}
              alt="Whisky im Glas"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="absolute inset-0"
            />
          </div>
          <div>
            {t.quotes.map((quote) => (
              <blockquote
                key={quote.name}
                className="border-b border-[var(--vault-bone)]/10 bg-[var(--vault-void)] px-6 py-8 last:border-b-0"
              >
                <p className="text-sm italic leading-relaxed text-[var(--vault-bone)]/70">
                  {quote.text}
                </p>
                <footer className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[var(--vault-bone)]/40">
                  {quote.name} · {quote.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
