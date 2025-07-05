"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import collection_2 from "../../public/collection_2.avif";
import img_9 from "../../public/img_9.jpg";
import img_6 from "../../public/img_6.jpg";
import img_7 from "../../public/img_7.jpg";

import icon_fb from "../../public/icon_fb.png";
import icon_tw from "../../public/icon_tw.png";
import icon_ins from "../../public/icon_ins.png";
import icon_yo from "../../public/icon_yo.png";

import img_8 from "../../public/img_8.jpg";

interface WhatsNewItem {
  image: StaticImageData;
  text: string;
}

const items: WhatsNewItem[] = [
  {
    image: collection_2,
    text: "A brighter reason to visit us today! New treasures are waiting for you. Don’t miss this!"
  },
  {
    image: img_9,
    text: "New treasures are waiting for you."
  },
  {
    image: img_6,
    text: "Shine alert: You don’t want to miss this!"
  },
  {
    image: img_7,
    text: "New diamond collection just arrived – come shine!"
  }
];

interface SocialItem {
  icon: StaticImageData;
  label: string;
  count: string;
}

const socialItems: SocialItem[] = [
  {
    icon: icon_fb,
    label: "Fans",
    count: "8,045"
  },
  {
    icon: icon_tw,
    label: "Followers",
    count: "5,210"
  },
  {
    icon: icon_ins,
    label: "Followers",
    count: "10,300"
  },
  {
    icon: icon_yo,
    label: "Subscribers",
    count: "3,870"
  }
];

const WhatsNew = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-7 pt-14 pb-10">
      {/* Left Side - Heading + Image Grid */}
      <div className="md:col-span-8">
        <h1 className="text-2xl font-bold mb-10">What's New</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {items.map((item, index) => (
            <div key={index} className="relative group rounded-md shadow-md">
              {/* Image with fixed width and height */}
              <Image
                src={item.image}
                alt={`whats-new-${index}`}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-md"
              />

              {/* White box overlay at bottom right */}
              <div className="absolute bottom-0 bg-white px-4 py-7 rounded-md shadow-md transition-transform duration-300 group-hover:translate-y-2 max-w-[85%]">
                <p className="text-lg leading-snug font-semibold">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Description or Follow Us */}
      <div className="md:col-span-4">
        <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {socialItems.map((item, index) => (
            <div key={index} className="flex mt-5 gap-4">
              <Image
                src={item.icon}
                alt={item.label}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <div>
                <p className="text-sm font-semibold">{item.count}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={img_8}
          alt="Product"
          width={250}
          height={500}
          className="w-[250px] h-[500px] object-contain mx-auto pt-10 rounded-md"
        />
      </div>
    </div>
  );
};

export default WhatsNew;
