"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { UniversitiesData, Universitylist } from "@/types/types";
import { FaDownload, FaLock, FaRegPaperPlane } from "react-icons/fa";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import SearchBox from "@/app/(main)/searchbox";
import MeiliSearch from "meilisearch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { json } from "stream/consumers";
import { ImageExtended } from "@/modules/common/extended-image/extended-image";
import PhoneInputForm from "@/modules/phone-otp-input-dialog/phone-top-input";

interface Props {
  data: UniversitiesData;
  user: User | null;
}
interface FilteredProps {
  university: Universitylist;
  user: User | null;
}
interface User {
  id: number;
  verified: boolean;
  phone: number;
}

const EntranceExamList = ({ data, user }: Props) => {
  console.log(data, "by");
  const client = new MeiliSearch({
    host: "https://search.onlyeducation.co.in",
    apiKey: "c434b12d44e6b8ee0783ac505dbf8a6e61fc701c8d1ce0cd15bdb8a3b08c855a",
  });

  const searchIndex = client.index("entrance-exam");
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
          <FilteredExamsItem
            university={university}
            user={user}
            key={university.id}
          />
        )
      )}
    </section>
  );
};

export default EntranceExamList;

const FilteredExamsItem = ({ university, user }: FilteredProps) => {
  // console.log(university.mode?.title);
  return (
    <>
      <div
        key={university?.id}
        className="m-auto mb-4 p-4 flex flex-col w-full border shadow-sm rounded-xl hover:bg-accent/10"
      >
        <div className="flex flex-col w-full sm:flex-row items-center">
          <Link
            className=" w-full sm:w-1/4"
            href={`study/exam/${university?.slug}`}
          >
            <p className="lowercase bg-gray-200 text-dark w-fit rounded-md px-4 ">
              {university.mode?.title}
            </p>

            <div className="relative aspect-video w-full  rounded-md overflow-hidden">
              <ImageExtended
                className="object-contain w-full h-full transition"
                src={university?.searchableImage?.url}
                alt="University Image"
                blurDataURL={university.searchableImage?.blurhash}
                fill
              />
            </div>
          </Link>

          <div className="flex-1 sm:pl-4 py-4 sm:py-0">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <Link href={`study/exam/${university?.slug}`}>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {university?.title}
                  </h3>

                  <p className="line-clamp-2  text-dark/70 text-sm">
                    {university.exams?.fullForm}
                  </p>
                  <p className="line-clamp-1 my-2 italic text-sm block md:hidden">
                    {university.exams?.description}
                  </p>
                </div>
              </Link>

              <div className="flex flex-col justify-end w-full sm:w-auto space-y-2 mt-3 sm:mt-0 mb-3">
                {user ? (
                  user.verified ? (
                    <Button className="bg-orange-500 hover:bg-orange-400">
                      <Link
                        className="flex items-center"
                        href={
                          "https://admin.onlyeducation.co.in/uploads/276073864_532507680_IIT_1_e2a06150fc.pdf"
                        }
                      >
                        <FaDownload className="mr-1" />
                        Brochure
                      </Link>{" "}
                    </Button>
                  ) : (
                    <PhoneInputForm
                      existingPhone={
                        user.phone ? user.phone.toString() : undefined
                      }
                      userId={user.id}
                      title="Brochure"
                      color="bg-orange-500"
                    />
                  )
                ) : (
                  <Button className="bg-orange-500 hover:bg-orange-400">
                    <Link className="flex items-center " href="/auth">
                      <FaLock className="mr-1" />
                      Brochure
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <p className="line-clamp-2 my-2 italic text-sm hidden md:block">
              {university.exams?.description}
            </p>

            <div className="border-t border-b border-dashed border-6 flex pt-2 pb-2 mb-2 text-sm text-dark/60 gap-5 md:gap-10">
              <div>
                <div className="">
                  Application Date
                  <p className="font-semibold text-dark my-2">
                    {university?.applicationDate}
                  </p>
                </div>
              </div>
              <div>
                <div className="">
                  Exam Date
                  <p className="font-semibold text-dark my-2">
                    {university?.examinationDate}
                  </p>
                </div>
              </div>
              <div>
                <div className="">
                  Result Date
                  <p className="font-semibold text-dark my-2">
                    {university?.resultDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
