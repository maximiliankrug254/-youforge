import { createYouForgeOgImage, ogImageSize } from "@/lib/youforge-og";

export const alt = "YouForge — Wir schmieden deine Vision.";
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createYouForgeOgImage();
}
