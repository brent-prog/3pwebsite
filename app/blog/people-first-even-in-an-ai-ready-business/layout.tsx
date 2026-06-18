import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "People Come First. Even in an AI-Ready Business. | 3P Solutions",
  description:
    "A practical look at why AI readiness starts with people, trusted knowledge, clear processes, and business alignment across People, Product, and Profit.",
  alternates: {
    canonical: "/blog/people-first-even-in-an-ai-ready-business",
  },
  openGraph: {
    title: "People Come First. Even in an AI-Ready Business. | 3P Solutions",
    description:
      "A practical look at why AI readiness starts with people, trusted knowledge, clear processes, and business alignment across People, Product, and Profit.",
    url: "/blog/people-first-even-in-an-ai-ready-business",
    siteName: "3P Solutions",
    type: "article",
    images: [
      {
        url: "/blog/people-first-ai-ready-business-hero.png",
        alt: "People-first AI-ready business article illustration",
      },
    ],
  },
};

export default function PeopleFirstArticleLayout({ children }: { children: ReactNode }) {
  return children;
}
