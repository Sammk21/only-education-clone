import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";
import MobileFilter from "@/modules/all-universities-list/responsive-filter";

import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import { SearchParamsProps, UniversitiesData } from "@/types/types";
import { getStrapiData, getUniversities } from "@/utils/utils";

import React from "react";
import { getUserMeLoader } from "../../data/services/get-user-loader";
import {
  examsQuery,
  indianStatesQuery,
  ownershipQuery,
  rankingQuery,
  streasmQuery,
  getRankingQuery,
} from "@/app/data/quries/uniList-query";
// const rankingQuery="/api/rankings?fields[0]=publisherName&fields[1]=slug"

export default async function UniversitiesList({
  searchParams,
}: Readonly<SearchParamsProps>) {
  // const uniRankingQuery = getRankingQuery(ranking);
  let universityListQuery =

    `/api/universities?populate[searchableImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true`;


  const currentPage = Number(searchParams?.page) || 1;
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);
  const streams = await getStrapiData(streasmQuery);
  const ranking = await getStrapiData(rankingQuery);


  let { streamsParam,locationsParam, examsParam, ownershipsParam,rankingParam } = searchParams;
  let filterParams = { locationsParam, examsParam, ownershipsParam,streamsParam, rankingParam }; 

  const defaultRankingParam = 'nirf';
  const rankingParamToUse = rankingParam || defaultRankingParam;

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

  if(rankingParam || defaultRankingParam ){

  
   const rankingFilter = getRankingQuery(rankingParam || defaultRankingParam);
   universityListQuery += rankingFilter
  }

 
  const data = await getUniversities(universityListQuery, currentPage);

  let filteredUniversities = data.data;

  
  const user = await getUserMeLoader();


  const finalData: UniversitiesData = filteredUniversities.length > 0 
  ? { data: filteredUniversities, meta: data.meta } 
  : data;

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
         {finalData.data.length > 0 ? (
          <CollegeList user={newUser} data={finalData} ranking={ranking} filterParams={filterParams} context="universities" />
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
