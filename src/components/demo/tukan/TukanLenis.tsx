"use client";

import { useCallback, useSyncExternalStore } from "react";
import { ReactLenis } from "lenis/react";

function useTukanMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query],
  );
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export function TukanLenis({ children }: { children: React.ReactNode }) {
  const finePointer = useTukanMediaQuery("(pointer: fine)");
  const reduceMotion = useTukanMediaQuery("(prefers-reduced-motion: reduce)");

  if (!finePointer || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
