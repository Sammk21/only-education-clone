import Link from "next/link";
import { ImageExtended } from "../common/extended-image/extended-image";
import { University } from "../sliders/slider-two";
import { ArticleAttributes } from "@/types/types";

interface UniversityProps {
  university: University;
}

interface InformationProps {
  item: ArticleAttributes;
  href: string;
}

export const UniversityCard = ({ university }: UniversityProps) => {
  console.log(university)
  return (
    <div className="max-w-sm mx-auto bg-white border h-64 w-64 sm:h-80 sm:w-80 rounded-lg overflow-hidden">
      <div className="relative w-full h-[60%]">
        <Link className="cursor-pointer" href={`study/uni/${university.slug}`}>
          <ImageExtended
            src={university.universityProfile.backgroundImage.url}
            alt={university.universityProfile.backgroundImage.alternativeText}
            className=" object-cover object-center"
            fill={true}
          />
        </Link>
      </div>
      <div className=" h-[40%] relative p-4 bg-white bg-opacity-75">
        <div className=" absolute -top-7 ">
          <div className=" flex items-center relative shadow-md rounded-xl overflow-hidden h-12 w-12 sm:w-16 sm:h-16 bg-white">
            <ImageExtended
              src={university.universityProfile.profileImage.url} // Replace with the actual logo path
              alt={university.universityProfile.profileImage.alternativeText}
              className=" mr-3 object-contain object-center"
              fill={true}
              placeholder="blur"
              blurDataURL={university.universityProfile.profileImage.url}
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900">
            {university.title}
          </h2>
          <p className="text-sm text-dark/40"><span>{ university.universityProfile.location}</span> | <span>{university.universityProfile.Approvedby}</span></p> 

        </div>
      
      </div>
    </div>
  );
};

export const InformationCard = ({ item, href }: InformationProps) => {
  return (
    <div className="grid   h-64 w-64 border rounded-md sm:h-72 sm:w-80 justify-center">
      <div className=" shadow-sm   h-36 w-full text-sm sm:text-lg md:text-xl rounded-sm rounded-b-none  relative group overflow-hidden cursor-pointer">
        <Link className="" href={`/${href}/post/${item.slug}`}>
          <ImageExtended
            src={item.image.url}
            alt={item.title}
            fill={true}
            blurDataURL={item.image.blurhash}
            className="object-center object-cover group-hover:scale-105 transition-transform ease-out duration-300"
          />
          <div className="absolute top-1 left-1">
            {item.live && (
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
        </Link>
      </div>
      <div className="capitalize mt-1  px-2">
        <p className="text-md mb-2 line-clamp-2 text-dark font-semibold">{item.title}</p>
        <p className="text-xs font-normal text-dark/50 tracking-wide z-10  line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};
