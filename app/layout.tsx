import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3psolutions.ca"),
  title: "3P Solutions | AI-Readiness Through Operational Alignment",
  description:
    "3P Solutions helps CX, contact centre, BPO, and service business leaders align people, process, technology, knowledge, and performance measurement before investing in AI or automation.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "3P Solutions | AI-Readiness Through Operational Alignment",
    description:
      "3P Solutions helps CX, contact centre, BPO, and service business leaders align people, process, technology, knowledge, and performance measurement before investing in AI or automation.",
    url: "/",
    siteName: "3P Solutions",
    type: "website",
    images: [
      {
        url: "/3p-logo.png",
        alt: "3P Solutions logo",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
