"use client";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "../ui/ProjectCard";

export const ProjectsSwiper = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-6 min-h-[150px]">
      <div className="absolute w-full  max-w-7xl">
        <Swiper
          modules={[Navigation, Pagination]}
          // spaceBetween={24}
          slidesPerView={1}
          loop={true}
          // navigation={true}
          pagination={{ clickable: true }}
          className="!pb-10 ease-in-out duration-300 "
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <SwiperSlide key={i} className="!flex !justify-center">
              {/* <ProjectCard
                title={`Projeto ${i + 1}`}
                description="Este é um projeto de exemplo que demonstra minhas habilidades em desenvolvimento web."
                imageUrl="/a.png"
                link="#"
              /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
