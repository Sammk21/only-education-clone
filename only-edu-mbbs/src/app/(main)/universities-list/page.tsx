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
  streasmQuery,
} from "@/app/data/quries/uniList-query";
import EntranceExamList from "@/modules/all-universities-list/exam-list";
const rankingQuery="/api/rankings?fields[0]=publisherName"

export default async function UniversitiesList({
  searchParams,
}: Readonly<SearchParamsProps>) {
  let universityListQuery =
    "/api/universities?populate[searchableImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true&populate[ranking][populate][rankings][populate]=publisherName&populate[ranking][fields][0]=rankingNumber";
    const UniRanking="/api/universities?populate[ranking][populate][rankings][populate]=publisherName&populate[ranking][fields][0]=rankingNumber"


  const currentPage = Number(searchParams?.page) || 1;
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);
  const streams = await getStrapiData(streasmQuery);
    const ranking = await getStrapiData(rankingQuery);
const UniRank=await getStrapiData(UniRanking)


  let { streamsParam,locationsParam, examsParam, ownershipsParam } = searchParams;
  let filterParams = { locationsParam, examsParam, ownershipsParam,streamsParam }; //to send it as a prop

  if (searchParams) {
    if (streamsParam) {
      const streamsFilters = streamsParam
        .split(",")
        .map((streams) => `filters[streams][slug][$eq]=${streams}`)
        .join("&");
        universityListQuery += `&${streamsFilters}`;
    }
    if (locationsParam) {
      const locationFilters = locationsParam
        .split(",")
        .map((location) => `filters[indian_state][slug][$eq]=${location}`)
        .join("&");
      universityListQuery += `&${locationFilters}`;
    }
    if (examsParam) {
      const examFilters = examsParam
        .split(",")
        .map((exam) => `filters[exams][slug][$eq]=${exam}`)
        .join("&");
      universityListQuery += `&${examFilters}`;
    }
    if (ownershipsParam) {
      const ownershipFilters = `filters[ownership][slug][$eq]=${ownershipsParam}`;
      universityListQuery += `&${ownershipFilters}`;
    }
  }

  const data = await getUniversities(universityListQuery, currentPage);
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
           streams={streams}
            exams={exams}
            ownership={ownership}
            indianStates={indianStates}
            filterParams={filterParams}
            context="universities"
          />
          {data.data.length > 0 ? (
            <CollegeList user={newUser} data={data} ranking={ranking} UniRank={UniRank}/>
          ) : (
            <div className=" w-[70%] flex justify-center ">
              <span className=" text-dark bg-accent/10  rounded-xl mb-6 mx-10 w-full h-[200px] justify-center flex items-center">
                Uh oh... no result found
              </span>
            </div>
          )}
          <MobileFilter
           streams={streams}
            exams={exams}
            ownership={ownership}
            indianStates={indianStates}
            filterParams={filterParams}
            context="universities"
          />
        </div>
        <PaginationComponent pageCount={pagination.pageCount} />
      </div>
      <div className="w-full h-3 "></div>
    </>
  );
}
