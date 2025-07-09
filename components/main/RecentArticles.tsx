"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { articles } from "@/lib/articlesData";
import ArticleCard from "@/components/blog/recent-articles/ArticleCard";
import DotPagination from "@/components/common/DotPagination";
import NumberPagination from "@/components/common/NumberPagination";

const ITEMS_PER_PAGE = 3;

export default function RecentArticles() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const goToPage = (pageIndex: number) => {
    const slideIndex = pageIndex * ITEMS_PER_PAGE;
    swiperRef.current?.slideToLoop(slideIndex);
    setActiveGroup(pageIndex);
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-20 mb-10">
      <h1 className="text-2xl font-bold mb-10">Recent Articles</h1>

      <DotPagination total={totalPages} activeIndex={activeGroup} onClick={goToPage} />

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
        {articles.map((slide, index) => (
          <SwiperSlide key={index}>
            <ArticleCard image={slide.image} text={slide.text} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <NumberPagination total={totalPages} activeIndex={activeGroup} onNavigate={goToPage} />
    </div>
  );
}
