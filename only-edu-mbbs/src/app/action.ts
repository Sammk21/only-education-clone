'use server'

import { flattenAttributes } from "@/utils/utils";
import { redirect, useSearchParams } from "next/navigation";

 
export async function getData(path: string) {
  
  const baseUrl = process.env.API_URL || `http://localhost:1337`;
  try {
    const response = await fetch(baseUrl + path, { cache: "no-store" }); 
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    // console.error(error);
  }
}

export const updatedFilters = async (formData: FormData) => {
  const locations = formData.getAll('Location');
  const exams = formData.getAll('Exams');
  const ownerships = formData.getAll('Ownership');

   if (locations.length > 0 || exams.length > 0 || ownerships.length > 0) {
    const params = new URLSearchParams();
    if (locations.length > 0) params.append('locations', locations.join(','));
    if (exams.length > 0) params.append('exams', exams.join(','));
    if (ownerships.length > 0) params.append('ownerships', ownerships.join(','));
    redirect(`/universities-list?${params.toString()}`);
  } else {
    redirect('/universities-list');
  }
};