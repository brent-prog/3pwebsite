"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/#top" className="flex items-center gap-3" aria-label="3P Solutions home">
          <Image
            src="/3p-logo.png"
            alt="3P Solutions logo"
            width={56}
            height={56}
            className="h-12 w-auto"
            priority
          />
          <div>
            <p className="text-sm font-black tracking-wide text-slate-950">3P SOLUTIONS</p>
            <p className="text-xs text-slate-500">AI-readiness through operational alignment</p>
          </div>
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex"
          aria-label="Main navigation"
        >
          <a href="/#readiness" className="hover:text-cyan-700">
            AI-Readiness
          </a>
          <a href="/#who" className="hover:text-cyan-700">
            Who I Help
          </a>
          <a href="/#services" className="hover:text-cyan-700">
            Services
          </a>
          <a href="/#framework" className="hover:text-cyan-700">
            3P Framework
          </a>
          <a href="/#proof" className="hover:text-cyan-700">
            Proof
          </a>
          <a href="/blog" className="hover:text-cyan-700">
            Blog
          </a>
        </nav>

        <a
          href="/cx-ai-technology-gap-review"
          className="hidden items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-700 sm:inline-flex"
        >
          Start with a Gap Review <ArrowRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-2 text-base font-bold text-slate-800">
            <a
              href="/#readiness"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              AI-Readiness
            </a>
            <a
              href="/#who"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Who I Help
            </a>
            <a
              href="/#services"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Services
            </a>
            <a
              href="/#review"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Assessment
            </a>
            <a
              href="/#framework"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              3P Framework
            </a>
            <a
              href="/#proof"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Proof
            </a>
            <a
              href="/blog"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Blog
            </a>
            <a
              href="/#about"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              About
            </a>
            <a
              href="/#praise"
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 hover:bg-cyan-50 hover:text-cyan-700"
            >
              PRAISE
            </a>
            <a
              href="/cx-ai-technology-gap-review"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-white transition hover:bg-cyan-700"
            >
              Start with a Gap Review <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
