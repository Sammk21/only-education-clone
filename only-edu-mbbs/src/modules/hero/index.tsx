"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Universitylist } from "@/types/types";
import MeiliSearch from "meilisearch";
import SearchBox from "@/app/searchbox";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  const baseUrl = process.env.API_URL || "https://admin.onlyeducation.co.in";

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
  useEffect(() => {
    search();
  }, [query, data]);
  return (
    <section className="relative h-[800px]">
      <div className="z-20 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex flex-col items-center px-2">
        <h1 className="mb-8 mt-0 sm:text-5xl text-2xl text-center font-extrabold tracking-tight leading-none   text-light">
          Right Guidance, Bright Future
        </h1>
        <div className="sm:max-w-screen-md max-w-screen-sm w-full relative">
          <SearchBox query={query} setQuery={setQuery} />
          <p className="w-10  absolute top-0 right-0">
            <IoSearchOutline className=" h-10  text-[#f97316] w-5 m-auto" />
          </p>
          <div className="relative">
            <div className="absolute bottom-full w-full -top-6 h-fit rounded-sm">
              {results && query && (
                <Card className="w-full">
                  <CardContent>
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-1/4">Image</TableHead>
                          <TableHead className="w-1/2">Name</TableHead>
                          <TableHead className="w-1/4">Location</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {results &&
                          results.map((item) => (
                            <TableRow className="w-full" key={item.id}>
                              <TableCell className="w-1/4">
                                <Link
                                  href={`/study/uni/${item.slug}`}
                                  className=""
                                >
                                  <Image
                                    alt="Product image"
                                    className="rounded-md object-cover"
                                    width={60}
                                    height={60}
                                    src={
                                      baseUrl + item.searchableImage?.url ||
                                      "https://admin.onlyeducation.co.in/uploads/Placeholder_view_vector_svg_1ab35cbc35.png"
                                    }
                                  />
                                </Link>
                              </TableCell>
                              <TableCell className="w-1/2 font-medium">
                                {item.title}
                              </TableCell>
                              <TableCell className="w-1/4">
                                {item.indian_state?.title}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <Image
        src="https://admin.onlyeducation.co.in/uploads/iit_madras_0c402d7404.webp"
        alt=""
        fill={true}
        className="object-cover object-center -z-10"
      />
      <span className="w-full h-full rotate-180  absolute top-0 left-0   bg-gradient-to-t from-dark/80 to-transparent  transition-opacity duration-300 z-10"></span>
    </section>
  );
};

export default Hero;
