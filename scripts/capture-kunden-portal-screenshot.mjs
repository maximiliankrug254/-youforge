import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { randomBytes } from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const youforgeRoot = path.join(__dirname, "..");
const cursorRoot = path.join(youforgeRoot, "..");
const mymAppRoot = path.join(cursorRoot, "homepage", "mym-app");
const outPath = path.join(youforgeRoot, "public", "portfolio", "kunden-portal.png");
const appUrl = "https://mym-app-upload.vercel.app";

const playwrightRoot = path.join(
  cursorRoot,
  "Rechnungstool vertrieb",
  "node_modules",
  "playwright"
);

function loadEnv(filePath) {
  const env = {};
  if (!fs.existsSync(filePath)) return env;
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
  return env;
}

async function loadPlaywright() {
  const entry = path.join(playwrightRoot, "index.mjs");
  return import(pathToFileURL(entry).href);
}

async function loadSupabase() {
  const entry = path.join(
    mymAppRoot,
    "node_modules",
    "@supabase",
    "supabase-js",
    "dist",
    "index.mjs"
  );
  return import(pathToFileURL(entry).href);
}

async function createDemoUser(env) {
  const { createClient } = await loadSupabase();
  const supabase = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: { autoRefreshToken: false, persistSession: false },
    }
  );

  const email = `portfolio-demo-${Date.now()}@youforge.demo`;
  const password = randomBytes(18).toString("base64url");

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    throw error;
  }

  return { supabase, email, password, userId: data.user.id };
}

async function deleteDemoUser(supabase, userId) {
  if (!userId) return;
  await supabase.auth.admin.deleteUser(userId);
}

async function main() {
  const env = loadEnv(path.join(mymAppRoot, ".env.local"));
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase-Konfiguration in mym-app/.env.local fehlt.");
  }

  const { supabase, email, password, userId } = await createDemoUser(env);

  try {
    const { chromium } = await loadPlaywright();
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      locale: "de-DE",
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    console.log("Melde Demo-Nutzer im Kunden-Portal an …");
    await page.goto(`${appUrl}/login`, { waitUntil: "networkidle", timeout: 90000 });
    await page.fill("#email", email);
    await page.fill("#password", password);
    await page.click('button[type="submit"]');
    await page.waitForURL(/\/dashboard/, { timeout: 120000 });

    await page.getByRole("heading", { name: /manage your money/i }).waitFor({
      timeout: 60000,
    });
    await page.getByRole("button", { name: "Privat" }).waitFor({ timeout: 60000 });
    await page.getByText("Einnahmen").first().waitFor({ timeout: 60000 });
    await page.waitForTimeout(2500);

    await page.screenshot({ path: outPath, type: "png", fullPage: false });
    await browser.close();

    console.log("Screenshot gespeichert:", outPath);
  } finally {
    console.log("Räume Demo-Nutzer auf …");
    await deleteDemoUser(supabase, userId);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
