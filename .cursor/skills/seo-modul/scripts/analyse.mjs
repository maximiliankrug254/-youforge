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

export async function collectPage(browser, url, { drosseln = true, nurMessen = false } = {}) {
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

  let started = Date.now();
  let response;
  let zweiterVersuch = false;
  try {
    response = await page.goto(url, { waitUntil: "load", timeout: 45000 });
  } catch {
    // Einmalige Aussetzer (Server, Netz, hängendes Skript) nicht als „nicht erreichbar“ werten.
    zweiterVersuch = true;
    started = Date.now();
    try {
      response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    } catch (err) {
      await context.close();
      return { url, ok: false, error: err instanceof Error ? err.message.split("\n")[0] : String(err) };
    }
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

  if (nurMessen) {
    await context.close();
    return { url, ok: true, lcp: vitals.lcp, cls: vitals.cls };
  }

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

    const marker = {
      wordpress: Boolean(q('link[href*="/wp-content/"],script[src*="/wp-content/"],script[src*="/wp-includes/"],link[href*="/wp-json/"]')),
      nextjs: Boolean(q('script[src*="/_next/"],link[href*="/_next/"]') || window.__NEXT_DATA__ || q("#__next")),
      jimdo: Boolean(q('link[href*="jimdo"],script[src*="jimdo"]')),
      shopify: Boolean(window.Shopify || q('script[src*="cdn.shopify.com"]')),
      wix: Boolean(q('meta[name="generator"][content*="Wix"]') || q('script[src*="parastorage.com"]')),
    };

    return {
      generator: meta("generator"),
      marker,
      title: clean(document.title),
      description: meta("description"),
      robots: [meta("robots"), meta("googlebot")].filter(Boolean).join(", ") || null,
      viewport: meta("viewport"),
      canonical: q('link[rel="canonical"]')?.href ?? null,
      lang: document.documentElement.getAttribute("lang"),
      hreflang: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => ({ lang: l.hreflang, href: l.href })),
      formulare: document.querySelectorAll("form").length,
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
  const { marker, ...rest } = dom;
  return {
    url,
    finalUrl: page.url(),
    ok: true,
    status: response?.status() ?? 0,
    xRobots: headers["x-robots-tag"] || null,
    plattform: erkennePlattform(dom.generator, marker, headers),
    netz,
    zweiterVersuch,
    ladezeitMs,
    lcp: vitals.lcp,
    cls: vitals.cls,
    bytes: bytes || vitals.fallbackBytes,
    screenshot,
    ...rest,
  };
}

function erkennePlattform(generator, marker, headers) {
  const g = (generator || "").toLowerCase();
  const powered = `${headers["x-powered-by"] || ""} ${headers["server"] || ""}`.toLowerCase();
  if (marker.wordpress || g.includes("wordpress")) return "wordpress";
  if (marker.nextjs || g.includes("next.js") || powered.includes("next.js")) return "nextjs";
  if (marker.wix || g.includes("wix")) return "wix";
  if (marker.jimdo || g.includes("jimdo")) return "jimdo";
  if (marker.shopify || g.includes("shopify")) return "shopify";
  if (g.includes("webflow")) return "webflow";
  if (g.includes("squarespace")) return "squarespace";
  if (g.includes("typo3")) return "typo3";
  if (g.includes("joomla")) return "joomla";
  return "unbekannt";
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

export function sitemapPfad(value) {
  try {
    const path = new URL(value).pathname.replace(/\/$/, "") || "/";
    try {
      return decodeURI(path);
    } catch {
      return path;
    }
  } catch {
    return value;
  }
}

const MAX_SITEMAPS = 30;

/** Liest eine Sitemap; bei einem Sitemap-Index auch die verlinkten Teil-Sitemaps (z. B. WordPress, Yoast). */
async function ladeSitemap(url, besucht, tiefe = 0) {
  const leer = { found: false, paths: [], teile: [] };
  if (besucht.has(url) || besucht.size >= MAX_SITEMAPS) return leer;
  besucht.add(url);
  const res = await fetchText(url);
  if (res.status !== 200) return leer;
  const istIndex = /<sitemapindex[\s>]/i.test(res.text);
  if (!istIndex && !/<urlset[\s>]/i.test(res.text)) return leer;
  const locs = [...res.text.matchAll(/<loc>\s*(?:<!\[CDATA\[)?\s*([^<\s\]]+)\s*(?:\]\]>)?\s*<\/loc>/gi)].map((m) =>
    m[1].replace(/&amp;/g, "&"),
  );
  if (!istIndex) return { found: true, paths: locs.map(sitemapPfad), teile: [] };
  const paths = [];
  const teile = [...locs];
  if (tiefe < 2) {
    for (const teil of locs) {
      const sub = await ladeSitemap(teil, besucht, tiefe + 1);
      paths.push(...sub.paths);
      teile.push(...sub.teile);
    }
  }
  return { found: true, paths, teile };
}

export async function collectOrigin(origin) {
  if (originCache.has(origin)) return originCache.get(origin);
  const robotsRes = await fetchText(`${origin}/robots.txt`);
  const robots = robotsRes.status === 200 ? { found: true, ...parseRobots(robotsRes.text) } : { found: false, rules: [], sitemaps: [] };

  const kandidaten = robots.sitemaps.length
    ? robots.sitemaps.slice(0, 5)
    : [`${origin}/sitemap.xml`, `${origin}/sitemap_index.xml`, `${origin}/wp-sitemap.xml`];
  const besucht = new Set();
  const sitemap = { url: kandidaten[0], found: false, paths: [], teile: [] };
  for (const url of kandidaten) {
    const res = await ladeSitemap(url, besucht);
    if (!res.found) continue;
    if (!sitemap.found) sitemap.url = url;
    sitemap.found = true;
    sitemap.paths.push(...res.paths);
    sitemap.teile.push(...res.teile);
    if (!robots.sitemaps.length) break;
  }
  sitemap.paths = [...new Set(sitemap.paths)];
  sitemap.benutzer = sitemap.teile.filter((t) => /(users?|author)[-_]?(sitemap)?[-_\d]*\.xml/i.test(t));

  const result = { robots, sitemap };
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
