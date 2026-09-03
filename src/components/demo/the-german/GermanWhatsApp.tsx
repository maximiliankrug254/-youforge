"use client";

import { useEffect, useState } from "react";
import { GERMAN, germanWhatsAppUrl, germanAsset } from "@/components/demo/the-german/german-config";
import { GermanClock } from "@/components/demo/the-german/GermanClock";

export function GermanWhatsApp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="tg-wa"
        aria-label={`WhatsApp ${GERMAN.brand.name}`}
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <img src={germanAsset("icons/whatsapp-white.svg")} alt="" width={30} height={30} />
        <span>WhatsApp</span>
      </button>

      {open && (
        <div className="tg-wa-layer">
          <button type="button" className="tg-wa-scrim" aria-label="Close" onClick={() => setOpen(false)} />
          <aside className="tg-wa-panel" role="dialog" aria-labelledby="tg-wa-title">
            <button type="button" className="tg-wa-close" onClick={() => setOpen(false)}>
              Close
            </button>
            <p className="tg-suptitle" id="tg-wa-title">
              Book an appointment
            </p>
            <h2 className="tg-h3 tg-upper" style={{ margin: "20px 0 16px" }}>
              {GERMAN.brand.full}
            </h2>
            <GermanClock showStatus />
            <p className="tg-body" style={{ margin: "28px 0" }}>
              {GERMAN.whatsapp.message}
            </p>
            <p className="tg-body" style={{ marginBottom: 28 }}>
              {GERMAN.contact.addressLine}
              <br />
              {GERMAN.hours.display}
            </p>
            <a
              href={germanWhatsAppUrl()}
              className="tg-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on WhatsApp
            </a>
          </aside>
        </div>
      )}
    </>
  );
}
