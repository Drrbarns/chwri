import type { MetadataRoute } from "next";

const baseUrl = "https://www.chwri.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/strategic-plan",
    "/our-work",
    "/research",
    "/interventions",
    "/health-systems-strengthening",
    "/programs",
    "/publications",
    "/partnerships",
    "/news",
    "/events",
    "/get-involved",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
