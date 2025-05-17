import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-noise rounded-3xl p-8 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-sm text-primary mb-4">ABOUT</h2>
        <p className="text-2xl font-medium">
          Passionate about design and enjoy solving problems.
        </p>
      </div>
      <div className="flex justify-end mt-8">
        <button className="rounded-full p-2 bg-zinc-800 hover:bg-zinc-700 text-secondary transition-colors">
          <Link href="/projects" className="flex items-center gap-2">
            <div className="text-sm font-medium dark:bg-white bg-zinc-900 p-2 rounded-full">
              Projects
            </div>
            <ArrowUpRight className="size-5 text-white" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
