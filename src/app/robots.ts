import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/impressum", "/datenschutz", "/demo/raumkontrast"],
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
