import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="bg-noise rounded-3xl p-8 md:col-span-2 flex flex-col justify-center">
      <h1 className="text-3xl font-medium mb-4">Hi, I&apos;m Tony Stark —</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Lead product designer, currently working at{" "}
        <Link href="#" className="underline underline-offset-4 text-primary">
          Stark Industries
        </Link>{" "}
        based in New York
      </p>
    </div>
  );
};

export default Intro;
