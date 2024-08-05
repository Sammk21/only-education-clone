"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface Paper {
  id: number;
  url: string;
}
interface PreviousPaper {
  id: number;
  title: string;
  paper: Paper;
}

// Interface for the outer object
interface DataItem {
  id: number;
  header: string;
  subHeading: string;
  previousPapers: PreviousPaper[];
}

interface Props {
  data: DataItem[];
}

const PreviousPapers = ({ data }: Props) => {
  if (!data) {
    return null;
  }
  return (
    <div className="mt-3">
      {data.map((item) => (
        <div className="mt-3">
          <Card>
            <div key={item.id}>
              <CardHeader className="border-b pb-2 mb-2 px-6 font-semibold text-xl">
                {item.header}
              </CardHeader>
              <h3 className="px-6 font-semibold text-lg">{item.subHeading}</h3>
              <div className="relative overflow-x-auto shadow-sm sm:rounded-md mt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                         Session's
                      </th>
                      <th scope="col" className="px-6 py-3">
                       PDF Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {item.previousPapers.map((item) => (
                  
                    <tr key={1} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 cursor-pointer font-medium text-gray-900 whitespace-nowrap"
                    >
                   {item.title}
                    </th>
                    <td className="px-6 py-4">
                    <Link
                       className="text-blue-500 hover:text-orange-500 transition-colors  "
                        href={item.paper.url}
                      >
                        Download
                      </Link>
                    </td>
                  </tr>
                  ))}
                   </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PreviousPapers;
