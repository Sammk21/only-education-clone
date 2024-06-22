// import { parse } from "path";
import React from "react";
import parse from "html-react-parser";

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
    list: Listprops[];
    placementTable: string;
  };
}
const PlacementInfo = ({ data }: Props) => {
  return (
    <section className="container" id="placement">
      <h2 className="text-4xl font-medium  mb-6 text-dark">
        Placement Facility
      </h2>
      <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {data.list.map((item) => (
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
      </ul>
      <div className="w-full overflow-x-scroll sm:overflow-x-hidden rounded-lg prose-tr:border-b prose-td:divide-y prose-td:divide-gray-200 prose-td:dark:divide-neutral-700   pt-6 prose-td:py-3 px prose-td:px-6  text-dark prose-tr: prose-table:w-full prose-figure:w-full prose-figure:mx-0 prose-table:border prose-figure:rounded-lg  prose-th:py-4 prose-th:bg-gray-50 prose-th:text-start prose-th:px-4">
        {parse(data.placementTable)}
      </div>
    </section>
  );
};

export default PlacementInfo;
