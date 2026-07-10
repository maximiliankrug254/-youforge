import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const version = process.argv[2] || "v3";
const renderDir = path.join(
  __dirname,
  `../public/branding/instagram/posts/post-01-pinned/render-${version}`
);
const exportDir = path.join(
  __dirname,
  `../public/branding/instagram/posts/post-01-pinned/export-${version}`
);

async function main() {
  fs.mkdirSync(exportDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 2,
  });

  for (let i = 1; i <= 5; i++) {
    const file = path.join(renderDir, `slide-0${i}.html`);
    const url = `file:///${file.replace(/\\/g, "/")}`;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    const out = path.join(exportDir, `slide-0${i}.png`);
    await page.screenshot({ path: out, type: "png" });
    console.log("wrote", out);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
