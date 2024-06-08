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

  console.log(title, description);

  return (
    <section className="py-6 my-16">
      <h4 className="text-4xl text-center text-dark mb-6  dark:text-light ">
        {title}
      </h4>
      <p className="text-center text-accent max-w-5xl mx-auto">{description}</p>
      <div className="relative overflow-x-auto flex justify-center pt-6  ">
        <div className=" flex prose  prose-table:text-sm pt-6 max-w-4xl mx-auto w-full justify-center items-center text-sm  text-dark dark:text-accent">
          {parse(eligibityTable)}
        </div>
      </div>
    </section>
  );
};

export default InfoTableLayout;
