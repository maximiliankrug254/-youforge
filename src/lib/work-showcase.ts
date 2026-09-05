import type { PortfolioProject } from "@/lib/constants";

/** Nie auf YouForge-Marketingflächen (Home, Arbeiten, Katalog). Demo unter /demo bleibt. */
export const YOUFORGE_HIDDEN_SLUGS = new Set(["the-german"]);

export function isYouForgePublicProject(project: PortfolioProject): boolean {
  return !YOUFORGE_HIDDEN_SLUGS.has(project.slug);
}

export function getPublicPortfolioProjects(
  projects: PortfolioProject[]
): PortfolioProject[] {
  return projects.filter(isYouForgePublicProject);
}

/** Eigene Panel-Bilder je Projekt — nie Assets anderer Cases. */
const EXTRA_PANELS: Record<string, string[]> = {
  vault: [
    "/demo/vault/warehouse.jpg",
    "/demo/vault/bottle-12.jpg",
    "/demo/vault/stills.jpg",
    "/demo/vault/casks-row.jpg",
  ],
  lane: [
    "/demo/lane/hero.jpg",
    "/demo/lane/skewer.jpg",
    "/demo/lane/bar.jpg",
    "/demo/lane/venue.jpg",
  ],
  tukan: [
    "/demo/tukan/jungle-dusk.jpg",
    "/demo/tukan/popsicle-hero.jpg",
    "/demo/tukan/bali-pool.jpg",
    "/demo/tukan/passion-cut.jpg",
  ],
  youforge: ["/portfolio/youforge.png"],
  "salon-website": ["/portfolio/salon-website.png"],
  wolff: [
    "/demo/wolff/00-hero.jpg",
    "/demo/wolff/02-shop.jpg",
    "/demo/wolff/03-shave.jpg",
    "/demo/wolff/08-team.jpg",
  ],
  "garten-website": ["/portfolio/garten-website.png"],
  "bestattungs-website": ["/portfolio/bestattungs-website.png"],
  "fliesen-website": ["/portfolio/fliesen-website.png"],
  "handwerk-website": ["/portfolio/handwerk-website.png"],
  "studio-website": ["/portfolio/studio-website.png"],
  "saas-landing": ["/portfolio/saas-landing.png"],
  "client-hub": ["/portfolio/client-hub.png"],
  "kunden-portal": ["/portfolio/kunden-portal.png"],
  "rechnungs-app": [
    "/portfolio/rechnungs-app-website.png",
    "/portfolio/rechnungs-app-preview.png",
    "/portfolio/rechnungs-app.png",
  ],
  "rechnungs-landing": ["/portfolio/rechnungs-landing.png"],
  "coaching-website": ["/portfolio/coaching-website.png"],
  "ki-bildproduktion": ["/portfolio/ki-bildproduktion.png"],
  "ki-studio": ["/portfolio/ki-studio.png"],
};

/** Arbeiten-Showcase: gemischt Website / Produkt / App — Living-Demos leben im Katalog. */
const SHOWCASE_MIX_ORDER = [
  "lane",
  "rechnungs-app",
  "garten-website",
  "kunden-portal",
  "fliesen-website",
  "coaching-website",
  "client-hub",
  "ki-studio",
  "rechnungs-landing",
  "youforge",
  "ki-bildproduktion",
] as const;

/** Homepage-Teaser: bewusste Kachel statt erstes featured. */
export const HOMEPAGE_FEATURED_SLUG = "lane";

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
  max = 11
): PortfolioProject[] {
  const live = projects.filter(
    (p) => p.status === "live" && isYouForgePublicProject(p)
  );
  const bySlug = new Map(live.map((p) => [p.slug, p]));
  const ordered: PortfolioProject[] = [];

  for (const slug of SHOWCASE_MIX_ORDER) {
    const project = bySlug.get(slug);
    if (!project) continue;
    ordered.push(project);
    if (ordered.length >= max) return ordered;
  }

  return ordered;
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
