import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import { AaLenis } from "@/components/demo/aa/AaLenis";
import { AaNav } from "@/components/demo/aa/AaNav";
import { AaIntroLoader } from "@/components/demo/aa/AaIntroLoader";
import { AaScrollProgress } from "@/components/demo/aa/AaScrollProgress";
import { AaGrain } from "@/components/demo/aa/AaGrain";
import { AaAudio } from "@/components/demo/aa/AaAudio";
import { AA } from "@/components/demo/aa/aa-config";

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
  title: `${AA.brand.short} — Manufaktur für Holz und Ton | Living Demo`,
  description:
    "Cineastische Manufaktur-Website für Möbel und Keramik aus einer Werkstatt. Living Demo von YouForge — Ast & Asche, Kammwald.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `${AA.brand.short} — Holz trifft Feuer`,
    description: AA.brand.tagline,
    images: [{ url: `${AA.assets}/hero.jpg`, width: 1536, height: 1024 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#16110d",
};

export default function AstAscheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} aa-demo min-h-dvh bg-[var(--aa-ink)] text-[var(--aa-tan)] antialiased`}
      style={
        {
          "--aa-ink": "#16110d",
          "--aa-tan": "#c4b194",
          "--aa-tan-hot": "#d4c4a6",
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
        .aa-demo {
          font-family: var(--font-aa-sans), system-ui, sans-serif;
          overflow-x: clip;
          scrollbar-width: thin;
          scrollbar-color: #c4b194 #16110d;
        }
        .aa-demo h1,
        .aa-demo h2,
        .aa-demo h3,
        .aa-demo .font-aa-display {
          font-family: var(--font-aa-display), Georgia, serif;
        }
        .aa-demo ::selection {
          background: color-mix(in srgb, var(--aa-tan) 55%, transparent);
          color: var(--aa-ink);
        }
        .aa-demo :focus-visible {
          outline: 1px solid var(--aa-tan);
          outline-offset: 4px;
        }
        @keyframes aa-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .aa-marquee {
          animation: aa-marquee 38s linear infinite;
          will-change: transform;
        }
        @keyframes aa-glitch {
          0%, 88%, 100% { transform: none; clip-path: inset(0); }
          90% { transform: translate(3px, -1px); clip-path: inset(12% 0 48% 0); }
          93% { transform: translate(-5px, 2px); clip-path: inset(52% 0 8% 0); }
          96% { transform: translate(2px, 1px); clip-path: inset(22% 0 28% 0); }
        }
        .aa-glitch {
          animation: aa-glitch 4.8s steps(2, end) infinite;
        }
        @keyframes aa-eq {
          0%, 100% { transform: scaleY(0.45); }
          50% { transform: scaleY(1); }
        }
        @keyframes aa-intro-fire {
          0%, 100% { opacity: 0.28; transform: scale(1); }
          40% { opacity: 0.55; transform: scale(1.08); }
          70% { opacity: 0.38; transform: scale(1.03); }
        }
        .aa-intro-fire {
          animation: aa-intro-fire 1.8s ease-in-out infinite;
        }
        @keyframes aa-intro-ember {
          0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
          12% { opacity: 0.95; }
          100% { transform: translate3d(var(--ex, 8px), -120px, 0) scale(0.15); opacity: 0; }
        }
        .aa-intro-ember {
          animation: aa-intro-ember 2.1s ease-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .aa-intro-fire, .aa-intro-ember { animation: none; }
        }
        .aa-circle-arc {
          border: 1px solid color-mix(in srgb, var(--aa-ink) 35%, transparent);
          border-radius: 999px;
        }
        @media (prefers-reduced-motion: reduce) {
          .aa-marquee, .aa-glitch { animation: none; }
        }
      `}</style>
      <AaScrollProgress />
      <AaGrain />
      <AaIntroLoader />
      <AaNav />
      <AaAudio />
      <AaLenis>{children}</AaLenis>
    </div>
  );
}
