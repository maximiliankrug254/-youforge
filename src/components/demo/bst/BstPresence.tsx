"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BST_EASE } from "@/components/demo/bst/bst-motion";
import { BST_CONTACT } from "@/components/demo/bst/bst-contact";

function formatTime(d: Date) {
  return d.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function BstPresence() {
  const reduceMotion = useReducedMotion();
  const [time, setTime] = useState("—:—");

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.a
      href={`tel:${BST_CONTACT.phoneTel}`}
      className="group fixed bottom-6 left-5 z-40 hidden items-center gap-3 rounded-full border border-white/12 bg-[rgba(28,27,25,0.78)] px-4 py-2.5 backdrop-blur-md lg:flex"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.6, duration: 0.8, ease: BST_EASE }}
      aria-label="Jetzt erreichbar — anrufen"
    >
      <span className="relative flex h-2 w-2">
        <span className="bst-pulse absolute inset-0 rounded-full bg-[var(--bst-accent)]" />
        <span className="relative h-2 w-2 rounded-full bg-[var(--bst-accent)]" />
      </span>
      <span className="text-[11px] font-medium tracking-[0.04em] text-white/70 transition-colors group-hover:text-white">
        Jetzt erreichbar
      </span>
      <span className="font-bst-display text-[12px] font-semibold tabular-nums tracking-[-0.02em] text-[var(--bst-accent)]">
        {time}
      </span>
    </motion.a>
  );
}
