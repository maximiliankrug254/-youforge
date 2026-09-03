import type { Metadata } from "next";
import { GERMAN_DERMA } from "@/components/demo/the-german/german-services";
import { GERMAN_SEO } from "@/components/demo/the-german/german-content";
import { GermanServicePageView } from "@/components/demo/the-german/GermanServicePageView";
import { germanMetadata } from "@/components/demo/the-german/german-seo";

export const metadata: Metadata = germanMetadata(
  GERMAN_SEO.derma.title,
  GERMAN_SEO.derma.description,
  "/skin-aesthetics-dermatology-bali",
  GERMAN_DERMA.heroImage,
);

export default function DermatologyPage() {
  return <GermanServicePageView page={GERMAN_DERMA} />;
}
