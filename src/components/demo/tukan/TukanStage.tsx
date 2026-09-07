"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_STAGE } from "@/components/demo/tukan/tukan-content";

export function TukanStage() {
  const reduce = useReducedMotion();
  const ice = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(TUKAN_STAGE[0]);

  useEffect(() => {
    const nodes = TUKAN_STAGE.map((p) => document.getElementById(p.id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit?.target.id) return;
        const next = TUKAN_STAGE.find((p) => p.id === hit.target.id);
        if (next) setActive(next);
      },
      { root: null, threshold: [0.35, 0.55, 0.7], rootMargin: "-12% 0px -28% 0px" },
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ice.current;
    if (!el || reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 10}deg)`;
    };
    const onLeave = () => {
      el.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <aside className="relative isolate min-h-[85svh] overflow-hidden lg:sticky lg:top-0 lg:h-dvh lg:min-h-0">
      <div className={reduce ? "absolute inset-0" : "tukan-ken absolute inset-[-8%]"}>
        <Image
          src={TUKAN_IMG.jungle}
          alt=""
          fill
          priority
          quality={88}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[center_40%] opacity-55"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,20,14,0.35)_55%,rgba(7,20,14,0.92)_100%)]" />
      <div className="tukan-sun" />
      <div className="tukan-rays" />
      <div className="tukan-dust" />

      <div className="relative z-[2] flex h-full min-h-[85svh] flex-col justify-between px-4 pb-6 pt-20 sm:px-6 lg:min-h-0 lg:px-8 lg:pb-8 lg:pt-24">
        <p className="relative z-[3] font-tukan-mono text-[11px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
          {active.kicker}
        </p>

        <div className="tukan-ice-scene relative min-h-0 w-full flex-1">
          <div ref={ice} className="tukan-ice absolute inset-0">
            <Image
              src={TUKAN_IMG.popsicle}
              alt="Maracuja Protein-Eis"
              fill
              priority
              quality={92}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-contain object-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>

        <p className="relative z-[3] font-tukan-mono text-[12px] uppercase tracking-[0.16em] text-white/70">
          {active.line}
        </p>
      </div>
    </aside>
  );
}
