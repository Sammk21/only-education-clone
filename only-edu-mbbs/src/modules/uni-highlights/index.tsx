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
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  data: {
    id: number;
    content: string;
    header: string;
  };
}
const UniHighlights = ({ data }: Props) => {
  return (
    <section className="">
      {data.content && (
        <div className="mt-3">
          <Card>
            <CardHeader>
              <Title>{data.header}</Title>
            </CardHeader>
            <CardContent className="prose max-w-full prose-figure:m-0">
              {parse(data.content)}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default UniHighlights;
