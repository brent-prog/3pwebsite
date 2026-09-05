import type { MetadataRoute } from "next";

const baseUrl = "https://www.3psolutions.ca";

const routes = [
  "/",
  "/contact-centre-consulting",
  "/contact-centre-operating-model",
  "/bpo-outsourcing-optimization",
  "/contact-centre-technology-ai",
  "/case-studies",
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
    priority:
      route === "/"
        ? 1
        : route === "/contact-centre-consulting"
          ? 0.95
          : route === "/contact-centre-operating-model" || route === "/bpo-outsourcing-optimization" || route === "/contact-centre-technology-ai"
            ? 0.9
            : route === "/cx-ai-technology-gap-review"
              ? 0.9
              : route === "/case-studies"
                ? 0.85
                : 0.7,
  }));
}
