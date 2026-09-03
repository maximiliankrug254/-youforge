import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { germanAsset } from "@/components/demo/the-german/german-config";
import { GERMAN_SEO } from "@/components/demo/the-german/german-content";
import { GermanFooter } from "@/components/demo/the-german/GermanFooter";
import { GermanHeader } from "@/components/demo/the-german/GermanHeader";
import { GermanJsonLd } from "@/components/demo/the-german/GermanJsonLd";
import { GermanProgress } from "@/components/demo/the-german/GermanProgress";
import { GermanWhatsApp } from "@/components/demo/the-german/GermanWhatsApp";
import { GermanAnalytics } from "@/components/demo/the-german/GermanAnalytics";
import { GermanLenis } from "@/components/demo/the-german/GermanLenis";
import { GermanCursor } from "@/components/demo/the-german/GermanCursor";
import { GermanAmbient } from "@/components/demo/the-german/GermanAmbient";
import { GermanMarquee } from "@/components/demo/the-german/GermanMarquee";
import { GermanPageTransition } from "@/components/demo/the-german/GermanPageTransition";
import { GermanIntro } from "@/components/demo/the-german/GermanIntro";
import { germanMetadata } from "@/components/demo/the-german/german-seo";
import "@/components/demo/the-german/german.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-tg-sans-next",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-tg-display-next",
  display: "swap",
});

export const metadata: Metadata = {
  ...germanMetadata(GERMAN_SEO.home.title, GERMAN_SEO.home.description),
  icons: {
    icon: germanAsset("branding/favicon.ico"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1e2025",
};

export default function TheGermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/ung5hcx.css" />
      <GermanJsonLd />
      <GermanAnalytics />
      <div
        className={`tg-demo ${poppins.variable} ${cormorant.variable} ${poppins.className}`}
        lang="en"
        style={
          {
            "--font-tg-sans": poppins.style.fontFamily,
            "--font-tg-display": `"the-seasons", ${cormorant.style.fontFamily}`,
          } as React.CSSProperties
        }
      >
        <style>{`
          html:has(.tg-demo),
          body:has(.tg-demo) {
            background: #1e2025 !important;
            color: #fff;
          }
          body:has(.tg-demo)::-webkit-scrollbar {
            display: none;
          }
          body:has(.tg-demo) header:not(.tg-header),
          body:has(.tg-demo) footer:not(.tg-footer),
          body:has(.tg-demo) [data-demo-chat-widget] {
            display: none !important;
          }
        `}</style>
        <GermanProgress />
        <GermanIntro />
        <GermanCursor />
        <GermanAmbient />
        <div className="tg-grain" aria-hidden />
        <GermanHeader />
        <GermanLenis>
          <div className="tg-wrap">
            <GermanPageTransition>{children}</GermanPageTransition>
            <GermanMarquee />
            <GermanFooter />
          </div>
        </GermanLenis>
        <GermanWhatsApp />
      </div>
    </>
  );
}
