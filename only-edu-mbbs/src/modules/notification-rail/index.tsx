"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ArticleAttributes } from "@/types/types";
import "@/styles/swiper-pagination/pagination.css";
import Link from "next/link";
import { Card } from "@/components/ui/card";

interface BlogPageProps {
  data: {
    data: ArticleAttributes[];
  };
}

const NotificationRail = ({ data }: BlogPageProps) => {
  const baseUrl = "https://admin.onlyeducation.co.in";
  console.dir(data.data[0]?.title);

  return (
    <div className="px-2 sm:px-12 mt-4 sm:mt-8 lg:mt-10 relative">
      <h4 className="font-semibold text-dark dark:text-light text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 md:mb-10 items-center flex sm:flex-row">
        <span className="mb-2">Latest Notification</span>
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
            slidesPerView: 4.3,
            spaceBetween: 40,
          },
        }}
        navigation={{ nextEl: ".back", prevEl: ".front" }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.data.map((university) => (
          <SwiperSlide key={university.id} className="border rounded-md bg-">
            <Link href={`news/post/${university.slug}`}>
              <div className="aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative group overflow-hidden cursor-pointer">
                <Image
                  src={baseUrl + university.image.url}
                  alt={university.title}
                  fill={true}
                  className="object-center object-cover group-hover:scale-105 transition-transform ease-out duration-300"
                />
                <span className="w-full h-full absolute top-0 left-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <span className="w-full h-[50%] absolute bottom-0 left-0 bg-gradient-to-t from-dark/80 to-transparent transition-opacity duration-300 ease-out"></span>
              </div>
              <div className="px-5 capitalize mt-3">
                <div className="font-semibold sm:text-xl text-sm mb-2 line-clamp-2 text-dark">
                  <span className="relative w-12 h-4 bg-red-500 rounded-full flex justify-end items-center text-white p-1 text-xs">
                    <span className="livenow absolute  left-0">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <p>LIVE</p>
                  </span>
                  {university.title}
                </div>
                <p className="text-sm font-normal text-accent z-10 my-2 line-clamp-2">
                  {university.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute bottom-16">
        <div className="swiper-pagination"></div>
      </div>
      {/* <span className="flex flex-row-reverse mt-12 gap-x-1">
        <span className="back transition ease-in-out cursor-pointer z-20 sm:p-3 border rounded-full text-3xl text-black textglobal drop-shadow-lg hover:translate-x-1 hover:bg-dark/10 top-1/2 -translate-y-1/2 right-0">
          <MdOutlineArrowRightAlt />
        </span>
        <span className="front transition ease-in-out cursor-pointer rotate-180 z-20 sm:p-3 border rounded-full text-3xl text-black textglobal drop-shadow-lg hover:-translate-x-1 top-1/2 hover:bg-dark/10 -translate-y-1/2 left-0">
          <MdOutlineArrowRightAlt />
        </span>
      </span> */}
    </div>
  );
};

export default NotificationRail;
