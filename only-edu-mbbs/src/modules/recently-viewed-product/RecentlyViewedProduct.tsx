// components/RecentlyViewedProducts.tsx
import { cookies } from "next/headers";
import { getStrapiData } from "@/utils/utils"; // Adjust the import path as needed
import { recentlyViewed } from "@/types/types";

const RecentlyViewedProducts = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("recentlyViewed");
  let recentlyViewed: recentlyViewed[] = [];

  if (cookie) {
    try {
      recentlyViewed = JSON.parse(cookie.value) as recentlyViewed[];
    } catch (e) {
      console.error("Failed to parse recently viewed products cookie:", e);
    }
  }

  return (
    <div>
      <h2>Recently Viewed Products</h2>
      <ul>
        {recentlyViewed.map((item) => (
          <li key={item.slug}>{item.slug}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyViewedProducts;
