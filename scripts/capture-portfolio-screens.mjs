import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "path";

const base = process.env.SHOT_BASE ?? "http://localhost:3000";
const outDir = path.resolve("public/portfolio");

const shots = [
  { slug: "salon-website", url: `${base}/demo/aurea`, waitMs: 2000 },
  { slug: "garten-website", url: `${base}/demo/garten`, waitMs: 2000 },
  { slug: "bestattungs-website", url: `${base}/demo/bestattung`, waitMs: 2000 },
  { slug: "fliesen-website", url: `${base}/demo/fliesen`, waitMs: 2000 },
  { slug: "youforge", url: `${base}/`, waitMs: 1200 },
  { slug: "handwerk-website", url: `${base}/showcase/handwerk-premium.html`, waitMs: 800 },
  { slug: "studio-website", url: `${base}/showcase/studio-editorial.html`, waitMs: 800 },
  { slug: "saas-landing", url: `${base}/showcase/saas-launch.html`, waitMs: 800 },
  { slug: "client-hub", url: `${base}/showcase/client-hub.html`, waitMs: 800 },
  {
    slug: "rechnungs-landing",
    url: "https://rechnungdesk.netlify.app",
    waitMs: 1500,
  },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1.25,
});

await page.emulateMedia({ reducedMotion: "reduce" });

for (const shot of shots) {
  const out = path.join(outDir, `${shot.slug}.png`);
  console.log("capturing", shot.url);
  try {
    await page.goto(shot.url, { waitUntil: "networkidle", timeout: 90000 });
    await page.addInitScript(() => {
      try {
        sessionStorage.clear();
        localStorage.clear();
      } catch {}
    });
    // Skip intros / loaders if still visible
    await page.evaluate(() => {
      document
        .querySelectorAll(
          '[aria-hidden="true"].fixed, .fixed.inset-0.z-\\[100\\], [class*="IntroLoader"]'
        )
        .forEach((el) => {
          el.style.display = "none";
        });
      // Common demo intro overlays
      document.querySelectorAll(".fixed.inset-0").forEach((el) => {
        const z = Number(getComputedStyle(el).zIndex || 0);
        if (z >= 90) el.style.display = "none";
      });
    });
    await page.waitForTimeout(shot.waitMs);
    await page.screenshot({
      path: out,
      type: "png",
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log("wrote", out);
  } catch (err) {
    console.error("failed", shot.slug, err.message);
  }
}

await browser.close();
console.log("done");
