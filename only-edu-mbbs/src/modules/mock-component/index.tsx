"use client";

import { recentlyViewed as RecentlyViewedType } from "@/types/types";
import { useEffect } from "react";

interface MockComponentProps {
  data: RecentlyViewedType;
}

const MockComponent = ({ data }: MockComponentProps) => {
  const { slug, image, title } = data;

  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    if (ISSERVER) return;

    let recentlyViewed: RecentlyViewedType[] = [];

    const item = localStorage.getItem("recentlyViewed");
    if (item) {
      try {
        const parsed = JSON.parse(item);
        if (Array.isArray(parsed)) {
          recentlyViewed = parsed as RecentlyViewedType[];
        }
      } catch (e) {
        console.error(
          "Failed to parse recently viewed items from localStorage"
        );
      }
    }

    // Add the new product and remove any duplicates
    const updatedViewed = [
      { slug, image, title },
      ...recentlyViewed.filter((p) => p.slug !== slug),
    ].slice(0, 6); // Limit to the most recent 6 items

    localStorage.setItem("recentlyViewed", JSON.stringify(updatedViewed));
  }, [slug, image, title]);

  return null;
};

export default MockComponent;
