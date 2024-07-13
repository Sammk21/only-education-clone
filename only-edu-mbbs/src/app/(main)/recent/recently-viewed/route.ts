import { recentlyViewed } from "@/types/types";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface RecentlyViewedProduct {
  slug: string;
  image: string;
  title: string;
}

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { slug, image, title } = body;

  const cookieStore = cookies();
  const cookie = cookieStore.get("RVU");
  let recentlyViewed: recentlyViewed[] = [];

  console.log("cookie", cookie);

  if (cookie) {
    try {
      recentlyViewed = JSON.parse(cookie.value) as recentlyViewed[];
    } catch (e) {
      console.error("Failed to parse recently viewed products cookie:", e);
    }
  }

  // Add the current product to the recently viewed list
  const updatedViewed = [
    { slug, image, title },
    ...recentlyViewed.filter((p) => p.slug !== slug),
  ].slice(0, 6); // Adjusted to store only the last 6 viewed products

  console.log(JSON.stringify(updatedViewed));

  // Create a new NextResponse to set the cookie
  const response = NextResponse.json({ success: true });
  response.cookies.set("RVU", JSON.stringify(updatedViewed), config);

  return response;
}
