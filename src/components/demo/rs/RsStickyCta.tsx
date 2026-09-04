"use client";

import { useEffect, useState } from "react";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

export function RsStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(28,25,23,0.1)] bg-[rgba(28,25,23,0.94)] px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`tel:${RS_CONTACT.phoneTel}`}
          className="flex-1 rounded-full bg-[var(--rs-ochre)] py-3.5 text-center text-sm font-semibold text-[var(--rs-ink)]"
        >
          Besichtigung anrufen
        </a>
        <a
          href={RS_CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full border border-[rgba(245,241,235,0.28)] py-3.5 text-center text-sm font-semibold text-[var(--rs-cream)]"
        >
          Fotos schicken
        </a>
      </div>
    </div>
  );
}
