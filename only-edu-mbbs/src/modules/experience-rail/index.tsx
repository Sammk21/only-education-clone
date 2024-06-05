import React from "react";

interface expBlockProps {
  id: number;
  counter: string;
  label: string;
}

interface ExperienceRailProps {
  data: {
    id: number;
    expBlock: expBlockProps[];
  };
}

const ExperienceRail = ({ data }: ExperienceRailProps) => {
  return (
    <div className="lg:h-[10rem] border-y text-dark/50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 dark:text-light/50 border-borderLight dark:border-border">
      {data.expBlock.map((item) => (
        <div
          key={item.id}
          className="justify-center h-full w-full flex flex-col items-center border-borderLight py-3  lg:border-b-[0px] border-b border-x dark:border-border"
        >
          <h1 className="leading-none font-semibold">{item.counter}</h1>
          <h5>{item.label}</h5>
        </div>
      ))}
    </div>
  );
};

export default ExperienceRail;
