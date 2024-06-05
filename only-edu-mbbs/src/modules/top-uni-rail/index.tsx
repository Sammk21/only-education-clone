"use client";
import Image from "next/image";
import React from "react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const TopUniRail = () => {
  //need basic uni details in props

  return (
    <>
      <div className="px-2 sm:px-12 mt-12 relative marginTB">
        <h4 className="font-semibold text-dark dark:text-light text-3xl sm:text-4xl md:text-5xl mb-10 flex-col items-center flex sm:flex-row">
          <span className="mb-2">Top 4 universities</span>
          <span className="sm:text-lg text-sm font-light text-accent sm:ml-2">
            to get admissons in
          </span>
        </h4>
        <Swiper
          speed={600}
          spaceBetween={40}
          pagination={{ clickable: true }}
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
            420: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 3.2,
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
          <SwiperSlide>
            <div className="rounded-lg aspect-video flex flex-col p-4  relative group overflow-hidden cursor-pointer border border-borderLight dark:border-border">
              <Image
                src={
                  "https://images.unsplash.com/photo-1665901680991-d2dcba89ef55?q=80&w=3352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="mumbai uni"
                fill={true}
                className="object-center object-cover  rounded-md  group-hover:scale-105 transition-transform ease-out duration-300"
              />

              <span className="font-bold text-sm sm:text-lg md:text-xl absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light w-full flex justify-center">
                University of mumbai
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-300 rounded-lg aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative shadow-md group overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://images.unsplash.com/photo-1645017748972-29b42eac8c05?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="mosccow uni"
                fill={true}
                className="object-center object-cover  rounded-md group-hover:scale-105 transition-transform ease-out duration-300 "
              />
              <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-dark/50 to-transparent z-10"></span>
              <span className="font-bold absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light  w-full flex justify-center">
                University of moscow
              </span>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-300 rounded-lg aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative shadow-md group overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://images.unsplash.com/photo-1596967082890-810f0f4cf634?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="cambridge uni"
                fill={true}
                className="object-center object-cover  rounded-md group-hover:scale-105 transition-transform ease-out duration-300 "
              />
              <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-dark/50 to-transparent z-10"></span>
              <span className="font-bold absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light  w-full flex justify-center">
                Cambridge University
              </span>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-300 rounded-lg aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative shadow-md group overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="HARVARD uni"
                fill={true}
                className="object-center object-cover  rounded-md group-hover:scale-105 transition-transform ease-out duration-300 "
              />
              <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-dark/50 to-transparent z-10"></span>
              <span className="font-bold absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light  w-full flex justify-center">
                Harvard University, USA
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-300 rounded-lg aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative shadow-md group overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://images.unsplash.com/photo-1645017748972-29b42eac8c05?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="mosccow uni"
                fill={true}
                className="object-center object-cover  rounded-md group-hover:scale-105 transition-transform ease-out duration-300 "
              />
              <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-dark/50 to-transparent z-10"></span>
              <span className="font-bold absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light  w-full flex justify-center">
                University of moscow
              </span>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg aspect-video flex flex-col p-4  relative  group overflow-hidden cursor-pointer border border-borderLight dark:border-border">
              <Image
                src={
                  "https://images.unsplash.com/photo-1665901680991-d2dcba89ef55?q=80&w=3352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="mumbai uni"
                fill={true}
                className="object-center object-cover  rounded-md  group-hover:scale-105 transition-transform ease-out duration-300"
              />

              <span className="font-bold text-sm sm:text-lg md:text-xl absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light w-full flex justify-center">
                University of mumbai
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
        <span className="flex flex-row-reverse mt-12 gap-x-1">
          <span className="back transition ease-in-out cursor-pointer z-40 p-3  border rounded-full  text-3xl stroke-foreground  textglobal drop-shadow-lg hover:translate-x-1 hover:bg-dark/10 top-1/2 -translate-y-1/2  right-0">
            <MdOutlineArrowRightAlt />
          </span>
          <span className="front transition ease-in-out  cursor-pointer rotate-180 z-40 p-3  border rounded-full text-3xl stroke-foreground textglobal drop-shadow-lg  hover:-translate-x-1 top-1/2 hover:bg-dark/10 -translate-y-1/2 left-0">
            <MdOutlineArrowRightAlt />
          </span>
        </span>
      </div>
      <div className="h-4"></div>
    </>
  );
};

export default TopUniRail;
