import React from "react";
import BlogPage from "../../modules/blog-components/blog/BlogPage";
import { getStrapiData } from "@/utils/utils";

const blogListQuery =
  "/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category";

async function BlogIndexPage() {
  const data = await getStrapiData(blogListQuery);

  return <BlogPage data={data.data} />;
}


export default BlogIndexPage;


