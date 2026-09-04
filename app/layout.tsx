import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3psolutions.ca"),
  title: "3P Solutions | Contact Centre Performance for the AI Era",
  description:
    "3P Solutions helps contact centre, CX, and BPO leaders improve customer value, cost, revenue, performance, operating models, technology, and AI-readiness.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "3P Solutions | Contact Centre Performance for the AI Era",
    description:
      "Improve the business behind the customer experience. 3P Solutions helps leaders align people, process, performance, technology, and AI to build stronger contact centre operations.",
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
