import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";

import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import { SearchParamsProps } from "@/types/types";
import { getStrapiData, getUniversities } from "@/utils/utils";

import React from "react";

const ownershipQuery = "/api/ownerships?populate=true";
const indianStatesQuery = "/api/indian-states?populate=true";
const examsQuery = "/api/exams?populate=true";

export default async function UniversitiesList({
  searchParams,
}: Readonly<SearchParamsProps>) {
  let universityListQuery =
    "/api/universities?populate[searchableImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true";

  const currentPage = Number(searchParams?.page) || 1;
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);

  if (searchParams) {
    const { locations, exams, ownerships } = searchParams;

    if (locations) {
      console.dir(locations);
      const locationFilters = locations
        .split(",")
        .map((location) => `filters[indian_state][slug][$eq]=${location}`)
        .join("&");
      universityListQuery += `&${locationFilters}`;
    }
    if (exams) {
      const examFilters = exams
        .split(",")
        .map((exam) => `filters[exams][slug][$eq]=${exam}`)
        .join("&");
      universityListQuery += `&${examFilters}`;
    }
    if (ownerships) {
      const ownershipFilters = `filters[ownership][slug][$eq]=${ownerships}`;
      universityListQuery += `&${ownershipFilters}`;
    }
  }

  const data = await getUniversities(universityListQuery, currentPage);

  const { pagination } = data.meta;

  return (
    <div className="bg-white rounded-[30px] my-4">
      <div className="flex flex-col relative lg:flex-row justify-center">
        <CollegeFilter
          exams={exams}
          ownership={ownership}
          indianStates={indianStates}
        />
        {data.data.length > 0 ? (
          <CollegeList data={data} />
        ) : (
          <div className=" w-[70%] flex justify-center items-center">
            <span className=" text-red-500 bg-red-300/50 border-red-500 border rounded-xl mb-6 mx-10 w-full h-10 justify-center flex items-center">
              No university found
            </span>
          </div>
        )}
      </div>
      <PaginationComponent pageCount={pagination.pageCount} />
    </div>
  );
}
