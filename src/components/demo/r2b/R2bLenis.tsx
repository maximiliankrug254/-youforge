"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function R2bLenis({ children }: { children: React.ReactNode }) {
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.requestAnimationFrame(() => {
      setSmooth(fine && !reduce);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  if (!smooth) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.065, smoothWheel: true, wheelMultiplier: 0.78 }}
    >
      {children}
    </ReactLenis>
  );
}
