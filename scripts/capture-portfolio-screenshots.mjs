import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawn } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const youforgeRoot = path.join(__dirname, "..");
const cursorRoot = path.join(youforgeRoot, "..");
const outDir = path.join(youforgeRoot, "public", "portfolio");

const playwrightRoot = path.join(
  cursorRoot,
  "Rechnungstool vertrieb",
  "node_modules",
  "playwright"
);

const VIEWPORT = { width: 1280, height: 800 };

/** @type {Array<{ slug: string; url?: string; file?: string; waitMs?: number; viewport?: { width: number; height: number }; screenshotSelector?: string; prep?: (page: import('playwright').Page) => Promise<void>; afterLoad?: (page: import('playwright').Page) => Promise<void> }>} */
const targets = [
  {
    slug: "youforge",
    url: "http://localhost:3000",
    waitMs: 2500,
    async prep(page) {
      await page.addInitScript(() => {
        sessionStorage.setItem("youforge-intro", "1");
      });
    },
  },
  {
    slug: "rechnungs-app",
    file: path.join(cursorRoot, "Rechnungstool vertrieb", "rechnungdesk.html"),
    waitMs: 800,
    viewport: { width: 1440, height: 900 },
    screenshotSelector: "#view-invoice",
    async prep(page) {
      await page.addInitScript((config) => {
        localStorage.clear();
        localStorage.setItem("rechnungdesk_config_v1", JSON.stringify(config));
      }, {
        version: 1,
        issuer: {
          companyName: "Ihr Unternehmen",
          logoDataUrl: "",
          address: "",
          country: "",
          taxId: "",
          vatId: "",
          bankHolder: "",
          iban: "",
          bic: "",
          bankName: "",
          phone: "",
          email: "",
          signatureName: "",
          defaultTaxNote: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
          defaultTaxNotePreset: "paragraph19",
          invoiceStart: 1,
          invoicePad: 4,
          invoicePrefix: "",
          invoiceIncludeYear: false,
          invoiceYearSeparator: "-",
          vatEnabled: false,
          vatRate: 19,
        },
        serviceOptions: ["Beratung", "Projektarbeit", "Reisekosten"],
        customers: [],
        appearance: { theme: "neutral", themeChosen: true },
      });
    },
    screenshotSelector: "main.invoice",
    async afterLoad(page) {
      await page.waitForSelector("main.invoice", { timeout: 15000 });
      await page.click("#resetBtn");
      await page.waitForTimeout(300);
      await page.evaluate(() => {
        const setEmpty = (id, value = "") => {
          const el = document.getElementById(id);
          if (el) el.value = value;
        };
        setEmpty("f-leistung", "__custom__");
        setEmpty("f-leistung-custom");
        setEmpty("f-kunde-select", "__custom__");
        setEmpty("f-kunde-custom");
        setEmpty("f-kunde-stamm");
        setEmpty("f-hinweis");
        setEmpty("f-leistung-2");
        setEmpty("f-rechnungsnr", "0001");
        setEmpty("f-datum");
        setEmpty("f-faellig");
        const aside = document.querySelector("#view-invoice aside.panel");
        const invoiceView = document.getElementById("view-invoice");
        if (aside) aside.style.display = "none";
        if (invoiceView) {
          invoiceView.style.display = "block";
          invoiceView.style.gridTemplateColumns = "1fr";
          invoiceView.style.maxWidth = "920px";
          invoiceView.style.margin = "0 auto";
        }
      });
      await page.click("#resetBtn");
      await page.waitForTimeout(500);
    },
  },
  {
    slug: "rechnungs-landing",
    url: "https://rechnungdesk.netlify.app",
    file: path.join(cursorRoot, "Rechnungstool vertrieb", "landing.html"),
    waitMs: 2000,
    viewport: { width: 1440, height: 900 },
  },
  {
    slug: "coaching-website",
    file: path.join(cursorRoot, "homepage", "HOMEPAGE-UPDATE", "index.html"),
    waitMs: 2500,
  },
  {
    slug: "kunden-portal",
    url: "https://mym-app-upload.vercel.app/login",
    waitMs: 3000,
  },
  {
    slug: "ki-bildproduktion",
    file: path.join(cursorRoot, "homepage", "ki-bildtool", "index.html"),
    waitMs: 1500,
  },
  {
    slug: "ki-studio",
    file: path.join(cursorRoot, "homepage", "mym-studio", "public", "index.html"),
    waitMs: 2000,
  },
];

function toUrl(target) {
  if (target.url) return target.url;
  if (target.file) return pathToFileURL(target.file).href;
  throw new Error(`Kein Ziel für ${target.slug}`);
}

async function loadPlaywright() {
  const entry = path.join(playwrightRoot, "index.mjs");
  if (!fs.existsSync(entry)) {
    throw new Error(
      `Playwright nicht gefunden unter ${playwrightRoot}. Bitte in "Rechnungstool vertrieb" npm install ausführen.`
    );
  }
  return import(pathToFileURL(entry).href);
}

async function captureScreenshots() {
  fs.mkdirSync(outDir, { recursive: true });

  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch({ headless: true });

  const results = [];

  for (const target of targets) {
    const outPath = path.join(outDir, `${target.slug}.png`);
    const viewport = target.viewport ?? VIEWPORT;
    const context = await browser.newContext({
      viewport,
      locale: "de-DE",
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    try {
      if (target.prep) {
        await target.prep(page);
      }

      const url = toUrl(target);
      console.log(`Screenshot: ${target.slug} ← ${url}`);

      await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });

      if (target.afterLoad) {
        await target.afterLoad(page);
      }

      await page.waitForTimeout(target.waitMs ?? 2000);

      if (target.screenshotSelector) {
        await page.locator(target.screenshotSelector).screenshot({ path: outPath, type: "png" });
      } else {
        await page.screenshot({ path: outPath, type: "png", fullPage: false });
      }

      results.push({ slug: target.slug, ok: true, outPath });
      console.log(`  ✓ ${outPath}`);
    } catch (error) {
      results.push({
        slug: target.slug,
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      });
      console.error(`  ✗ ${target.slug}:`, error);
    } finally {
      await context.close();
    }
  }

  await browser.close();
  return results;
}

async function ensureYouForgeServer() {
  try {
    const res = await fetch("http://localhost:3000", { signal: AbortSignal.timeout(3000) });
    if (res.ok) return;
  } catch {
    // start server
  }

  console.log("Starte YouForge Dev-Server für Screenshot …");
  const child = spawn("npm", ["run", "dev"], {
    cwd: youforgeRoot,
    shell: true,
    stdio: "ignore",
    detached: true,
  });
  child.unref();

  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    try {
      const res = await fetch("http://localhost:3000", { signal: AbortSignal.timeout(2000) });
      if (res.ok) {
        console.log("YouForge Dev-Server bereit.");
        return;
      }
    } catch {
      // retry
    }
  }

  throw new Error("YouForge Dev-Server konnte nicht gestartet werden.");
}

async function main() {
  await ensureYouForgeServer();
  const results = await captureScreenshots();
  const failed = results.filter((r) => !r.ok);

  if (failed.length) {
    console.error("\nFehlgeschlagen:", failed.map((f) => f.slug).join(", "));
    process.exit(1);
  }

  console.log(`\n${results.length} Screenshots in ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
