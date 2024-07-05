import { Card, CardHeader } from "@/components/ui/card";
import Title from "../common/title";
import React from "react";
import { ArticleAttributes, Universitylist } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
interface relatedUniversities {
  data: ArticleAttributes[];
  clasname: string;
}

const UniversitiesNews = ({ data, classname }: relatedUniversities) => {
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";

  return (
    <div className="mt-3">
      <Card>
        <CardHeader>
          <Title>News</Title>
        </CardHeader>
        <div className={`${classname} px-5`}>
          {data.map((newsItem) => (
            <div key={newsItem.id} className="mb-4 border-b border-dashed pb-5">
              <Link href={`/news/post/${newsItem.slug}`}>
                <div className=" text-dark   text-base flex gap-3">
                  <h2 className="line-clamp-2">{newsItem.title}</h2>
                  <Image
                    src={baseUrl + newsItem.image.formats.thumbnail.url}
                    alt="hi"
                    // placeholder="blur"
                    // blurDataURL={newsItem.image.formats.thumbnail.blurhash}
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
