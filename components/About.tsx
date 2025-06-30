import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-noise flex w-full flex-col justify-between rounded-3xl p-8"
    >
      <div>
        <h2 className="mb-4 text-sm text-primary">ABOUT</h2>
        {/* Give your about me here */}
        <p className="text-2xl font-medium">
          Passionate about design and enjoy solving problems.
        </p>
      </div>
      <div className="mt-8 flex justify-end gap-4">
        {/* Give your Resume link here */}
        <button className="rounded-2xl border bg-neutral-400 p-2 text-secondary transition-colors hover:bg-zinc-700 dark:bg-zinc-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-[8px] bg-zinc-900 p-2 text-sm font-medium dark:bg-white">
              Resume
            </div>
            <ArrowUpRight className="size-5 text-black dark:text-white" />
          </Link>
        </button>
        <button className="rounded-2xl border bg-neutral-400 p-2 text-secondary transition-colors hover:bg-zinc-700 dark:bg-zinc-800">
          <Link href="/projects" className="flex items-center gap-2">
            <div className="rounded-[8px] bg-zinc-900 p-2 text-sm font-medium dark:bg-white">
              Projects
            </div>
            <ArrowUpRight className="size-5 text-black dark:text-white" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
