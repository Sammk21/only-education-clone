'use server'
import { recentlyViewed } from "@/types/types";
import { flattenAttributes } from "@/utils/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function getData(path: string) {
  const baseUrl = process.env.API_URL || `https://admin.onlyeducation.co.in`;
  try {
    const response = await fetch(baseUrl + path, { cache: "no-store" });
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {}
}

export const updatedFilters = async (formData: FormData) => {
  const locations = formData.getAll("Location");
  const exams = formData.getAll("Exams");
  const ownerships = formData.getAll("Ownership");

  if (locations.length > 0 || exams.length > 0 || ownerships.length > 0) {
    const params = new URLSearchParams();
    if (locations.length > 0)
      params.append("locationsParam", locations.join(","));
    if (exams.length > 0) params.append("examsParam", exams.join(","));
    if (ownerships.length > 0)
      params.append("ownershipsParam", ownerships.join(","));
    redirect(`/universities-list?${params.toString()}`);
  } else {
    redirect("/universities-list");
  }
};

export const deleteFilters = async (event: React.FormEvent) => {
  event.preventDefault();
  redirect(`/universities-list`);
};

export const addRecentlyViewed = async (data: recentlyViewed) => {
  const { slug, image, title } = data;
  const cookieStore = cookies();
  const cookie = cookieStore.get("RVU");
  let recentlyViewed: recentlyViewed[] = [];

  if (cookie) {
    try {
      recentlyViewed = JSON.parse(cookie.value) as recentlyViewed[];
    } catch (e) {
      console.error("Failed to parse recently viewed products cookie:", e);
    }
  }

  const updatedViewed = [
    { slug, image, title },
    ...recentlyViewed.filter((p) => p.slug !== slug),
  ].slice(0, 6); // Adjusted to store only the last 6 viewed products

  cookies().set("RVU", JSON.stringify(updatedViewed), config);
  return {
    success: true,
  };
};