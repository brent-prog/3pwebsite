"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "../components/SiteHeader";
import CallToAction from "../components/CallToAction";

export default function BlogLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showArticleCTA = pathname !== "/blog";

  return (
    <>
      <SiteHeader />
      {children}
      {showArticleCTA && (
        <div className="bg-slate-50 px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <CallToAction />
          </div>
        </div>
      )}
    </>
  );
}
