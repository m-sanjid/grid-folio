import Image from "next/image";
import React from "react";

const Image1 = () => {
  return (
    <div className="bg-noise rounded-3xl overflow-hidden">
      <Image
        src="/friday.jpeg"
        alt="friday"
        width={400}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Image1;
