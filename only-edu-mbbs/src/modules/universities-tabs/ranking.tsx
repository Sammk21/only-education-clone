import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import Title from "../common/title";
import { ImageAttributes } from "@/types/types";
import Image from "next/image";

interface rankingProps {
  id: number;
  rankingYear: string;
  description: string;
  rankingNumber: string;
  course: {
    id: string;
    title: string;
    slug: string;
  };
  rankings: {
    publisherName: string;
    publisherImage: ImageAttributes;
  };
}
interface Props {
  data: rankingProps[];
}

const Ranking = ({ data }: Props) => {
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";

  console.dir(data);
  return (
    <div className="mt-3">
      <Card>
        <CardHeader>
          <Title>Ranking Highlight</Title>
        </CardHeader>
        <div className=" px-5">
          {data.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg mb-5">
              <div>
                <h2 className="font-semibold text-lg">
                  {item.rankings.publisherName} Ranking
                </h2>
                <div className="flex justify-between gap-4 mt-3">
                  <p>{item.description}</p>

                  <div className="relative p-4 border rounded-md">
                    <Image
                      src={`${baseUrl}${item.rankings.publisherImage.url}`}
                      alt={item.rankings.publisherName}
                      width={150}
                      height={150}
                      //   fill={true}
                      className="aspect-auto"
                    />
                  </div>
                </div>
              </div>
              <table className="mt-5 prose-tr:border-gray-300 prose-th:py-2 pt-0 prose-figure:m-0 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light prose-th:px-4 prose-th:bg-[#322f3e] prose-th:text-light">
                <thead>
                  <tr>
                    <th>Stream</th>
                    <th>{item.rankingYear} Ranking</th>
                  </tr>
                </thead>{" "}
                <tbody>
                  <tr>
                    <td>{item.course.title}</td>
                    <td>{item.rankingNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Ranking;
