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
    icon: <SiReact className="text-cyan-400 size-8" />,
    bg: "bg-cyan-900/50",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white size-8" />,
    bg: "bg-neutral-800/70",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 size-8" />,
    bg: "bg-sky-900/50",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 size-8" />,
    bg: "bg-blue-900/50",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 size-8" />,
    bg: "bg-green-900/50",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-sky-700 size-8" />,
    bg: "bg-sky-950/50",
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="text-emerald-400 size-8" />,
    bg: "bg-emerald-900/50",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-pink-400 size-8" />,
    bg: "bg-pink-900/50",
  },
];

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      id="techStack"
      className="bg-noise text-black dark:text-white rounded-3xl p-8 md:col-span-2"
    >
      <h2 className="text-2xl font-medium mb-6">Stack I use</h2>
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {techStack.map(({ name, icon, bg }, index) => (
          <div
            key={name}
            className="relative bg-secondary/20 text-primary rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            title={name}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className={`${bg} p-3 rounded-xl`}>{icon}</div>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                layoutId="techStack"
                className="absolute -top-4 bg-primary flex items-center justify-center rounded-xl px-2 py-px"
              >
                <p className="text-secondary text-sm font-medium">{name}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
