import React from "react";
import PostList from "@/modules/blog-components/postlist";
import { ArticleAttributes } from "@/types/types";

interface BlogPageProps {
  data: ArticleAttributes[];
  href: string;
  heading: string;
}

const BlogPage: React.FC<BlogPageProps> = ({
  data,
  href,
  heading,
}: BlogPageProps) => {
  return (
    <section className="container mx-auto px-4">
      <h1 className="font-medium text-dark text-3xl">
        Only Education {heading}
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:gap-10">
        {data.map((item) => (
          <PostList key={item.id} post={item} href={href} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
