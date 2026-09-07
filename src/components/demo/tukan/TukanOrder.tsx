"use client";

import { useState } from "react";
import { TUKAN } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY } from "@/components/demo/tukan/tukan-content";
import { TukanButton } from "@/components/demo/tukan/TukanButton";

export function TukanOrder() {
  const [packs, setPacks] = useState(1);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const total = (packs * TUKAN.product.packPriceValue).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  if (sent) {
    return (
      <div className="flex h-full max-w-lg flex-col justify-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
          Living Demo
        </p>
        <p className="mt-2 text-[1.3rem] font-semibold leading-snug text-white">
          Es geht keine Bestellung raus.
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-white/68">{TUKAN.youforge.pitch}</p>
        <a
          href={TUKAN.youforge.contact}
          className="mt-5 inline-block text-[11px] uppercase tracking-[0.2em] text-[var(--tukan-sun)]"
        >
          Seite wie die hier anfragen
        </a>
      </div>
    );
  }

  return (
    <div className="grid h-full gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(16rem,1fr)] lg:items-center">
      <div>
        <h2 className="tukan-headline text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-white">
          {TUKAN_COPY.orderTitle}
        </h2>
        <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-white/75">
          {TUKAN_COPY.orderLead}
        </p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-3">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-white/45">Packung</dt>
            <dd className="mt-1 text-sm text-white">4er-Pack · Maracuja</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-white/45">Preis</dt>
            <dd className="mt-1 text-sm text-white">{TUKAN.product.packPrice}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-white/45">Versand</dt>
            <dd className="mt-1 text-sm text-white">{TUKAN.product.ship}</dd>
          </div>
        </dl>
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">Packungen</span>
          <select
            value={packs}
            onChange={(e) => setPacks(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[var(--tukan-void)] px-3 py-2.5 text-white outline-none focus:border-[var(--tukan-sun)]"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} × 4er-Pack
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
            E-Mail für die Bestätigung
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="du@mail.de"
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[var(--tukan-void)] px-3 py-2.5 text-white outline-none placeholder:text-white/30 focus:border-[var(--tukan-sun)]"
          />
        </label>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-white/45">Summe</span>
            <span className="text-[1.45rem] font-semibold text-white">{total}</span>
          </p>
          <TukanButton type="submit" className="bg-[var(--tukan-sun)] text-[var(--tukan-void)]">
            {TUKAN_COPY.orderCta}
          </TukanButton>
        </div>
        <p className="text-[12px] leading-relaxed text-white/45">{TUKAN_COPY.orderNote}</p>
      </form>
    </div>
  );
}
