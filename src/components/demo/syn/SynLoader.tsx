"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SYN_EASE } from "@/components/demo/syn/syn-motion";
import { useSyn } from "@/components/demo/syn/SynBag";

export function SynLoader() {
  const reduce = useReducedMotion();
  const { boot } = useSyn();
  const [pct, setPct] = useState(1);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce) {
      boot();
      setShow(false);
      return;
    }
    document.documentElement.classList.add("syn-booting");
    let n = 1;
    const id = window.setInterval(() => {
      n = Math.min(100, n + Math.floor(Math.random() * 9) + 3);
      setPct(n);
      if (n >= 100) {
        window.clearInterval(id);
        boot();
        window.setTimeout(() => {
          document.documentElement.classList.remove("syn-booting");
          setShow(false);
        }, 320);
      }
    }, 38);
    return () => {
      window.clearInterval(id);
      document.documentElement.classList.remove("syn-booting");
    };
  }, [reduce, boot]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black text-white"
          exit={{ y: "-100%", transition: { duration: 0.9, ease: SYN_EASE } }}
        >
          <p className="font-[family-name:var(--font-syn-mono)] text-[11px] uppercase tracking-[0.48em] text-[#ed3833]">
            Loading
          </p>
          <p className="mt-5 font-[family-name:var(--font-syn-display)] text-[clamp(5rem,22vw,14rem)] leading-none tracking-[-0.06em] tabular-nums">
            {String(pct).padStart(2, "0")}
            <span className="text-[#ed3833]">%</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
