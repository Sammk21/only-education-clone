import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiFediverseLogoDuotone } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { SiIndiansuperleague } from "react-icons/si";
import { HeaderProps, QnaProps } from "@/types/types";

interface listProps {
  id: number;
  title: string;
  description: string;
}

interface Props {
  data: {
    id: number;
    list: listProps[];
    header: HeaderProps;
  };
}
const WhyInida = ({ data }: Props) => {
  console.dir(data);
  return (
    <section className="sm:px-12 py-6 my-6 px-2 ">
      <h4 className="text-center text-2xl sm:text-4xl pt-6 mb-6 ">
        {data.header.title}
      </h4>
      <p className="text-center hidden sm:block"> {data.header.description}</p>

      <div>
        <div className="max-w-full lg:max-w-7xl lg:mx-auto lg:px-6 sm:px-0 mt-5">
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4">
            <div className="text-5xl">
              <HiOutlineAcademicCap />
            </div>
            <div className="py-4">
              <h2 className="text-[20px] mb-2">{data.list[0].title}</h2>
              <p className="text-dark/50 text-[16px]">
                {data.list[0].description}
              </p>
            </div>
          </div>
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4 mt-4  mr-0 ml-auto">
            <div className="text-5xl">
              <PiFediverseLogoDuotone />
            </div>
            <div className="py-4">
              <h2 className="text-[20px] mb-2">{data.list[1].title}</h2>
              <p className="text-dark/50 text-[16px]">
                {data.list[1].description}
              </p>
            </div>
          </div>
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4 mt-4">
            <div className="text-5xl">
              <SiIndiansuperleague />
            </div>
            <div className="py-4">
              <h2 className="text-[20px] mb-2">{data.list[2].title}</h2>
              <p className="text-dark/50 text-[16px]">
                {data.list[2].description}
              </p>
            </div>
          </div>
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4 mt-4  mr-0 ml-auto">
            <div className="text-5xl">
              <AiOutlineGlobal />
            </div>
            <div className="py-4">
              <h2 className="text-[20px] mb-2">{data.list[3].title}</h2>
              <p className="text-dark/50 text-[16px]">
                {data.list[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInida;
