"use client";
import { ImageAttributes } from "@/types/types";
import { UniversityCard } from "../university-card";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { useEffect } from "react";

interface UniversityProfile {
  backgroundImage: ImageAttributes;
  profileImage: ImageAttributes;
  fees:string;
  Approvedby:string;
  location:string;
}

export interface University {
  id: number;
  title: string;
  slug: string;

  universityProfile: UniversityProfile;
}

interface UniversitiesData {
  universities: {
    data: University[];
  };
}
interface Props {
  data: UniversitiesData;
}

export const UniversitiesRail = ({ data }: Props) => {
  const flickityOptions = {
    initialIndex: 2,
    fade: true,
    wrapAround: data.universities.data.length >= 8,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    lazyLoad: 2,
    imagesLoaded: true,
  };
  useEffect(() => {
    const initializeFlickity = async () => {
      const Flickity = (await import("flickity")).default;
      const element = document.querySelector(".carousel2");
      if (element) {
        const flkty = new Flickity(element);
        flkty.on("ready", () => {
          element.classList.remove("flex");
          flkty.resize();
        });
      }
    };
    initializeFlickity();
  }, []);

  return (
    <div className="my-12">
      <div className="">
        <h4 className="font-semibold mb-4 text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl  items-center flex sm:flex-row">
          <span className="mb-2 capitalize">Top Universities</span>
        </h4>
        <Flickity
          className={"carousel2 flex"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={true} // default false
          reloadOnUpdate // default false
          static // default false
          // contain={true}
        >
          {data.universities.data.map((university) => (
            <div className="mr-4" key={university.id}>
              <UniversityCard university={university} />
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default UniversitiesRail;
