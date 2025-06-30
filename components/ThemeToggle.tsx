"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const current = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = current || (userPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleTheme}
        className="relative flex h-8 w-14 items-center rounded-xl bg-zinc-800 px-1 transition-colors duration-300 dark:bg-zinc-700"
        aria-label="Toggle Theme"
      >
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-xs text-white`}
        >
          <Sun className="size-4 text-yellow-400" />
          <Moon className="size-4 text-sky-400" />
        </div>
        <span
          className={`z-10 h-6 w-6 transform rounded-lg bg-white shadow-md transition-transform duration-300 dark:bg-zinc-900 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
