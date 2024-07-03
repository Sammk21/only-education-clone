"use client";

import React from "react";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Content } from "next/font/google";
import Title from "../common/title";

interface UniTabsProps {
  data: {
    header: string;
    content?: string;
  };
}
const OverviewTab = ({ data }: UniTabsProps) => {
  return (
    <>
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
    </>
  );
};

export default OverviewTab;
