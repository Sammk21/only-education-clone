/*

"use client";

import React from "react";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Content } from "next/font/google";
import Title from "../common/title";
import { IoNotifications } from "react-icons/io5";

interface UniTabsProps {
  data?: {
    id: number;
    header: string;
    content?: string;
  };
  notification?: boolean;
}
const GlobalUniversitiesTabs = ({ data, notification }: UniTabsProps) => {
  if (!data) {
    return null;
  }
  return (
    <div className=" ">
      {data?.content && (
        <div className="mt-3">
          <Card>
            <CardHeader className="flex-row items-center gap-2 border-b pb-2 mb-4 px-6">
              {notification && (
                <IoNotifications className="text-orange-500 text-2xl" />
              )}

              <Title id={data.id}>{data.header}</Title>
            </CardHeader>
            <CardContent className="break-words prose-a:text-blue-600 prose-ul:list-disc prose-li:marker:text-dark/70  prose-td:border-[#322f3e] prose-td:border-1 prose-td:border-solid prose-figure:w-full prose-table:w-full prose-h3:text-base sm:prose-h3:text-lg   prose-figure:m-0 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light prose-th:px-4 prose-th:bg-[#322f3e] prose-th:text-light overflow-x-auto pb-4">
              {parse(data.content)}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GlobalUniversitiesTabs;
*/


"use client";

import React, { useState } from "react";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Title from "../common/title";
import { IoNotifications } from "react-icons/io5";

interface UniTabsProps {
  data?: {
    id: number;
    header: string;
    content?: string;
  };
  notification?: boolean;
  isLatestUpdate?: boolean; // New prop to differentiate latestUpdates
}

const GlobalUniversitiesTabs = ({ data, notification, isLatestUpdate }: UniTabsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!data) {
    return null;
  }

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      {data?.content && (
        <div className="mt-3">
          <Card>
            <CardHeader className="flex-row items-center gap-2 border-b pb-2 mb-4 px-6">
              {notification && (
                <IoNotifications className="text-orange-500 text-2xl" />
              )}
              <Title id={data.id}>{data.header}</Title>
            </CardHeader>
            <CardContent className="relative break-words prose-a:text-blue-600 prose-ul:list-disc prose-li:marker:text-dark/70 prose-td:border-[#322f3e] prose-td:border-1 prose-td:border-solid prose-figure:w-full prose-table:w-full prose-h3:text-base sm:prose-h3:text-lg prose-figure:m-0 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light prose-th:px-4 prose-th:bg-[#322f3e] prose-th:text-light overflow-x-auto pb-4">
              {parse(isLatestUpdate && !isExpanded ? data.content.substring(0, 200) : data.content)}
            </CardContent>
            {isLatestUpdate && !isExpanded && (
              <div className="absolute inset-x-0 bottom-10 h-16 bg-gradient-to-t from-white to-transparent blur-sm pointer-events-none" />
            )}
            {isLatestUpdate && (
              <button
                onClick={handleToggle}
                className="text-blue-500 font-normal text-base text-right px-6 w-full"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default GlobalUniversitiesTabs;

