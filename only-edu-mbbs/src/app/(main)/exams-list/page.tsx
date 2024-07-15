import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";
import MobileFilter from "@/modules/all-universities-list/responsive-filter";

import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import { SearchParamsProps } from "@/types/types";
import { getStrapiData, getUniversities } from "@/utils/utils";

import React from "react";
import { getUserMeLoader } from "../../data/services/get-user-loader";
import {
  examsQuery,
  indianStatesQuery,
  ownershipQuery,
} from "@/app/data/quries/uniList-query";

// const ownershipQuery = "/api/ownerships?populate=true";
// const indianStatesQuery =
//   "/api/indian-states?populate[universities][populate]=true";
// const examsQuery = "/api/exams?populate=true";

export default async function UniversitiesList({
  searchParams,
}: Readonly<SearchParamsProps>) {
  let examsListQuery =
    "/api/universities?populate[searchableImage][populate]=true&populate[streams][populate]=true&populate[exams][populate]=true";

  const currentPage = Number(searchParams?.page) || 1;
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);

  let { locationsParam, examsParam, ownershipsParam } = searchParams;
  let filterParams = { locationsParam, examsParam, ownershipsParam }; //to send it as a prop
  if (searchParams) {
    if (locationsParam) {
      const locationFilters = locationsParam
        .split(",")
        .map((location) => `filters[indian_state][slug][$eq]=${location}`)
        .join("&");
      examsListQuery += `&${locationFilters}`;
    }
    if (examsParam) {
      const examFilters = examsParam
        .split(",")
        .map((exam) => `filters[exams][slug][$eq]=${exam}`)
        .join("&");
      examsListQuery += `&${examFilters}`;
    }
    if (ownershipsParam) {
      const ownershipFilters = `filters[ownership][slug][$eq]=${ownershipsParam}`;
      examsListQuery += `&${ownershipFilters}`;
    }
  }

  const data = await getUniversities(examsListQuery, currentPage);
  const user = await getUserMeLoader();
  interface newUserProp {
    id: number;
    verified: boolean;
    phone: number;
  }

  let newUser: { id: number; verified: boolean; phone: number } | null = null;
  if (user && user.data) {
    const { id, verified, phone } = user.data;
    newUser = { id, verified, phone };
  }

  const { pagination } = data.meta;

  return (
    <>
      <div className="bg-white rounded-[30px] my-4">
        <div className="flex flex-col-reverse relative lg:flex-row justify-center">
          <CollegeFilter
            exams={exams}
            ownership={ownership}
            indianStates={indianStates}
            filterParams={filterParams}
          />
          {data.data.length > 0 ? (
            <CollegeList user={newUser} data={data} />
          ) : (
            <div className=" w-[70%] flex justify-center ">
              <span className=" text-dark bg-accent/10  rounded-xl mb-6 mx-10 w-full h-[200px] justify-center flex items-center">
                Uh oh... no result found
              </span>
            </div>
          )}
          <MobileFilter
            exams={exams}
            ownership={ownership}
            indianStates={indianStates}
            filterParams={filterParams}
          />
        </div>
        <PaginationComponent pageCount={pagination.pageCount} />
      </div>
      <div className="w-full h-3 "></div>
    </>
  );
}
