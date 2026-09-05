"use client";

import { useEffect } from "react";

const desktopItems = [
  { label: "Consulting", href: "/contact-centre-consulting" },
  { label: "Services", href: "#services" },
  { label: "3P Framework", href: "#framework" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

const mobileItems = [
  { label: "Contact Centre Consulting", href: "/contact-centre-consulting" },
  { label: "Services", href: "#services" },
  { label: "Assessment", href: "#review" },
  { label: "3P Framework", href: "#framework" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "#about" },
];

function rewriteNav(nav: HTMLElement, items: Array<{ label: string; href: string }>, keepCta = false) {
  const anchors = Array.from(nav.querySelectorAll(":scope > div > a, :scope > a")) as HTMLAnchorElement[];
  const cta = keepCta ? anchors.find((anchor) => anchor.textContent?.includes("Assess Your Contact Centre")) : undefined;
  const regularAnchors = cta ? anchors.filter((anchor) => anchor !== cta) : anchors;

  items.forEach((item, index) => {
    const anchor = regularAnchors[index];
    if (!anchor) return;
    anchor.textContent = item.label;
    anchor.href = item.href;
  });

  regularAnchors.slice(items.length).forEach((anchor) => anchor.remove());
}

export default function HomeHeaderConsistency() {
  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const header = document.querySelector("main > header") as HTMLElement | null;
    if (!header) return;

    const sync = () => {
      const desktopNav = header.querySelector('nav[aria-label="Main navigation"]') as HTMLElement | null;
      if (desktopNav) rewriteNav(desktopNav, desktopItems);

      const mobileNav = header.querySelector('nav[aria-label="Mobile navigation"]') as HTMLElement | null;
      if (mobileNav) rewriteNav(mobileNav, mobileItems, true);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(header, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
