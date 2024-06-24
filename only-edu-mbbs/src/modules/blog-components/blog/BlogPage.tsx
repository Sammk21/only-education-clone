import React from "react";
import PostList from "@/modules/blog-components/postlist";
import { ArticleAttributes } from "@/types/types";

interface BlogPageProps {
  data: ArticleAttributes[];
}

const BlogPage: React.FC<BlogPageProps> = ({ data }: BlogPageProps) => {
  return (
    <section className="container px-4">
      <h1 className="font-medium text-dark text-3xl">
        Only Education Articles
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:gap-10">
        {data.map((item) => (
          <PostList key={item.id} post={item} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
