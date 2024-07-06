import { Card } from "@/components/ui/card";
import { ImageAttributes } from "@/types/types";
import Image from "next/image";

import React from "react";

interface GalleryTabsProps {
  event: {
    data: ImageAttributes[];
  };
  infra: {
    data: ImageAttributes[];
  };
  className?: string;
}
const GalleryTabs = ({ event, infra, className }: GalleryTabsProps) => {
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";

  return (
    <Card className="px-5 py-5 mt-4">
      {event?.data && (
        <div className="">
          <h2 className="text-dark font-semibold mb-4 text-xl">Events</h2>
          {/* <div className="grid grid-cols-4 gap-4 border-b border-dashed pb-8 mb-5"> */}
          <div className={` ${className} `}>
            {event.data.map((item) => (
              <Image
                key={item.id}
                src={baseUrl + item.url}
                alt={item.alternativeText || ""}
                width={item.width}
                height={item.height}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {infra?.data && (
        <>
          <h2 className="text-dark font-semibold mb-4 text-xl">
            Infrastructure
          </h2>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4  pb-8 mb-5">
            {infra.data.map((item) => (
              <Image
                key={item.id}
                src={baseUrl + item.url}
                alt={item.alternativeText || ""}
                width={item.width}
                height={item.height}
                className="rounded-lg"
              />
            ))}
          </div>
        </>
      )}
    </Card>
  );
};

export default GalleryTabs;
