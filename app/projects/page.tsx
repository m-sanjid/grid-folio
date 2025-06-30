"use client";

import React, { useState } from "react";
import { projects } from "@/lib/constants";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const Projects = () => {
  const ProjectCard = ({ project }: { project: any }) => {
    const [hovered, setHovered] = useState(false);
    const sizeClasses: Record<string, string> = {
      small: "col-span-1 row-span-1",
      medium:
        project.id % 2 !== 0
          ? "col-span-1 row-span-2"
          : "col-span-2 row-span-1",
      large: "col-span-2 row-span-2",
    };

    return (
      <div
        className={`${
          sizeClasses[project.size]
        } bg-noise relative overflow-hidden rounded-xl transition-all duration-300`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image Container - Always present but with overlay on non-hover */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full object-cover transition-all duration-500 ${
              hovered ? "scale-105 opacity-100" : "opacity-20"
            }`}
          />
          {/* Dark gradient overlay when not hovered */}
          {!hovered && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
          )}
        </div>

        {/* Content Container */}
        <div
          className={`relative z-10 flex h-full flex-col justify-between p-6 transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div>
            <div className="mb-4 flex items-start justify-between">
              <span className="inline-block rounded-lg bg-accent p-2 text-primary">
                {project.icon}
              </span>
              <span className="rounded-full bg-accent px-2 py-1 text-xs font-medium text-muted-foreground">
                {project.category}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200">{project.description}</p>
          </div>

          <div className="mt-6">
            <a
              href={project.link}
              className="flex items-center text-sm font-medium text-white hover:text-gray-200"
            >
              View Project
              <IconArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Hover overlay with view button */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href={project.link}
            className="flex items-center rounded-md bg-white px-4 py-2 font-medium text-black transition-all hover:bg-gray-100"
          >
            View Project
            <IconArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-200 px-4 py-12 dark:bg-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">My Projects</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A collection of my work across web development, design, and
            programming
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <Link href="/" className="bg-noise h-full rounded-xl p-6">
            <div className="flex h-full items-center justify-center">
              <h3 className="mb-2 text-xl font-bold text-white">Go Back</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
