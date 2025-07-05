'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import collection_1 from '../../public/collection_1.png';
import collection_2 from '../../public/collection_2.avif';
import collection_3 from '../../public/collection_3.jpg';

interface BannerItem {
  image: StaticImageData;
  alt: string;
  link: string;
  title: string;
}

const bannerItems: BannerItem[] = [
  {
    image: collection_1,
    alt: 'Diamond Collection 1',
    link: '/',
    title: 'New diamond collection just arrived – come shine!',
  },
  {
    image: collection_2,
    alt: 'Diamond Collection 2',
    link: '/',
    title: 'New diamond collection just arrived – come shine!',
  },
  {
    image: collection_3,
    alt: 'Diamond Collection 3',
    link: '/',
    title: 'New diamond collection just arrived – come shine!',
  },
];

const BannerList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {bannerItems.map((item, index) => (
        <div key={index} className="group">
          <Image
            src={item.image}
            width={300}
            height={200}
            alt={item.alt}
            className="w-full h-[200px] object-cover rounded-md shadow-md"
          />
          <Link href={item.link} className="block mt-5">
            <h2 className="text-lg font-semibold group-hover:text-teal-600 transition-colors duration-300">
              {item.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BannerList;
