"use client";
import React from "react";
import Image from "next/image";
const BannerImage = () => {
  return (
    <section className="w-[99%] mx-auto ">
      <div className="relative">
        <div className="relative overflow-hidden h-[400px] w-full rounded-t-3xl">
          <Image
            src={
              "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill={true}
            className="object-cover object-center blur-sm"
            alt="banner image         "
          />
        </div>
        <h1 className="font-semibold text-dark text-3xl sm:text-4xl md:text-5xl mb-10 absolute top-36 w-full text-center">
          About Only Education
        </h1>
      </div>
    </section>
  );
};

export default BannerImage;
