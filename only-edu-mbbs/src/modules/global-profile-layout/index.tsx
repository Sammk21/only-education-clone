import { getStrapiData } from "@/utils/utils";
import Image from "next/image";
import React from "react";

interface Props {
  slug: string;
  data: {
    id: number;
    name: string;
    description: string;
  };
}

const GlobalProfileLayout = async ({ data, slug }: Props) => {
  const { name, description } = data;

  const imagesQuery = `/api/universities?filters[slug][$eq]=${slug}&populate[universityProfile][populate][0]=backgroundImage&populate[universityProfile][populate][1]=profileImage`;

  const Imagedata = await getStrapiData(imagesQuery);

  const backgroundImage =
    Imagedata.data[0].universityProfile.backgroundImage.url;
  const profileImage =
    Imagedata.data[0].universityProfile.profileImage.data[0].url;

  const baseUrl = "http://localhost:1337";

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
          <div className="text-center px-14">
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
