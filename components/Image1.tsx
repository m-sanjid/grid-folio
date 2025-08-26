import Image from "next/image";
import React from "react";
import Link from "next/link";

const Image1 = () => {
  return (
    <Link
      href="/"
      className="relative overflow-hidden rounded-3xl md:col-span-2 lg:col-span-1"
    >
      {/* Give link to featured project here */}
      <Image
        src="/friday.jpeg"
        alt="friday"
        width={400}
        height={600}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10 flex items-end justify-center bg-black/50 opacity-0 backdrop-blur-xs transition-opacity duration-300 ease-in-out hover:opacity-100">
        <p className="bg-noise mb-3 rounded-2xl p-4 text-2xl font-bold">
          View Project
        </p>
      </div>
    </Link>
  );
};

export default Image1;
