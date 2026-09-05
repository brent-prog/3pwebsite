"use client";

import { useEffect } from "react";

type ServiceTile = {
  title: string;
  text: string;
  href: string;
};

const serviceTiles: Record<string, ServiceTile> = {
  "Contact Centre Performance & AI Gap Review": {
    title: "Contact Centre Performance & AI Gap Review",
    text: "A focused diagnostic across customer experience, operating model, people, process, performance, technology, and AI to identify what is limiting business value and what to fix first.",
    href: "/cx-ai-technology-gap-review",
  },
  "Operating Model, Knowledge & SOPs": {
    title: "Contact Centre Operating Model",
    text: "Align customer journeys, roles, workflows, knowledge, SOPs, governance, metrics, technology, and AI into one operating system built around customer and business value.",
    href: "/contact-centre-operating-model",
  },
  "Performance Management & Business Reviews": {
    title: "Contact Centre Technology & AI",
    text: "Evaluate CCaaS, automation, AI, analytics, knowledge, data, and vendor options against defined business problems, operating readiness, and measurable return.",
    href: "/contact-centre-technology-ai",
  },
  "Leadership, QA, Training & Coaching": {
    title: "Leadership, QA, Training & Coaching",
    text: "Build the management systems that turn expectations into front-line behaviour, proficiency, accountability, improvement, and recognition.",
    href: "/contact-centre-consulting",
  },
  "CX / BPO Performance Improvement": {
    title: "BPO & Outsourcing Optimization",
    text: "Improve outsourced performance across governance, operating standards, scorecards, incentives, quality, workforce, technology, AI, and commercial alignment.",
    href: "/bpo-outsourcing-optimization",
  },
  "Fractional COO / Executive Advisory": {
    title: "Insourcing & Outsourcing Strategy",
    text: "Decide what customer work should stay internal, move to a BPO, operate as hybrid, or be automated based on customer value, economics, capability, risk, and strategy.",
    href: "/contact-centre-insourcing-outsourcing-strategy",
  },
};

export default function ServiceCardLinks() {
  useEffect(() => {
    const section = document.querySelector("#services");
    if (!section) return;

    const headings = Array.from(section.querySelectorAll("h3"));
    const cleanups: Array<() => void> = [];

    headings.forEach((heading) => {
      const originalTitle = heading.textContent?.trim() || "";
      const service = serviceTiles[originalTitle];
      const card = heading.closest("div.rounded-3xl") as HTMLDivElement | null;
      if (!service || !card) return;

      const description = card.querySelector("p.mt-3") as HTMLParagraphElement | null;
      heading.textContent = service.title;
      if (description) description.textContent = service.text;

      card.style.cursor = "pointer";
      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Learn more about ${service.title}`);

      const navigate = () => {
        window.location.href = service.href;
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
