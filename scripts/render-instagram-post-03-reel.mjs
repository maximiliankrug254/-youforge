import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const renderDir = path.join(
  __dirname,
  "../public/branding/instagram/posts/post-03-reel-8s"
);
const exportDir = path.join(renderDir, "export");
const OUTPUT = "youforge-reel-8s.mp4";
const RECORD_MS = 12500;

async function main() {
  fs.mkdirSync(exportDir, { recursive: true });

  for (const f of fs.readdirSync(exportDir)) {
    if (f.endsWith(".webm") || f === OUTPUT) {
      fs.unlinkSync(path.join(exportDir, f));
    }
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    recordVideo: {
      dir: exportDir,
      size: { width: 1080, height: 1920 },
    },
  });

  const page = await context.newPage();
  const html = path.join(renderDir, "reel.html");
  await page.goto(`file:///${html.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(RECORD_MS);

  await context.close();
  await browser.close();

  const webms = fs
    .readdirSync(exportDir)
    .filter((f) => f.endsWith(".webm"))
    .map((f) => ({ f, t: fs.statSync(path.join(exportDir, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t);

  const webm = webms[0]?.f;
  if (!webm) throw new Error("No webm recorded");

  const webmPath = path.join(exportDir, webm);
  const mp4Path = path.join(exportDir, OUTPUT);

  if (ffmpegPath) {
    execSync(
      `"${ffmpegPath}" -y -i "${webmPath}" -t 12 -c:v libx264 -pix_fmt yuv420p -r 30 -movflags +faststart "${mp4Path}"`,
      { stdio: "inherit" }
    );
    console.log("wrote", mp4Path);
  } else {
    console.log("ffmpeg missing — webm:", webmPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
