import { createWebsiteCheckOgImage, ogImageSize, websiteCheckOgAlt } from "@/lib/youforge-og";

export const alt = websiteCheckOgAlt;
export const size = ogImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createWebsiteCheckOgImage();
}
