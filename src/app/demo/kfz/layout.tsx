import type { Metadata, Viewport } from "next";
import { AtlLenis } from "@/components/demo/atl/AtlLenis";
import { AtlIntroLoader } from "@/components/demo/atl/AtlIntroLoader";

export const metadata: Metadata = {
  title: "Spurwerk — Karosserie, KFZ & Tuning | Living Demo",
  description:
    "Living Demo: so kann eine Autowerkstatt online wirken. Karosserie, Service und Tuning aus einer Hand — fiktive Marke, gebaut von YouForge.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
};

export default function KfzDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div
        className="atl-demo min-h-dvh bg-[var(--atl-void)] text-white antialiased"
        style={
          {
            "--atl-void": "#080808",
            "--atl-panel": "#111111",
            "--atl-steel": "#0e0e0e",
            "--atl-red": "#c8102e",
            "--atl-red-hot": "#e31b3c",
            "--atl-silver": "#b8bcc4",
            "--atl-muted": "#8a8f98",
            "--atl-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-atl-display": "'Clash Display', 'Satoshi', sans-serif",
            "--font-atl-sans": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.atl-demo) header:not([data-atl-nav]),
          body:has(.atl-demo) footer,
          body:has(.atl-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .atl-demo {
            font-family: var(--font-atl-sans);
            overflow-x: clip;
          }
          .atl-demo h1,
          .atl-demo h2,
          .atl-demo h3,
          .atl-demo .font-atl-display {
            font-family: var(--font-atl-display);
          }
          .atl-demo ::selection {
            background: color-mix(in srgb, var(--atl-red) 45%, transparent);
            color: #fff;
          }
        `}</style>
        <AtlIntroLoader />
        <AtlLenis>{children}</AtlLenis>
      </div>
    </>
  );
}
