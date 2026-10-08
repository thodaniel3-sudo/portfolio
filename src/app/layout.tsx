import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteUrl } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Thomas | Materials & Metallurgical Engineer | Materials Informatics & AI",
    template: "%s | Daniel Thomas",
  },
  description:
    "Portfolio of Daniel Thomas, a Materials and Metallurgical Engineering graduate interested in materials informatics, computational materials science, machine learning, sustainable materials, and software development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Thomas | Materials & Metallurgical Engineer | Materials Informatics & AI",
    description:
      "Portfolio of Daniel Thomas, a Materials and Metallurgical Engineering graduate interested in materials informatics, computational materials science, machine learning, sustainable materials, and software development.",
    url: siteUrl,
    siteName: "Daniel Thomas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Thomas | Materials & Metallurgical Engineer | Materials Informatics & AI",
    description:
      "Portfolio of Daniel Thomas, a Materials and Metallurgical Engineering graduate interested in materials informatics, computational materials science, machine learning, sustainable materials, and software development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--text)]">{children}</body>
    </html>
  );
}
