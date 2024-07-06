"use client";

import React from "react";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Content } from "next/font/google";
import Title from "../common/title";

interface UniTabsProps {
  data: {
    id: number;
    header: string;
    content?: string;
  };
}
const GlobalUniversitiesTabs = ({ data }: UniTabsProps) => {
  if (!data) {
    console.log("No data or incomplete data:", data); // Log the issue to console
    return null;
  }
  return (
    <div className=" ">
      {data?.content && (
        <div className="mt-3">
          <Card>
            <CardHeader>
              <Title>{data.header}</Title>
            </CardHeader>
            <CardContent className="prose-h3:text-base sm:prose-h3:text-lg md:prose-table:overflow-hidden prose-table:overflow-scroll  prose-figure:m-0 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light prose-th:px-4 prose-th:bg-[#322f3e] prose-th:text-light  ">
              {parse(data.content)}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GlobalUniversitiesTabs;
