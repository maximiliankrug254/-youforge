import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { RsLenis } from "@/components/demo/rs/RsLenis";
import { RsIntroLoader } from "@/components/demo/rs/RsIntroLoader";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

const rsSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-rs-sans",
  weight: ["400", "500", "600", "700"],
});

const rsDisplay = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-rs-display",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${RS_CONTACT.brand} — ${RS_CONTACT.profession} | Living Demo`,
  description:
    "White-Label Living Demo: Entrümpelung, Haushaltsauflösung und Umzug — schnell, diskret, zum fairen Festpreis. So kann Ihr Betrieb online wirken.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1c1917",
};

export default function RsDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${rsSans.variable} ${rsDisplay.variable} rs-demo min-h-dvh bg-[var(--rs-cream)] text-[var(--rs-ink)] antialiased`}
      style={
        {
          "--rs-ink": "#1c1917",
          "--rs-ink-soft": "#292524",
          "--rs-cream": "#f5f1eb",
          "--rs-cream-deep": "#ebe4d8",
          "--rs-sage": "#5c6b5a",
          "--rs-ochre": "#c4a35a",
          "--rs-ochre-hover": "#b8944a",
          "--rs-muted": "#78716c",
        } as React.CSSProperties
      }
    >
      <style>{`
        body:has(.rs-demo) header,
        body:has(.rs-demo) footer,
        body:has(.rs-demo) [data-demo-chat-widget] {
          display: none !important;
        }
        .rs-demo {
          font-family: var(--font-rs-sans), system-ui, sans-serif;
          overflow-x: clip;
        }
        .rs-demo h1,
        .rs-demo h2,
        .rs-demo h3,
        .rs-demo .font-rs-display {
          font-family: var(--font-rs-display), Georgia, serif;
        }
        .rs-demo ::selection {
          background: color-mix(in srgb, var(--rs-ochre) 45%, transparent);
          color: #1c1917;
        }
      `}</style>
      <RsIntroLoader />
      <RsLenis>{children}</RsLenis>
    </div>
  );
}
