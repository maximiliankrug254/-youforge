import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const cursorRoot = path.join(root, "..");
const outDir = path.join(root, "public", "portfolio");
const playwrightRoot = path.join(cursorRoot, "Rechnungstool vertrieb", "node_modules", "playwright");

const targets = [
  {
    slug: "handwerk-website",
    file: path.join(root, "public", "showcase", "handwerk-premium.html"),
  },
  {
    slug: "studio-website",
    file: path.join(root, "public", "showcase", "studio-editorial.html"),
  },
  {
    slug: "saas-landing",
    file: path.join(root, "public", "showcase", "saas-launch.html"),
  },
  {
    slug: "client-hub",
    file: path.join(root, "public", "showcase", "client-hub.html"),
  },
];

async function main() {
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch({ headless: true });

  for (const target of targets) {
    const outPath = path.join(outDir, `${target.slug}.png`);
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      locale: "de-DE",
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    const url = pathToFileURL(target.file).href;
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: outPath, type: "png", fullPage: false });
    await context.close();
    console.log("Screenshot:", outPath);
  }

  await browser.close();
}

async function loadPlaywright() {
  return import(pathToFileURL(path.join(playwrightRoot, "index.mjs")).href);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
