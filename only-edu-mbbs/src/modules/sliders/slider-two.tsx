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
import "@/styles/swiper-pagination/pagination.css";

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
      <div className="mt-4 sm:mt-8 lg:mt-10 relative   bg-orange-50 py-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl  items-center flex sm:flex-row">
            <span className="mb-2 capitalize">Top Universities</span>
          </h4>
          <div className="flex gap-x-2 items-center mr-2">
            <span className="front1 transition ease-in-out cursor-pointer rotate-180 z-20  p-2  border rounded-full text-lg sm:text-xl md:text-2xl   text-black textglobal  hover:-translate-x-1">
              <MdOutlineArrowRightAlt />
            </span>
            <span className="back1  transition ease-in-out cursor-pointer rotate-125 z-20  p-2  border rounded-full text-lg sm:text-xl md:text-2xl  text-black textglobal  hover:translate-x-1  ">
              <MdOutlineArrowRightAlt />
            </span>
          </div>
        </div>
        <div className="h-2 w-full"></div>
        <div className="w-full h-full relative ml-3">
          <Swiper
            speed={600}
            spaceBetween={40}
            pagination={true}
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
                slidesPerView: 3.2,
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
        </div>
      </div>
    </>
  );
};

export default UniversitiesRail;
