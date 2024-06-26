"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { UniversitiesData, Universitylist } from "@/types/types";
import { FaDownload, FaRegPaperPlane } from "react-icons/fa";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import SearchBox from "@/app/searchbox";
import MeiliSearch from "meilisearch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { json } from "stream/consumers";

interface Props {
  data: UniversitiesData;
  user: boolean;
}
interface FilteredProps {
  university: Universitylist;
  user: boolean;
}

const CollegeList = ({ data, user }: Props) => {
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

  useEffect(() => {
    search();
  }, [query, data.data]);

  return (
    <section className="lg:w-[70%] mb-4 px-4">
      <SearchBox query={query} setQuery={setQuery} />
      {query && noResults && (
        <>
          <div className=" w-full flex justify-center ">
            <span className=" text-dark bg-accent/10  rounded-xl mb-6 mx-10 w-full h-[200px] justify-center flex items-center">
              Uh oh... no result found
            </span>
          </div>
          <p className="text-dark text-center my-5 font-medium">
            You might want to check these out
          </p>
        </>
      )}
      {(query && results.length > 0 ? results : data.data).map(
        (university: Universitylist) => (
          <FilteredUniversityItem
            user={user}
            key={university.id}
            university={university}
          />
        )
      )}
    </section>
  );
};

export default CollegeList;

const FilteredUniversityItem = ({ university, user }: FilteredProps) => {
  const baseUrl = "https://admin.onlyeducation.co.in";

  return (
    <>
      <div
        key={university?.id}
        className="m-auto mb-4 p-4 flex flex-col border shadow-sm rounded-xl hover:bg-accent/10"
      >
        <Link href={`study/uni/${university?.slug}`}>
          <div className="flex flex-col sm:flex-row">
            {/* Image Section */}
            <div className="relative aspect-video w-full sm:w-1/4 rounded-md  overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                src={baseUrl + university?.searchableImage?.url}
                alt="University Image"
                fill
              />
            </div>

            {/* Text Information Section */}
            <div className="flex-1 sm:pl-4 py-4 sm:py-0">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {university?.title}
                  </h3>
                  <div className="flex my-1 text-xs sm:text-sm">
                    <p className="flex items-center mr-2">
                      <FaLocationDot className="text-orange-500" />
                      <span className="font-semibold text-accent">
                        {university?.indian_state?.title}
                      </span>
                    </p>
                    <p className="flex items-center">
                      <FaBuilding className="text-orange-500" />
                      <span className="font-semibold text-accent">
                        {university?.ownership?.title}
                      </span>
                    </p>
                  </div>
                  <p className="line-clamp-2 mt-2 text-dark/70 text-sm">
                    {university?.universityProfile?.description}
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col justify-end w-full sm:w-auto space-y-2 mt-4 sm:mt-0 mb-2">
                  <Button className="bg-orange-500 text-white w-full">
                    <a
                      className="flex items-center"
                      href={
                        user
                          ? "https://admin.onlyeducation.co.in/uploads/276073864_532507680_IIT_1_e2a06150fc.pdf"
                          : "/auth"
                      }
                    >
                      <FaDownload className="mr-1" />
                      Broucher
                    </a>
                  </Button>
                  <Button
                    className="text-accent bg-accent/10 hover:bg-transparent w-full"
                    variant="outline"
                  >
                    <FaRegPaperPlane className="mr-1" />
                    Apply
                  </Button>
                </div>
              </div>

              <div className="border-t border-b border-dashed border-6 flex pt-2 pb-2 mb-2 text-sm text-dark/60">
                <p className="mr-5">
                  Fees: <span>{university?.universityProfile?.fees}</span>
                </p>
                <p>
                  Avg Package:{" "}
                  <span>{university?.universityProfile?.avgPackage}</span>
                </p>
              </div>

              <div className="flex h-5 items-center space-x-4 text-xs sm:text-sm overflow-x-scroll md:overflow-x-hidden mt-4">
                <Link href={`/study/uni/${university.slug}`}>
                  <div className="hover:text-orange-500 cursor-pointer">
                    Admission
                  </div>
                </Link>
                <Separator className="ml-1 sm:ml-2" orientation="vertical" />
                <Link href={`/study/uni/${university.slug}`} scroll={false}>
                  <div className="hover:text-orange-500 cursor-pointer">
                    Placements
                  </div>
                </Link>
                <Separator orientation="vertical" />
                <Link href={`/study/uni/${university.slug}`}>
                  <div className="hover:text-orange-500 cursor-pointer">
                    Courses
                  </div>
                </Link>
                <Separator orientation="vertical" />
                <Link href={`/study/uni/${university.slug}`}>
                  <div className="hover:text-orange-500 cursor-pointer">
                    Facilities
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
