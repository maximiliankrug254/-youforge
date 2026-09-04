"use client";

import { useCallback, useState } from "react";
import { VaultAgeGate } from "@/components/demo/vault/VaultAgeGate";
import { VaultIntro } from "@/components/demo/vault/VaultIntro";
import { VaultLangProvider, useVaultLang } from "@/components/demo/vault/VaultLang";
import { VaultLenis } from "@/components/demo/vault/VaultLenis";
import { VaultNav } from "@/components/demo/vault/VaultNav";
import { VaultGrain, VaultGrid } from "@/components/demo/vault/VaultChrome";
import { VaultRuler } from "@/components/demo/vault/VaultRuler";
import { VaultHero } from "@/components/demo/vault/VaultHero";
import { VaultChapter } from "@/components/demo/vault/VaultChapter";
import { VaultCasks } from "@/components/demo/vault/VaultCasks";
import { VaultCraft } from "@/components/demo/vault/VaultCraft";
import { VaultTaste } from "@/components/demo/vault/VaultTaste";
import { VaultMarquee } from "@/components/demo/vault/VaultMarquee";
import { VaultDust } from "@/components/demo/vault/VaultDust";
import { VaultAudio } from "@/components/demo/vault/VaultAudio";
import { VaultCursor } from "@/components/demo/vault/VaultCursor";
import { VaultHouse } from "@/components/demo/vault/VaultHouse";

function VaultScroll() {
  const { t } = useVaultLang();
  return (
    <VaultLenis>
      <VaultHero />
      <VaultMarquee />
      <VaultChapter label={t.chapters.casks} telemetry="im Holz" />
      <VaultCasks />
      <VaultChapter label={t.chapters.taste} telemetry="im Glas" />
      <VaultTaste />
      <VaultChapter label={t.chapters.craft} telemetry="im Kupfer" />
      <VaultCraft />
      <VaultChapter label={t.chapters.house} telemetry="im Haus" />
      <VaultHouse />
    </VaultLenis>
  );
}

function VaultFrame() {
  const [passed, setPassed] = useState(false);
  const onPassed = useCallback(() => setPassed(true), []);

  return (
    <>
      <VaultGrid />
      <VaultGrain />
      <VaultDust />
      <VaultRuler />
      <VaultCursor />
      <VaultNav />
      <VaultAudio />
      <VaultAgeGate onPassed={onPassed} />
      {passed ? <VaultIntro /> : null}
      <VaultScroll />
    </>
  );
}

export function VaultPage() {
  return (
    <VaultLangProvider>
      <VaultFrame />
    </VaultLangProvider>
  );
}
