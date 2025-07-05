"use client";

import Image from "next/image";
import React from "react";
import certificate from "../../public/Certificate.png";
import BannerList from "../main/BannerList";
import RightSideList from "../main/RightSideList";

const Banner = () => {
  return (
    <div className="border-b border-gray-200 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
        {/* Left side: Image + Heading + BannerList */}
        <div className="md:col-span-8 space-y-6">
          {/* Image with gradient overlay and heading */}
          <div className="relative w-full overflow-hidden rounded-md shadow-lg">
            <Image
              src={certificate}
              alt="Certificate"
              className="w-full h-auto object-cover"
              priority
              width={800}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,26,71,0)] to-[rgba(2,26,71,0.6)]" />
            <h1 className="absolute z-20 bottom-10 left-7 text-white text-3xl font-bold">
              Guiness World Record
            </h1>
          </div>

          {/* BannerList below image */}
          <div>
            <BannerList />
          </div>
        </div>

        {/* Right side: Text content */}
        <div className="md:col-span-4">
          <RightSideList />
        </div>
      </div>
    </div>
  );
};

export default Banner;
