import { blogListQuery } from "@/app/data/quries/news-query";
import BlogPage from "@/modules/blog-components/blog/BlogPage";
import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import NewsLetter from "@/modules/newsletter";
import { SearchParamsProps } from "@/types/types";
import { getArticles } from "@/utils/utils";
import { Metadata } from "next";

console.dir("check", blogListQuery);
export const metadata: Metadata = {
  title: "News | Only education",
  description: "this is the article page for Article section of only education",
};

async function BlogIndexPage({ searchParams }: Readonly<SearchParamsProps>) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getArticles(blogListQuery, currentPage);

  const { pagination } = data.meta;
  const href = "/news/post";
  const heading = "News";

  return (
    <>
      <BlogPage data={data.data} href={href} heading={heading} />;
      <PaginationComponent pageCount={pagination.pageCount} />
      <NewsLetter />
    </>
  );
}

export default BlogIndexPage;
