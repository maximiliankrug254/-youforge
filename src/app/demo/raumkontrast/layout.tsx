import type { Metadata, Viewport } from "next";
import { Fjalla_One, Domine } from "next/font/google";
import { RkLenis } from "@/components/demo/rk/RkLenis";
import { RkNav } from "@/components/demo/rk/RkNav";
import { RkIntroLoader } from "@/components/demo/rk/RkIntroLoader";
import { RkScrollProgress } from "@/components/demo/rk/RkScrollProgress";
import { RkStickyCta } from "@/components/demo/rk/RkStickyCta";
import { RkCursor } from "@/components/demo/rk/RkCursor";
import { RkCookieBanner } from "@/components/demo/rk/RkCookieBanner";
import { RK_DEMO } from "@/components/demo/rk/rk-config";

const rkDisplay = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rk-display",
  display: "swap",
});

const rkSerif = Domine({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rk-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${RK_DEMO.brand.full} — Raumausstattung & Markisen`,
    template: `%s | ${RK_DEMO.brand.full}`,
  },
  description:
    "Raumkontrast Baumann, Irschenberg: Raumausstattung von Boden bis Markise — Gardinen, Polster, Sonnenschutz, Insektenschutz. Mobile Ausstellung, Aufmaß vor Ort.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: [{ url: "/demo/raumkontrast/logo-mark.svg", type: "image/svg+xml" }],
    apple: "/demo/raumkontrast/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#822182",
};

export default function RaumkontrastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${rkDisplay.variable} ${rkSerif.variable} rk-demo min-h-dvh bg-[var(--rk-paper)] text-[var(--rk-ink)] antialiased`}
      style={
        {
          "--rk-purple": "#822182",
          "--rk-purple-deep": "#591759",
          "--rk-purple-ink": "#1c071c",
          "--rk-lime": "#9ec410",
          "--rk-lime-deep": "#78950c",
          "--rk-ink": "#212121",
          "--rk-paper": "#f7f2f7",
          "--rk-paper-deep": "#eee6ee",
          "--rk-muted": "#676767",
          "--rk-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
          "--font-rk-display-stack":
            "var(--font-rk-display), 'Fjalla One', sans-serif",
          "--font-rk-serif-stack": "var(--font-rk-serif), Domine, Georgia, serif",
        } as React.CSSProperties
      }
    >
      <style>{`
        body:has(.rk-demo) header,
        body:has(.rk-demo) footer,
        body:has(.rk-demo) [data-demo-chat-widget],
        body:has(.rk-demo) [data-demo-catalog-return] {
          display: none !important;
        }
        html:has(.rk-demo) {
          scroll-padding-top: 6.5rem;
        }
        .rk-demo {
          font-family: var(--font-rk-serif-stack);
        }
        .rk-demo h1,
        .rk-demo h2,
        .rk-demo h3,
        .rk-demo h4,
        .rk-demo .font-rk-display {
          font-family: var(--font-rk-display-stack);
          font-weight: 400;
        }
        /* Fjalla One: Ä/Ö/Ü brauchen Platz über der Versalie */
        .rk-demo h2.font-rk-display,
        .rk-demo h1.font-rk-display:not(.leading-none) {
          overflow: visible;
          padding-top: 0.26em;
          line-height: 1.28;
        }
        .rk-demo h3.font-rk-display {
          overflow: visible;
          padding-top: 0.14em;
          line-height: 1.22;
        }
        .rk-demo .rk-ghost-band {
          overflow: visible;
        }
        .rk-demo .rk-ghost-word {
          display: block;
          width: max-content;
          max-width: 100%;
          margin: 0;
          overflow: visible;
          white-space: nowrap;
          line-height: 1;
          padding-top: 0.1em;
          letter-spacing: -0.03em;
        }
        .rk-demo .rk-display-lines {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.42em;
          line-height: 1.22 !important;
        }
        .rk-demo ::selection {
          background: color-mix(in srgb, var(--rk-lime) 55%, transparent);
          color: var(--rk-ink);
        }
        .rk-demo :focus-visible {
          outline: 2px solid var(--rk-lime);
          outline-offset: 3px;
        }
        @keyframes rk-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .rk-marquee {
          animation: rk-marquee 32s linear infinite;
          will-change: transform;
        }
        @keyframes rk-light-sweep {
          0% { transform: translateX(-80%); opacity: 0; }
          18% { opacity: 1; }
          100% { transform: translateX(280%); opacity: 0; }
        }
        .rk-light-sweep {
          animation: rk-light-sweep 2.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        html.rk-cursor,
        html.rk-cursor * {
          cursor: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .rk-marquee { animation: none; }
          html.rk-cursor,
          html.rk-cursor * {
            cursor: auto !important;
          }
        }
        @media (max-width: 767px) {
          html.rk-cursor,
          html.rk-cursor * {
            cursor: auto !important;
          }
        }
        .rk-demo .rk-shine {
          position: relative;
          overflow: hidden;
        }
        .rk-demo .rk-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.32) 50%, transparent 65%);
          transform: translateX(-120%);
          animation: rk-shine 3.6s ease-in-out 3.1s infinite;
          pointer-events: none;
        }
        @keyframes rk-shine {
          0% { transform: translateX(-120%); }
          22%, 100% { transform: translateX(120%); }
        }
        .rk-grain {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 15;
          opacity: 0.045;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>
      <RkCursor />
      <RkScrollProgress />
      <RkIntroLoader />
      <RkNav />
      <div className="rk-grain" aria-hidden />
      <RkLenis>
        {children}
        <RkStickyCta />
      </RkLenis>
      <RkCookieBanner />
    </div>
  );
}
