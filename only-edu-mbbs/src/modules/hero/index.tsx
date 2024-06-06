import Image from "next/image";
import React from "react";
import MySideBar from "../navbar/components/Sidebar";

interface HeaderProps {
  id: number;
  title: string;
  description: string;
}

interface HeroProps {
  data: {
    id: number;
    text: string;
    header: HeaderProps;
  };
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className=" ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-gradient text-6xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-8xl">
          {data.header.title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {data.header.description}
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <div className=" w-full sm:max-w-96 relative mt-6">
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              aria-label="Email address"
              className="block w-full dark:text-light  text-dark  rounded-2xl border border-borderLight dark:border-border bg-transparent py-4 pl-6 pr-20 text-base/6  ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none dark:focus:ring-neutral-200/5 focus:ring-neutral-950/5 "
            />
            <div className="absolute inset-y-1 right-1 flex justify-end">
              <button
                type="submit"
                aria-label="Submit"
                className="flex aspect-square h-full items-center bg-dark hover:bg-dark/70 justify-center rounded-xl dark:bg-light text-light transition dark:hover:bg-light/90"
              >
                <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                  <path
                    className="fill-light dark:fill-dark"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36"></div>
      </div>
    </section>
  );
};

export default Hero;
