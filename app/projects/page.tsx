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
        } relative overflow-hidden rounded-xl bg-noise transition-all duration-300`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image Container - Always present but with overlay on non-hover */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? "opacity-100 scale-105" : "opacity-20"
            }`}
          />
          {/* Dark gradient overlay when not hovered */}
          {!hovered && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
          )}
        </div>

        {/* Content Container */}
        <div
          className={`relative z-10 h-full flex flex-col justify-between p-6 transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block p-2 rounded-lg bg-accent text-primary">
                {project.icon}
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent text-muted-foreground">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm">{project.description}</p>
          </div>

          <div className="mt-6">
            <a
              href={project.link}
              className="text-white text-sm font-medium hover:text-gray-200 flex items-center"
            >
              View Project
              <IconArrowRight className="w-4 h-4 ml-1" />
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
            className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-all flex items-center"
          >
            View Project
            <IconArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work across web development, design, and
            programming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
