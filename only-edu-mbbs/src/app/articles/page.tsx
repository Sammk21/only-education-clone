import React from "react";
import BlogPage from "../../modules/blog-components/blog/BlogPage";
import { getStrapiData } from "@/utils/utils";
import { Metadata } from "next";

const blogListQuery =
  "/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category&pagination[page]=1&pagination[pageSize]=2";

export const metadata: Metadata = {
  title: "Articles | Only education",
  description: "this is the article page for Article section of only education",
};

async function BlogIndexPage() {
  const data = await getStrapiData(blogListQuery);
  console.dir(data);

  return <BlogPage data={data.data} />;
}

export default BlogIndexPage;
