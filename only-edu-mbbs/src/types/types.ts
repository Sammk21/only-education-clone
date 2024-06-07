// types.ts


export interface HeaderProps{
  id:number
 title: string;
 description:string| null

}


export interface faqProps{
  id:number
  question:string
  answer:string
}

export interface QnaProps{
  id:number
  Question:string
  Answer:string
}

export interface Links {
  id: number;
  href: string;
  label: string;
  target: string | null;
  isExternal: boolean;
}

export interface Dropdown {
  id: number;
  label: string;
  href: string;
  subMenuLinks: subMenuLinks[];
}

export interface CountryProps{
  id:number
  Title:string
  slug:string;
  noOfStudentsStudying:string;
}

export interface subMenuLinks{
  id: number;
  href:string
  label:string | null;
  target:string | null;
  isExternal: boolean;
  university:University
  country:CountryProps
}

interface University{
  id:number
  title:string
  slug:string
}

export interface Navigation {
  id: number;
  links: Links[];
  dropdown:Dropdown[];
}


//image Props from strapi response
interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface ImageAttributes {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    small: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

interface CategoryAttributes {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

interface ArticleAttributes {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  image: ImageAttributes;
  category: CategoryAttributes;
}

interface MetaData {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface BlogListResponse {
  data: ArticleAttributes[];
  // meta: MetaData;
}
