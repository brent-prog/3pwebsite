import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3P Solutions | Brent Pattison",
  description:
    "Practical advisory support for CEOs and executive teams of service businesses navigating growth, change, integration, and performance improvement.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "3P Solutions | Brent Pattison",
    description: "Find and fix the operational gaps slowing growth, margin, and customer experience.",
    type: "website",
    images: ["/3p-logo.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
