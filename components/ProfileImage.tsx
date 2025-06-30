import React from "react";
import Image from "next/image";

const ProfileImage = () => {
  // Give your profile image here
  return (
    <div className="bg-noise overflow-hidden rounded-3xl">
      <Image
        src="/tony.png"
        alt="tony"
        width={400}
        height={600}
        className="aspect-square h-full w-full overflow-hidden"
      />
    </div>
  );
};

export default ProfileImage;
