"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(7,11,18,0.72)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(7,11,18,0.7)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 text-[var(--text)]" aria-label="Go to home section">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(126,180,255,0.08)] text-xs font-semibold tracking-[0.24em] text-[var(--accent)]">
            DT
          </span>
          <span className="text-base font-semibold tracking-[0.04em]">Daniel Thomas</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {portfolio.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {portfolio.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[var(--border)] py-3 text-sm font-medium text-[var(--muted)] last:border-b-0 hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
