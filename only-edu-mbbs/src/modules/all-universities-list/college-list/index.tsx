"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { UniversitiesData, Universitylist } from "@/types/types";
import { FaDownload, FaRegPaperPlane } from "react-icons/fa";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import SearchBox from "@/app/searchbox";
import MeiliSearch from "meilisearch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Props {
  data: UniversitiesData;
}
interface FilteredProps {
  university: Universitylist;
}

const CollegeList = ({ data }: Props) => {
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
    <section className="lg:w-[70%] mb-4 p-4">
      <SearchBox query={query} setQuery={setQuery} />
      {query && noResults && (
        <div className="h-10 flex justify-center items-center text-red-500 bg-red-300/50 border-red-500 border rounded-xl mb-6">
          <span>No university found</span>
        </div>
      )}
      {(query && results.length > 0 ? results : data.data).map(
        (university: Universitylist) => (
          <FilteredUniversityItem key={university.id} university={university} />
        )
      )}
    </section>
  );
};

export default CollegeList;

const FilteredUniversityItem = ({ university }: FilteredProps) => {
  const baseUrl = "https://admin.onlyeducation.co.in";
  return (
    <div
      key={university?.id}
      className="justify-between m-auto mb-4 sm:p-4 p-2 flex flex-col border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div className="flex mb-2 flex-col sm:flex-row justify-between">
        <div className="sm:grid-cols-8 sm:grid-rows-1 w-full h-full grid grid-rows-5">
          <Link
            className="row-span-3 sm:col-span-2 relative aspect-video h-full w-full"
            href={`study/uni/${university?.slug}`}
          >
            <Image
              className="rounded-xl w-full object-cover object-center h-full "
              src={baseUrl + university?.searchableImage?.url}
              alt="Image Description"
              fill={true}
            />
          </Link>
          <div className="sm:pl-6 sm:col-span-5 sm:pr-2 my-4 sm:my-0 row-span-2 ">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
              {university?.title}
            </h3>
            <div className="flex my-1 text-xs sm:text-sm">
              <p className="flex items-center mr-2">
                <FaLocationDot className="text-orange-500" />
                <span className="line-clamp-1 font-semibold text-accent">
                  {university?.indian_state?.title}
                </span>
              </p>
              <p className="flex items-center">
                <FaBuilding className="text-orange-500" />
                <span className="line-clamp-1 font-semibold text-accent">
                  {university?.ownership?.title}
                </span>
              </p>
            </div>
            <p className="line-clamp-2 mt-2 text-dark/70 text-sm">
              {university?.universityProfile?.description}
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row space-y-3">
          <Button className="bg-orange-500 hover:bg-orange-400">
            <FaDownload className="mr-1" />
            Broucher
          </Button>
          <Button
            className="text-accent bg-accent/10 hover:bg-transparent"
            variant="outline"
          >
            <FaRegPaperPlane className="mr-1" />
            Apply
          </Button>
        </div>
      </div>
      <div className="border-t border-b border-dashed border-6 flex pt-2 pb-2 mb-2 text-sm  text-dark/60">
        <p className="mr-5">
          Fees: <span>{university?.universityProfile?.fees}</span>
        </p>
        <p>
          Avg Package:{" "}
          <span className="">{university?.universityProfile?.avgPackage}</span>
        </p>
      </div>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div className="hover:text-orange-500 cursor-pointer">Admission</div>
        <Separator orientation="vertical" />
        <div className="hover:text-orange-500 cursor-pointer">Placements</div>
        <Separator orientation="vertical" />
        <div className="hover:text-orange-500 cursor-pointer">Courses</div>
        <Separator orientation="vertical" />
        <div className="hover:text-orange-500 cursor-pointer">Facilities</div>
      </div>
    </div>
  );
};
