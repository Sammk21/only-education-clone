import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { ImageExtended } from "../common/extended-image/extended-image";

interface Listprops {
  id: number;
  location: string;
  Approvedby: string;
  establishment: string;
}
interface Props {
  profileImage: string;
  backgroundImage: string;
  universityInfo: Listprops;

  data: {
    id: number;
    name: string;
    fullForm: string;
    description: string;
    location: string;
    Approvedby: string;
    establishment: string;
    
  };
  fullForm:string
}

const GlobalProfileLayout = async ({
  data,
  backgroundImage,
  profileImage,
  universityInfo,
  fullForm
}: Props) => {
  const { name, description } = data;
  console.log("e",fullForm)

  const baseUrl = "https://admin.onlyeducation.co.in";

  return (
    <div className=" bg-light  dark:bg-dark flex flex-wrap items-center border-none  justify-center  ">
      <div className="w-full   bg-light dark:bg-dark   transform  border-none   duration-200 easy-in-out">
        <div className=" h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden relative -z-10">
          <ImageExtended
            fill={true}
            className=" object-cover object-center"
            src={backgroundImage}
            alt="RUSSIA"
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <div className="h-32 relative border-2 w-32 bg-light dark:bg-dark p-2 rounded-full overflow-hidden">
            <ImageExtended
              fill={true}
              className="object-center object-cover  "
              src={profileImage}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="text-center px-4 md:px-14">
            <h2 className=" text-2xl sm:text-3xl font-bold dark:text-light text-dark">
              {fullForm} 
            </h2>

          </div>

          <ul className="flex justify-center text-xs font-medium sm:text-sm text-foreground/80 gap-4 sm:gap-6 mt-2 overflow-x-scroll md:overflow-x-hidden ">
            <li className="flex items-center gap-1">
              <FaLocationDot className="text-[#fc7318]" />

              {data.location}
            </li>
            <li className="flex items-center gap-1">
              <FaTrophy className="text-[#fc7318]" />
              Approved by : {data.Approvedby}
            </li>
            <li className="flex items-center gap-1">
              <FaGraduationCap className="text-[#fc7318]" />
              Estd : {data.establishment}
            </li>
          </ul>

          <hr className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default GlobalProfileLayout;
