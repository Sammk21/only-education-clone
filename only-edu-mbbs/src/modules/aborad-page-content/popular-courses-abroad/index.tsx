import { HeaderProps } from "@/types/types";
import React from "react";
interface Listprops {
  id: number;
  list: string;
}

interface documents {
  id: number;
  description: string;
  title: string;
}
interface Props {
  data: {
    id: number;
    header: HeaderProps;
    documents: documents[];
    list: Listprops[];
  };
}
const PopularCoursesAbroad = ({ data }: Props) => {
  return (
    <>
      <section className="px-6 border-y bg-greenDark rounded-t-[28px]  dark:border-y-border  border-y-borderLight dark:text-light py-12">
        <h4 className="text-center text-4xl py-6 mb-6 text-white">
          {data.header.title}
        </h4>
        <p className="mb-3 max-w-5xl mx-auto text-accent dark:text-gray-400">
          {data.header.description}
        </p>

        <div className="container">
          <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {data.documents.map((item) => (
              <li key={item.id} className="flex">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <p>
                  <strong className="mr-1 text-light"> {item.title}</strong>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          {/* <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {data.list.slice(5, 10).map((item) => (
              <li key={item.id} className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {item.list}
              </li>
            ))}
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default PopularCoursesAbroad;
