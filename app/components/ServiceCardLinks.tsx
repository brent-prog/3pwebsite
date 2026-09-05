"use client";

import { useEffect } from "react";

const serviceLinks: Record<string, string> = {
  "Contact Centre Performance & AI Gap Review": "/cx-ai-technology-gap-review",
  "Operating Model, Knowledge & SOPs": "/contact-centre-consulting",
  "Performance Management & Business Reviews": "/contact-centre-consulting",
  "Leadership, QA, Training & Coaching": "/contact-centre-consulting",
  "CX / BPO Performance Improvement": "/contact-centre-consulting",
  "Fractional COO / Executive Advisory": "/contact-centre-consulting",
};

export default function ServiceCardLinks() {
  useEffect(() => {
    const section = document.querySelector("#services");
    if (!section) return;

    const headings = Array.from(section.querySelectorAll("h3"));
    const cleanups: Array<() => void> = [];

    headings.forEach((heading) => {
      const title = heading.textContent?.trim() || "";
      const href = serviceLinks[title];
      const card = heading.closest("div.rounded-3xl") as HTMLDivElement | null;
      if (!href || !card) return;

      card.style.cursor = "pointer";
      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Learn more about ${title}`);

      const navigate = () => {
        window.location.href = href;
      };

      const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest("a,button")) return;
        navigate();
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate();
        }
      };

      card.addEventListener("click", handleClick);
      card.addEventListener("keydown", handleKeyDown);

      cleanups.push(() => {
        card.removeEventListener("click", handleClick);
        card.removeEventListener("keydown", handleKeyDown);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
