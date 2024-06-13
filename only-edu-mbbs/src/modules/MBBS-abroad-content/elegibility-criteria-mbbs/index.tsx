import { HeaderProps } from "@/types/types";
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
    criteriaTable: string;
  };
}

const ElegibilityCriteria = ({ data }: Props) => {
  const { title, description } = data.header;

  const renderCriteriaList = () => {
    return (
      <>
        {data.criteriaList.map((item, index) => (
          <div
            key={item.id}
            className={`max-w-sm overflow-hidden border border-l-[3px] rounded-2xl ${
              index === 0
                ? "border-l-yellow-500 dark:border-l-yellow-500"
                : index === 1
                ? "border-l-blue-500 dark:border-l-blue-500"
                : index === 2
                ? "border-l-green-500 dark:border-l-green-500"
                : "border-l-red-500 dark:border-l-red-500"
            } border-borderLight dark:border-border`}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <span className="text-accent text-base">{parse(item.list)}</span>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="text-dark dark:text-light py-6 my-6 max-w-6xl mx-auto ">
      <h4 className="leading-none text-4xl mb-6 text-center text-dark dark:text-light">
        {title}
      </h4>
      <p className="text-center text-accent mb-6">{description}</p>
      {data.criteriaTable && (
        <div className="prose pt-6 max-w-4xl mx-auto w-full justify-center overflow-x-auto">
          {parse(data.criteriaTable)}
        </div>
      )}
      <div className="flex justify-center w-full">
        <div className="prose pt-6 max-w-4xl mx-auto grid sm:grid-cols-2 gap-7">
          {data.criteriaList &&
            data.criteriaList.length > 0 &&
            renderCriteriaList()}
        </div>
      </div>
    </div>
  );
};

export default ElegibilityCriteria;
