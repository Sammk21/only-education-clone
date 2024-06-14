import React from "react";
import { Montserrat, Merriweather } from "next/font/google";
import NewsLetter from "@/modules/newsletter";
import { MetaProps } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";

import parse from "html-react-parser";
import Image from "next/image";

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
  const blogQuery = `/api/articles?filters[slug][$eq]=${params.slug}`;
  const data = await getStrapiData(blogQuery);

  const { title, description, ckeditor_content, createdAt } = data.data[0];

  return (
    <div className=" w-full ">
      <main
        className={`${mosterrat.className} prose prose-figure:mx-0 dark:prose-li:text-light dark:prose-p:text-gray-300 dark:prose-table:text-accent dark:prose-strong:text-light dark:prose-headings:text-light mx-auto pt-8 pb-16 lg:pt-16 lg:pb-24 bg-light dark:bg-dark antialiased dark:prose-a:text-blue-500`}
      >
        <div className="flex leading-relaxed  justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl  ">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic"></address>
              <h1
                className={`${merriweather.className} text-3xl font-extrabold leading-tight text-dark lg:mb-6 lg:text-4xl dark:text-light mb-8`}
              >
                {title}
              </h1>
              <div className=" flex  items-center mr-3 text-sm text-dark dark:text-light mb-2">
                <Image
                  className="mr-4 w-12 h-12 rounded-full my-auto object-cover"
                  src={
                    "http://localhost:1337/uploads/Screenshot_2024_06_03_at_6_48_36_PM_ccdfa1f40f.png"
                  }
                  alt="Jese Leos"
                ></Image>
                <div className="flex flex-col">
                  <p
                    rel="author"
                    className="text-lg mb-1 font-bold text-dark dark:text-light"
                  >
                    Omkar Bhor
                  </p>
                  <div className="text-gray-500 dark:text-gray-800">
                    <p className=" my-0">
                      Graphic Designer, educator , marketing @ Only Education
                    </p>
                    <p className="my-0">
                      6 min read
                      <span className="mx-1">·</span>
                      <time
                        className="ml-1"
                        dateTime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        {createdAt}
                      </time>
                    </p>
                    <p className=" font-medium text-gray-500 dark:text-gray-400 "></p>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full">
                <div className=" py-3 border-y border-y-borderLight dark:border-y-border flex justify-between px-3">
                  <div
                    style={{ color: "color: rgb(58 58 58)" }}
                    className="flex text-xs gap-x-6 text-border"
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        aria-label="clap"
                        className="mr-1 cursor-pointer"
                      >
                        <path
                          className="fill-border "
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                        ></path>
                      </svg>
                      <p className="inline my-0">3.5k</p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="vh mr-1 cursor-pointer"
                      >
                        <path
                          className="fill-border"
                          d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"
                        ></path>
                      </svg>
                      <p className="my-0">10</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {parse(ckeditor_content)}
          </article>
        </div>
      </main>
      <section className="bg-accent/10 py-12  px-3 sm:px-6 rounded-3xl shadow-sm mb-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6 mx-auto ">
            <h2 className="text-lg lg:text-2xl font-bold text-dark dark:text-light">
              Discussion (20)
            </h2>
          </div>
          <form className="mb-6 ">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              className="p-4 rounded-xl w-full text-sm text-dark/70 border-0  focus:ring-0 border-none dark:text-light dark:placeholder-gray-400 dark:bg-foreground"
              placeholder="Write a comment..."
              required
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 bg-dark text-light text-xs font-medium text-center  rounded-lg focus:ring-4 focus:ring-slate-500 dark:focus:ring-slate-500 hover:bg-dark/50"
            >
              Post comment
            </button>
          </form>
          <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-foreground">
            <footer className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="inline-flex my-0 items-center mr-3 font-semibold text-sm text-dark dark:text-light">
                  <Image
                    className="mr-2 w-6 h-6 my-0 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  ></Image>
                  Michael Gough
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time dateTime="2022-02-08" title="February 8th, 2022">
                    Feb. 8, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment1Button"
                data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-foreground dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div
                id="dropdownComment1"
                className="hidden z-10 w-36 bg-foreground rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="mt-2 dark:text-light/80">
              Very straight-to-point article. Really worth time reading. Thank
              you! But tools are just the instruments for the UX designers. The
              knowledge of the design tools are as important as the creation of
              the design strategy.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center justify-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  className="mr-1.5 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                </svg>
                <span>Reply</span>
              </button>
            </div>
          </article>
          <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-foreground">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center my-0 mr-3 font-semibold text-sm text-dark dark:text-light">
                  <Image
                    className="mr-2 w-6 h-6 rounded-full my-0"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Jese Leos"
                  ></Image>
                  Jese Leos
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 my-0">
                  <time dateTime="2022-02-12" title="February 12th, 2022">
                    Feb. 12, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment2Button"
                data-dropdown-toggle="dropdownComment2"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-foreground dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div
                id="dropdownComment2"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="mt-2 dark:text-light/80">
              Much appreciated! Glad you liked it ☺️
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  className="mr-1.5 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article className="p-6 mb-6 text-base rounded-lg border-t bg-white  border-gray-200 dark:border-gray-700 dark:bg-foreground">
            <footer className="flex justify-between items-center mb-2 ">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 font-semibold text-sm text-dark dark:text-light">
                  <Image
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie Green"
                  ></Image>
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time dateTime="2022-03-12" title="March 12th, 2022">
                    Mar. 12, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment3Button"
                data-dropdown-toggle="dropdownComment3"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-foreground dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div
                id="dropdownComment3"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p>
              The article covers the essentials, challenges, myths and stages
              the UX designer should consider while creating the design
              strategy.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  className="mr-1.5 w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article className="p-6 text-base bg-white rounded-lg  dark:bg-foreground">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 font-semibold text-sm text-dark dark:text-light">
                  <Image
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Helene Engels"
                  ></Image>
                  Helene Engels
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time dateTime="2022-06-23" title="June 23rd, 2022">
                    Jun. 23, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment4Button"
                data-dropdown-toggle="dropdownComment4"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-foreground dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>

              <div
                id="dropdownComment4"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-light"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p>
              Thanks for sharing this. I do came from the Backend development
              and explored some of the tools to design my Side Projects.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  className="mr-1.5 w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                </svg>
                Reply
              </button>
            </div>
          </article>
        </div>
      </section>

      <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 mx-auto  max-w-screen-xl w-full"
      >
        <div className="px-4 flex flex-col items-center  w-full">
          <h2 className="mb-8 mt-0 text-2xl font-bold text-dark dark:text-light">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              <a href="#">
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  className="mb-3 rounded-lg"
                  alt="Image 1"
                ></Image>
              </a>
              <h2 className="mb-1 text-xl font-bold leading-tight text-dark dark:text-light">
                <a href="#">Our first office</a>
              </h2>
              <p className=" text-gray-500 text-base dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex text-xs dark:text-blue-500 items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                  className="mb-5 rounded-lg"
                  alt="Image 2"
                ></Image>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-dark dark:text-light">
                <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 12 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                  className="mb-5 rounded-lg"
                  alt="Image 3"
                ></Image>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-dark dark:text-light">
                <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-xs dark:text-blue-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                  className="mb-5 rounded-lg"
                  alt="Image 4"
                ></Image>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-dark dark:text-light">
                <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>

      <NewsLetter />
    </div>
  );
}
