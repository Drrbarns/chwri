import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.chwri.org/sitemap.xml",
    host: "https://www.chwri.org",
  };
}
