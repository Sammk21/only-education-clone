"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ArticleAttributes, HeaderProps } from "@/types/types";
import Link from "next/link";

interface relatedArticlesProps {
  id: number;
  articles: {
    data: ArticleAttributes[];
  };
  header: HeaderProps;
}

interface Props {
  relatedArticles: relatedArticlesProps;
}

const ArticleRail = ({ relatedArticles }: Props) => {
  const baseUrl = "https://admin.onlyeducation.co.in";
  console.log("hello", relatedArticles.articles.data[0].image.url);

  return (
    <div className="px-2 sm:px-12 mt-12 relative">
      <h4 className="font-semibold text-dark dark:text-light text-2xl sm:text-2xl md:text-2xl mb-4 sm:mb-6 md:mb-10 items-center flex sm:flex-row">
        <span className="mb-2">{relatedArticles.header.title} </span>
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
          0: { slidesPerView: 1.2, spaceBetween: 10 },
          530: { slidesPerView: 2.2, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 30 },
          1080: { slidesPerView: 4.3, spaceBetween: 40 },
        }}
        navigation={{ nextEl: ".back", prevEl: ".front" }}
        className="mySwiper"
      >
        {relatedArticles.articles.data.map((university) => (
          <SwiperSlide key={university.id} className="border rounded-md bg-">
            <Link href={`${university.slug}`}>
              <div className="aspect-video flex flex-col p-4 text-sm sm:text-lg md:text-xl relative group overflow-hidden cursor-pointer">
                <Image
                  src={baseUrl + university.image.url}
                  alt={university.image.caption}
                  fill={true}
                  className="object-center object-cover group-hover:scale-105 transition-transform ease-out duration-300"
                />
                <span className="w-full h-full absolute top-0 left-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <span className="w-full h-[50%] absolute bottom-0 left-0 bg-gradient-to-t from-dark/80 to-transparent transition-opacity duration-300 ease-out"></span>
              </div>
              <div className="px-5 capitalize">
                <p className="font-semibold text-[16px] line-clamp-1 z-10 text-dark my-2">
                  {university.title}
                </p>
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

      <div className="flex flex-row-reverse mt-12 gap-x-1">
        <span className="back transition ease-in-out cursor-pointer z-20 sm:p-3 border rounded-full text-3xl text-black textglobal drop-shadow-lg hover:translate-x-1 hover:bg-dark/10 top-1/2 -translate-y-1/2 right-0">
          <MdOutlineArrowRightAlt />
        </span>
        <span className="front transition ease-in-out cursor-pointer rotate-180 z-20 sm:p-3 border rounded-full text-3xl text-black textglobal drop-shadow-lg hover:-translate-x-1 top-1/2 hover:bg-dark/10 -translate-y-1/2 left-0">
          <MdOutlineArrowRightAlt />
        </span>
      </div>
    </div>
  );
};

export default ArticleRail;
