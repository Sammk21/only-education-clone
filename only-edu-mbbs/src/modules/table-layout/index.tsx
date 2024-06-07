import React from "react";
import parse from "html-react-parser";

interface Props {
  data: {
    id: string;
    title: string;
    subTitle: string;
    feesStructureTable: string;
  };
}

const InfoTableLayout = ({ data }: Props) => {
  const { title, subTitle, feesStructureTable } = data;

  return (
    <section className="py-6 my-16">
      <h4 className="text-4xl text-center text-dark mb-6  dark:text-light ">
        {title}
      </h4>
      <p className="text-center text-accent max-w-5xl mx-auto">{subTitle}</p>
      <div className="relative overflow-x-auto flex justify-center pt-6  ">
        <div className=" flex prose  prose-table:text-sm pt-6 max-w-4xl mx-auto w-full justify-center items-center text-sm  text-dark dark:text-accent">
          {parse(feesStructureTable)}
        </div>
      </div>
    </section>
  );
};

export default InfoTableLayout;
