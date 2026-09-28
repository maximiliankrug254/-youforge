/**
 * Erfasst eine Seite wie ein Handy im mobilen Netz: Ladezeit (LCP), Layout-Sprünge (CLS),
 * Datenmenge, Metadaten, Überschriften, Bilder, JSON-LD, Links, sichtbarer Text, Screenshot.
 * Keine Formular-Absendungen, keine Klicks.
 */
import { chromium } from "playwright";
import { MOBILE, normalizeUrl } from "./lib.mjs";

const MOBILE_UA =
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36";

const SKIP_EXT = /\.(pdf|jpe?g|png|gif|webp|avif|svg|mp4|webm|zip|docx?|xlsx?)$/i;

export async function launchBrowser() {
  const attempts = [{}, { channel: "msedge" }, { channel: "chrome" }];
  let lastError;
  for (const extra of attempts) {
    try {
      return await chromium.launch({ headless: true, ...extra });
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

export async function collectPage(browser, url, { drosseln = true } = {}) {
  const context = await browser.newContext({
    viewport: MOBILE,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    locale: "de-DE",
    userAgent: MOBILE_UA,
  });
  const page = await context.newPage();
  let bytes = 0;
  let netz = "ungedrosselt";

  try {
    const cdp = await context.newCDPSession(page);
    await cdp.send("Network.enable");
    cdp.on("Network.loadingFinished", (e) => {
      bytes += e.encodedDataLength || 0;
    });
    if (drosseln) {
      await cdp.send("Network.emulateNetworkConditions", {
        offline: false,
        latency: 70,
        downloadThroughput: (9 * 1024 * 1024) / 8,
        uploadThroughput: (3 * 1024 * 1024) / 8,
      });
      await cdp.send("Emulation.setCPUThrottlingRate", { rate: 2 });
      netz = "Handy, mobiles Netz (4G)";
    }
  } catch {
    netz = "ohne Netz-Simulation";
  }

  await page.addInitScript(() => {
    window.__seo = { lcp: null, cls: 0 };
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) window.__seo.lcp = entry.startTime;
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__seo.cls += entry.value;
        }
      }).observe({ type: "layout-shift", buffered: true });
    } catch {
      /* Browser ohne PerformanceObserver */
    }
  });

  const started = Date.now();
  let response;
  try {
    response = await page.goto(url, { waitUntil: "load", timeout: 60000 });
  } catch (err) {
    await context.close();
    return { url, ok: false, error: err instanceof Error ? err.message.split("\n")[0] : String(err) };
  }
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(2500);
  const ladezeitMs = Date.now() - started;

  const vitals = await page.evaluate(() => ({
    lcp: window.__seo?.lcp ?? null,
    cls: window.__seo?.cls ?? 0,
    fallbackBytes: performance
      .getEntriesByType("resource")
      .concat(performance.getEntriesByType("navigation"))
      .reduce((sum, e) => sum + (e.transferSize || 0), 0),
  }));

  const dom = await page.evaluate(() => {
    const q = (s) => document.querySelector(s);
    const meta = (name) => q(`meta[name="${name}"]`)?.getAttribute("content") ?? null;
    const prop = (p) => q(`meta[property="${p}"]`)?.getAttribute("content") ?? null;
    const clean = (t) => (t || "").replace(/\s+/g, " ").trim();

    const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => ({
      level: Number(h.tagName[1]),
      text: clean(h.textContent).slice(0, 140),
    }));

    const imgs = [...document.images].filter((img) => {
      const hidden = img.closest("[aria-hidden='true']");
      const tiny = img.naturalWidth > 0 && img.naturalWidth < 24;
      return !hidden && !tiny;
    });
    const missing = imgs.filter((img) => !img.hasAttribute("alt"));
    const decorative = imgs.filter((img) => img.getAttribute("alt") === "");

    const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
      try {
        return JSON.parse(s.textContent || "");
      } catch {
        return { __fehler: true };
      }
    });

    const links = [...document.querySelectorAll("a[href]")].map((a) => ({
      href: a.href,
      text: clean(a.textContent).slice(0, 80),
    }));

    return {
      title: clean(document.title),
      description: meta("description"),
      robots: [meta("robots"), meta("googlebot")].filter(Boolean).join(", ") || null,
      viewport: meta("viewport"),
      canonical: q('link[rel="canonical"]')?.href ?? null,
      lang: document.documentElement.getAttribute("lang"),
      ogTitle: prop("og:title"),
      ogImage: prop("og:image"),
      favicon: Boolean(q('link[rel~="icon"]')),
      headings,
      images: {
        total: imgs.length,
        missing: missing.length,
        decorative: decorative.length,
        samples: missing.slice(0, 5).map((img) => (img.currentSrc || img.src).split("/").pop()?.slice(0, 60)),
      },
      jsonLd,
      links,
      details: document.querySelectorAll("details").length,
      text: document.body?.innerText || "",
    };
  });

  await page.evaluate(() => window.scrollTo(0, 0));
  const screenshot = await page
    .screenshot({ type: "jpeg", quality: 55 })
    .then((buf) => buf.toString("base64"))
    .catch(() => null);

  await context.close();

  const headers = response?.headers() || {};
  return {
    url,
    finalUrl: page.url(),
    ok: true,
    status: response?.status() ?? 0,
    xRobots: headers["x-robots-tag"] || null,
    netz,
    ladezeitMs,
    lcp: vitals.lcp,
    cls: vitals.cls,
    bytes: bytes || vitals.fallbackBytes,
    screenshot,
    ...dom,
  };
}

