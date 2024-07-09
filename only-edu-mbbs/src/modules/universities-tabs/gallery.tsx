/*

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

*/

"use client";

import { Card } from "@/components/ui/card";
import { ImageAttributes } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

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

  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [lightboxSources, setLightboxSources] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (images: ImageAttributes[], index: number) => {
    const sources = images.map((item) => baseUrl + item.url);
    setLightboxSources(sources);
    setSelectedIndex(index);
    setLightboxToggler(!lightboxToggler);
  };

  const renderImages = (images: ImageAttributes[], group: string) => (
    <div className={`grid sm:grid-cols-4 grid-cols-2 gap-4 ${className}`}>
      {images.map((item, index) => (
        <div key={item.id} onClick={() => openLightbox(images, index)}>
          <Image
            src={baseUrl + item.url}
            alt={item.alternativeText || ""}
            width={300}
            height={200}
            className="rounded-lg cursor-pointer object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );

  return (
    <Card className="px-5 py-5 mt-4">
      <FsLightbox
        toggler={lightboxToggler}
        sources={lightboxSources}
        slide={selectedIndex + 1}
      />
      {event?.data && (
        <div>
          <h2 className="text-dark font-semibold mb-4 text-xl">Events</h2>
          {renderImages(event.data, "event-group")}
        </div>
      )}

      {infra?.data && (
        <div>
          <h2 className="text-dark font-semibold mb-4 text-xl">
            Infrastructure
          </h2>
          {renderImages(infra.data, "infra-group")}
        </div>
      )}
    </Card>
  );
};

export default GalleryTabs;
