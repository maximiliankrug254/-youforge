import type { Metadata } from "next";
import { GERMAN, GERMAN_BASE } from "@/components/demo/the-german/german-config";
import { getSiteUrl } from "@/lib/site-url";

export function germanMetadata(
  title: string,
  description: string,
  path = "",
  image = "/demo/the-german/images/home/clinic.jpg",
): Metadata {
  const url = `${getSiteUrl()}${GERMAN_BASE}${path}`;
  const ogImage = image.startsWith("http") ? image : `${getSiteUrl()}${image}`;

  return {
    title,
    description,
    keywords: [
      "Dentist in Bali",
      "Dental Clinic Bali",
      "German Dentist Bali",
      "Orthodontics Bali",
      "Clear Aligners Bali",
      "Veneers Bali",
      "Dental Implants Bali",
      "Dermatology Bali",
      "Skin Aesthetics Bali",
      "Pico Laser Bali",
      "CO2 Laser Bali",
    ],
    authors: [{ name: GERMAN.brand.full }],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: GERMAN.brand.full,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: GERMAN.brand.full }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: false, follow: false },
  };
}
