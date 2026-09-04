"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VAULT_CASKS } from "@/components/demo/vault/vault-content";
import { VaultPhoto } from "@/components/demo/vault/VaultPhoto";
import { useVaultLang } from "@/components/demo/vault/VaultLang";
import { VAULT_EASE } from "@/components/demo/vault/vault-motion";

export function VaultCasks() {
  const { lang, t } = useVaultLang();
  const [index, setIndex] = useState(1);
  const cask = VAULT_CASKS[index];
  const copy = cask[lang];

  const prev = () => setIndex((i) => (i + VAULT_CASKS.length - 1) % VAULT_CASKS.length);
  const next = () => setIndex((i) => (i + 1) % VAULT_CASKS.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="casks"
      className="relative min-h-dvh overflow-hidden px-4 pb-24 pt-24 sm:px-8"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 lg:min-h-[calc(100dvh-7rem)] lg:justify-between">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--vault-bone)]/40">
              {t.selectedKicker}
            </p>
            <h2 className="mt-2 font-vault text-[clamp(2rem,5vw,3.8rem)] font-light uppercase tracking-[0.16em]">
              {t.selectedTitle}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--vault-bone)]/55">
              {t.selectedLead}
            </p>
          </div>
          <a
            href="#ledger"
            className="text-[10px] uppercase tracking-[0.22em] text-[var(--vault-bone)]/55 underline decoration-[var(--vault-bone)]/20 underline-offset-8 hover:text-[var(--vault-bone)]"
          >
            {t.start}
          </a>
        </div>

        <div className="flex gap-2">
          {VAULT_CASKS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative h-16 w-12 overflow-hidden border sm:h-20 sm:w-16 ${
                i === index
                  ? "border-[var(--vault-amber)]"
                  : "border-[var(--vault-bone)]/20 opacity-55 hover:opacity-100"
              }`}
              aria-label={item[lang].name}
            >
              <VaultPhoto
                src={item.image}
                alt=""
                sizes="64px"
                className="absolute inset-0"
              />
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)_minmax(0,1fr)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={cask.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: VAULT_EASE }}
              className="relative mx-auto aspect-[3/4] w-full max-w-[280px] lg:max-w-none"
            >
              <VaultPhoto
                src={cask.image}
                alt={`${copy.name} ${cask.years}`}
                sizes="(min-width: 1024px) 28vw, 70vw"
                imageClassName="object-cover object-center"
                className="absolute inset-0"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={cask.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: VAULT_EASE }}
              className="text-center lg:text-left"
            >
              <p
                className="font-vault text-[clamp(4.2rem,12vw,7.5rem)] font-extralight leading-none tracking-[0.04em]"
                style={{ color: cask.color }}
              >
                {cask.no}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.32em] text-[var(--vault-bone)]/70">
                {copy.name} · {cask.years} {t.years}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--vault-bone)]/45">
                {t.distilled} {cask.distilled} · {t.bottled} {cask.bottled}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--vault-bone)]/55">
                {copy.cask} · {cask.abv}
                {t.abv}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {copy.notes.map((note) => (
                  <span
                    key={note}
                    className="vault-box px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[var(--vault-bone)]/70"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="max-w-sm space-y-5 lg:ml-auto">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--vault-amber)]">
              {t.grade} · {copy.grade}
            </p>
            <p className="text-sm leading-relaxed text-[var(--vault-bone)]/62">
              {copy.body}
            </p>
            <dl className="space-y-3 border-t border-[var(--vault-bone)]/12 pt-5 text-[11px] uppercase leading-relaxed tracking-[0.14em]">
              <div>
                <dt className="text-[9px] text-[var(--vault-bone)]/35">{t.nose}</dt>
                <dd className="mt-1 text-[var(--vault-bone)]/70">{copy.nose}</dd>
              </div>
              <div>
                <dt className="text-[9px] text-[var(--vault-bone)]/35">{t.palate}</dt>
                <dd className="mt-1 text-[var(--vault-bone)]/70">{copy.palate}</dd>
              </div>
              <div>
                <dt className="text-[9px] text-[var(--vault-bone)]/35">{t.finish}</dt>
                <dd className="mt-1 text-[var(--vault-bone)]/70">{copy.finish}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[var(--vault-bone)]/12 pt-5">
          <button
            type="button"
            onClick={prev}
            className="px-2 py-2 text-lg text-[var(--vault-bone)]/55 hover:text-[var(--vault-bone)]"
            aria-label="Previous cask"
          >
            ‹
          </button>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--vault-bone)]/70">
            {copy.name.toLowerCase()}
          </p>
          <button
            type="button"
            onClick={next}
            className="px-2 py-2 text-lg text-[var(--vault-bone)]/55 hover:text-[var(--vault-bone)]"
            aria-label="Next cask"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
