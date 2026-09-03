import type { Metadata } from "next";
import { GERMAN_DENTAL } from "@/components/demo/the-german/german-services";
import { GERMAN_SEO } from "@/components/demo/the-german/german-content";
import { GermanServicePageView } from "@/components/demo/the-german/GermanServicePageView";
import { germanMetadata } from "@/components/demo/the-german/german-seo";

export const metadata: Metadata = germanMetadata(
  GERMAN_SEO.dental.title,
  GERMAN_SEO.dental.description,
  "/dental-care-bali",
  GERMAN_DENTAL.heroImage,
);

export default function DentalCarePage() {
  return <GermanServicePageView page={GERMAN_DENTAL} />;
}
