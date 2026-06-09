import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://3psolutions.ca"),
  title: "3P Solutions | AI-Readiness & Operational Alignment",
  description:
    "3P Solutions helps service businesses restore trust in the knowledge, SOPs, data, processes, and operating systems that AI, analytics, CX, and leadership decisions depend on.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "3P Solutions | AI-Readiness & Operational Alignment",
    description: "AI is not broken. Untrusted knowledge is.",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
