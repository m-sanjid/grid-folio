"use client";

import {
  IconBrandGithub,
  IconBrandX,
  IconBriefcase,
  IconHome,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

// Change it to your own links
const navItems = [
  {
    name: "Home",
    href: "/",
    icon: IconHome,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: IconBriefcase,
  },
  {
    name: "Github",
    href: "https://github.com/m-sanjid",
    icon: IconBrandGithub,
    external: true,
  },
  {
    name: "X",
    href: "https://x.com/dev_sanjid",
    icon: IconBrandX,
    external: true,
  },
];

const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      onMouseLeave={() => setHoveredIndex(null)}
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      }}
    >
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl sm:gap-3 sm:px-6 sm:py-4 dark:border-zinc-700/50 dark:bg-zinc-900/80">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = !item.external && isActive(item.href);

          return (
            <Link
              key={index}
              href={item.href}
              className="group relative focus:outline-none"
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              {...(item.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative flex h-12 w-12 flex-col items-center justify-center sm:h-14 sm:w-14"
              >
                {/* Hover background */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 rounded-xl bg-white/20 dark:bg-zinc-600/30"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>

                {/* Active background */}
                {active && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-[#FF6140]"
                    layoutId="active-bg"
                  />
                )}

                {/* Glow effect on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-[#FF6140]/30 blur-md"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 0.5, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <Icon
                  className={`relative z-10 h-5 w-5 transition-colors duration-200 sm:h-6 sm:w-6 ${
                    active
                      ? "text-white"
                      : hoveredIndex === index
                        ? "text-primary"
                        : "text-muted-foreground"
                  }`}
                />

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: -50, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 rounded-lg bg-neutral-900/90 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-lg backdrop-blur-sm dark:bg-white/90 dark:text-neutral-900"
                    >
                      {item.name}
                      <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-4 border-r-4 border-l-4 border-transparent border-t-neutral-900/90 dark:border-t-white/90" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active indicator dot */}
                {active && (
                  <motion.div
                    className="bg-primary absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                    layoutId="active-dot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;
