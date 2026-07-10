import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const youforgeRoot = path.join(__dirname, "..");
const cursorRoot = path.join(youforgeRoot, "..");
const outPath = path.join(youforgeRoot, "public", "portfolio", "rechnungs-landing.png");

const playwrightRoot = path.join(
  cursorRoot,
  "Rechnungstool vertrieb",
  "node_modules",
  "playwright"
);

const landingFile = path.join(cursorRoot, "Rechnungstool vertrieb", "landing.html");
const landingUrl = "https://rechnungdesk.netlify.app";

async function loadPlaywright() {
  const entry = path.join(playwrightRoot, "index.mjs");
  return import(pathToFileURL(entry).href);
}

async function main() {
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: "de-DE",
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  let url = landingUrl;
  try {
    const response = await page.goto(landingUrl, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    if (!response || !response.ok()) {
      throw new Error(`HTTP ${response?.status() ?? "unknown"}`);
    }
  } catch {
    url = pathToFileURL(landingFile).href;
    console.log("Netlify nicht erreichbar, nutze lokale Datei:", url);
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  }

  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: outPath, type: "png", fullPage: false });

  await browser.close();
  console.log("Screenshot gespeichert:", outPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
