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
    <section className="py-6 my-6 ">
      <h4 className="text-4xl text-center text-dark  dark:text-light ">
        {data[0].header.title}
      </h4>
      <p className="text-center">{data[0].header.description}</p>
      <div className="flex prose  prose-table:text-sm pt-6 max-w-4xl mx-auto w-full justify-center items-center text-sm  text-dark dark:text-accent ">
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
