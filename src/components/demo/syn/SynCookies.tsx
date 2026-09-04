"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SYN_EASE } from "@/components/demo/syn/syn-motion";
import { useSyn } from "@/components/demo/syn/SynBag";

export function SynCookies() {
  const { drawer } = useSyn();
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("syn-cookies") !== "1") setOn(true);
  }, []);

  const close = () => {
    window.sessionStorage.setItem("syn-cookies", "1");
    setOn(false);
  };

  return (
    <AnimatePresence>
      {on && !drawer && (
        <motion.div
          className="fixed bottom-0 left-0 z-[85] max-w-md bg-black p-5 text-white sm:m-4"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.7, ease: SYN_EASE }}
        >
          <p className="font-[family-name:var(--font-syn-display)] text-2xl uppercase leading-none">
            We use cookies to improve your experience
          </p>
          <p className="mt-3 font-[family-name:var(--font-syn-mono)] text-xs text-white/55">
            By continuing, you agree to our cookie policy.
          </p>
          <div className="mt-5 flex gap-3 font-[family-name:var(--font-syn-mono)] text-xs uppercase">
            <button type="button" className="bg-[#ed3833] px-4 py-2" onClick={close}>
              [ accept cookies ]
            </button>
            <button type="button" className="border border-white px-4 py-2" onClick={close}>
              [ reject all ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
