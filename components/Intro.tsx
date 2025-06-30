import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="bg-noise flex flex-col justify-center rounded-3xl p-8 md:col-span-2">
      <h1 className="mb-4 text-3xl font-medium">Hi, I&apos;m Tony Stark —</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Lead product designer, currently working at{" "}
        <Link href="#" className="text-primary underline underline-offset-4">
          Stark Industries
        </Link>{" "}
        based in New York
      </p>
    </div>
  );
};

export default Intro;
