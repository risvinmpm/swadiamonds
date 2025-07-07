'use client';

import React from "react";
import { rightSideItems } from "@/lib/rightSideItems";
import RightSideItemCard from "./RightSideItemCard";

const RightSideList = () => {
  return (
    <section className="space-y-4">
      {rightSideItems.map((item, index) => (
        <RightSideItemCard
          key={item.slug}
          item={item}
          isLast={index === rightSideItems.length - 1}
        />
      ))}
    </section>
  );
};

export default RightSideList;
