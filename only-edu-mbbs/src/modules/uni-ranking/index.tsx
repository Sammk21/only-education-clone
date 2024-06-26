import { HeaderProps } from "@/types/types";
import React from "react";
import { FaChartBar } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

interface Ranks {
  id: number;
  objectRank: string;
  worldRank: string;
}

interface Props {
  data: {
    header: HeaderProps;
    ranks: Ranks;
  };
}

const UniRanking = ({ data }: Props) => {
  const { title, description } = data.header;

  const { objectRank, worldRank } = data.ranks;

  return (
    <section className="py-12 my-12 bg-greenDark rounded-2xl text-light  mx-auto">
      <h4 className="text-center text-3xl font-medium mb-4">{title}</h4>
      <p className="text-center max-w-5xl mx-auto mb-5">{description}</p>
      <div className="w-full h-full flex  justify-around ">
        <div className="flex justify-center items-center flex-col ">
          <FaChartBar className="md:text-8xl text-6xl sm:text-7xl mb-3" />
          <p className="font-medium text-sm sm:text-xl">{objectRank}</p>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <FaEarthAsia className="md:text-8xl text-6xl sm:text-7xl mb-3" />
          <p className="font-medium text-sm sm:text-xl">{worldRank}</p>
        </div>
      </div>
    </section>
  );
};

export default UniRanking;
