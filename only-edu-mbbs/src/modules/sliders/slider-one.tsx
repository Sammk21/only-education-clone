"use client";
import React from "react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ArticleAttributes } from "@/types/types";
import Link from "next/link";
import "@/styles/swiper-pagination/pagination.css";
import { ImageExtended } from "../common/extended-image/extended-image";

interface BlogPageProps {
  data: {
    data: ArticleAttributes[];
  };
  href: string;
}

const InformationSlider = ({ data, href }: BlogPageProps) => {
  if (!data || !data.data || data.data.length === 0) {
    return null;
  }

  return (
    <>
      <div className="  mt-4 sm:mt-8 lg:mt-10 relative py-6  ">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl  items-center flex sm:flex-row">
            <span className=" capitalize">Latest {href} </span>
          </h4>
          <div className="flex gap-x-2 items-center mr-2">
            <span className="front transition ease-in-out cursor-pointer rotate-180 z-20  p-2  border rounded-full text-lg sm:text-xl md:text-2xl   text-black textglobal  hover:-translate-x-1">
              <MdOutlineArrowRightAlt />
            </span>
            <span className="back  transition ease-in-out cursor-pointer z-20 p-2    border rounded-full sm:text-xl md:text-2xl   text-black textglobal  hover:translate-x-1   ">
              <MdOutlineArrowRightAlt />
            </span>
          </div>
        </div>
        <div className="h-1 w-full"></div>
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
                slidesPerView: 2.4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.3,
                spaceBetween: 30,
              },
              1080: {
                slidesPerView: 4.2,
                spaceBetween: 40,
              },
            }}
            navigation={{ nextEl: ".back", prevEl: ".front" }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.data.map((university) => (
              <SwiperSlide
                key={university.id}
                className="border rounded-md bg-"
              >
                <div className="flex aspect-square items-center justify-center p-1 ">
                  <Link href={`/${href}/post/${university.slug}`}>
                    <div className="aspect-video flex border shadow-sm flex-col p-4 text-sm sm:text-lg md:text-xl rounded-sm  relative group overflow-hidden cursor-pointer">
                      <ImageExtended
                        src={university.image.url}
                        alt={university.title}
                        fill={true}
                        blurDataURL={
                          university.image.formats.thumbnail.blurhash
                        }
                        className="object-center object-cover group-hover:scale-105 transition-transform ease-out duration-300"
                      />
                      <div className="absolute top-1 left-1">
                        {university.live && (
                          <span className="relative w-12 h-4 bg-red-600 rounded-full flex justify-end items-center text-white p-1 text-xs">
                            <span className="livenow absolute left-0">
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                            <p>LIVE</p>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="capitalize mt-3">
                      <p className="text-md mb-2 line-clamp-2 text-dark">
                        {university.title}
                      </p>
                      <p className="text-xs font-normal text-dark/50 tracking-wide z-10  line-clamp-2">
                        {university.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default InformationSlider;
