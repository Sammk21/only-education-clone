"use client";
import React, { useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { ArticleAttributes } from "@/types/types";
import { InformationCard } from "../university-card";
import { SkeletonCard } from "./skeleton-loader-slider/sliderSkeleton";

interface BlogPageProps {
  data: {
    data: ArticleAttributes[];
  };
  href: string;
}

const InformationSlider: React.FC<BlogPageProps> = ({ data, href }) => {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(false); // Set loading to false once the component mounts
  }, []);
    // Check if data is null or empty
    if (!data.data || data.data.length === 0) {
      return null; // Do not render anything if data is null or empty
    }

  const flickityOptions = {
    wrapAround: data.data.length >= 8 ? true : false,
    initialIndex: 2,
    fade: true,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    lazyLoad: 2,
    imagesLoaded: true,
    pageDots: false
  };

  if (loading) {
    return (
      <section className="py-6">
      <div className="container">
         <h4 className="capitalize font-semibold mb-4 text-dark text-2xl md:text-3xl pl-2 lg:pl-0">
          <span className="mb-2 capitalize">Latest {href} </span>
        </h4>
      <div className="flex gap-x-2  ">
        <SkeletonCard count={5}/>
      </div>
      </div>
      </section>
    );
  }

  return (
    <section className="py-9 border-b">
    <div className="container">
      <div className="">
        <h3 className="capitalize font-semibold mb-4 text-dark md:text-3xl pl-2 lg:pl-0 text-2xl">

      Latest {href}
        </h3>
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={true}
          reloadOnUpdate
        >
          {data.data.map((item) => (
            <div key={item.id} className="mr-3">
              <InformationCard item={item} href={href} />
            </div>
          ))}
        </Flickity>
      </div>
    </div>
    </section>
  );
};

export default InformationSlider;
