"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Title from "../common/title";
import React from "react";

const UniversitiesNews = ({ newsData }: any) => {
  console.log(newsData);
  return (
    <div>
      <Card>
        <CardHeader>
          <Title>News</Title>
        </CardHeader>
      </Card>
    </div>
  );
};

export default UniversitiesNews;
