import React from "react";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="bg-noise rounded-3xl overflow-hidden">
      <Image
        src="/tony.png"
        alt="tony"
        width={400}
        height={600}
        className="w-full h-full overflow-hidden aspect-square"
      />
    </div>
  );
};

export default ProfileImage;
