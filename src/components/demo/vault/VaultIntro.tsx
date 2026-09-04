"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { VAULT, VAULT_IMG } from "@/components/demo/vault/vault-config";
import { VAULT_EASE } from "@/components/demo/vault/vault-motion";
import { VaultPhoto } from "@/components/demo/vault/VaultPhoto";

const LETTERS = VAULT.brand.short.split("");

export function VaultIntro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduce) {
      setVisible(false);
      return;
    }
    const end = window.setTimeout(() => setVisible(false), 2800);
    return () => window.clearTimeout(end);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[110] overflow-hidden bg-[#e6e4de]"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: VAULT_EASE }}
          aria-hidden
        >
          <div className="absolute inset-0">
            <VaultPhoto
              src={VAULT_IMG.warehouse}
              alt=""
              priority
              sizes="100vw"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-[#e6e4de]/78" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(20,18,16,0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(20,18,16,0.08) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
            />
          </div>
          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="flex gap-[0.18em] font-vault text-[clamp(3.2rem,12vw,8.5rem)] font-extralight uppercase tracking-[0.28em] text-[#9a9892]">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: VAULT_EASE,
                    delay: 0.15 + i * 0.08,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>
          <motion.div
            className="absolute left-1/2 top-1/2 h-[min(42vw,280px)] w-[min(42vw,280px)] -translate-x-1/2 -translate-y-1/2 border border-[#1a1816]/12"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: VAULT_EASE, delay: 0.2 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
