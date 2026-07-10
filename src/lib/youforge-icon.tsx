import { ImageResponse } from "next/og";

type IconSize = {
  width: number;
  height: number;
};

const lime = "#c8ff00";
const background = "#050505";

export function createYouForgeIcon(size: IconSize) {
  const compact = size.width <= 32;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle at 30% 20%, #1a1a1a 0%, ${background} 55%, #000 100%)`,
          borderRadius: compact ? 6 : 36,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: compact ? 4 : 18,
            borderRadius: compact ? 4 : 28,
            border: `1px solid rgba(200, 255, 0, 0.18)`,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: compact ? 20 : 72,
            fontWeight: 800,
            letterSpacing: compact ? -1 : -3,
            color: lime,
            textTransform: "uppercase",
            fontFamily: "Arial, Helvetica, sans-serif",
            textShadow: `0 0 ${compact ? 8 : 24}px rgba(200, 255, 0, 0.45)`,
          }}
        >
          {compact ? "Y" : "YF"}
        </div>
      </div>
    ),
    size
  );
}
