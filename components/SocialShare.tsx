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

const Socials = [
  {
    name: "X",
    icon: <IconBrandX className="text-gray-700 dark:text-gray-300" />,
    href: "https://x.com/dev_sanjid",
  },
  {
    name: "Github",
    icon: <IconBrandGithub className="text-gray-700 dark:text-gray-300" />,
    href: "https://github.com/m-sanjid",
  },
  {
    name: "Instagram",
    icon: <IconBrandInstagram className="text-gray-700 dark:text-gray-300" />,
    href: "https://instagram.com/dev_sanjid",
  },
  {
    name: "Linkedin",
    icon: <IconBrandLinkedin className="text-gray-700 dark:text-gray-300" />,
    href: "https://linkedin.com/in/muhammed_sanjid1",
  },
  {
    name: "Mail",
    icon: <IconMail className="text-gray-700 dark:text-gray-300" />,
    href: "mailto:contact@sanjid.in",
  },
  {
    name: "Facebook",
    icon: <IconBrandFacebook className="text-gray-700 dark:text-gray-300" />,
    href: "https://facebook.com/",
  },
];

const SocialShare = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="grid grid-cols-2 gap-8 rounded-3xl p-8 md:col-span-1"
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
                  "bg-gray-100 shadow-inner shadow-gray-400 dark:bg-zinc-800 dark:shadow-neutral-950"
                : // Default/Hover state
                  "bg-gray-100 shadow-md shadow-gray-300 dark:bg-zinc-800 dark:shadow-zinc-900"
            } `}
          >
            {social.icon}
          </div>
          {hoveredIndex === index && (
            <div className="absolute -bottom-6 w-full text-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {social.name}
              </span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialShare;
