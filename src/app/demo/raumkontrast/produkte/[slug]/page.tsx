import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RkProduktPage } from "@/components/demo/rk/RkProduktPage";
import { RK_PRODUCT_PAGES } from "@/components/demo/rk/rk-content";

const SLUGS = ["gardinen", "polsterei", "bodenbelaege", "insektenschutz"] as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = RK_PRODUCT_PAGES[slug];
  if (!page) return { title: "Produkt" };
  return {
    title: page.title,
    description: page.lead,
  };
}

export default async function ProduktRoute({ params }: Props) {
  const { slug } = await params;
  if (!RK_PRODUCT_PAGES[slug]) notFound();
  return <RkProduktPage slug={slug} />;
}
