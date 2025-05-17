"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
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
        className="relative w-14 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-full transition-colors duration-300 flex items-center px-1"
        aria-label="Toggle Theme"
      >
        <div
          className={`absolute inset-0 flex items-center justify-between px-2 text-white text-xs pointer-events-none`}
        >
          <Sun className="size-4 text-yellow-400" />
          <Moon className="size-4 text-sky-400" />
        </div>
        <span
          className={`z-10 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
