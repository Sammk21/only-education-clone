import React from "react";
import PostList from "@/modules/blog-components/postlist";
import Link from "next/link";

import { BlogListResponse } from "@/types/types";

import NewsLetter from "@/modules/newsletter";

export default function BlogPage({ data }: BlogListResponse) {
  return (
    <section className="container">
      <h1>Only Education Blogs</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10  ">
        {data.map((item) => (
          <PostList key={item.id} post={item} />
        ))}
      </div>
    </section>
  );
}
