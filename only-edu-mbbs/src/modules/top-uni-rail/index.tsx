"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ImageAttributes, Universitylist } from "@/types/types";
import "@/styles/swiper-pagination/pagination.css";
import { University } from "lucide-react";
import Link from "next/link";

// interface Props {
//   data: {
//     ImageAttributes: ImageAttributes;
//     CountryProps: CountryProps;
//   };
// }

interface UniversityProfile {
  backgroundImage: ImageAttributes;
}

interface University {
  id: number;
  title: string;
  noOfStudentsStudying: string;
  slug: string;
  universityProfile: UniversityProfile;
}

interface UniversitiesData {
  universities: {
    data: University[];
  };
  // UniversitiesData: UniversitiesData;
}
interface Props {
  data: UniversitiesData;
}
const TopUniRail = ({ data }: Props) => {
  const baseUrl = "https://admin.onlyeducation.co.in";
  console.dir(University);

  return (
    <>
      <div className="px-2 sm:px-12 mt-12 relative ">
        <h4 className="font-semibold text-dark dark:text-light text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 md:mb-10  items-center flex sm:flex-row">
          <span className="mb-2">Top universities </span>
          <span className="sm:text-lg text-sm font-light text-accent hidden sm:block sm:ml-2">
            to get admissons in
          </span>
        </h4>

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
          navigation={{ nextEl: ".back", prevEl: ".front" }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.universities.data.map((university) => (
            <SwiperSlide key={university.id}>
              <Link href={`study/uni/${university.slug}`}>
                <div className="  rounded-lg aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative shadow-md group overflow-hidden cursor-pointer ">
                  <Image
                    src={
                      baseUrl + university.universityProfile.backgroundImage.url
                    }
                    alt={university.title}
                    fill={true}
                    className="object-center object-cover rounded-md group-hover:scale-105 transition-transform ease-out duration-300 "
                  />
                  <span className="font-bold text-sm sm:text-lg md:text-xl absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light w-full flex justify-center">
                    {university.title}
                  </span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 h-6 -translate-y-1/2 z-10 w-full text-sm font-normal text-light overflow-hidden">
                    <p className="translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[380ms] ease-in-out flex items-center w-full text-light justify-center">
                      {university.noOfStudentsStudying} students studying here.
                    </p>
                  </span>
                  <span className="w-full h-full absolute top-0 left-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                  <span className="w-full h-[50%] absolute bottom-0 left-0   bg-gradient-to-t from-dark/80 to-transparent  transition-opacity duration-300 ease-out"></span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" w-full absolute bottom-16">
          <div className="swiper-pagination"></div>
        </div>
        <span className="flex flex-row-reverse mt-12 gap-x-1">
          <span className="back transition ease-in-out cursor-pointer z-20 sm:p-3  border rounded-full  text-3xl text-black  textglobal drop-shadow-lg hover:translate-x-1 hover:bg-dark/10 top-1/2 -translate-y-1/2  right-0">
            <MdOutlineArrowRightAlt />
          </span>
          <span className="front transition ease-in-out  cursor-pointer rotate-180 z-20 sm:p-3  border rounded-full text-3xl text-black textglobal drop-shadow-lg  hover:-translate-x-1 top-1/2 hover:bg-dark/10 -translate-y-1/2 left-0">
            <MdOutlineArrowRightAlt />
          </span>
        </span>
      </div>
      <div className="h-4"></div>
    </>
  );
};

export default TopUniRail;
