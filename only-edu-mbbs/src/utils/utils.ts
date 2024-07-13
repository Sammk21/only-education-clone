
import { z } from "zod";


 const baseUrl = process.env.API_URL || `https://admin.onlyeducation.co.in`;

export function flattenAttributes(data:any):any {
  // Check if data is a plain object; return as is if not
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  // Initialize an object with an index signature for the flattened structure
  let flattened: { [key: string]: any } = {};

  // Iterate over each key in the object
  for (let key in data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}



const token =
  "9739266bb3e37068ff04ee4ddd928783e584a9d514ea6005e917bea8d6fbdcc12912d87e290417302c6bf2d079c3de0d4db11af97956c6cb5fd2bed0b7fddab643aaf051c99ba4168556530affe53d2d70fbae6124066e6f26532e0465fb4ccf7c84ce8252b61a54fbc2dd53949126811db5dcdf27f86ce231b7946044955208";

export async function getStrapiData(path: string) {
  try {
    const response = await fetch(baseUrl + path, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",

    }); 

  

    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}

export async function getArticles(path:string, currentPage:number){
const PAGE_SIZE = process.env.PAGE_SIZE || 10                                          
const paginationQuery = `&pagination[page]=${currentPage}&pagination[pageSize]=${PAGE_SIZE}`
 try {
    const response = await fetch(baseUrl + path + paginationQuery, {
      cache: "no-store",
    }); 
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
  
}

export async function getUniversities(path:string, currentPage:number){
const PAGE_SIZE = process.env.PAGE_SIZE || 10                                          
const paginationQuery = `&pagination[page]=${currentPage}&pagination[pageSize]=${PAGE_SIZE}`
 try {
    const response = await fetch(baseUrl + path + paginationQuery); 
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    return error
  }
}


export async function getCachedData(path: string) {

 

  try {
    const response = await fetch(baseUrl + path); 
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }

}

export async function getMetaData(plural:string, slug:string){
 const seoQuery = `/api/${plural}?filters[slug][$eq]=${slug}&populate[seo][populate][metaSocial][populate]=true&populate[seo][populate][metaImage][populate]=true`;
  

  try {
    const response = await fetch(baseUrl + seoQuery, {cache: "no-store"}); 
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}


export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

export const enquiryFormSchema = z.object({
  level: z.string({
    required_error: "please select the level",
  }),
  specialization: z.string({
    required_error: "please select the specialization",
  }),
});

export const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
  e.target.value = value; // Set the input value
};

 export const maskPhoneNumber = (username: string | undefined) => {
   if (!username) return;
   return username.replace(/\d{6}(\d{4})/, "******$1");
 };