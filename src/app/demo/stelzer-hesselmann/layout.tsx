import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import { AaLenis } from "@/components/demo/stelzer/AaLenis";
import { AaNav } from "@/components/demo/stelzer/AaNav";
import { AaScrollProgress } from "@/components/demo/stelzer/AaScrollProgress";
import { AaGrain } from "@/components/demo/stelzer/AaGrain";
import { AaCursor } from "@/components/demo/stelzer/AaCursor";
import { AA } from "@/components/demo/stelzer/aa-config";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aa-display",
  display: "swap",
});

const sans = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-aa-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${AA.brand.full} | Living Demo`,
  description:
    "Dachdecker in Oberhausen-Holten. Flachdach, Ziegel, Schiefer, Klempner, Photovoltaik und VELUX. Living Demo von YouForge nach der Hülle von Ast & Asche.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d8c7b0",
};

export default function StelzerHesselmannLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} aa-demo min-h-dvh bg-[var(--aa-tan)] text-[var(--aa-ink)] antialiased`}
      style={
        {
          "--aa-ink": "#3a2c22",
          "--aa-tan": "#d8c7b0",
          "--aa-tan-hot": "#e8d9c4",
          "--aa-cream": "#f6f0e6",
          "--aa-roof": "#8c3a32",
          "--aa-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
        } as React.CSSProperties
      }
    >
      <style>{`
        html:has(.aa-demo) {
          scroll-behavior: auto !important;
        }
        body:has(.aa-demo) header,
        body:has(.aa-demo) footer,
        body:has(.aa-demo) [data-demo-chat-widget] {
          display: none !important;
        }
        body:has(.aa-demo) .aa-demo header,
        body:has(.aa-demo) .aa-demo footer {
          display: block !important;
        }
        .aa-demo {
          font-family: var(--font-aa-sans), system-ui, sans-serif;
          overflow-x: clip;
          scrollbar-width: thin;
          scrollbar-color: #8a6a45 #d8c7b0;
        }
        .aa-demo h1,
        .aa-demo h2,
        .aa-demo h3,
        .aa-demo .font-aa-display {
          font-family: var(--font-aa-display), Georgia, serif;
        }
        .aa-demo ::selection {
          background: color-mix(in srgb, var(--aa-roof) 35%, transparent);
          color: var(--aa-ink);
        }
        .aa-demo :focus-visible {
          outline: 1px solid var(--aa-roof);
          outline-offset: 4px;
        }
        @keyframes aa-breathe {
          0%, 100% { transform: scale(1.03); }
          50% { transform: scale(1.08); }
        }
        .aa-breathe {
          animation: aa-breathe 16s ease-in-out infinite;
        }
        @keyframes aa-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .aa-marquee {
          animation: aa-marquee 38s linear infinite;
          will-change: transform;
        }
        html.aa-cursor,
        html.aa-cursor * {
          cursor: none !important;
        }
        @media (pointer: coarse), (prefers-reduced-motion: reduce) {
          html.aa-cursor,
          html.aa-cursor * {
            cursor: auto !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .aa-marquee, .aa-glitch, .aa-breathe { animation: none; }
        }
      `}</style>
      <AaCursor />
      <AaScrollProgress />
      <AaGrain />
      <AaNav />
      <AaLenis>{children}</AaLenis>
    </div>
  );
}
