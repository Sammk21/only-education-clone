/*
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
import { halfBlogQuery } from "@/app/data/quries/articles-query";
import { ImageExtended } from "@/modules/common/extended-image/extended-image";

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
  const data: MetaProps = await getMetaData("articles", params.slug);
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
  const blogQuery = `/api/articles?filters[slug][$eq]=${params.slug}${halfBlogQuery}`;
  const baseUrl = process.env.API_URL || "https://admin.onlyeducation.co.in";

  const data = await getStrapiData(blogQuery);

  const {
    title,
    description,
    ckeditor_content,
    createdAt,
    image,
    relatedArticles,
    articles,
  } = data.data[0];


  const recommendedQuery = `/api/articles?filters[recommendedArticle][$eq]=true&populate[image]=true`;
  const recommendedData = await getStrapiData(recommendedQuery);
 
  return (
    <div className="w-full ">
      <div className="flex justify-around">
        <main
          className={`${mosterrat.className} lg:w-[60%] py-1 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light   bg-light dark:bg-dark antialiased dark:prose-a:text-blue-500`}
        >
          <div className="flex leading-relaxed  justify-between px-4 mx-auto max-w-full ">
            <article className="mx-auto w-full max-w-full  ">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic"></address>
                <div className="relative mb-16">
                  <div>
                    <h1
                      className={`${merriweather.className} text-lg  mb-3 sm:text-2xl md:text-3xl  font-extrabold leading-tight text-dark lg:mb-6 lg:text-4xl dark:text-light`}
                    >
                      {title}
                    </h1>
                    <p className="italic text-xs my-0">{description}</p>
                  </div>
                  <div className="aspect-video relative">
                    <ImageExtended
                      src={image.url}
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

        <div className="sticky top-12 h-32  py-1 w-[24%] mb-80 hidden lg:block">
          <div className="border mt-6 rounded-sm px-2 py-3">
            <h4 className="text-dark text-center border-b pb-3 mb-3 text-xl font-semibold">
              Other Trending Articles
            </h4>

            {recommendedData.data.length > 0 &&
              recommendedData.data.map((article: ArticleAttributes) => (
                <div key={article.id} className="mb-4 px-2">
                  <Link
                    href={article.slug}
                    className="flex flex-row-reverse justify-end "
                  >
                    <h5 className="text-sm text-dark px-2 capitalize line-clamp-2 h-fit">
                      {article.title}
                    </h5>
                    <ImageExtended
                      src={article.image.url}
                      alt={article.title}
                      width={80}
                      height={80}
                      className=""
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>

       <div
  className={`sticky top-12 h-32 py-1 w-[24%] mb-80 hidden lg:block ${
    recommendedData.data && recommendedData.data.length === 0 ? 'invisible' : ''
  }`}
>
  <div className="border mt-6 rounded-sm px-2 py-3">
    <h4 className="text-dark text-center border-b pb-3 mb-3 text-xl font-semibold">
      Other Trending Articles
    </h4>

    {recommendedData.data && recommendedData.data.length > 0 ? (
      recommendedData.data.map((article: ArticleAttributes) => (
        <div key={article.id} className="mb-4 px-2">
          <Link href={article.slug} className="flex flex-row-reverse justify-end">
            <h5 className="text-sm text-dark px-2 capitalize line-clamp-2 h-fit">
              {article.title}
            </h5>
            <ImageExtended
              src={article.image.url}
              alt={article.title}
              width={80}
              height={80}
              className=""
            />
          </Link>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No trending articles available.</p>
    )}
  </div>
</div>


      </div>
     


      <InformationSlider data={articles} href="articles" />
      <NewsLetter />
    </div>
  );
}

*/


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
import { halfBlogQuery } from "@/app/data/quries/articles-query";
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

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const data: MetaProps = await getMetaData("articles", params.slug);
//   const baseUrl = process.env.API_URL || "http://localhost:1337";

//   const { seo } = data.data[0];

//   return {
//     title: seo.metaTitle,
//     description: seo.metaDescription,
//     openGraph: {
//       images: [
//         {
//           url: baseUrl + seo?.metaImage?.url || "",
//         },
//       ],
//     },
//     keywords: seo?.keywords,
//     viewport: seo.metaViewport,
//     robots: seo.metaRobots,
//   };
// }

export default async function Blog({ params }: { params: { slug: string } }) {
  const blogQuery = `/api/articles?filters[slug][$eq]=${params.slug}${halfBlogQuery}`;
  const baseUrl = process.env.API_URL || "https://admin.onlyeducation.co.in";
  const data = await getStrapiData(blogQuery);

  const {
    title,
    description,
    ckeditor_content,
    createdAt,
    image,
    relatedArticles,
    articles,
  } = data.data[0];

  const recommendedQuery = `/api/articles?filters[recommendedArticle][$eq]=true&populate[image]=true`;
  const recommendedData = await getStrapiData(recommendedQuery);

  const socialBaseUrl = `https://test.onlyeducation.co.in/articles/post/`;
  const itemUrl = `${socialBaseUrl}${params.slug}`;

  return (
    <section className="bg-orange-50 ">
      <div className="w-full lg:pt-8">
        <div className="flex justify-around pb-8">
          <main
            className={`${mosterrat.className} rounded-md lg:w-[60%] py-1 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light bg-light dark:bg-dark antialiased dark:prose-a:text-blue-500`}
          >
            <div className="flex leading-relaxed justify-between px-4 mx-auto max-w-full">
              <article className="mx-auto w-full max-w-full">
                <header className="mb-4 lg:mb-6 not-format">
                  <div className="relative">
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
                        <CiStopwatch className="text-lg" />
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
                    <div className="bg-[#f7f7f7] rounded-sm px-3 py-3">
                      <p className="italic my-0 text-[#666666] font-medium text-sm">
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
                <div className="font-normal mt-8 break-words prose-a:text-blue-600 prose-ul:list-disc prose-li:marker:text-dark/70 prose-td:border-[#322f3e] prose-td:border-1 prose-td:border-solid prose-figure:w-full prose-table:w-full prose-h3:text-base sm:prose-h3:text-lg prose-figure:m-0 w-full max-w-full mx-0 prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light prose-th:px-4 prose-th:bg-[#322f3e] prose-th:text-light overflow-x-auto pb-4">
                  {parse(ckeditor_content)}
                </div>
              </article>
            </div>
          </main>

          <div
            className={`sticky top-12 h-32 py-1 w-[24%] mb-80 hidden lg:block ${
              recommendedData.data && recommendedData.data.length === 0
                ? "invisible"
                : ""
            }`}
          >
            <div className="border mt-6 rounded-sm px-2 py-3">
              <h4 className="text-dark text-center border-b pb-3 mb-3 text-xl font-semibold">
                Other Trending Articles
              </h4>

              {recommendedData.data && recommendedData.data.length > 0 ? (
                recommendedData.data.map((article: ArticleAttributes) => (
                  <div key={article.id} className="mb-4 px-2">
                    <Link href={article.slug} className="flex flex-row-reverse justify-end">
                      <h5 className="text-sm text-dark px-2 capitalize line-clamp-2 h-fit">
                        {article.title}
                      </h5>
                      <ImageExtended
                        src={article.image.url}
                        alt={article.title}
                        width={80}
                        height={80}
                        className=""
                      />
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No trending articles available.</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <InformationSlider data={articles} href="articles" />
        </div>
        {/* <NewsLetter /> */}
      </div>
    </section>
  );
}
