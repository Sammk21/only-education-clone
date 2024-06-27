"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Universitylist } from "@/types/types";
import MeiliSearch from "meilisearch";
import SearchBox from "@/app/searchbox";
import Link from "next/link";

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
  const client = new MeiliSearch({
    host: "https://search.onlyeducation.co.in",
    apiKey: "c434b12d44e6b8ee0783ac505dbf8a6e61fc701c8d1ce0cd15bdb8a3b08c855a",
  });

  const searchIndex = client.index("university");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Universitylist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);

  const search = async () => {
    if (query) {
      setLoading(true);
      try {
        const searchResults = await searchIndex.search<Universitylist>(query);
        if (searchResults.hits.length === 0) {
          setNoResults(true); // Set noResults state to true when no results are found
          setResults([]); // Clear results when no results are found
        } else {
          setResults(searchResults.hits);
          setNoResults(false); // Reset noResults state if results are found
        }
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]); // Reset results when query is empty
      setNoResults(false); // Reset noResults state when query is empty
    }
  };
  console.log(results);
  useEffect(() => {
    search();
  }, [query, data]);
  return (
    <section className=" relative h-[250px] sm:h-[450px]">
      <div className="z-20 absolute w-full top-10 sm:top-36 flex flex-col items-center px-2">
        <h1 className="mb-8 mt-0 sm:text-5xl text-2xl text-center font-extrabold tracking-tight leading-none   text-light">
          Right Guidance, Bright Future
        </h1>
        <div className="sm:max-w-screen-md max-w-screen-sm w-full relative">
          <SearchBox query={query} setQuery={setQuery} />

          <p className="w-10  absolute top-0 right-0">
            <IoSearchOutline className=" h-10  text-[#f97316] w-5 m-auto" />
          </p>
          <div className="relative">
            <div className="absolute bottom-full bg-white w-full -top-6 h-fit px-2 rounded-sm">
              {results.map((item) => (
                <Link href={`/study/uni/${item.slug}`}>
                  <p key={item.id} className="py-1 text-sm text-dark">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        src="https://admin.onlyeducation.co.in/uploads/iit_madras_0c402d7404.webp"
        alt=""
        fill={true}
        className="object-cover object-bottom -z-10"
      />
      <span className="w-full h-full rotate-180  absolute top-0 left-0   bg-gradient-to-t from-dark/80 to-transparent  transition-opacity duration-300 z-10"></span>
    </section>
  );
};

export default Hero;
