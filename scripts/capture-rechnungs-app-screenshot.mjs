import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const youforgeRoot = path.join(__dirname, "..");
const cursorRoot = path.join(youforgeRoot, "..");
const outPath = path.join(youforgeRoot, "public", "portfolio", "rechnungs-app.png");
const htmlPath = path.join(cursorRoot, "Rechnungstool vertrieb", "rechnungdesk.html");

const playwrightRoot = path.join(
  cursorRoot,
  "Rechnungstool vertrieb",
  "node_modules",
  "playwright"
);

const DEMO_CONFIG = {
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
    defaultTaxNote: "",
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
};

async function loadPlaywright() {
  const entry = path.join(playwrightRoot, "index.mjs");
  return import(pathToFileURL(entry).href);
}

async function prepareInvoiceView(page) {
  const onInvoice = await page
    .locator("#view-invoice")
    .evaluate((el) => !el.classList.contains("field--hidden"));

  if (!onInvoice) {
    await page.click('[data-view="invoice"]');
    await page.waitForTimeout(800);
  }

  await page.waitForSelector("main.invoice", { timeout: 10000 });
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
    setEmpty("f-menge-1", "1");
    setEmpty("f-einzelpreis-1", "0,00 EUR");
    setEmpty("f-menge-2", "1");
    setEmpty("f-einzelpreis-2", "0,00 EUR");

    const leistung = document.getElementById("f-leistung");
    if (leistung) {
      leistung.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const kunde = document.getElementById("f-kunde-select");
    if (kunde) {
      kunde.dispatchEvent(new Event("change", { bubbles: true }));
    }

    document.querySelector(".app-shell")?.scrollIntoView({ block: "start" });
  });

  await page.click("#resetBtn");
  await page.waitForTimeout(500);
}

async function main() {
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    locale: "de-DE",
    deviceScaleFactor: 2,
  });

  await context.addInitScript((config) => {
    localStorage.clear();
    localStorage.setItem("rechnungdesk_config_v1", JSON.stringify(config));
  }, DEMO_CONFIG);

  const page = await context.newPage();
  const url = pathToFileURL(htmlPath).href;

  console.log("Lade RechnungDesk:", url);
  await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(1000);
  await prepareInvoiceView(page);

  await page.evaluate(() => {
    const aside = document.querySelector("#view-invoice aside.panel");
    const invoiceView = document.getElementById("view-invoice");
    if (aside) aside.style.display = "none";
    if (invoiceView) {
      invoiceView.style.display = "block";
      invoiceView.style.gridTemplateColumns = "1fr";
      invoiceView.style.maxWidth = "920px";
      invoiceView.style.margin = "0 auto";
      invoiceView.style.padding = "1rem";
    }
    document.body.style.background = "#e4e7eb";

    const dash = "—";
    const setText = (id, value = dash) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    setText("v-leistung");
    setText("v-leistung-2");
    setText("v-datum");
    setText("v-faellig");
    setText("v-faellig-text");
    setText("v-leistungszeitraum");
    setText("v-kunde");
    setText("v-hinweis");
    setText("v-menge-1", "1");
    setText("v-einzelpreis-1", "0,00 EUR");
    setText("v-gesamt-td-1", "0,00 EUR");
    setText("v-menge-2", "1");
    setText("v-einzelpreis-2", "0,00 EUR");
    setText("v-gesamt-td-2", "0,00 EUR");
    setText("v-gesamt-total", "0,00 EUR");
    setText("v-netto-total", "0,00 EUR");
    setText("v-vat-amount", "0,00 EUR");

    const payment = document.getElementById("v-payment-block");
    if (payment) payment.innerHTML = "<p>—</p>";
    const footerContact = document.getElementById("v-footer-contact");
    if (footerContact) footerContact.innerHTML = "<span>—</span>";
    const footerBank = document.getElementById("v-footer-bank");
    if (footerBank) footerBank.innerHTML = "<span>—</span>";
  });

  await page.waitForTimeout(300);

  const target = page.locator("main.invoice");
  await target.screenshot({ path: outPath, type: "png" });

  await browser.close();
  console.log("Screenshot gespeichert:", outPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