const originCache = new Map();

function parseRobots(text) {
  const groups = [];
  let current = null;
  const sitemaps = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === "sitemap") sitemaps.push(value);
    else if (key === "user-agent") {
      if (!current || current.rules.length) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
    } else if ((key === "disallow" || key === "allow") && current) {
      current.rules.push({ type: key, path: value });
    }
  }
  const group =
    groups.find((g) => g.agents.includes("googlebot")) || groups.find((g) => g.agents.includes("*")) || null;
  return { rules: group?.rules || [], sitemaps };
}

export function robotsBlocks(robots, pathname) {
  if (!robots?.found) return null;
  let best = null;
  for (const rule of robots.rules) {
    if (!rule.path) continue;
    const prefix = rule.path.replace(/\*$/, "").replace(/\$$/, "");
    if (!pathname.startsWith(prefix)) continue;
    if (!best || prefix.length > best.prefix.length || (prefix.length === best.prefix.length && rule.type === "allow")) {
      best = { ...rule, prefix };
    }
  }
  return best && best.type === "disallow" ? best.path : null;
}

async function fetchText(url) {
  try {
    const res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    return { status: res.status, text: res.ok ? await res.text() : "" };
  } catch {
    return { status: 0, text: "" };
  }
}

export async function collectOrigin(origin) {
  if (originCache.has(origin)) return originCache.get(origin);
  const robotsRes = await fetchText(`${origin}/robots.txt`);
  const robots = robotsRes.status === 200 ? { found: true, ...parseRobots(robotsRes.text) } : { found: false, rules: [], sitemaps: [] };

  const sitemapUrl = robots.sitemaps[0] || `${origin}/sitemap.xml`;
  const sitemapRes = await fetchText(sitemapUrl);
  const valid = sitemapRes.status === 200 && /<(urlset|sitemapindex)[\s>]/i.test(sitemapRes.text);
  const paths = valid
    ? [...sitemapRes.text.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => {
        try {
          return new URL(m[1]).pathname.replace(/\/$/, "") || "/";
        } catch {
          return m[1];
        }
      })
    : [];

  const result = { robots, sitemap: { url: sitemapUrl, found: valid, paths } };
  originCache.set(origin, result);
  return result;
}

export function internalLinks(pageData, prefix) {
  const origin = new URL(pageData.finalUrl || pageData.url).origin;
  const out = new Set();
  for (const { href } of pageData.links || []) {
    let u;
    try {
      u = new URL(href);
    } catch {
      continue;
    }
    if (u.origin !== origin || u.search || SKIP_EXT.test(u.pathname)) continue;
    if (prefix !== "/" && !(u.pathname === prefix || u.pathname.startsWith(`${prefix}/`))) continue;
    out.add(normalizeUrl(u.href));
  }
  return [...out];
}
