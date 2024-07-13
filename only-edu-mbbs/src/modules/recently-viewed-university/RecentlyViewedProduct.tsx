"use client";

import { recentlyViewed } from "@/types/types";
import { useEffect, useState } from "react";
import { ImageExtended } from "../common/extended-image/extended-image";
import Link from "next/link";

const RecentlyViewedUniversity = () => {
  const [item, setItem] = useState<recentlyViewed[] | null>(null);

  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    if (ISSERVER) return;

    const storedItem = localStorage.getItem("recentlyViewed");

    if (storedItem) {
      try {
        const parsedItem: recentlyViewed[] = JSON.parse(storedItem);
        setItem(parsedItem);
      } catch (error) {
        console.error(
          "Failed to parse recentlyViewed from localStorage",
          error
        );
        setItem(null);
      }
    }
  }, []);

  return (
    <>
      {item ? (
        <div className="mb-8">
          <h4 className="font-semibold mb-4 text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl  items-center flex sm:flex-row">
            <span className=" capitalize">Recently viewed colleges</span>
          </h4>
          <div className=" flex gap-x-3 container mx-auto overflow-x-scroll">
            {item.map((viewedItem) => (
              <div
                className="flex flex-col justify-center items-center w-56 "
                key={viewedItem.slug}
              >
                <Link href={"/study/uni" + viewedItem.slug}>
                  <div className="w-24 h-24 relative rounded-lg overflow-hidden border">
                    <ImageExtended
                      src={viewedItem.image}
                      alt={viewedItem.title}
                      fill={true}
                    />
                  </div>
                </Link>
                <p className="text-xs line-clamp-1">{viewedItem.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default RecentlyViewedUniversity;
