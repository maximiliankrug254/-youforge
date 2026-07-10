"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DemoChatPanel } from "@/components/chat/DemoChatPanel";
import { useDemoChat } from "@/components/chat/DemoChatProvider";

export function DemoChatWidget() {
  const { isWidgetOpen, toggleWidget, closeWidget, openWidget } = useDemoChat();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWidget();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeWidget]);

  return (
    <>
      <AnimatePresence>
        {isWidgetOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Chat schließen"
              className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWidget}
            />
            <motion.div
              className="fixed bottom-20 left-4 right-4 z-[70] mx-auto max-w-md sm:left-6 sm:right-auto sm:mx-0 sm:w-[380px]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <DemoChatPanel variant="floating" className="h-[min(480px,65vh)] shadow-2xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleWidget}
        className="fixed bottom-6 left-6 z-[65] flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-3 shadow-lg backdrop-blur-md transition-colors hover:border-accent/40"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={isWidgetOpen ? "Demo-Chat schließen" : "KI-Demo öffnen"}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-xs uppercase tracking-wider text-foreground">
          KI-Demo
        </span>
      </motion.button>

      <button
        type="button"
        onClick={() => {
          openWidget();
          document.getElementById("ki-demo")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="sr-only"
        id="ki-demo-scroll-trigger"
        aria-hidden
      />
    </>
  );
}
