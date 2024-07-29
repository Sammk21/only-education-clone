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
      <div className="container">
         <h4 className="font-semibold mb-4 text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl items-center flex sm:flex-row">
          <span className="mb-2 capitalize">Latest {href} </span>
        </h4>
      <div className="flex gap-x-2  ">
        <SkeletonCard count={5}/>
      </div>
      </div>
    );
  }

  return (
    <div className="mt-6 pb-6 container">
      <div className="">
        <h4 className="font-semibold mb-4 text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl items-center flex sm:flex-row">
          <span className="mb-2 capitalize">Latest {href} </span>
        </h4>
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
  );
};

export default InformationSlider;
