import React from "react";
import parse from "html-react-parser";

interface Props {
  data: {
    id: string;
    title: string;
    subTitle: string;
    FeesStructureTable: string;
  };
}

const InfoTableLayout = ({ data }: Props) => {
  const { title, subTitle, FeesStructureTable } = data;

  return (
    <section className="py-6 my-16">
      <h4 className="text-4xl text-center text-dark mb-6  dark:text-light ">
        {title}
      </h4>
      <p className="text-center">{subTitle}</p>
      <div className="relative overflow-x-auto flex justify-center pt-6  ">
        <div className=" flex justify-cente prose-figure:mx-auto prose-figure:flex prose-figure:justify-center items-center w-full text-sm  text-dark dark:text-accent">
          {parse(FeesStructureTable)}
        </div>
      </div>
    </section>
  );
};

export default InfoTableLayout;
