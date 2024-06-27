import BlogPage from "@/modules/blog-components/blog/BlogPage";
import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import NewsLetter from "@/modules/newsletter";
import { SearchParamsProps } from "@/types/types";
import { getArticles } from "@/utils/utils";
import { Metadata } from "next";

const blogListQuery =
  "/api/news?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category&fields[5]=live&fields[6]=value";
console.dir("check", blogListQuery);
export const metadata: Metadata = {
  title: "News | Only education",
  description: "this is the article page for Article section of only education",
};

async function BlogIndexPage({ searchParams }: Readonly<SearchParamsProps>) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getArticles(blogListQuery, currentPage);

  const { pagination } = data.meta;

  return (
    <>
      <BlogPage data={data.data} />;
      <PaginationComponent pageCount={pagination.pageCount} />
      <NewsLetter />
    </>
  );
}

export default BlogIndexPage;
