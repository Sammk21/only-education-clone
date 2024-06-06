import { HeaderProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

interface CriteriaListProps {
  id: number;
  title: string;
  list: string;
}

interface Props {
  data: {
    id: number;
    header: HeaderProps;
    criteriaList: CriteriaListProps[];
  };
}

const ElegibilityCriteria = ({ data }: Props) => {
  const { title, description } = data.header;

  return (
    <div className="text-dark dark:text-light py-6 my-6 max-w-6xl mx-auto">
      <h4 className="leading-none text-4xl mb-6 text-center text-dark dark:text-light">
        {title}
      </h4>
      <p className="text-center text-accent mb-6">{description}</p>
      <div className=" prose pt-6 max-w-4xl w-full justify-center mx-auto grid sm:grid-cols-2 gap-y-7">
        <div className="max-w-sm  overflow-hidden border border-l-[3px] border-l-yellow-500 dark:border-l-yellow-500 border-borderLight dark:border-border rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {data.criteriaList[0].title}
            </div>
            <span className="text-accent text-base">
              {parse(data.criteriaList[0].list)}
            </span>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden border border-borderLight dark:border-border border-l-[3px] dark:border-l-blue-500 border-l-blue-500 rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {data.criteriaList[1].title}
            </div>
            <span className="text-accent   text-base">
              {parse(data.criteriaList[1].list)}
            </span>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden dark:border-border border-borderLight border border-l-[3px] border-l-green-500  dark:border-l-green-500 rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {data.criteriaList[2].title}
            </div>
            <span className="text-accent text-base">
              {parse(data.criteriaList[2].list)}
            </span>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden border border-borderLight dark:border-border border-l-[3px] dark:border-l-red-500 border-l-red-500 rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {data.criteriaList[3].title}
            </div>
            <span className="text-accent text-base">
              {parse(data.criteriaList[3].list)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegibilityCriteria;
