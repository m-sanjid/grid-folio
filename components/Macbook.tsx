import Image from "next/image";
import React from "react";

const Macbook = () => {
  return (
    <div className="bg-noise rounded-3xl overflow-hidden">
      <Image
        src="/macbook.jpeg"
        alt="mac"
        width={400}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Macbook;
