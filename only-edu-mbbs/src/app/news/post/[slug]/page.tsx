import React from "react";
import { Montserrat, Merriweather } from "next/font/google";
import NewsLetter from "@/modules/newsletter";
import { ArticleAttributes, MetaProps } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";

import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import InformationSlider from "@/modules/sliders/slider-one";

const mosterrat = Montserrat({
  weight: ["300", "400", "700", "900", "100", "200", "500", "600", "800"],
  subsets: ["latin"],
});
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("news", params.slug);
  const baseUrl = process.env.API_URL || "http://localhost:1337";

  const { seo } = data.data[0];

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      images: [
        {
          url: baseUrl + seo?.metaImage?.url || "",
        },
      ],
    },
    keywords: seo?.keywords,
    viewport: seo.metaViewport,
    robots: seo.metaRobots,
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blogQuery = `/api/news?filters[slug][$eq]=${params.slug}&populate[image]=true&populate[news][populate][2]=image&populate[news][populate]=true`;
  const baseUrl = process.env.API_URL || "http://localhost:1337";
  const data = await getStrapiData(blogQuery);

  const {
    title,
    description,
    ckeditor_content,
    createdAt,
    routes,
    image,
    news,
  } = data.data[0];

  const recommendedQuery = `/api/news?filters[recommendedNews][$eq]=true&populate[image]=true`;
  const recommendedData = await getStrapiData(recommendedQuery);

  const recommended =
    recommendedData.data.length > 0 ? recommendedData.data[0] : null;

  return (
    <div className=" w-full ">
      <div className="flex justify-around">
        <main
          className={`${mosterrat.className} lg:w-[60%] py-1 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light   bg-light dark:bg-dark antialiased dark:prose-a:text-blue-500`}
        >
          <div className="flex leading-relaxed  justify-between px-4 mx-auto max-w-full ">
            <article
              className="mx-auto w-full max-w-full 
          
          "
            >
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic"></address>
                <div className="relative mb-16">
                  <div>
                    <h1
                      className={`${merriweather.className} text-2xl font-extrabold leading-tight text-dark lg:mb-6 lg:text-2xl dark:text-light mb-8`}
                    >
                      {title}
                    </h1>
                    <p className="italic">{description}</p>
                  </div>

                  <div className="aspect-video relative">
                    <Image
                      src={baseUrl + image.url}
                      alt=""
                      fill={true}
                      className="object-cover object-center  "
                    />
                  </div>
                </div>
              </header>
              {parse(ckeditor_content)}
            </article>
          </div>
        </main>

        <div className="sticky top-12 h-32  py-16 w-[24%] mb-80 hidden lg:block">
          <div className="border mt-6 rounded-sm px-2 py-3">
            <h4 className="text-dark text-center border-b pb-3 mb-3 text-xl font-semibold">
              Other Trending News
            </h4>

            {/* {recommendedData.data.length > 0 &&
              recommendedData.data.map((article: ArticleAttributes) => (
                <div key={article.id} className="mb-4 px-2">
                  <Link
                    href={article.slug}
                    className="flex flex-row-reverse justify-end "
                  >
                    <h5 className="text-sm text-dark px-2 capitalize line-clamp-2 h-fit">
                      {article.title}
                    </h5>
                    <Image
                      src={baseUrl + article.image.url}
                      alt={article.title}
                      width={80}
                      height={80}
                      className=""
                    />
                  </Link>
                </div>
              ))} */}
          </div>
        </div>
      </div>
      <InformationSlider data={news} href="news" />
      <NewsLetter />
    </div>
  );
}
