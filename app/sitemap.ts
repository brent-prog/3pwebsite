import type { MetadataRoute } from "next";

const baseUrl = "https://www.3psolutions.ca";

const routes = [
  "/",
  "/blog",
  "/cx-ai-technology-gap-review",
  "/blog/people-first-even-in-an-ai-ready-business",
  "/blog/building-a-better-contact-centre-operating-model",
  "/blog/3px3p-matrix-business-alignment",
  "/blog/why-sops-fail-before-ai",
  "/blog/ai-isnt-broken-untrusted-knowledge-is",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/cx-ai-technology-gap-review" ? 0.9 : 0.7,
  }));
}
