import { HeaderProps } from "@/types/types";
import React from "react";
import parse from "html-react-parser";

interface Props {
  data: {
    id: number;
    eligibityTable: string;
    header: HeaderProps;
  }[];
}
const ElegibilityCriteriaTable = ({ data }: Props) => {
  return (
    <section className="py-6 my-6 container">
      <h4 className="text-center text-4xl pt-6 mb-6  ">
        {data[0].header.title}
      </h4>
      <p className="text-center">{data[0].header.description}</p>
      <div className="overflow-x-scroll sm:overflow-x-hidden rounded-lg prose-tr:border-b prose-td:divide-y prose-td:divide-gray-200 prose-td:dark:divide-neutral-700     w-full prose-td:py-3 px prose-td:px-6  text-dark prose-tr: prose-table:w-full prose-figure:w-full prose-figure:mx-0 prose-table:border prose-figure:rounded-lg  prose-th:py-4 prose-th:bg-gray-50 prose-th:text-start prose-th:px-4">
        {/* <table className=" w-full max-w-5xl text-sm text-left rtl:text-right text-dark dark:text-accent  t">
          <thead className="text-xs text-dark uppercase bg-accent dark:bg-foreground borber-b border-b-dark dark:text-light">
            <tr>
              <th
                scope="col"
                className="sm:px-6 py-3 text-center text-xs sm:text-sm"
              >
                For Bachelor's programs
              </th>
              <th
                scope="col"
                className="sm:px-6 py-3 text-center text-xs sm:text-sm"
              >
                For Master's programs
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light border-b dark:dark:bg-accent/30 dark:border-b-dark sm:text-sm text-xs">
              <td
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap"
              >
                Students need to obtain 60%-65% in 12th class or GRE
              </td>
              <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
                Completed certificate of bachelors or Diploma for 3 to 4 years
              </td>
            </tr>

            <tr className="bg-light border-b dark:bg-accent/30 dark:border-b-dark sm:text-sm text-xs">
              <td
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap"
              >
                Required language tests such as IELTS and TOEFL exams
              </td>
              <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
                English Language proficiency tests such as IELTS, TOEFL, etc
              </td>
            </tr>
          </tbody>
        </table> */}
        <div>{parse(data[0].eligibityTable)}</div>
      </div>
    </section>
  );
};

export default ElegibilityCriteriaTable;
