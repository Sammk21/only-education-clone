"use client";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { ArticleAttributes, ImageAttributes } from "@/types/types";
import { InformationCard } from "../university-card";
import { useEffect } from "react";
import { ImageExtended } from "../common/extended-image/extended-image";
import Link from "next/link";

interface Props {
  data: {
    id:number
    title:string  
    streamIcon:ImageAttributes;
    slug:string
  }[];

}

const CitySlider = ({ data }: Props) => {
  console.log(data)

  const flickityOptions = {
    // wrapAround: data.length >= 8 ? true : false,
    initialIndex: 2,
    fade: true,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    lazyLoad: 2,
    imagesLoaded: true,
    pageDots:false,
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
          <span className="mb-2 capitalize">Top Study Places </span>
        </h4>
        <Flickity
          className={"carousel "}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={true}
          reloadOnUpdate
        >
          {data.map((item) => (

            <div key={item.id} className=" mr-3  border mb-4 p-4 h-36  rounded-sm  grid grid-rows-4">
            <div className="flex h-full row-span-3 items-">
            <div className="h-full w-full flex items-end">
             <ImageExtended src={item.streamIcon.url} alt={item.streamIcon.alternativeText} blurDataURL={item.streamIcon.blurhash} width={100} height={100} />
            </div>
            </div>
            <div className="row-span-1">
            <p className="text-center mt-2">{item.title}</p>

            </div>
           
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default CitySlider;






