import React from "react";
import FlowDiagram from "../flow-diagram";
import { HeaderProps } from "@/types/types";
import parse from "html-react-parser";

interface Props {
  data: {
    id: number;
    list: string;
    header: HeaderProps;
  };
}

const WhyAbroad = ({ data }: Props) => {
  const { title, description } = data.header;

  return (
    <>
      <section className="text-dark dark:text-light  my-6">
        <h4 className="text-center text-4xl py-6 mb-6 ">{title}</h4>
        <div className=" px-6 sm:px-12 flex flex-col gap-y-4 max-w-7xl mx-auto prose ">
          {parse(data.list)}
        </div>
      </section>
      <FlowDiagram />
    </>
  );
};

export default WhyAbroad;
