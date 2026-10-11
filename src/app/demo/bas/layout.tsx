import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import { AaLenis } from "@/components/demo/bas/AaLenis";
import { AaNav } from "@/components/demo/bas/AaNav";
import { AaScrollProgress } from "@/components/demo/bas/AaScrollProgress";
import { AaGrain } from "@/components/demo/bas/AaGrain";
import { AaCursor } from "@/components/demo/bas/AaCursor";
import { AA, AA_IMG } from "@/components/demo/bas/aa-config";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aa-display",
  display: "swap",
});

const sans = Syne({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-aa-sans",
  display: "swap",
});

const description =
  "Weltweiter Transport exklusiver Automobile aus Eschborn bei Frankfurt. Spezialtransporte, Messen & Events, Show-Truck, Motorsport und Fahrzeugaufbereitung. Living Demo von YouForge.";
const shareTitle = `${AA.brand.short} — ${AA.brand.tagline}`;
const shareImage = { url: AA_IMG.flotte, width: 1140, height: 690, alt: "Die BAS-Flotte" };

export const metadata: Metadata = {
  title: `${AA.brand.full} | Living Demo`,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: AA.home,
    title: shareTitle,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d6d4ce",
};

export default function BasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} aa-demo min-h-dvh bg-[var(--aa-tan)] text-[var(--aa-ink)] antialiased`}
      style={
        {
          "--aa-ink": "#1b2124",
          "--aa-tan": "#d6d4ce",
          "--aa-tan-hot": "#e6e4df",
          "--aa-stone": "#c4c2bb",
          "--aa-cream": "#f4f3ef",
          "--aa-roof": "#017d85",
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
          scrollbar-color: #017d85 #d6d4ce;
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
