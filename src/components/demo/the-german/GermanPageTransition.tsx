"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GERMAN_BASE } from "@/components/demo/the-german/german-config";

function pageLabel(pathname: string) {
  if (pathname === GERMAN_BASE) return "Home";
  if (pathname.includes("dental-care")) return "Dental Care";
  if (pathname.includes("orthodontics")) return "Orthodontics";
  if (pathname.includes("skin-aesthetics")) return "Dermatology";
  if (pathname.includes("technology")) return "Technology";
  if (pathname.includes("about-us")) return "About us";
  return "THE GERMAN";
}

export function GermanPageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const first = useRef(true);
  const [wipe, setWipe] = useState(false);
  const [label, setLabel] = useState(pageLabel(pathname));

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (reduce) return;
    setLabel(pageLabel(pathname));
    setWipe(true);
    const id = window.setTimeout(() => setWipe(false), 900);
    return () => window.clearTimeout(id);
  }, [pathname, reduce]);

  return (
    <>
      <AnimatePresence>
        {wipe && (
          <motion.div
            className="tg-wipe"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <span>{label}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key={pathname}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: wipe ? 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
