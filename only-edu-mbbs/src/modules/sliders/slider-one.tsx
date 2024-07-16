"use client";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { ArticleAttributes } from "@/types/types";
import { InformationCard } from "../university-card";
import { useEffect } from "react";

interface BlogPageProps {
  data: {
    data: ArticleAttributes[];
  };
  href: string;
}

const InformationSlider = ({ data, href }: BlogPageProps) => {
  const flickityOptions = {
    wrapAround: data.data.length >= 8 ? true : false,
    initialIndex: 2,
    fade: true,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    lazyLoad: 2,
    imagesLoaded: true,
  };

  useEffect(() => {
    const elem = window.document.querySelector(".carousel");
    if (elem) {
      elem.classList.add("flex");
    }
    const initializeFlickity = async () => {
      const Flickity = (await import("flickity")).default;

      if (elem) {
        const flkty = new Flickity(elem);
        flkty.on("ready", () => {
          elem.classList.remove("flex");
          flkty.resize();
        });
      }
    };
    initializeFlickity();
  }, []);

  return (
    <div className="mt-6 pb-6">
      <div className="">
        <h4 className="font-semibold mb-4 text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl  items-center flex sm:flex-row">
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
            <div key={item.id} className=" mr-3">
              <InformationCard item={item} href={href} />
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default InformationSlider;






