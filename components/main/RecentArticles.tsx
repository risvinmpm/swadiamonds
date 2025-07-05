'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const slides = [
  { id: 1, src: '/img_10.jpg', alt: 'Slide 1' },
  { id: 2, src: '/img_11.webp', alt: 'Slide 2' },
  { id: 3, src: '/img_12.jpg', alt: 'Slide 3' },
  { id: 4, src: '/img_4.jpg', alt: 'Slide 4' },
  { id: 5, src: '/img_5.jpg', alt: 'Slide 5' },
  { id: 6, src: '/img_1.jpg', alt: 'Slide 6' },
  { id: 7, src: '/img_2.jpg', alt: 'Slide 7' },
  { id: 8, src: '/img_3.jpg', alt: 'Slide 8' },
  { id: 9, src: '/img_6.jpg', alt: 'Slide 9' }
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

      {/* Top-right pagination dots (match pages not slides) */}
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
        spaceBetween={20}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={400}
              height={300}
              className="w-full h-[300px] object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Number Pagination with active top border */}
      <div className="relative mt-6 flex justify-center items-center text-gray-500 font-light">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200" />

        <div
          className="absolute top-0 h-0.5 bg-[#00464d] transition-all duration-300"
          style={{
            width: '32px',
            left: `calc(50% - ${totalPages * 18}px + ${activeGroup * 36}px)`
          }}
        />

        <button
          onClick={() =>
            goToPage((activeGroup - 1 + totalPages) % totalPages)
          }
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
