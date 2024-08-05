import { Card } from "@/components/ui/card";
import React from "react";
import { ArticleAttributes } from "@/types/types";
import Link from "next/link";
import { cn } from "@/utils/cn"; // Adjust the path as necessary
import { ImageExtended } from "../common/extended-image/extended-image";
import { Separator } from "@/components/ui/separator";

interface RelatedUniversities {
  data: ArticleAttributes[];
  className?: string;
  sticky?: string;
}

const UniversitiesNews = ({ data, className, sticky }: RelatedUniversities) => {
  return (
    <div className={`mt-3 ${sticky}`}>
      <Card className="">
        <div className="mt-3">
          <h2 className="font-bold text-xl px-5 mb-6">News</h2>
          <Separator orientation="vertical" />
          <div className={cn(className, "px-5")}>
            {data.map((newsItem) => (
              <div
                key={newsItem.id}
                className="mb-4 border-b border-dashed pb-5"
              >
                <Link href={`/news/post/${newsItem.slug}`}>
                  <div className="text-dark font-medium text-base grid grid-cols-4">
                    <div className="col-span-3">
                      <h2 className="line-clamp-2">{newsItem.title}</h2>
                    </div>
                    <div className="aspect-video relative">
                      <ImageExtended
                        src={newsItem.image.formats.thumbnail.url}
                        alt="hi"
                        height={150}
                        width={300}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UniversitiesNews;
