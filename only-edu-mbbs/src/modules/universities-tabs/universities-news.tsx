import { Card, CardHeader } from "@/components/ui/card";
import Title from "../common/title";
import React from "react";
import { ArticleAttributes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn"; // Adjust the path as necessary

interface RelatedUniversities {
  data: ArticleAttributes[];
  className?: string;
  sticky?: string;
}

const UniversitiesNews = ({ data, className, sticky }: RelatedUniversities) => {
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";

  return (
    <div className={`mt-3 ${sticky}`}>
      <Card>
        <CardHeader>
          <Title>News</Title>
        </CardHeader>
        <div className={cn(className, "px-5")}>
          {data.map((newsItem) => (
            <div key={newsItem.id} className="mb-4 border-b border-dashed pb-5">
              <Link href={`/news/post/${newsItem.slug}`}>
                <div className="text-dark text-base flex gap-3">
                  <h2 className="line-clamp-2">{newsItem.title}</h2>
                  <Image
                    src={baseUrl + newsItem.image.formats.thumbnail.url}
                    alt="hi"
                    width={100}
                    height={100}
                    className="mt-2 rounded-lg"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default UniversitiesNews;
