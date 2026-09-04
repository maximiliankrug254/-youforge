"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  VAULT_COPY,
  type VaultLang,
} from "@/components/demo/vault/vault-content";

type VaultCopy = (typeof VAULT_COPY)[VaultLang];

type VaultLangContextValue = {
  lang: VaultLang;
  setLang: (lang: VaultLang) => void;
  t: VaultCopy;
};

const VaultLangContext = createContext<VaultLangContextValue | null>(null);

export function VaultLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<VaultLang>("de");
  const setLang = useCallback((next: VaultLang) => setLangState(next), []);
  const value = useMemo(
    () => ({ lang, setLang, t: VAULT_COPY[lang] }),
    [lang, setLang],
  );

  return (
    <VaultLangContext.Provider value={value}>
      {children}
    </VaultLangContext.Provider>
  );
}

export function useVaultLang() {
  const ctx = useContext(VaultLangContext);
  if (!ctx) throw new Error("useVaultLang must be used within VaultLangProvider");
  return ctx;
}
