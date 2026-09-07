"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TUKAN, TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY, TUKAN_DRAWERS } from "@/components/demo/tukan/tukan-content";
import { TUKAN_EASE } from "@/components/demo/tukan/tukan-motion";
import { TukanButton } from "@/components/demo/tukan/TukanButton";
import { TukanMark } from "@/components/demo/tukan/TukanMark";
import { TukanOrder } from "@/components/demo/tukan/TukanOrder";

type DrawerId = (typeof TUKAN_DRAWERS)[number]["id"];

function isDrawerId(value: string): value is DrawerId {
  return TUKAN_DRAWERS.some((d) => d.id === value);
}

const HANDLE = 56;
const GAP = 8;

export function TukanFreezer() {
  const reduce = useReducedMotion();
  const gasket = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<DrawerId>("eis");
  const [gasketH, setGasketH] = useState(0);
  const [visited, setVisited] = useState<Record<DrawerId, boolean>>({
    eis: true,
    zahlen: false,
    bali: false,
    bestellen: false,
  });

  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    if (isDrawerId(fromHash)) {
      setOpen(fromHash);
      setVisited((v) => ({ ...v, [fromHash]: true }));
    }
  }, []);

  useEffect(() => {
    if (window.location.hash.replace("#", "") === open) return;
    window.history.replaceState(null, "", `#${open}`);
  }, [open]);

  useEffect(() => {
    const el = gasket.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const next = Math.round(entries[0]?.contentRect.height ?? 0);
      setGasketH(next);
    });
    ro.observe(el);
    setGasketH(el.clientHeight);
    return () => ro.disconnect();
  }, []);

  function openDrawer(id: DrawerId) {
    if (id === open) return;
    setOpen(id);
    setVisited((v) => (v[id] ? v : { ...v, [id]: true }));
  }

  const closedCount = TUKAN_DRAWERS.length - 1;
  const openH =
    gasketH > 0 ? Math.max(HANDLE * 2, gasketH - HANDLE * closedCount - GAP * closedCount) : 0;

  return (
    <div className="relative isolate flex h-dvh flex-col overflow-hidden px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-[max(0.55rem,env(safe-area-inset-top))] sm:px-5">
      <World reduce={!!reduce} />

      <header className="relative z-[2] flex shrink-0 items-center justify-between gap-3 px-1 py-2">
        <p className="flex items-center gap-2 text-white">
          <TukanMark className="h-7 w-7" />
          <span className="font-tukan-display text-[1.35rem] leading-none">{TUKAN.brand.short}</span>
        </p>
        <p className="font-tukan-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
          <span className="tukan-led">−18 °C</span>
          <span className="text-white/30"> · </span>
          {TUKAN.product.packPrice}
        </p>
      </header>

      <motion.div
        className="tukan-cabinet relative z-[2] mx-auto flex min-h-0 w-full max-w-[72rem] flex-1 flex-col overflow-hidden"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: TUKAN_EASE }}
      >
        <span className="tukan-drip left-[12%] top-3" />
        <span className="tukan-drip left-[38%] top-5" style={{ animationDelay: "1.4s" }} />
        <span className="tukan-drip right-[18%] top-4" style={{ animationDelay: "2.6s" }} />
        <div ref={gasket} className="tukan-gasket flex min-h-0 flex-1 flex-col gap-2 p-2 sm:p-2.5">
          {TUKAN_DRAWERS.map((drawer) => {
            const active = open === drawer.id;
            return (
              <section
                key={drawer.id}
                className={`tukan-drawer ${active ? "is-open" : ""}`}
                style={
                  openH
                    ? { height: active ? openH : HANDLE }
                    : active
                      ? { flex: 1, height: "auto", transition: "none" }
                      : { height: HANDLE, transition: "none" }
                }
              >
                <DrawerHandle drawer={drawer} open={active} onOpen={() => openDrawer(drawer.id)} />
                <div
                  id={`${drawer.id}-bin`}
                  className="tukan-drawer-body tukan-bin"
                  aria-hidden={!active}
                  inert={!active}
                >
                  {visited[drawer.id] ? (
                    <>
                      <span className="tukan-vapor" />
                      {drawer.id === "eis" ? (
                        <EisBin reduce={!!reduce} onBuy={() => openDrawer("bestellen")} />
                      ) : null}
                      {drawer.id === "zahlen" ? (
                        <ZahlenBin reduce={!!reduce} onBuy={() => openDrawer("bestellen")} />
                      ) : null}
                      {drawer.id === "bali" ? (
                        <BaliBin reduce={!!reduce} onBuy={() => openDrawer("bestellen")} />
                      ) : null}
                      {drawer.id === "bestellen" ? (
                        <div className="relative h-full px-4 py-4 sm:px-6 sm:py-5">
                          <TukanOrder />
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      </motion.div>

      <p className="relative z-[2] shrink-0 px-1 pt-2 font-tukan-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
        {TUKAN.youforge.label} · {TUKAN.youforge.studio}
      </p>
    </div>
  );
}

function World({ reduce }: { reduce: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className={reduce ? "absolute inset-0" : "tukan-ken absolute inset-[-10%]"}>
        <Image
          src={TUKAN_IMG.jungle}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-45"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,20,14,0.55)_48%,rgba(7,20,14,0.94)_100%)]" />
      <div className="tukan-sun" />
      <div className="tukan-rays" />
      <div className="tukan-dust" />
      <Image src={TUKAN_IMG.popsicle} alt="" width={16} height={16} priority className="hidden" />
      <Image src={TUKAN_IMG.bali} alt="" width={16} height={16} className="hidden" />
    </div>
  );
}

function DrawerHandle({
  drawer,
  open,
  onOpen,
}: {
  drawer: (typeof TUKAN_DRAWERS)[number];
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className={`tukan-handle flex w-full items-center gap-3 px-3 text-left sm:px-4 ${
        open ? "tukan-handle-open" : ""
      }`}
      aria-expanded={open}
      aria-controls={`${drawer.id}-bin`}
      onClick={onOpen}
    >
      <span className="tukan-grip" aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block font-tukan-mono text-[12px] uppercase tracking-[0.22em] text-white">
          {drawer.label}
        </span>
        <span className="mt-0.5 block truncate font-tukan-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
          {drawer.meta}
        </span>
      </span>
      <span className="font-tukan-mono text-[10px] uppercase tracking-[0.16em] text-[var(--tukan-sun)]">
        {open ? "Offen" : <span className="tukan-pull">Ziehen</span>}
      </span>
    </button>
  );
}

function EisBin({ reduce, onBuy }: { reduce: boolean; onBuy: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--look-x", x.toFixed(3));
      el.style.setProperty("--look-y", y.toFixed(3));
    };
    const onLeave = () => {
      el.style.setProperty("--look-x", "0");
      el.style.setProperty("--look-y", "0");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <div ref={root} className="relative h-full min-h-0 overflow-hidden">
      <div className="tukan-look-bg absolute inset-[-8%]">
        <div className={reduce ? "absolute inset-0" : "tukan-ken absolute inset-0"}>
          <Image
            src={TUKAN_IMG.popsicle}
            alt="Maracuja Protein-Eis"
            fill
            priority
            quality={92}
            sizes="(min-width: 1024px) 72rem, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </div>
      <div className="tukan-sun" />
      <div className="tukan-rays" />
      <div className="tukan-dust" />
      <span className="tukan-sheen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_58%_42%,transparent_12%,rgba(7,20,14,0.28)_48%,rgba(7,20,14,0.78)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(7,20,14,0.92)] via-[rgba(7,20,14,0.28)] to-transparent" />

      <div className="relative z-[3] flex h-full flex-col justify-end gap-5 p-4 sm:p-6 lg:flex-row lg:items-end lg:justify-between lg:p-8">
        <div className="tukan-poster-type max-w-[34rem]">
          <p className="font-tukan-mono text-[11px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
            {TUKAN_COPY.heroKicker}
          </p>
          <h1 className="font-tukan-display mt-2 text-[clamp(2.6rem,8vw,6.4rem)] leading-[0.88] text-white">
            {TUKAN_COPY.heroTitle}
          </h1>
          <p className="tukan-headline mt-3 max-w-[22rem] text-[1.08rem] font-medium text-white">
            {TUKAN_COPY.heroLine}
          </p>
          <p className="mt-3 max-w-[26rem] text-[0.95rem] leading-relaxed text-white/78">
            {TUKAN_COPY.drawerLead}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <TukanButton onClick={onBuy} className="tukan-cta bg-[var(--tukan-sun)] text-[var(--tukan-void)]">
              {TUKAN_COPY.heroCta}
            </TukanButton>
            <p className="font-tukan-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
              {TUKAN_COPY.rating} · {TUKAN_COPY.ratingNote}
            </p>
          </div>
        </div>

        <ul className="flex gap-2 lg:flex-col lg:items-end">
          {TUKAN_COPY.facts.slice(0, 3).map((item) => (
            <li
              key={item.label}
              className="rounded-full border border-white/18 bg-black/35 px-3 py-2 backdrop-blur-md lg:px-4"
            >
              <p className="font-tukan-display text-[1.15rem] leading-none text-[var(--tukan-sun)] lg:text-[1.45rem]">
                {item.value}
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/70">
                {item.label}
                <span className="text-white/40"> · {item.hint}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ZahlenBin({ reduce, onBuy }: { reduce: boolean; onBuy: () => void }) {
  return (
    <div className="relative flex h-full flex-col justify-center px-4 py-5 sm:px-6">
      <p className="font-tukan-mono text-[11px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
        {TUKAN_COPY.factsKicker}
      </p>
      <h2 className="tukan-headline mt-2 max-w-[22rem] text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-white">
        {TUKAN_COPY.factsTitle}
      </h2>
      <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-white/75">{TUKAN_COPY.packLead}</p>
      <ul className="mt-5 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {TUKAN_COPY.facts.map((item) => (
          <li key={item.label} className="rounded-xl border border-white/12 bg-black/20 px-3 py-3">
            <p className="font-tukan-display text-[1.55rem] leading-none text-[var(--tukan-sun)]">
              <CountIn text={item.value} reduce={reduce} />
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/70">{item.label}</p>
            <p className="mt-0.5 text-[11px] text-white/45">{item.hint}</p>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <TukanButton onClick={onBuy} className="tukan-cta bg-[var(--tukan-sun)] text-[var(--tukan-void)]">
          {TUKAN_COPY.sticky}
        </TukanButton>
      </div>
    </div>
  );
}

function CountIn({ text, reduce }: { text: string; reduce: boolean }) {
  const [now, setNow] = useState(reduce ? text : "");

  useEffect(() => {
    const match = text.match(/^(\d+)/);
    if (reduce || !match || text.includes(",") || text.includes("€")) {
      setNow(text);
      return;
    }
    const target = Number(match[1]);
    const rest = text.slice(match[1].length);
    const start = performance.now();
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 700);
      const eased = 1 - (1 - p) ** 3;
      setNow(`${Math.round(target * eased)}${rest}`);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, reduce]);

  return <>{now || text}</>;
}

function BaliBin({ reduce, onBuy }: { reduce: boolean; onBuy: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--look-x", x.toFixed(3));
      el.style.setProperty("--look-y", y.toFixed(3));
    };
    const onLeave = () => {
      el.style.setProperty("--look-x", "0");
      el.style.setProperty("--look-y", "0");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <div ref={root} className="relative h-full min-h-0 overflow-hidden">
      <div className="tukan-look-bg absolute inset-[-8%]">
        <div className={reduce ? "absolute inset-0" : "tukan-ken absolute inset-0"}>
          <Image
            src={TUKAN_IMG.bali}
            alt=""
            fill
            quality={90}
            sizes="(min-width: 1024px) 72rem, 100vw"
            className="object-cover object-[center_48%]"
          />
        </div>
      </div>
      <div className="tukan-sun" />
      <div className="tukan-dust" />
      <span className="tukan-sheen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_42%_38%,transparent_18%,rgba(7,20,14,0.22)_52%,rgba(7,20,14,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(7,20,14,0.92)] via-[rgba(7,20,14,0.35)] to-transparent" />

      <div className="relative z-[3] flex h-full flex-col justify-end p-4 sm:p-6 lg:p-8">
        <div className="tukan-poster-type max-w-[36rem]">
          <p className="font-tukan-mono text-[11px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
            Bali
          </p>
          <h2 className="tukan-headline mt-2 text-[clamp(1.7rem,3.6vw,2.7rem)] font-semibold text-white">
            <span className="block">Es schmeckt nach Bali.</span>
            <span className="mt-1 block">Den Flug kannst du dir sparen.</span>
          </h2>
          <p className="mt-3 max-w-[28rem] text-[0.98rem] leading-relaxed text-white/82">
            {TUKAN_COPY.baliLead}
          </p>
          <p className="mt-2 max-w-[28rem] text-[0.95rem] leading-relaxed text-white/68">
            {TUKAN_COPY.baliBody}
          </p>
          <div className="mt-5">
            <TukanButton onClick={onBuy} className="tukan-cta bg-[var(--tukan-sun)] text-[var(--tukan-void)]">
              {TUKAN_COPY.sticky}
            </TukanButton>
          </div>
        </div>
      </div>
    </div>
  );
}
