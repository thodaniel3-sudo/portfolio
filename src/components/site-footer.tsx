import Link from "next/link";

import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-[var(--text)]">{portfolio.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Materials & Metallurgical Engineer
            <span className="mx-2 text-[var(--border)]">|</span>
            Materials Informatics | AI | Software Development
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          {portfolio.nav.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-[var(--text)]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          {portfolio.contact.github ? (
            <Link href={portfolio.contact.github} target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
              GitHub
            </Link>
          ) : null}
          {portfolio.contact.linkedin ? (
            <Link href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
              LinkedIn
            </Link>
          ) : null}
          {portfolio.contact.email ? (
            <Link href={`mailto:${portfolio.contact.email}`} className="hover:text-[var(--text)]">
              Email
            </Link>
          ) : null}
        </div>
      </div>

      <div className="section-shell mt-5 border-t border-[var(--border)] pt-4 text-center text-sm text-[var(--muted)]">
        © {currentYear} {portfolio.name}. Built with Next.js.
      </div>
    </footer>
  );
}
