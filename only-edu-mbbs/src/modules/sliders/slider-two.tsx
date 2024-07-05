"use client";
import Image from "next/image";
import React from "react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ImageAttributes } from "@/types/types";
import { University } from "lucide-react";
import Link from "next/link";

interface UniversityProfile {
  backgroundImage: ImageAttributes;
}

interface University {
  id: number;
  title: string;
  slug: string;
  universityProfile: UniversityProfile;
}

interface UniversitiesData {
  universities: {
    data: University[];
  };
}
interface Props {
  data: UniversitiesData;
}

const UniversitiesRail = ({ data }: Props) => {
  const baseUrl = "https://admin.onlyeducation.co.in";
  return (
    <>
      <div className="px-2 sm:px-12 mt-12 relative h-fit">
        <h4 className="font-semibold text-dark dark:text-light text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 md:mb-10  items-center flex sm:flex-row">
          <span className="mb-2">Top universities </span>
          <span className="sm:text-lg text-sm font-light text-accent hidden sm:block sm:ml-2">
            to get admissons in
          </span>
        </h4>
        <div className="w-full h-full relative">
          <Swiper
            speed={600}
            spaceBetween={40}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              530: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1080: {
                slidesPerView: 3.3,
                spaceBetween: 40,
              },
            }}
            navigation={{ nextEl: ".back1", prevEl: ".front1" }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            className="swiper"
          >
            {data.universities.data.map((university) => (
              <SwiperSlide key={university.id}>
                <Link href={`study/uni/${university.slug}`}>
                  <div className="  rounded-md aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative shadow-md group overflow-hidden cursor-pointer ">
                    <Image
                      src={
                        baseUrl +
                        university.universityProfile.backgroundImage.url
                      }
                      alt={university.title}
                      fill={true}
                      className="object-center object-cover rounded-md group-hover:scale-105 transition-transform ease-out duration-300 "
                    />
                    <span className="font-bold text-sm sm:text-lg md:text-xl absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light w-full flex justify-center">
                      {university.title}
                    </span>

                    <span className="w-full h-full absolute top-0 left-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                    <span className="w-full h-[50%] absolute bottom-0 left-0   bg-gradient-to-t from-dark/80 to-transparent  transition-opacity duration-300 ease-out"></span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <span className="back hidden sm:block transition ease-in-out absolute top-1/2  cursor-pointer z-20 bg-white sm:p-3 border rounded-full text-3xl text-black textglobal drop-shadow-lg hover:translate-x-1 back1  -translate-y-1/2 -right-7">
            <MdOutlineArrowRightAlt />
          </span>
          <span className="front transition hidden sm:block  ease-in-out cursor-pointer rotate-180 z-20 absolute bg-white sm:p-3 border rounded-full text-3xl text-black textglobal drop-shadow-lg hover:-translate-x-1 top-1/2 front1  -translate-y-1/2 -left-7">
            <MdOutlineArrowRightAlt />
          </span>
        </div>
      </div>
      <div className="h-6 w-full"></div>
    </>
  );
};

export default UniversitiesRail;
