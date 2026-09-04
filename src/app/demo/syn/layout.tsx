import type { Metadata, Viewport } from "next";
import { Oswald, IBM_Plex_Mono, Inter } from "next/font/google";
import { SYN } from "@/components/demo/syn/syn-config";
import { SynShell } from "@/components/demo/syn/SynShell";

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syn-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-syn-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-syn-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SYN.brand.short} — ${SYN.brand.tagline} | Living Demo`,
  description: "Where glam meets grunge. Living Demo — Rekonstruktion der Design-Sprache.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function SynLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${display.variable} ${mono.variable} ${sans.variable} syn-demo min-h-dvh bg-[#fff9f7] text-black antialiased`}
    >
      <style>{`
        html:has(.syn-demo) { scroll-behavior: auto !important; }
        html.syn-booting, html.syn-booting body { overflow: hidden !important; }
        body:has(.syn-demo) header:not(.syn-chrome),
        body:has(.syn-demo) footer:not(.syn-chrome),
        body:has(.syn-demo) [data-demo-chat-widget] { display: none !important; }
        .syn-demo {
          font-family: var(--font-syn-sans), system-ui, sans-serif;
          overflow-x: clip;
        }
        .syn-demo ::selection { background: #ed3833; color: #fff; }
        header.syn-chrome { mix-blend-mode: difference; color: #fff; }
        html.syn-cursor, html.syn-cursor * { cursor: none !important; }
        .syn-cur {
          position: fixed; top: 0; left: 0; z-index: 190; pointer-events: none;
          display: none; will-change: transform;
        }
        @media (pointer: fine) { .syn-cur { display: block; } }
        .syn-cur__dot {
          display: block; width: 10px; height: 10px; border-radius: 50%;
          background: #ed3833; box-shadow: 0 0 0 1px #000;
          transition: transform .25s cubic-bezier(.75,0,.25,1), background .25s;
        }
        .syn-cur__label {
          position: absolute; left: 18px; top: -7px; white-space: nowrap;
          font-family: var(--font-syn-mono), monospace; font-size: 11px;
          color: #ed3833; opacity: 0; transition: opacity .25s;
        }
        .syn-cur[data-mode="drag"] .syn-cur__label { opacity: 1; }
        .syn-cur[data-mode="drag"] .syn-cur__dot { transform: scale(2.35); background: #fff; }
        .syn-split { position: relative; display: inline-grid; overflow: hidden; vertical-align: bottom; }
        .syn-split span { grid-area: 1/1; transition: transform .4s cubic-bezier(.75,0,.25,1); }
        .syn-split span:last-child { transform: translateY(110%); }
        button:hover .syn-split span:first-child,
        a:hover .syn-split span:first-child { transform: translateY(-110%); }
        button:hover .syn-split span:last-child,
        a:hover .syn-split span:last-child { transform: translateY(0); }
        .syn-drawer {
          position: fixed; z-index: 95; background: #000; color: #fff;
          padding: 5.2rem 2rem 2rem; overflow: auto;
        }
        .syn-drawer--left { top: 0; bottom: 0; left: 0; width: min(540px, 94vw); }
        .syn-drawer--right { top: 0; bottom: 0; right: 0; width: min(480px, 94vw); }
        .syn-drawer--full { inset: 0; }
        .syn-rip {
          position: absolute; left: 0; right: 0; bottom: -2px; height: 28px;
          background: url('/demo/syn/tear.png') center/cover no-repeat;
          mix-blend-mode: multiply; pointer-events: none; opacity: .9;
        }
        .syn-section-rip {
          height: 42px; margin-top: -1px;
          background: url('/demo/syn/tear.png') center/cover no-repeat;
          filter: invert(1) contrast(1.4);
          mix-blend-mode: multiply; opacity: .55;
        }
        .syn-section-rip--flip { transform: scaleY(-1); margin-top: 0; margin-bottom: -1px; }
        .syn-lips-mask {
          clip-path: url(#syn-lips);
          animation: syn-pulse 3.4s cubic-bezier(.75,0,.25,1) infinite;
          filter: contrast(1.2) saturate(1.15);
        }
        @keyframes syn-pulse {
          0%,100% { transform: scale(1) rotate(-2deg); }
          50% { transform: scale(1.07) rotate(2deg); }
        }
        .syn-bracket strong { color: #ed3833; }
        .syn-bracket--link { transition: color .4s cubic-bezier(.75,0,.25,1); }
        .syn-bracket--link:hover { color: #ed3833; }
        .syn-marquee {
          display: flex; overflow: hidden; gap: 0;
          font-family: var(--font-syn-mono), monospace;
          font-size: 12px; text-transform: uppercase; letter-spacing: .16em;
          color: rgba(0,0,0,.42); white-space: nowrap;
        }
        .syn-marquee p { flex: none; padding-right: 2.5rem; animation: syn-marquee 22s linear infinite; }
        @keyframes syn-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          html.syn-cursor, html.syn-cursor * { cursor: auto !important; }
          .syn-cur, .syn-lips-mask { animation: none; display: none; }
          .syn-marquee p { animation: none; }
        }
      `}</style>
      <SynShell>{children}</SynShell>
    </div>
  );
}
