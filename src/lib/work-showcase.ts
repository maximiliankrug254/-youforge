import type { PortfolioProject } from "@/lib/constants";

/** Eigene Panel-Bilder je Projekt — nie Assets anderer Cases. */
const EXTRA_PANELS: Record<string, string[]> = {
  lane: [
    "/demo/lane/hero.jpg",
    "/demo/lane/skewer.jpg",
    "/demo/lane/bar.jpg",
    "/demo/lane/venue.jpg",
  ],
  youforge: ["/portfolio/youforge.png"],
  "salon-website": ["/portfolio/salon-website.png"],
  "garten-website": ["/portfolio/garten-website.png"],
  "bestattungs-website": ["/portfolio/bestattungs-website.png"],
  "fliesen-website": ["/portfolio/fliesen-website.png"],
  "the-german": [
    "/demo/the-german/images/home/hero.jpg",
    "/demo/the-german/images/home/clinic.jpg",
    "/demo/the-german/images/about/clinic.jpg",
    "/demo/the-german/images/home/cover-03.jpg",
  ],
  "handwerk-website": ["/portfolio/handwerk-website.png"],
  "studio-website": ["/portfolio/studio-website.png"],
  "saas-landing": ["/portfolio/saas-landing.png"],
  "client-hub": ["/portfolio/client-hub.png"],
  "kunden-portal": ["/portfolio/kunden-portal.png"],
  "rechnungs-app": [
    "/portfolio/rechnungs-app-preview.png",
    "/portfolio/rechnungs-app.png",
  ],
  "rechnungs-landing": ["/portfolio/rechnungs-landing.png"],
  "coaching-website": ["/portfolio/coaching-website.png"],
  "ki-bildproduktion": ["/portfolio/ki-bildproduktion.png"],
  "ki-studio": ["/portfolio/ki-studio.png"],
};

/** Diese Demos immer früh in der Showcase zeigen. */
const PRIORITY_SLUGS = [
  "salon-website",
  "garten-website",
  "bestattungs-website",
  "fliesen-website",
] as const;

export type PanelLayout = {
  src: string;
  top: string;
  left: string;
  width: string;
  rotate: number;
  z: number;
  depth: number;
};

const LAYOUTS: Omit<PanelLayout, "src">[] = [
  { top: "8%", left: "4%", width: "22%", rotate: -9, z: 1, depth: 0.35 },
  { top: "12%", left: "68%", width: "26%", rotate: 8, z: 2, depth: 0.55 },
  { top: "58%", left: "6%", width: "24%", rotate: 6, z: 3, depth: 0.45 },
  { top: "55%", left: "70%", width: "22%", rotate: -7, z: 2, depth: 0.4 },
  { top: "38%", left: "78%", width: "16%", rotate: 11, z: 1, depth: 0.25 },
];

function uniquePreserveOrder(paths: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const src of paths) {
    if (!src || seen.has(src)) continue;
    seen.add(src);
    out.push(src);
  }
  return out;
}

export function getLiveShowcaseProjects(
  projects: PortfolioProject[],
  max = 14
): PortfolioProject[] {
  const live = projects.filter((p) => p.status === "live");
  const featured = live.filter((p) => p.featured);
  const priority = PRIORITY_SLUGS.map((slug) =>
    live.find((p) => p.slug === slug && !p.featured)
  ).filter((p): p is PortfolioProject => Boolean(p));
  const prioritySet = new Set(priority.map((p) => p.slug));
  const rest = live.filter(
    (p) => !p.featured && !prioritySet.has(p.slug)
  );
  return [...featured, ...priority, ...rest].slice(0, max);
}

function panelsFromSources(sources: string[]): PanelLayout[] {
  const unique = uniquePreserveOrder(sources);
  if (unique.length === 0) return [];

  const count = Math.min(unique.length, LAYOUTS.length);
  return LAYOUTS.slice(0, count).map((layout, i) => ({
    ...layout,
    src: unique[i],
  }));
}

export function getProjectPanels(project: PortfolioProject): PanelLayout[] {
  const extras = EXTRA_PANELS[project.slug] ?? [];
  const primary = project.image ? [project.image] : [];
  return panelsFromSources([...primary, ...extras]);
}

export function getIntroPanels(projects: PortfolioProject[]): PanelLayout[] {
  // Ein einziges Bild pro Projekt — keine Wiederholung im Intro
  const images = uniquePreserveOrder(
    projects.map((p) => p.image).filter((src): src is string => Boolean(src))
  );
  return panelsFromSources(images);
}
