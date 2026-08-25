import type { Metadata } from "next";
import { WorkDiveShowcase } from "@/components/portfolio/WorkDiveShowcase";
import { portfolioProjects } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arbeiten",
  description:
    "Portfolio und Referenzprojekte von YouForge — Websites, Web-Apps und KI-Lösungen.",
};

export default function ArbeitenPage() {
  return <WorkDiveShowcase projects={portfolioProjects} />;
}
