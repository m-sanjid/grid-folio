"use client";

import React, { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiFramer,
} from "react-icons/si";
import { motion } from "motion/react";

const techStack = [
  {
    name: "React",
    icon: <SiReact className="size-8 text-cyan-400" />,
    bg: "bg-cyan-900/50",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="size-8 text-white" />,
    bg: "bg-neutral-800/70",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="size-8 text-sky-400" />,
    bg: "bg-sky-900/50",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="size-8 text-blue-500" />,
    bg: "bg-blue-900/50",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="size-8 text-green-500" />,
    bg: "bg-green-900/50",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="size-8 text-sky-700" />,
    bg: "bg-sky-950/50",
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="size-8 text-emerald-400" />,
    bg: "bg-emerald-900/50",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="size-8 text-pink-400" />,
    bg: "bg-pink-900/50",
  },
];

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      id="techStack"
      className="bg-noise rounded-3xl p-8 text-black dark:text-white md:col-span-2"
    >
      <h2 className="mb-6 text-2xl font-medium">Stack I use</h2>
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      >
        {techStack.map(({ name, icon, bg }, index) => (
          <div
            key={name}
            className="relative flex cursor-pointer items-center justify-center rounded-xl bg-secondary/20 p-4 text-primary transition-transform hover:scale-105"
            title={name}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className={`${bg} rounded-xl p-3`}>{icon}</div>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                layoutId="techStack"
                className="absolute -top-4 flex items-center justify-center rounded-xl bg-primary px-2 py-px"
              >
                <p className="text-sm font-medium text-secondary">{name}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
