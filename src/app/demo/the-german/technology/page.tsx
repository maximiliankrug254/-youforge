import type { Metadata } from "next";
import { GERMAN_TECH } from "@/components/demo/the-german/german-services";
import { GERMAN_SEO } from "@/components/demo/the-german/german-content";
import { GermanServicePageView } from "@/components/demo/the-german/GermanServicePageView";
import { germanMetadata } from "@/components/demo/the-german/german-seo";

export const metadata: Metadata = germanMetadata(
  GERMAN_SEO.tech.title,
  GERMAN_SEO.tech.description,
  "/technology",
  GERMAN_TECH.heroImage,
);

export default function TechnologyPage() {
  return <GermanServicePageView page={GERMAN_TECH} />;
}
