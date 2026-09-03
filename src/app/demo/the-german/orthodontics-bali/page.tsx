import type { Metadata } from "next";
import { GERMAN_ORTHO } from "@/components/demo/the-german/german-services";
import { GERMAN_SEO } from "@/components/demo/the-german/german-content";
import { GermanServicePageView } from "@/components/demo/the-german/GermanServicePageView";
import { germanMetadata } from "@/components/demo/the-german/german-seo";

export const metadata: Metadata = germanMetadata(
  GERMAN_SEO.ortho.title,
  GERMAN_SEO.ortho.description,
  "/orthodontics-bali",
  GERMAN_ORTHO.heroImage,
);

export default function OrthodonticsPage() {
  return <GermanServicePageView page={GERMAN_ORTHO} />;
}
