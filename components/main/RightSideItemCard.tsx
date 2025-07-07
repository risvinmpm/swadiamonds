'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightSideItem } from "@/lib/rightSideItems";

const RightSideItemCard = ({
  item,
  isLast,
}: {
  item: RightSideItem;
  isLast: boolean;
}) => {
  return (
    <div className={`flex gap-4 pb-4 ${!isLast ? "border-b border-gray-200" : ""}`}>
      <div className="relative w-[120px] h-[100px] flex-shrink-0 rounded-md overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="120px"
        />
      </div>
      <Link href={`/blog/diamonds/${item.slug}`}>
        <h2 className="text-lg font-semibold hover:text-teal-600 transition-colors duration-300">
          {item.title}
        </h2>
      </Link>
    </div>
  );
};

export default RightSideItemCard;
