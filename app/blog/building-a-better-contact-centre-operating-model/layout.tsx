import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Building a Better Contact Centre Operating Model | 3P Solutions",
  description:
    "A practical guide to rebuilding a customer contact centre operating model around customer journeys, people, process, technology, data, and trusted knowledge.",
  alternates: {
    canonical: "/blog/building-a-better-contact-centre-operating-model",
  },
  openGraph: {
    title: "Building a Better Contact Centre Operating Model | 3P Solutions",
    description:
      "A practical guide to rebuilding a customer contact centre operating model around customer journeys, people, process, technology, data, and trusted knowledge.",
    url: "/blog/building-a-better-contact-centre-operating-model",
    siteName: "3P Solutions",
    type: "article",
    images: [
      {
        url: "/blog/from_chaos_to_organized_clarity.png",
        alt: "Customer contact centre operating model article illustration",
      },
    ],
  },
};

export default function ContactCentreArticleLayout({ children }: { children: ReactNode }) {
  return children;
}
