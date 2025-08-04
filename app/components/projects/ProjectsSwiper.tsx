"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "../ui/ProjectCard";

export const ProjectsSwiper = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Botões custom */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-0 -translate-y-1/2 z-10 cursor-pointer p-4">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div className="swiper-button-next-custom absolute top-1/2 right-0 -translate-y-1/2 z-10 cursor-pointer p-4">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="!pb-10"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <SwiperSlide key={i} className="!flex !justify-center">
            <ProjectCard
              title={`Projeto ${i + 1}`}
              description="Este é um projeto de exemplo que demonstra minhas habilidades em desenvolvimento web."
              imageUrl="/a.png"
              link="#"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
