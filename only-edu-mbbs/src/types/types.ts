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
  title:string
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
  blurhash: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;

}


export interface ImageAttributes {
  // To Do reduce incomming objects (query optimization)

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
  blurhash: string;
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

export interface ArticleAttributes {
  id: number;
  title: string;
  slug: string;
  live: string | null;
  description: string | null;
  image: ImageAttributes;
  category: CategoryAttributes;
  recommendedArticle: string | null;
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
}

export interface MetaSocialsProps {
  id: number;
  socialNetwork: string;
  title: string;
  description: string;
}

export interface SeoProps {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: string | null;
  metaRobots?: string | null;
  structuredData?: object | null;
  metaViewport?: string | null;
  canonicalURL?: string | null;
  metaImage: ImageAttributes | null;
  metaSocial: MetaSocialsProps[];
}

export interface CountryData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  noOfStudentsStudying: string;
  seo: SeoProps;
}

export interface MetaProps {
  data: CountryData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ServerResponse {
  data: null | any;
  error?: {
    status: number;
    name: string;
    message: string;
    details: {
      errors: Array<{
        path: string[];
        message: string;
        name: string;
      }>;
    };
  };
}

interface ownership {
  id: number;
  title: string;
  slug: string;
}
interface streams {
  id: number;
  title: string;
  slug: string;
}
interface indian_state {
  id: number;
  title: string;
  slug: string;
}
interface data {
  id: number;
  title: string;
  slug: string;
}
export interface UniversityProfile {
  backgroundImage: ImageAttributes;
  fees: string;
  avgPackage: string;
  description: string;
}
export interface Universitylist {
  title?: string;
  id?: number;
  slug: string;
  universityProfile?: UniversityProfile;
  ownership?: ownership;
  indian_state?: indian_state;
  streams?: streams;
  searchableImage: ImageAttributes;

  exams?: {
    data: data[];
  };
}

export interface UniversitiesData {
  data: Universitylist[];
}

export interface SearchParamsProps {
  searchParams: {
    locationsParam?: string;
    examsParam?: string;
    ownershipsParam?: string;
    query?: string;
    page?: number;
  };
}

export interface searchParamUserId {
  searchParams: {
    dh: string;
  };
}

export interface UserType {
  ok: boolean;
  data: {
    id: number;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    job: string | null;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    username: string;
    phone: string;
    verified: boolean;
    last_otp_request: any | null;
    resend_attempts: number | null;
    otp_session: string | null;
    error:
      | {
          status: number;
          name: string;
          message: string;
          details: object;
        }
      | unknown;
  } | null;
  error: unknown;
}
//types for extended image

import {
  OnLoadingComplete,
  PlaceholderValue,
} from "next/dist/shared/lib/get-img-props";

export interface IImageExtended
  extends Omit<
      React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >,
      "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"
    >,
    React.RefAttributes<HTMLImageElement | null> {
  src: string;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  loader?: undefined;
  quality?: number | `${number}` | undefined;
  priority?: boolean | undefined;
  loading?: "eager" | "lazy" | undefined;
  placeholder?: PlaceholderValue | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  onLoadingComplete?: OnLoadingComplete | undefined;
  layout?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  lazyBoundary?: string | undefined;
}



export interface recentlyViewed {
  slug: string;
  image: string;
  title: string;
}