import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";

import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import { SearchParamsProps } from "@/types/types";
import { getStrapiData, getUniversities } from "@/utils/utils";
import React from "react";

const universityListQuery =
  "/api/universities?populate[searchableImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true";
const ownershipQuery = "/api/ownerships?populate=true";
const indianStatesQuery = "/api/indian-states?populate=true";
const examsQuery = "/api/exams?populate=true";

export default async function UniversitiesList({
  searchParams,
}: Readonly<SearchParamsProps>) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getUniversities(universityListQuery, currentPage);
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);

  const { pagination } = data.meta;

  return (
    <div className="bg-white rounded-[30px] my-4">
      <div className="flex flex-col relative lg:flex-row justify-center">
        <CollegeFilter
          exams={exams}
          ownership={ownership}
          indianStates={indianStates}
        />
        <CollegeList data={data} />
      </div>
      <PaginationComponent pageCount={pagination.pageCount} />
    </div>
  );
}
