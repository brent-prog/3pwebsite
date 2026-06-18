import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Isn't Broken. Broken Knowledge and Unclear Objectives Are. | 3P Solutions",
  description:
    "Why AI projects need a clear business problem, measurable outcome, trusted knowledge, aligned processes, and practical implementation before technology selection.",
  alternates: {
    canonical: "/blog/ai-isnt-broken-untrusted-knowledge-is",
  },
  openGraph: {
    title: "AI Isn't Broken. Broken Knowledge and Unclear Objectives Are. | 3P Solutions",
    description:
      "Why AI projects need a clear business problem, measurable outcome, trusted knowledge, aligned processes, and practical implementation before technology selection.",
    url: "/blog/ai-isnt-broken-untrusted-knowledge-is",
    siteName: "3P Solutions",
    type: "article",
    images: [
      {
        url: "/blog/ChatGPT Image Jun 8, 2026, 10_22_51 PM (1).png",
        alt: "AI readiness and trusted knowledge article illustration",
      },
    ],
  },
};

export default function AiReadinessArticleLayout({ children }: { children: ReactNode }) {
  return children;
}
