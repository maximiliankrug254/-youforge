import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { LANE } from "@/components/demo/lane/lane-config";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lane-display",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lane-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${LANE.brand.short} — Night Kitchen | Living Demo by YouForge`,
  description:
    "Living Demo: zwölf Stühle an der Glut, Streetfood vom Grill, Tisch nur auf Zusage — gebaut von YouForge.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `${LANE.brand.short} — ${LANE.brand.tagline}`,
    description: LANE.youforge.pitch,
    images: [{ url: `${LANE.assets}/hero.jpg`, width: 1800, height: 1200 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070605",
};

export default function LaneDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} lane-demo min-h-dvh bg-[var(--lane-void)] text-[var(--lane-bone)] antialiased`}
      style={
        {
          "--lane-void": "#070605",
          "--lane-ash": "#100e0c",
          "--lane-ember": "#ff6a1a",
          "--lane-gold": "#e8b06d",
          "--lane-bone": "#e8e0d4",
        } as React.CSSProperties
      }
    >
      <style>{`
        html:has(.lane-demo) {
          scroll-behavior: auto !important;
        }
        body:has(.lane-demo) header,
        body:has(.lane-demo) footer,
        body:has(.lane-demo) [data-demo-chat-widget] {
          display: none !important;
        }
        .lane-demo {
          font-family: var(--font-lane-sans), system-ui, sans-serif;
        }
        .lane-demo .font-lane-display,
        .lane-demo h1,
        .lane-demo h2,
        .lane-demo h3 {
          font-family: var(--font-lane-display), "Arial Narrow", sans-serif;
        }
        .lane-shell {
          width: 100%;
        }
        .lane-track {
          width: 100%;
        }
        .lane-panel {
          position: relative;
          width: 100%;
          min-height: 100dvh;
          flex-shrink: 0;
        }
        @media (min-width: 480px) {
          html:has(.lane-demo),
          body:has(.lane-demo) {
            overflow: hidden;
            height: 100%;
          }
          .lane-shell {
            height: 100dvh;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
            overscroll-behavior-x: contain;
          }
          .lane-shell::-webkit-scrollbar {
            display: none;
          }
          .lane-track {
            display: flex;
            height: 100dvh;
            width: max-content;
          }
          .lane-panel {
            width: 100vw;
            height: 100dvh;
            min-height: 100dvh;
          }
          .lane-panel::before,
          .lane-panel::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 6;
            width: min(20vw, 200px);
            pointer-events: none;
          }
          .lane-panel::before {
            left: 0;
            background: linear-gradient(90deg, var(--lane-void) 0%, transparent 100%);
          }
          .lane-panel::after {
            right: 0;
            background: linear-gradient(270deg, var(--lane-void) 0%, transparent 100%);
          }
        }
        .lane-demo ::selection {
          background: color-mix(in srgb, var(--lane-ember) 55%, transparent);
          color: #070605;
        }
        .lane-demo input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.8);
        }
        html.lane-cursor,
        html.lane-cursor * {
          cursor: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          html.lane-cursor, html.lane-cursor * {
            cursor: auto !important;
          }
        }
        @keyframes lane-heat-ember {
          0%, 100% { opacity: 0.72; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.04); }
          70% { opacity: 0.82; transform: scale(1.015); }
        }
        @keyframes lane-heat-shimmer {
          0% { transform: translateX(-12%) skewX(-6deg); opacity: 0.18; }
          50% { transform: translateX(8%) skewX(-4deg); opacity: 0.38; }
          100% { transform: translateX(22%) skewX(-6deg); opacity: 0.16; }
        }
        .lane-heat-ember {
          animation: lane-heat-ember 3.6s ease-in-out infinite;
          transform-origin: 42% 78%;
        }
        .lane-heat-shimmer {
          animation: lane-heat-shimmer 5.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .lane-heat-ember,
          .lane-heat-shimmer {
            animation: none !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
