import { ImageAttributes } from "@/types/types";
import { getStrapiData } from "@/utils/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

interface Props {
  profileImage: string;
  backgroundImage: string;

  data: {
    id: number;
    name: string;
    description: string;
  };
}

const GlobalProfileLayout = async ({
  data,
  backgroundImage,
  profileImage,
}: Props) => {
  const { name, description } = data;

  const baseUrl = "https://admin.onlyeducation.co.in";

  return (
    <div className=" bg-light  dark:bg-dark flex flex-wrap items-center border-none  justify-center  ">
      <div className="w-full   bg-light dark:bg-dark   transform  border-none   duration-200 easy-in-out">
        <div className=" h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden relative -z-10">
          <Image
            fill={true}
            className=" object-cover object-center"
            src={baseUrl + backgroundImage}
            alt="RUSSIA"
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <div className="h-32 relative border-2 w-32 bg-light dark:bg-dark p-2 rounded-full overflow-hidden">
            <Image
              fill={true}
              className="object-center object-cover  "
              src={baseUrl + profileImage}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="text-center px-4 md:px-14">
            <h2 className=" text-3xl font-bold dark:text-light">{name}</h2>

            <p className="mt-2 text-accent text-sm">{description}</p>
          </div>
          <hr className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default GlobalProfileLayout;
