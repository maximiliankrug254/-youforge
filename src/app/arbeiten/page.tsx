import type { Metadata } from "next";
import { WorkDiveShowcase } from "@/components/portfolio/WorkDiveShowcase";
import { portfolioProjects } from "@/lib/constants";
import { getPublicPortfolioProjects } from "@/lib/work-showcase";

export const metadata: Metadata = {
  title: "Arbeiten",
  description:
    "Portfolio und Referenzprojekte von YouForge — Websites, Web-Apps und KI-Lösungen.",
};

export default function ArbeitenPage() {
  const projects = getPublicPortfolioProjects(portfolioProjects);
  return <WorkDiveShowcase projects={projects} />;
}
