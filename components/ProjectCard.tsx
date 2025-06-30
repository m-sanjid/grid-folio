import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <Link
      href="/projects"
      className="bg-noise flex h-full w-full flex-col gap-4 rounded-3xl p-8 md:col-span-3 lg:col-span-2"
    >
      <h2 className="mb-4 text-sm text-primary">PROJECTS</h2>
      <p className="mb-auto text-sm font-medium md:text-lg">
        A collection of my work across web development, design, and programming
      </p>
    </Link>
  );
};

export default ProjectCard;
