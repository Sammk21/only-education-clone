import Link from "next/link";
import { ImageExtended } from "../common/extended-image/extended-image";
import { University } from "../sliders/slider-two";

interface UniversityProps {
  university: University;
}

export const UniversityCard = ({ university }: UniversityProps) => {
  return (
    <div className="max-w-sm mx-auto bg-white border h-80 w-80 rounded-lg overflow-hidden">
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
          <div className=" flex items-center relative shadow-md rounded-xl overflow-hidden w-16 h-16 bg-white">
            <ImageExtended
              src={university.universityProfile.profileImage.url} // Replace with the actual logo path
              alt={university.universityProfile.profileImage.alternativeText}
              className=" mr-3 object-cover object-center"
              fill={true}
              placeholder="blur"
              blurDataURL={university.universityProfile.profileImage.url}
            />
          </div>
        </div>
        <div className="h-full flex justify-start items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            {university.title}
          </h2>
        </div>
      </div>
    </div>
  );
};
