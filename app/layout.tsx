import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://completeloop.io"),
  title: "CompleteLoop | Coaching Documentation as Operational Signal",
  description: "CompleteLoop helps managers document coaching, verify follow-up, and reveal repeat training, process, and knowledge gaps.",
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title: "CompleteLoop | Coaching Documentation as Operational Signal",
    description: "Turn everyday coaching into the signal that shows why execution problems keep repeating.",
    type: "website",
    images: ["/favicon.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
