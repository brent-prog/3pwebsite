import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Why SOPs Fail Before AI Ever Gets Involved | 3P Solutions",
  description:
    "Why SOPs fail when teams do not trust, use, own, or maintain them, and why AI readiness depends on trusted operational knowledge.",
  alternates: {
    canonical: "/blog/why-sops-fail-before-ai",
  },
  openGraph: {
    title: "Why SOPs Fail Before AI Ever Gets Involved | 3P Solutions",
    description:
      "Why SOPs fail when teams do not trust, use, own, or maintain them, and why AI readiness depends on trusted operational knowledge.",
    url: "/blog/why-sops-fail-before-ai",
    siteName: "3P Solutions",
    type: "article",
    images: [
      {
        url: "/blog/ChatGPT Image Jun 8, 2026, 10_22_51 PM (2).png",
        alt: "SOP readiness before AI article illustration",
      },
    ],
  },
};

export default function SopArticleLayout({ children }: { children: ReactNode }) {
  return children;
}
