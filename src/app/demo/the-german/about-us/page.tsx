import type { Metadata } from "next";
import { GERMAN_SEO } from "@/components/demo/the-german/german-content";
import { GermanAboutPage } from "@/components/demo/the-german/GermanAboutPage";
import { germanMetadata } from "@/components/demo/the-german/german-seo";

export const metadata: Metadata = germanMetadata(
  GERMAN_SEO.about.title,
  GERMAN_SEO.about.description,
  "/about-us",
  "/demo/the-german/images/about/clinic.jpg",
);

export default function AboutUsPage() {
  return <GermanAboutPage />;
}
