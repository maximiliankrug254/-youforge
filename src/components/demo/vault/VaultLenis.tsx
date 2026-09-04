"use client";

import { ReactLenis } from "lenis/react";
import { useVaultMediaQuery } from "@/components/demo/vault/useVaultMediaQuery";

export function VaultLenis({ children }: { children: React.ReactNode }) {
  const finePointer = useVaultMediaQuery("(pointer: fine)");
  const reduceMotion = useVaultMediaQuery("(prefers-reduced-motion: reduce)");

  if (!finePointer || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        smoothWheel: true,
        wheelMultiplier: 0.72,
        touchMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}
