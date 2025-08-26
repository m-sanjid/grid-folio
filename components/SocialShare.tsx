"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { motion } from "motion/react";

const Socials = [
  {
    name: "X",
    icon: <IconBrandX className="text-neutral-700 dark:text-neutral-300" />,
    href: "https://x.com/dev_sanjid",
  },
  {
    name: "Github",
    icon: (
      <IconBrandGithub className="text-neutral-700 dark:text-neutral-300" />
    ),
    href: "https://github.com/m-sanjid",
  },
  {
    name: "Instagram",
    icon: (
      <IconBrandInstagram className="text-neutral-700 dark:text-neutral-300" />
    ),
    href: "https://instagram.com/dev_sanjid",
  },
  {
    name: "Linkedin",
    icon: (
      <IconBrandLinkedin className="text-neutral-700 dark:text-neutral-300" />
    ),
    href: "https://linkedin.com/in/muhammed_sanjid1",
  },
  {
    name: "Mail",
    icon: <IconMail className="text-neutral-700 dark:text-neutral-300" />,
    href: "mailto:contact@sanjid.in",
  },
  {
    name: "Facebook",
    icon: (
      <IconBrandFacebook className="text-neutral-700 dark:text-neutral-300" />
    ),
    href: "https://facebook.com/",
  },
];

const SocialShare = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="bg-primary/10 grid grid-cols-2 gap-8 rounded-3xl p-8 backdrop-blur-lg md:col-span-1"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {Socials.map((social, index) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseDown={() => setActiveIndex(index)}
          onMouseUp={() => setActiveIndex(null)}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative flex items-center justify-center"
        >
          <div
            className={`flex w-full transform items-center justify-center rounded-2xl py-4 transition-all duration-300 ${hoveredIndex === index ? "scale-95" : "scale-100"} ${
              activeIndex === index
                ? // Pressed state
                  "bg-neutral-100 shadow-inner shadow-neutral-400 dark:bg-zinc-800 dark:shadow-neutral-950"
                : // Default/Hover state
                  "bg-neutral-100 shadow-md shadow-neutral-300 dark:bg-zinc-800 dark:shadow-zinc-900"
            } `}
          >
            {social.icon}
          </div>
          {hoveredIndex === index && (
            <motion.div
              layoutId="tooltip-social"
              className="absolute -bottom-6 w-full text-center"
            >
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {social.name}
              </span>
            </motion.div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialShare;
