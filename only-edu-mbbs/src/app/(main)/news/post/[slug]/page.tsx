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
import { halfBlogQuery } from "@/app/data/quries/news-query";
import { ImageExtended } from "@/modules/common/extended-image/extended-image";
import { CiStopwatch } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { ShareComponent } from "@/modules/share-component";

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
  const blogQuery = `/api/news?filters[slug][$eq]=${params.slug}${halfBlogQuery}`;
  const baseUrl = process.env.API_URL || "https://admin.onlyeducation.co.in";
  const data = await getStrapiData(blogQuery);
  const {
    title,
    description,
    ckeditor_content,
    createdAt,
    routes,
    image,
    news,
    slug,
  } = data.data[0];

  const recommendedQuery = `/api/news?filters[recommendedNews][$eq]=true&populate[image]=true`;
  const recommendedData = await getStrapiData(recommendedQuery);

  const recommended =
    recommendedData.data.length > 0 ? recommendedData.data[0] : null;

  const socialBaseUrl = `https://test.onlyeducation.co.in/news/post/`;
  const itemUrl = `${socialBaseUrl}${slug}`;

  return (
    <section className="bg-orange-50 ">
      <div className=" w-full lg:pt-8">
        <div className="flex justify-around pb-8  ">
          <main
            className={`${mosterrat.className} rounded-md lg:w-[60%] py-1 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light   bg-light dark:bg-dark antialiased dark:prose-a:text-blue-500`}
          >
            <div className="flex leading-relaxed  justify-between px-4 mx-auto max-w-full ">
              <article
                className="mx-auto w-full max-w-full 
          
          "
              >
                <header className="mb-4 lg:mb-6 not-format">
                  <div className="relative ">
                    <div className="border-b mb-4">
                      <div className="flex justify-between gap-4 mt-3">
                        <div>
                          <h3
                            className={`${merriweather.className} capitalize font-semibold text-dark  text-xl mt-0`}
                          >
                            {title}
                          </h3>
                        </div>
                        <div className="hidden sm:block">
                        <div className="flex border-2 rounded-full gap-1 items-center  px-2 h-fit py-1 ">
                          <ShareComponent url={itemUrl} />
                          <span className="font-semibold text-sm"> Share</span>
                        </div>
                        </div>

                      </div>
                      <div className="flex justify-between">
                      <div className="flex font-semibold text-sm gap-1 text-dark/40 mb-2">
                        <CiStopwatch className="text-lg " />
                        {createdAt
                          ? new Date(createdAt)?.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : ""}
                      </div>
                      <div className="block sm:hidden">
                          <ShareComponent url={itemUrl} />
                          
                        </div>
                      </div>

                    </div>
                    <div className="bg-[#f7f7f7] rounded-sm px-3 py-3  ">
                      <p className="italic my-0 text-[#666666] font-medium	 text-sm">
                        {description}
                      </p>
                    </div>

                    <div className="aspect-video relative w-[95%] m-auto">
                      <ImageExtended
                        src={image.url}
                        alt={title}
                        fill={true}
                        className="object-cover object-center rounded-lg mt-4 mb-0"
                      />
                    </div>
                  </div>
                </header>
                <div className="font-normal mt-8 break-words prose-a:text-blue-600 prose-ul:list-disc prose-li:marker:text-dark/70  prose-td:border-[#322f3e] prose-td:border-1 prose-td:border-solid prose-figure:w-full prose-table:w-full prose-h3:text-base sm:prose-h3:text-lg   prose-figure:m-0 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light prose-th:px-4 prose-th:bg-[#322f3e] prose-th:text-light overflow-x-auto pb-4">
                  {parse(ckeditor_content)}
                </div>
              </article>
            </div>
          </main>

          <div
            className={`sticky top-12 h-full w-[30%] bg-white  hidden lg:block ${
              recommendedData.data && recommendedData.data.length === 0
                ? "invisible"
                : ""
            }`}
          >
            <div className="border rounded-sm px-2 py-3">
              <h4 className="text-dark  border-b pb-3 mb-3 text-xl font-semibold">
                Other Trending News
              </h4>

              {recommendedData.data && recommendedData.data.length > 0 ? (
                recommendedData.data.map((article: ArticleAttributes) => (
                  <div
                    key={article.id}
                    className="mb-3 pb-4 px-2 border-dashed border-b "
                  >
                    <Link
                      href={article.slug}
                      className="flex flex-row-reverse justify-end"
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
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No trending news available.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <InformationSlider data={news} href="news" />
        </div>
      </div>
    </section>
  );
}
