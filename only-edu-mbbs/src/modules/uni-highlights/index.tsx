import React from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdCurrencyExchange } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import parse from "html-react-parser";
import Title from "../common/title";

interface Props {
  data: {
    id: number;
    highlights: string;
  };
}
const UniHighlights = ({ data }: Props) => {
  return (
    <section className="bg-white p-3 mt-4 rounded-lg border">
      <Title>Highlights</Title>
      <div className="w-full overflow-x-scroll sm:overflow-x-hidden rounded-lg prose-tr:border-b prose-td:divide-y prose-td:divide-gray-200 prose-td:dark:divide-neutral-700   prose-td:py-3 px prose-td:px-6  text-dark prose-tr: prose-table:w-full prose-figure:w-full prose-figure:mx-0 prose-table:border prose-figure:rounded-lg  prose-th:py-4 prose-th:bg-gray-50 prose-th:text-start prose-th:px-4">
        {parse(data.highlights)}
      </div>
    </section>
  );
};

export default UniHighlights;
