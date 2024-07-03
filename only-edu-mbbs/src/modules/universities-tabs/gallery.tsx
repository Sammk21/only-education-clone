import { Card } from "@/components/ui/card";
import { ImageAttributes } from "@/types/types";
import Image from "next/image";

import React from "react";

interface GalleryTabsProps {
  data: {
    data: ImageAttributes[];
  };
  infra: {
    data: ImageAttributes[];
  };
}
const GalleryTabs = ({ data, infra }: GalleryTabsProps) => {
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";
  //   console.dir(data.data[0].url);

  return (
    <Card className="px-5 py-5">
      <h2 className="text-dark font-semibold mb-4 text-xl">Events</h2>
      <div className="grid grid-cols-4 gap-4 border-b border-dashed pb-8 mb-5">
        {data.data.map((item) => (
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
      <h2 className="text-dark font-semibold mb-4 text-xl">Infrastructure</h2>
      <div className="grid grid-cols-4 gap-4">
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
    </Card>
  );
};

export default GalleryTabs;
