'use server'
import { flattenAttributes } from "@/utils/utils";
import { redirect } from "next/navigation";

export async function getData(path: string) {
  const baseUrl = process.env.API_URL || `http://localhost:1337`;
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

