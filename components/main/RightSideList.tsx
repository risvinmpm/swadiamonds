'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

import img_1 from '../../public/img_1.jpg';
import img_2 from '../../public/img_2.jpg';
import img_3 from '../../public/img_3.jpg';
import img_4 from '../../public/img_4.jpg';
import img_5 from '../../public/img_5.jpg';
import Link from 'next/link';

interface RightSideItem {
  image: StaticImageData;
  alt: string;
  link: string;
  title: string;
}

const rightSideItems: RightSideItem[] = [
  {
    image: img_1,
    alt: 'Diamond Ad 1',
    link: '/',
    title: 'Diamonds just got more dazzling – visit us now!',
  },
  {
    image: img_2,
    alt: 'Diamond Ad 2',
    link: '/',
    title: 'Something beautiful has just arrived.',
  },
  {
    image: img_3,
    alt: 'Diamond Ad 3',
    link: '/',
    title: 'New arrivals. Endless sparkle.',
  },
  {
    image: img_4,
    alt: 'Diamond Ad 4',
    link: '/',
    title: 'The shine you love is back!',
  },
  {
    image: img_5,
    alt: 'Diamond Ad 5',
    link: '/',
    title: 'A brighter reason to visit us today!',
  },
];

const RightSideList = () => {
  return (
    <section className="space-y-4">
      {rightSideItems.map((item, index) => (
        <div
          key={index}
          className={`flex gap-4 pb-4 ${
            index !== rightSideItems.length - 1 ? 'border-b border-gray-200' : ''
          }`}
        >
          {/* Image Wrapper with fixed size */}
          <div className="relative w-[120px] h-[100px] flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>

          {/* Text */}
         <Link href={item.link}><h2 className="text-lg font-semibold">{item.title}</h2></Link>
        </div>
      ))}
    </section>
  );
};

export default RightSideList;
