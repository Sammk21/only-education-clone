import { HeaderProps } from "@/types/types";
import { list } from "postcss";
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

const DocumentRquired = ({ data }: Props) => {
  const { title, description } = data.header;

  return (
    <section className=" container mx-auto border-y  text-dark  dark:text-light py-12 mt-16 ">
      <div>
        <h4 className=" text-4xl py-6  font-medium">
          {title || "Document's Required"}
        </h4>
      </div>
      <p className=" text-accent mb-6">{description}</p>
      <div className="flex justify-between flex-col sm:flex-row max-w-5xl mx-auto">
        <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {data.documents.map((item) => (
            <li key={item.id} className="flex ">
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
                <strong className="mr-1"> {item.title}</strong>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DocumentRquired;
