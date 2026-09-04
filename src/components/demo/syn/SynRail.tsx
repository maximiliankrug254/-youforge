"use client";

import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";

export function SynRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ on: false, x: 0, sl: 0, moved: 0, vx: 0, lastX: 0, lastT: 0 });
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const coast = () => {
    const el = ref.current;
    if (!el) return;
    drag.current.vx *= 0.92;
    el.scrollLeft -= drag.current.vx;
    if (Math.abs(drag.current.vx) > 0.35) {
      raf.current = requestAnimationFrame(coast);
    }
  };

  const down = (e: PointerEvent<HTMLDivElement>) => {
    cancelAnimationFrame(raf.current);
    drag.current = {
      on: true,
      x: e.clientX,
      sl: ref.current?.scrollLeft ?? 0,
      moved: 0,
      vx: 0,
      lastX: e.clientX,
      lastT: performance.now(),
    };
    ref.current?.setPointerCapture(e.pointerId);
  };

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.on || !ref.current) return;
    const dx = e.clientX - drag.current.x;
    drag.current.moved = Math.abs(dx);
    ref.current.scrollLeft = drag.current.sl - dx;
    const now = performance.now();
    const dt = Math.max(8, now - drag.current.lastT);
    drag.current.vx = ((e.clientX - drag.current.lastX) / dt) * 16;
    drag.current.lastX = e.clientX;
    drag.current.lastT = now;
  };

  const up = () => {
    if (!drag.current.on) return;
    drag.current.on = false;
    if (Math.abs(drag.current.vx) > 0.8) coast();
  };

  return (
    <div
      ref={ref}
      data-cursor="drag"
      className="flex cursor-grab gap-3 overflow-x-auto pb-2 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      onClickCapture={(e) => {
        if (drag.current.moved > 10) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      {children}
    </div>
  );
}
