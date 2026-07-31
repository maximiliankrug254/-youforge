import type { Metadata, Viewport } from "next";
import { AtlLenis } from "@/components/demo/atl/AtlLenis";
import { AtlIntroLoader } from "@/components/demo/atl/AtlIntroLoader";

export const metadata: Metadata = {
  title: "Automobil-Technik Lauber — Grünberg | Living Demo",
  description:
    "Karosserie, KFZ und Tuning in Grünberg. Pole Position in Leistung und Qualität. Automobil-Technik Lauber.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
};

export default function AtlDemoLayout({
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
          body:has(.atl-demo) header,
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
        `}</style>
        <AtlIntroLoader />
        <AtlLenis>{children}</AtlLenis>
      </div>
    </>
  );
}
