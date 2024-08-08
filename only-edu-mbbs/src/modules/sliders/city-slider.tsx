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
    cityIcon:ImageAttributes;
    slug:string
  }[];

}

const CitySlider = ({ data }: Props) => {

  const flickityOptions = {
    wrapAround: data.length >= 8 ? true : false,
    initialIndex: 2,
    fade: true,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    lazyLoad: 2,
    imagesLoaded: true,

    pageDots: false


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
    <section className=" py-9 border-b">
      <div className="container">
        <h4 className="capitalize font-semibold mb-4 text-dark md:text-3xl text-2xl pl-2 lg:pl-0">
          Top Study Places
        </h4>
        <Flickity
          className={"carousel "}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={true}
          reloadOnUpdate
        >
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/universities-list/all?cityParam=${item.slug}`}
            >
              <div className=" mr-3  border mb-4 p-4 h-36  rounded-sm  grid grid-rows-4">
                <div className="flex h-full row-span-3 items-">
                  <div className="h-full w-full flex items-end">
                    <ImageExtended
                      src={item.cityIcon.url}
                      alt={item.cityIcon.alternativeText}
                      blurDataURL={item.cityIcon.blurhash}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>

                <div className="row-span-1">
                  <p className="text-center mt-2">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default CitySlider;






