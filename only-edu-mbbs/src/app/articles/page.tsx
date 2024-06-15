"use client";
import React, { useEffect, useState } from "react";
import BlogPage from "../../modules/blog-components/blog/BlogPage";
import { getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import { arrayOutputType } from "zod";
import { ArticleAttributes } from "@/types/types";

const initialQuery =
  "/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category&pagination[page]=1&pagination[pageSize]=2";

async function fetchData(query: string): Promise<ArticleAttributes[]> {
  console.log("Fetching data with query:", query);
  const data = await getStrapiData(query);
  console.dir(data);
  return data;
}

function BlogIndexPage() {
  const [blogs, setBlogs] = useState<ArticleAttributes[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function loadInitialData() {
      try {
        const initialData = await fetchData(initialQuery);
        setBlogs(initialData);
      } catch (error) {
        console.error("Failed to load initial data:", error);
      }
    }
    loadInitialData();
  }, []);

  const loadMore = async () => {
    const nextPage = page + 1;
    const query = `/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category&pagination[page]=${nextPage}&pagination[pageSize]=2`;
    try {
      const newBlogs = await fetchData(query);
      setBlogs([...blogs, ...newBlogs]);
      setPage(nextPage);
    } catch (error) {
      console.error("Failed to load more data:", error);
    }
  };

  console.dir(blogs);

  return <></>;

  // return <BlogPage data={data.data} />;
}

export default BlogIndexPage;
