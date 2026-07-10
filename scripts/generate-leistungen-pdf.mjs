import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const htmlPath = join(root, "public", "docs", "youforge-leistungen.html");
const pdfPath = join(root, "public", "docs", "YouForge-Leistungen.pdf");

const chromePaths = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

async function generateWithPuppeteer() {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.default.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();
}

async function main() {
  if (!existsSync(htmlPath)) {
    throw new Error(`HTML nicht gefunden: ${htmlPath}`);
  }

  try {
    await generateWithPuppeteer();
    console.log(`PDF erstellt: ${pdfPath}`);
    return;
  } catch (error) {
    console.warn("Puppeteer fehlgeschlagen, versuche Chrome/Edge headless...");
    console.warn(error?.message ?? error);
  }

  const { spawnSync } = await import("node:child_process");
  const browser = chromePaths.find((path) => existsSync(path));

  if (!browser) {
    console.log(
      "Kein Browser für automatische PDF-Erstellung gefunden.\n" +
        `HTML liegt bereit: ${htmlPath}\n` +
        "Öffne die Datei im Browser und wähle Drucken → Als PDF speichern."
    );
    process.exit(0);
  }

  const result = spawnSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      `file:///${htmlPath.replace(/\\/g, "/")}`,
    ],
    { stdio: "inherit" }
  );

  if (result.status !== 0) {
    throw new Error("PDF-Generierung mit Browser fehlgeschlagen.");
  }

  console.log(`PDF erstellt: ${pdfPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
