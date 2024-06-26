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
    <div className="lg:h-[10rem]  text-dark/50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 dark:text-light/50 border-borderLight dark:border-border text-center mt-12 ">
      {data.expBlock.map((item) => (
        <div
          key={item.id}
          className="justify-center h-full w-full flex flex-col items-center py-3 border-y  border-l "
        >
          <h1 className="leading-none font-semibold">{item.counter}</h1>
          <h5>{item.label}</h5>
        </div>
      ))}
    </div>
  );
};

export default ExperienceRail;
