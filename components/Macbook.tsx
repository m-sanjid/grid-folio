import Image from "next/image";
import React from "react";

const Macbook = () => {
  return (
    <div className="bg-noise hidden w-full overflow-hidden rounded-3xl md:col-span-1 lg:block">
      {/* Give link to your setup or any image here */}
      <Image
        src="/macbook.jpeg"
        alt="mac"
        width={400}
        height={600}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Macbook;
