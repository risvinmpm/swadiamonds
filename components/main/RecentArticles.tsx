'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const slides = [
  { id: 1, src: '/img_1.jpg', alt: 'Slide 1' },
  { id: 2, src: '/img_2.jpg', alt: 'Slide 2' },
  { id: 3, src: '/img_3.jpg', alt: 'Slide 3' },
  { id: 4, src: '/img_4.jpg', alt: 'Slide 4' },
  { id: 5, src: '/img_5.jpg', alt: 'Slide 5' }
];

const RecentArticles = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-10">Recent Articles</h1>

      {/* Top-right dot indicators */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`transition-all h-2 rounded-full ${
              activeIndex === idx ? 'w-6 bg-[#00464d]' : 'w-2 bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Swiper Carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
        {/* Top border line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200" />

        {/* Active underline */}
        <div
          className="absolute top-0 h-0.5 bg-[#00464d] transition-all duration-300"
          style={{
            width: '32px',
            left: `calc(50% - ${slides.length * 18}px + ${activeIndex * 36}px)`
          }}
        />

        {/* Arrows + Pagination */}
        <button
          onClick={() =>
            swiperRef.current?.slideToLoop(
              (activeIndex - 1 + slides.length) % slides.length
            )
          }
          className="text-xl text-[#00464d] px-3"
        >
          ←
        </button>

        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`px-2 py-3 text-lg transition-colors ${
              activeIndex === idx ? 'text-[#00464d] font-semibold' : ''
            }`}
          >
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </button>
        ))}

        <button
          onClick={() =>
            swiperRef.current?.slideToLoop((activeIndex + 1) % slides.length)
          }
          className="text-xl text-[#00464d] px-3"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RecentArticles;
