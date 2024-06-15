import React from "react";
import BlogPage from "../../modules/blog-components/blog/BlogPage";
import { getArticles, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import NewsLetter from "@/modules/newsletter";

const blogListQuery =
  "/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category";

export const metadata: Metadata = {
  title: "Articles | Only education",
  description: "this is the article page for Article section of only education",
};

interface SearchParamsProps {
  searchParams?: {
    query?: string;
    page?: number;
  };
}

async function BlogIndexPage({ searchParams }: Readonly<SearchParamsProps>) {
  // const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getArticles(blogListQuery, currentPage);

  const { pagination } = data.meta;

  console.dir(pagination);

  return (
    <>
      <BlogPage data={data.data} />;
      <PaginationComponent pageCount={pagination.pageCount} />
      <NewsLetter />
    </>
  );
}

export default BlogIndexPage;
