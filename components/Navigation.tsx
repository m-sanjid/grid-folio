"use client";

import {
  IconBrandGithub,
  IconBrandX,
  IconBriefcase,
  IconHome,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

// Change it to your own links
const navItems = [
  {
    name: "Home",
    href: "/",
    icon: (
      <IconHome className="h-8 w-8 rounded-xl border bg-black/10 p-1 backdrop-blur-md" />
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: (
      <IconBriefcase className="h-8 w-8 rounded-xl border bg-black/10 p-1 backdrop-blur-md" />
    ),
  },
  {
    name: "Github",
    href: "https://github.com/m-sanjid",
    icon: (
      <IconBrandGithub className="h-8 w-8 rounded-xl border bg-black/10 p-1 backdrop-blur-md" />
    ),
  },
  {
    name: "X",
    href: "https://x.com/dev_sanjid",
    icon: (
      <IconBrandX className="h-8 w-8 rounded-xl border bg-black/10 p-1 backdrop-blur-md" />
    ),
  },
];

const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      onMouseLeave={() => setHoveredIndex(null)}
      className="borderborder-zinc-700/50 fixed bottom-4 left-[25%] z-50 flex items-center gap-4 rounded-2xl bg-white/5 px-6 py-3 shadow-xl backdrop-blur-md dark:bg-zinc-900/50 sm:left-[35%] md:left-[40%]"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="group relative focus:outline-none"
          onMouseEnter={() => setHoveredIndex(index)}
          onFocus={() => setHoveredIndex(index)}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
            className="flex flex-col items-center justify-center text-xs transition-colors"
          >
            <div className="relative flex h-10 w-10 items-center justify-center">
              {hoveredIndex === index && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 rounded-full bg-white/20 blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              {item.icon}
            </div>
            <span className="mt-1 font-medium tracking-tighter">
              {item.name}
            </span>
          </motion.div>
        </Link>
      ))}
    </motion.nav>
  );
};

export default Navigation;
