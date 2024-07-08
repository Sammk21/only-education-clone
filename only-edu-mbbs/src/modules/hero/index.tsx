"use client";
import SearchBox from "@/app/(main)/searchbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Universitylist } from "@/types/types";
import MeiliSearch from "meilisearch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImageExtended } from "../common/extended-image/extended-image";

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

export default function Hero({ data }: HeroProps) {
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
    <>
      {/* Hero */}
      <div className="relative overflow-hidden h-[50rem]">
        <div className="absolute bottom-4 right-4 text-white text">
          <h4 className="font-medium text-xl">IIM MADRAS</h4>
          <p className="text-xs">Madras 500898</p>
        </div>
        <ImageExtended
          alt="iim"
          src={"/uploads/FRI_fb24a736d4.jpg"}
          fill={true}
          className="w-full h-full object-cover object-center -z-20 rounded-b-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-dark/50 -z-10" />
        <div className=" h-full flex items-center justify-center  py-24 lg:py-32 z-30">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white drop-shadow-md">
              Right choice, Better future
            </h1>
            <p className="mt-3 text-xl text-muted-foreground text-white drop-shadow-md">
              Stay in the know with insights from industry experts.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* Form */}

              <SearchBox query={query} setQuery={setQuery} />
              <div className="relative w-full z-10">
                <div className="absolute w-full h-[400px] overflow-y-scroll top-0 rounded-sm">
                  {results && query && (
                    <Card className="w-full shadow-lg">
                      <CardContent>
                        <Table className="text-xs sm:text-sm">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-1/2 sm:w-1/4">
                                Image
                              </TableHead>
                              <TableHead className="w-1/4 sm:w-1/2">
                                Name
                              </TableHead>
                              <TableHead className="w-1/4">Location</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {results &&
                              results.map((item) => (
                                <TableRow className="w-full" key={item.id}>
                                  <TableCell className="sm:1/2 sm:w-1/4">
                                    <div className="aspect-video rounded-sm shadow-sm overflow-hidden relative">
                                      <Link
                                        href={`/study/uni/${item.slug}`}
                                        className=""
                                      >
                                        <Image
                                          alt="Product image"
                                          className=" object-cover object-center"
                                          fill={true}
                                          src={
                                            baseUrl +
                                              item.searchableImage?.url ||
                                            "https://admin.onlyeducation.co.in/uploads/Placeholder_view_vector_svg_1ab35cbc35.png"
                                          }
                                        />
                                      </Link>
                                    </div>
                                  </TableCell>
                                  <TableCell className="w-1/4 sm:w-1/2  font-medium">
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
              {/* End Form */}
              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
              {/* SVG Element */}
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

