import React from "react";
import parse from "html-react-parser";
import { HeaderProps } from "@/types/types";

interface Props {
  data: {
    id: string;
    header: HeaderProps;
    eligibityTable: string;
  };
}

const InfoTableLayout = ({ data }: Props) => {
  const { eligibityTable } = data;
  const { title, description } = data.header;

  return (
    <section className="container my-8  ">
      <h4 className="text-4xl mb-4  font-medium  text-dark   dark:text-light ">
        {title}
      </h4>
      <p className=" text-accent ">{description}</p>
      {/* <div className="relative overflow-x-auto flex justify-center pt-6  "> */}
      <div className="overflow-x-scroll sm:overflow-x-hidden rounded-lg prose-tr:border-b prose-td:divide-y prose-td:divide-gray-200 prose-td:dark:divide-neutral-700     w-full prose-td:py-3 px prose-td:px-6  text-dark prose-tr: prose-table:w-full prose-figure:w-full prose-figure:mx-0 prose-table:border prose-figure:rounded-lg  prose-th:py-4 prose-th:bg-gray-50 prose-th:text-start prose-th:px-4">
        {parse(eligibityTable)}
      </div>
      {/* </div> */}
    </section>
  );
};

export default InfoTableLayout;
