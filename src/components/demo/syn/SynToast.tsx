"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { SYN_EASE } from "@/components/demo/syn/syn-motion";
import { useSyn } from "@/components/demo/syn/SynBag";

export function SynToast() {
  const { toast, clearToast } = useSyn();

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(clearToast, 2200);
    return () => window.clearTimeout(id);
  }, [toast, clearToast]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="fixed bottom-6 left-1/2 z-[160] w-[min(92vw,360px)] -translate-x-1/2 bg-black px-6 py-5 text-center text-white"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.45, ease: SYN_EASE }}
        >
          <p className="font-[family-name:var(--font-syn-mono)] text-[11px] uppercase tracking-[0.28em] text-[#ed3833]">
            item added
          </p>
          <p className="mt-2 font-[family-name:var(--font-syn-display)] text-2xl uppercase">
            {toast === "fav" ? "Added to favourites." : "Added to cart."}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
