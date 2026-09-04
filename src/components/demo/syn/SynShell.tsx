"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { SynBagProvider } from "@/components/demo/syn/SynBag";
import { SynCursor } from "@/components/demo/syn/SynCursor";
import { SynLoader } from "@/components/demo/syn/SynLoader";
import { SynHeader } from "@/components/demo/syn/SynHeader";
import { SynToast } from "@/components/demo/syn/SynToast";
import { SynCookies } from "@/components/demo/syn/SynCookies";

export function SynShell({ children }: { children: React.ReactNode }) {
  const [smooth, setSmooth] = useState(false);
  useEffect(() => {
    setSmooth(
      window.matchMedia("(pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const inner = (
    <SynBagProvider>
      <SynLoader />
      <SynCursor />
      <SynHeader />
      <SynToast />
      <SynCookies />
      {children}
    </SynBagProvider>
  );

  if (!smooth) return inner;
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.72 }}>
      {inner}
    </ReactLenis>
  );
}
