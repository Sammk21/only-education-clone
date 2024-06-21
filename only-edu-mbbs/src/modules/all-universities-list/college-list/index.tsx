import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { LuFlagTriangleRight } from "react-icons/lu";
import { FaDownload, FaRegPaperPlane } from "react-icons/fa";
import SearchBox from "@/app/searchbox";
import MeiliSearch from "meilisearch";
import { UniversitiesData, Universitylist } from "@/types/types";

interface Props {
  data: UniversitiesData;

  filteredData: UniversitiesData | null;
}

const CollegeList = ({ data, filteredData }: Props) => {
  console.log("sam", data);
  console.log("sarfr", filteredData);
  const client = new MeiliSearch({
    host: "https://search.onlyeducation.co.in",
    apiKey: "c434b12d44e6b8ee0783ac505dbf8a6e61fc701c8d1ce0cd15bdb8a3b08c855a",
  });
  const searchIndex = client.index("university");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Universitylist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    const search = async () => {
      if (query) {
        setLoading(true);
        try {
          const searchResults = await searchIndex.search<Universitylist>(query);
          console.dir(searchResults.hits);
          if (searchResults.hits.length === 0) {
            setNoResults(true);
            setResults([]);
          } else {
            setResults(searchResults.hits);
            setNoResults(false);
          }
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
        setNoResults(false);
      }
    };

    search();
  }, [query, data.data]);

  return (
    <section className="sm:w-[70%] mb-4 p-4">
      <SearchBox query={query} setQuery={setQuery} />
      {query && noResults && (
        <div className="h-10 flex justify-center items-center text-red-500 bg-red-300/50 border-red-500 border rounded-xl mb-6">
          <span>No university found</span>
        </div>
      )}
      {/* Use filteredData if available, otherwise fallback to data */}
      {(query && results.length > 0
        ? results
        : filteredData?.data || data.data
      ).map((university: Universitylist) => (
        <FilteredUniversityItem key={university.id} university={university} />
      ))}
    </section>
  );
};

export default CollegeList;

const FilteredUniversityItem = ({
  university,
}: {
  university: Universitylist;
}) => {
  const baseUrl = "https://admin.onlyeducation.co.in";

  console.dir(university);
  return (
    <div
      key={university?.id}
      className="justify-between m-auto mb-4 sm:p-4 p-2 flex flex-col border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div className="flex mb-2 flex-col sm:flex-row justify-between">
        <Link href={`study/uni/${university?.slug}`}>
          {/* <Image
            className="rounded-xl w-full h-50 sm:h-40 sm:w-70"
            src={baseUrl + university?.searchableImage?.url}
            alt="Image Description"
            width={300}
            height={100}
          /> */}
        </Link>
        <div className="sm:pl-6 sm:pr-2 my-4 sm:my-0">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
            {university?.title}
          </h3>
          <div className="flex">
            <p className="flex items-center mr-4">
              <IoLocationOutline className="text-[#fc7318]" />
              <span className="line-clamp-1 text-sm text-[#6a6767]">
                {university?.indian_state?.title}
              </span>
            </p>
            <p className="flex items-center">
              <LuFlagTriangleRight className="text-[#fc7318]" />
              <span className="line-clamp-1 text-sm text-[#6a6767]">
                {university?.ownership?.title}
              </span>
            </p>
          </div>
          <p className="line-clamp-2 mt-2 text-[#3a3a40]">
            {university?.universityProfile?.description}
          </p>
        </div>
        <div className="flex sm:flex-col flex-row">
          <button className="flex items-center bg-[#fc7318] text-white rounded-md h-10 w-32 justify-center mb-4 mr-2 sm:mr-0">
            <FaDownload className="mr-1" />
            Broucher
          </button>
          <button className="flex items-center rounded-md text-[#fc7318] bg-[#ffe5d9] border border-[#fc7318] h-10 w-32 justify-center">
            <FaRegPaperPlane className="mr-2" />
            Apply
          </button>
        </div>
      </div>
      <div className="border-t border-b border-dashed border-6 flex pt-2 pb-2 mb-2">
        <p className="mr-5">Fees: {university?.universityProfile?.fees}</p>
        <p>Avg Package: {university?.universityProfile?.avgPackage}</p>
      </div>
      <div className="text-dark cursor-pointer overflow-scroll sm:overflow-hidden">
        <span className="hover:text-[#fc7318]">Admission</span>
        <span className="mx-2">|</span>
        <span className="hover:text-[#fc7318]">Placements</span>
        <span className="mx-2">|</span>
        <span className="hover:text-[#fc7318]">Courses</span>
        <span className="mx-2">|</span>
        <span className="hover:text-[#fc7318]">Facilities</span>
      </div>
    </div>
  );
};
