import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The 3Px3P Matrix: A Practical Way to Diagnose Business Alignment | 3P Solutions",
  description:
    "Use the 3Px3P Matrix to diagnose business alignment across People, Product, Profit, Planning, Processes, and Performance Measurement.",
  alternates: {
    canonical: "/blog/3px3p-matrix-business-alignment",
  },
  openGraph: {
    title: "The 3Px3P Matrix: A Practical Way to Diagnose Business Alignment | 3P Solutions",
    description:
      "Use the 3Px3P Matrix to diagnose business alignment across People, Product, Profit, Planning, Processes, and Performance Measurement.",
    url: "/blog/3px3p-matrix-business-alignment",
    siteName: "3P Solutions",
    type: "article",
    images: [
      {
        url: "/blog/ChatGPT Image Jun 8, 2026, 10_22_52 PM (3).png",
        alt: "3Px3P business alignment matrix article illustration",
      },
    ],
  },
};

export default function MatrixArticleLayout({ children }: { children: ReactNode }) {
  return children;
}
