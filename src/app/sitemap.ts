import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.sreddygroup.com";
const BLOG_BASE = "https://blog.sreddygroup.com";
const BLOG_SITEMAP_URL = `${BLOG_BASE}/sitemap.xml`;

const FETCH_TIMEOUT_MS = 8000;
const MAX_SITEMAPS = 25;
const PAGE_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

export const runtime = "nodejs";
export const revalidate = 60 * 60;

type UrlEntry = {
  url: string;
  lastModified?: Date;
};

function safeReadDir(dirPath: string): fs.Dirent[] {
  try {
    return fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return [];
  }
}

function hasPageFile(dirPath: string): boolean {
  return PAGE_EXTENSIONS.some((ext) =>
    fs.existsSync(path.join(dirPath, `page${ext}`)),
  );
}

function listRootRoute(appDir: string): string[] {
  const hasRootPage = PAGE_EXTENSIONS.some((ext) =>
    fs.existsSync(path.join(appDir, `page${ext}`)),
  );
  return hasRootPage ? ["/"] : [];
}

function listTopLevelRoutes(appDir: string): string[] {
  return safeReadDir(appDir)
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith("(") &&
        !entry.name.startsWith("[") &&
        !entry.name.startsWith("_") &&
        entry.name !== "api",
    )
    .filter((entry) => hasPageFile(path.join(appDir, entry.name)))
    .map((entry) => `/${entry.name}`);
}

function listGroupRoutes(appDir: string, groupName: string): string[] {
  const groupDir = path.join(appDir, groupName);
  return safeReadDir(groupDir)
    .filter((entry) => entry.isDirectory())
    .filter((entry) => hasPageFile(path.join(groupDir, entry.name)))
    .map((entry) => `/${entry.name}`);
}

function normalizeUrl(rawUrl: string, base?: string): string | null {
  try {
    const url = base ? new URL(rawUrl, base) : new URL(rawUrl);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    url.hash = "";
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "");
    }
    return url.toString();
  } catch {
    return null;
  }
}

function parseLastModified(value: string | null): Date | undefined {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function extractTagValue(block: string, tag: string): string | null {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "i"));
  if (!match) return null;
  const rawValue = match[1].trim();
  const cdataMatch = rawValue.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/i);
  return (cdataMatch ? cdataMatch[1] : rawValue).trim();
}

function extractUrlEntries(xml: string): Array<{ loc: string; lastmod?: Date }> {
  const entries: Array<{ loc: string; lastmod?: Date }> = [];
  const urlRegex = /<url>([\s\S]*?)<\/url>/gi;
  let match: RegExpExecArray | null;
  while ((match = urlRegex.exec(xml))) {
    const block = match[1];
    const loc = extractTagValue(block, "loc");
    if (!loc) continue;
    const lastmod = parseLastModified(extractTagValue(block, "lastmod"));
    entries.push({ loc, lastmod });
  }
  return entries;
}

function extractSitemapLocs(xml: string): string[] {
  const locs: string[] = [];
  const sitemapRegex = /<sitemap>([\s\S]*?)<\/sitemap>/gi;
  let match: RegExpExecArray | null;
  while ((match = sitemapRegex.exec(xml))) {
    const block = match[1];
    const loc = extractTagValue(block, "loc");
    if (loc) locs.push(loc);
  }
  return locs;
}

async function fetchText(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "SRGroup-Sitemap/1.0 (+https://www.sreddygroup.com)" },
      next: { revalidate },
    });
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function collectBlogEntries(): Promise<UrlEntry[]> {
  const queue: string[] = [BLOG_SITEMAP_URL];
  const visited = new Set<string>();
  const entries: UrlEntry[] = [];
  let hadFetchError = false;

  while (queue.length > 0 && visited.size < MAX_SITEMAPS) {
    const sitemapUrl = queue.shift();
    if (!sitemapUrl) break;
    const normalizedSitemapUrl = normalizeUrl(sitemapUrl, BLOG_BASE);
    if (!normalizedSitemapUrl || visited.has(normalizedSitemapUrl)) continue;

    visited.add(normalizedSitemapUrl);
    const xml = await fetchText(normalizedSitemapUrl);
    if (!xml) {
      hadFetchError = true;
      continue;
    }

    const sitemapLocs = extractSitemapLocs(xml);
    if (sitemapLocs.length > 0) {
      for (const loc of sitemapLocs) {
        const normalizedLoc = normalizeUrl(loc, BLOG_BASE);
        if (normalizedLoc && !visited.has(normalizedLoc)) {
          queue.push(normalizedLoc);
        }
      }
      continue;
    }

    const urlEntries = extractUrlEntries(xml);
    for (const entry of urlEntries) {
      const normalizedLoc = normalizeUrl(entry.loc, BLOG_BASE);
      if (!normalizedLoc || !normalizedLoc.startsWith(BLOG_BASE)) continue;
      entries.push({ url: normalizedLoc, lastModified: entry.lastmod });
    }
  }

  if (visited.size >= MAX_SITEMAPS) {
    console.warn(
      `[sitemap] Reached MAX_SITEMAPS (${MAX_SITEMAPS}) while crawling blog sitemaps.`,
    );
  }
  if (hadFetchError) {
    console.warn(
      "[sitemap] Failed to fetch one or more blog sitemaps; continuing with main site URLs only for missing blog entries.",
    );
  }

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDir = path.join(process.cwd(), "src", "app");
  const mainRoutes = [
    ...listRootRoute(appDir),
    ...listTopLevelRoutes(appDir),
    ...listGroupRoutes(appDir, "(featured)"),
    ...listGroupRoutes(appDir, "(keywords)"),
  ];

  const urlMap = new Map<string, Date | null>();

  const addUrl = (rawUrl: string, lastModified?: Date) => {
    const normalized = normalizeUrl(rawUrl);
    if (!normalized) return;
    const existing = urlMap.get(normalized);
    if (existing === undefined) {
      urlMap.set(normalized, lastModified ?? null);
      return;
    }
    if (existing === null && lastModified) {
      urlMap.set(normalized, lastModified);
    }
  };

  for (const route of mainRoutes) {
    const absolute = normalizeUrl(route, SITE_URL);
    if (absolute) addUrl(absolute);
  }

  const blogEntries = await collectBlogEntries();
  for (const entry of blogEntries) {
    addUrl(entry.url, entry.lastModified);
  }

  return Array.from(urlMap.entries()).map(([url, lastModified]) =>
    lastModified ? { url, lastModified } : { url },
  );
}
