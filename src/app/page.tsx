import { Hero } from "@/components/sections/Hero";
import { SplitStatements } from "@/components/sections/SplitStatements";
import { ChaosOrder } from "@/components/sections/ChaosOrder";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WorkTeaser } from "@/components/sections/WorkTeaser";
import { CatalogTeaser } from "@/components/sections/CatalogTeaser";
import { Founder } from "@/components/sections/Founder";
import { CTA } from "@/components/sections/CTA";
import { ChatDemo } from "@/components/sections/ChatDemo";
import { WebsiteCheckTeaser } from "@/components/sections/WebsiteCheckTeaser";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "YouForge — Digitalagentur für Websites, Web-Apps & KI" },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <SplitStatements />
      <ChaosOrder />
      <WebsiteCheckTeaser />
      <ServicesShowcase />
      <ProcessTimeline />
      <WorkTeaser />
      <CatalogTeaser />
      <ChatDemo />
      <Founder />
      <CTA />
    </>
  );
}
