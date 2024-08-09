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
        <div className=" mt-2">
          <p className=" text-light text-xl text-center items-center flex sm:flex-row">
            Recently viewed colleges
          </p>
          <div className="gap-x-3  overflow-x-auto mt-1.5 grid grid-cols-4 sm:grid-cols-5 gap-1 md:grid-cols-6">
            {item.map((viewedItem) => (
              <div
                className=" flex items-start text-clip w-16 "
                key={viewedItem.slug}
              >
                <div className="flex flex-col  items-center w-full h-full">
                  <Link href={"/study/uni/" + viewedItem.slug}>
                    <div className="w-11 h-11 relative  rounded-lg overflow-hidden bg-white border">
                      <ImageExtended
                        src={viewedItem.image}
                        alt={viewedItem.title}
                        fill={true}
                      />
                    </div>
                  </Link>
                  <p className="text-xs text-center line-clamp-2">
                    {viewedItem.slug}
                  </p>
                </div>
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
