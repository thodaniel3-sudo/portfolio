"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const subscribe = (onThemeChange: () => void) => {
  window.addEventListener("portfolio-theme-change", onThemeChange);
  window.addEventListener("storage", onThemeChange);

  return () => {
    window.removeEventListener("portfolio-theme-change", onThemeChange);
    window.removeEventListener("storage", onThemeChange);
  };
};

const getThemeSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const getServerThemeSnapshot = (): Theme => "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const nextTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}
