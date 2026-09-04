import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { VAULT } from "@/components/demo/vault/vault-config";

const sans = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-vault",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${VAULT.brand.short} — Single Malt · Speyside | Living Demo by YouForge`,
  description:
    "Living Demo: Premium-Whisky mit drei Reifestufen — 8, 12 und 21 Jahre. Dunkles HUD, Fass-Karussell, Zuteilung. Fiktive Marke, gebaut von YouForge.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `${VAULT.brand.short} — ${VAULT.brand.tagline}`,
    description:
      "Drei Reifestufen im Holz: 8, 12 und 21 Jahre. Living Demo von YouForge.",
    images: [{ url: "/demo/vault/warehouse.jpg", width: 1536, height: 1024 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0c0c0b",
};

export default function VaultDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${sans.variable} vault-demo min-h-dvh bg-[var(--vault-void)] text-[var(--vault-bone)] antialiased`}
      style={
        {
          "--vault-void": "#0c0c0b",
          "--vault-bone": "#e8e4dc",
          "--vault-amber": "#c4923a",
          "--vault-olive": "#3d4a3f",
        } as React.CSSProperties
      }
    >
      <style>{`
        html:has(.vault-demo) {
          scroll-behavior: auto !important;
        }
        body:has(.vault-demo) header.z-50,
        body:has(.vault-demo) header:not(.vault-nav),
        body:has(.vault-demo) footer,
        body:has(.vault-demo) [data-demo-chat-widget] {
          display: none !important;
        }
        .vault-demo {
          font-family: var(--font-vault), system-ui, sans-serif;
          overflow-x: clip;
          scrollbar-width: thin;
          scrollbar-color: #c4923a #0c0c0b;
        }
        .vault-demo .font-vault,
        .vault-demo h1,
        .vault-demo h2,
        .vault-demo h3 {
          font-family: var(--font-vault), system-ui, sans-serif;
        }
        .vault-demo ::selection {
          background: color-mix(in srgb, var(--vault-amber) 55%, transparent);
          color: var(--vault-void);
        }
        .vault-demo :focus-visible {
          outline: 1px solid var(--vault-amber);
          outline-offset: 3px;
        }
        .vault-box {
          border: 1px solid color-mix(in srgb, var(--vault-bone) 28%, transparent);
        }
        .vault-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: color-mix(in srgb, var(--vault-bone) 45%, transparent);
          border-style: solid;
          z-index: 2;
        }
        .vault-corner-tl { top: 0; left: 0; border-width: 1px 0 0 1px; }
        .vault-corner-tr { top: 0; right: 0; border-width: 1px 1px 0 0; }
        .vault-corner-bl { bottom: 0; left: 0; border-width: 0 0 1px 1px; }
        .vault-corner-br { bottom: 0; right: 0; border-width: 0 1px 1px 0; }
        .vault-demo input,
        .vault-demo textarea,
        .vault-demo select {
          color: var(--vault-bone);
          background: var(--vault-void);
        }
        .vault-demo select option {
          background: #0c0c0b;
        }
        @keyframes vault-ken {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
        .vault-ken img {
          animation: vault-ken 28s ease-in-out alternate infinite;
          will-change: transform;
        }
        @keyframes vault-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .vault-marquee {
          display: inline-block;
          animation: vault-marquee 48s linear infinite;
        }
        @keyframes vault-eq {
          0%, 100% { transform: scaleY(0.45); }
          50% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vault-ken img, .vault-marquee { animation: none; }
        }
        html.vault-cursor,
        html.vault-cursor * {
          cursor: none !important;
        }
        @media (prefers-reduced-motion: reduce) {
          html.vault-cursor, html.vault-cursor * {
            cursor: auto !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
