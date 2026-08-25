import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "path";

const base = process.env.SHOT_BASE ?? "http://localhost:3000";
const outDir = path.resolve("public/portfolio");
const only = process.env.SHOT_ONLY
  ? new Set(process.env.SHOT_ONLY.split(",").map((s) => s.trim()).filter(Boolean))
  : null;

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

async function dismissChrome(page) {
  const cookie = page.getByRole("button", { name: /verstanden/i });
  if (await cookie.count()) {
    await cookie.first().click({ timeout: 1500 }).catch(() => {});
  }
}

function hideOverlays(page) {
  return page.evaluate(() => {
    const kill = (el) => {
      if (!el) return;
      el.style.setProperty("display", "none", "important");
      el.style.setProperty("visibility", "hidden", "important");
      el.style.setProperty("opacity", "0", "important");
      el.setAttribute("hidden", "");
    };

    document
      .querySelectorAll(
        [
          "nextjs-portal",
          "[data-nextjs-toast]",
          "[data-nextjs-dialog]",
          "[data-nextjs-dialog-overlay]",
          "[data-next-badge]",
          "[data-nextjs-dev-tools-button]",
          "#__next-build-watcher",
          "[data-vercel-toolbar]",
          "#vercel-live-feedback",
          "[aria-label*='Next.js']",
          "[aria-label*='Issues']",
          "[data-demo-chat-widget]",
        ].join(",")
      )
      .forEach(kill);

    // Next.js 15+/16 issues pill (bottom-left)
    document.querySelectorAll("body *").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (
        (/^\d+\s+Issues?$/i.test(text) || /^Issues?$/i.test(text)) &&
        el.getBoundingClientRect().height < 72
      ) {
        kill(el);
        if (el.parentElement) kill(el.parentElement);
      }
    });

    document
      .querySelectorAll(
        '[aria-hidden="true"].fixed, .fixed.inset-0.z-\\[100\\], [class*="IntroLoader"]'
      )
      .forEach(kill);

    document.querySelectorAll(".fixed.inset-0").forEach((el) => {
      const z = Number(getComputedStyle(el).zIndex || 0);
      if (z >= 90) kill(el);
    });
  });
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1.25,
});

await page.addInitScript(() => {
  try {
    sessionStorage.clear();
    localStorage.setItem("youforge-cookie-notice", "dismissed");
  } catch {}
});

await page.emulateMedia({ reducedMotion: "reduce" });

const selected = only ? shots.filter((s) => only.has(s.slug)) : shots;

for (const shot of selected) {
  const out = path.join(outDir, `${shot.slug}.png`);
  console.log("capturing", shot.url);
  try {
    await page.goto(shot.url, { waitUntil: "networkidle", timeout: 90000 });
    await dismissChrome(page);
    await hideOverlays(page);
    await page.waitForTimeout(shot.waitMs);
    await dismissChrome(page);
    await hideOverlays(page);
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
