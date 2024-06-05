'use server'

import { flattenAttributes } from "@/utils/utils";

 
export async function getData(path: string) {
  
  const baseUrl = process.env.API_URL || `http://localhost:1337`;
  try {
    const response = await fetch(baseUrl + path, { cache: "no-store" }); 
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}