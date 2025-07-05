'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const slides = [
  {
    image: '/img_10.jpg',
    text: 'A brighter reason to visit us today!'
  },
  {
    image: '/hiring.jpg',
    text: 'We are hiring....!! .come join us on this journey'
  },
  {
    image: '/img_12.jpg',
    text: 'Something beautiful has just arrived.'
  },
  {
    image: '/img_2.jpg',
    text: 'A brighter reason to visit us today!'
  },
   {
    image: '/img_1.jpg',
    text: 'A brighter reason to visit us today! New treasures are waiting for you. Don’t miss this!'
  },
  {
    image: '/img_2.jpg',
    text: 'New treasures are waiting for you.'
  },
  {
    image: '/img_3.jpg',
    text: 'Shine alert: You don’t want to miss this!'
  },
  {
    image: '/img_4.jpg',
    text: 'New diamond collection just arrived – come shine!'
  }
];

const ITEMS_PER_PAGE = 3;

const RecentArticles = () => {
  const swiperRef = useRef<any>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const totalPages = Math.ceil(slides.length / ITEMS_PER_PAGE);

  const goToPage = (pageIndex: number) => {
    const slideIndex = pageIndex * ITEMS_PER_PAGE;
    swiperRef.current?.slideToLoop(slideIndex);
    setActiveGroup(pageIndex);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-10">Recent Articles</h1>

      {/* Top-right pagination dots */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`transition-all h-2 rounded-full ${
              activeGroup === idx ? 'w-10 bg-[#00464d]' : 'w-2 bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Swiper Carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) =>
          setActiveGroup(Math.floor(swiper.realIndex / ITEMS_PER_PAGE))
        }
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={30}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-md shadow-md">
              <Image
                src={slide.image}
                alt={`slide-${index}`}
                width={400}
                height={300}
                className="w-full h-[350px] object-cover rounded-md"
              />
              <div className="absolute bottom-0 bg-white px-4 py-7 rounded-md shadow-md transition-transform duration-300 group-hover:translate-y-2 max-w-[85%]">
                <p className="text-lg leading-snug font-semibold">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Number Pagination with active top border */}
      <div className="relative mt-10 flex justify-center items-center text-gray-500 font-light">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200" />
        <div
          className="absolute top-0 h-0.5 bg-[#00464d] transition-all duration-300"
          style={{
            width: '32px',
            left: `calc(50% - ${totalPages * 18}px + ${activeGroup * 36}px)`
          }}
        />
        <button
          onClick={() => goToPage((activeGroup - 1 + totalPages) % totalPages)}
          className="text-xl text-[#00464d] px-3"
        >
          ←
        </button>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`px-2 py-3 text-lg transition-colors ${
              activeGroup === idx ? 'text-[#00464d] font-semibold' : ''
            }`}
          >
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage((activeGroup + 1) % totalPages)}
          className="text-xl text-[#00464d] px-3"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RecentArticles;
