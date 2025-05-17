import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <Link
      href="/projects"
      className="md:col-span-2 gap-4 flex h-full w-full rounded-3xl p-8 bg-noise"
    >
      <h2 className="text-sm text-primary mb-4">PROJECTS</h2>
    </Link>
  );
};

export default ProjectCard;
