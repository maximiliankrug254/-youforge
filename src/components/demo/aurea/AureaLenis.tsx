"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function AureaLenis({ children }: { children: React.ReactNode }) {
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setSmooth(fine && !reduce);
  }, []);

  if (!smooth) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.07, smoothWheel: true, wheelMultiplier: 0.8 }}
    >
      {children}
    </ReactLenis>
  );
}
