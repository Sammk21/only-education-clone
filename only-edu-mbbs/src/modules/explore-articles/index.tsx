import { ArticleAttributes } from "@/types/types";
import React from "react";
import { ImageExtended } from "../common/extended-image/extended-image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShareComponent } from "../share-component";
interface BlogPageProps {
  data: {
    data: ArticleAttributes[];
  };
  href: string;
}
const ExploreArticles = ({ data, href }: BlogPageProps) => {
  return (
    <div className="py-9 border-b bg-orange-50">
      <div className="container">
        <h3 className="capitalize font-semibold mb-4 text-dark md:text-3xl text-2xl pl-2 lg:pl-0">
          Explore Our Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-4 gap-3">
          {data.data.map((item) => (
            <div className="grid grid-rows-[1fr,auto] bg-white px-3 py-2 border rounded-lg">
              <div key={item.id} className="grid grid-cols-3  ">
                <div className="col-span-2 mr-3">
                  <h3 className="font-bold text-dark text-2xl mr-  line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="line-clamp-2 text-black/50  text-md mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="relative aspect-video rounded-sm overflow-hidden ml-1">
                  <ImageExtended
                    src={item.image.url}
                    alt=""
                    className="grid-cols-1 object-cover object-top "
                    fill={true}
                  ></ImageExtended>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <p className="mt-1 text-sm text-dark/75 pt-1 inline-block">
                  {item.createdAt
                    ? new Date(item.createdAt)?.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : ""}
                </p>
                <ShareComponent />
              </div>
            </div>
          ))}
        </div>

        <Button className="bg-orange-400 text-white rounded-sm px-4 py-1 flex m-auto">
          View All
        </Button>
      </div>
    </div>
  );
};

export default ExploreArticles;
