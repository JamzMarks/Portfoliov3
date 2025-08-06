"use client";
import { Ref, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProjectCard, ProjectCardProps } from "../ui/ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconType } from "react-icons";

interface ProjectsSwiperProps {
  projects: ProjectCardProps[];
}
export const ProjectsSwiper = ({ projects }: ProjectsSwiperProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative">
      {/* Botões custom */}
      <NavigationButton
        Icon={FaChevronLeft}
        btnRef={prevRef}
        direction="prev"
      />
      <NavigationButton
        Icon={FaChevronRight}
        btnRef={nextRef}
        direction="next"
      />
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={600}
        pagination={{ clickable: true, 
          bulletActiveClass: "swiper-pagination-bullet", 
          bulletClass: "swiper-pagination-bullet-active" 
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;

        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="!min-w-0"
      >
        {projects.map((item, i) => (
          <SwiperSlide
            key={item.title}
            className="!min-w-0 !w-full flex justify-center mb-10"
          >
            <div className="w-2/3 mx-auto">
              <ProjectCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
                techs={item.techs}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const NavigationButton = ({
  Icon,
  btnRef,
  direction,
}: {
  Icon: IconType;
  btnRef: Ref<HTMLButtonElement>;
  direction: "next" | "prev";
}) => {
  return (
    <button
      aria-label={`${direction == "next" ? "Next" : "Previous"}`}
      type="button"
      ref={btnRef}
      className={`cursor-pointer absolute text-cyan-500 hover:text-cyan-400 p-2 rounded-full transition ${
        direction == "prev"
          ? " left-2 top-1/2 z-10 -translate-y-1/2" 
          : "right-2 top-1/2 z-10 -translate-y-1/2"
      }  `}
    >
      <Icon size={20} />
    </button>
  );
};
