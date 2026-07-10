import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

const lime = "#c8ff00";
const background = "#050505";

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

export function createYouForgeOgImage() {
  const title = siteConfig.name.toUpperCase();
  const tagline = siteConfig.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle at 50% 40%, #1a1a1a 0%, ${background} 50%, #000 100%)`,
          position: "relative",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 48,
            borderRadius: 24,
            border: "1px solid rgba(200, 255, 0, 0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: 520,
            height: 520,
            marginLeft: -260,
            marginTop: -180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,255,0,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: lime,
              textTransform: "uppercase",
              textShadow: "0 0 48px rgba(200, 255, 0, 0.4)",
              lineHeight: 1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.72)",
              letterSpacing: "0.02em",
              lineHeight: 1.35,
              maxWidth: 720,
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(200, 255, 0, 0.55)",
            }}
          >
            Digitalagentur · DACH
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
