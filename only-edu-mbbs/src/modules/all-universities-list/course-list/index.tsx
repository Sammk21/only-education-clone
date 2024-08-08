"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { UniversitiesData, Universitylist } from "@/types/types";

import SearchBox from "@/app/(main)/searchbox";
import MeiliSearch from "meilisearch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { GoDotFill } from "react-icons/go";

interface Props {
  data: UniversitiesData;
  user: User | null;
}
interface FilteredProps {
  course: Universitylist;
  user: User | null;
}
interface User {
  id: number;
  verified: boolean;
  phone: number;
}

const CourseList = ({ data, user }: Props) => {
  const client = new MeiliSearch({
    host: "https://search.onlyeducation.co.in",
    apiKey: "c434b12d44e6b8ee0783ac505dbf8a6e61fc701c8d1ce0cd15bdb8a3b08c855a",
  });

  const searchIndex = client.index("course");
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
        (course: Universitylist) => (
          <FilteredExamsItem course={course} user={user} key={course.id} />
        )
      )}
    </section>
  );
};

export default CourseList;

const FilteredExamsItem = ({ course, user }: FilteredProps) => {
  return (
    <>
      <div
        key={course?.id}
        className="m-auto mb-4 p-4 flex flex-col w-full border shadow-sm rounded-xl hover:bg-accent/10"
      >
        <div className="">
          <div className="flex-1 sm:pl-4 py-4 sm:py-0">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div  className="pb-3 w-full sm:w-[85%]">
              <Link href={`study/course/${course?.slug}`}>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {course?.courseFullForm} [{course?.title}]
                  </h3>
                  <p className="line-clamp-1 my-2 italic text-sm block ">{course.description}</p>
                 
                </div>
                </Link>
                
                <p className="text-sm flex gap-5 mt-1 font-semibold border-t border-b border-dashed py-2">
                    <span className="text-green-700 flex">
                      <GoDotFill />
                      {course?.durationYear?.toString()} Years
                    </span>
                    <span className="text-orange-600 flex">
                      <GoDotFill />
                      {course.stream?.title}
                    </span>
                  </p>
               
                </div>
              <div>
                <Link
                  href={`/universities-list/${course.stream?.slug}`}
                  className=" text-white  rounded-md text-sm font-medium h-10 px-4 py-2 bg-orange-500 hover:bg-orange-400"
                >
                  Find Colleges
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
