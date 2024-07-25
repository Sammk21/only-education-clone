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
  streasmQuery,
} from "@/app/data/quries/uniList-query";
const rankingQuery="/api/rankings?fields[0]=publisherName&fields[1]=slug"

export default async function UniversitiesList({
  searchParams,
}: Readonly<SearchParamsProps>) {
  let universityListQuery =

    "/api/universities?populate[searchableImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true&filters[rankingStreams][rankingPublisher][slug][$eq]=nirf&populate[rankingStreams][filters][rankingPublisher][slug][$eq]=nirf&populate[rankingStreams][sort][0]=rankingNumber:asc&populate[rankingStreams][populate][stream]=true&populate[rankingStreams][populate][rankingPublisher]=true";
    // const UniRanking="/api/universities?populate[ranking][populate][rankings][populate]=publisherName&populate[ranking][fields][0]=rankingNumber"


  const currentPage = Number(searchParams?.page) || 1;
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);
  const streams = await getStrapiData(streasmQuery);
  const ranking = await getStrapiData(rankingQuery);


  let { streamsParam,locationsParam, examsParam, ownershipsParam,rankingParam } = searchParams;
  let filterParams = { locationsParam, examsParam, ownershipsParam,streamsParam, rankingParam }; 


  // if (searchParams) {
  //   if (rankingParam) {
  //     const rankingFilters = `filters[rankings][publisherName][$eq]=${rankingParam}`
  //     universityListQuery += `&${rankingFilters}`;
        
  //   }

  //   if (streamsParam) {
  //     const streamsFilters = streamsParam
  //       .split(",")
  //       .map((streams) => `filters[streams][slug][$eq]=${streams}`)
  //       .join("&");
  //       universityListQuery += `&${streamsFilters}`;
  //   }
  //   if (locationsParam) {
  //     const locationFilters = locationsParam
  //       .split(",")
  //       .map((location) => `filters[indian_state][slug][$eq]=${location}`)
  //       .join("&");
  //     universityListQuery += `&${locationFilters}`;
  //   }
  //   if (examsParam) {
  //     const examFilters = examsParam
  //       .split(",")
  //       .map((exam) => `filters[exams][slug][$eq]=${exam}`)
  //       .join("&");
  //     universityListQuery += `&${examFilters}`;
  //   }
  //   if (ownershipsParam) {
  //     const ownershipFilters = `filters[ownership][slug][$eq]=${ownershipsParam}`;
  //     universityListQuery += `&${ownershipFilters}`;
  //   }

  // }

 
  const data = await getUniversities(universityListQuery, currentPage);

const defaultRankingParam = 'nirf';
const rankingParamToUse = rankingParam || defaultRankingParam;

  let filteredUniversities = data.data;

  if (rankingParamToUse) {
    filteredUniversities = filteredUniversities
      .map((university: { ranking: any[], rankingNumber: number }) => {
        if (university.ranking) {
          const filteredRankings = university.ranking.filter((rank: { rankings: { slug: string; }; }) => {
            return rank.rankings.slug === rankingParamToUse;
          });
  
          // Keep only the lowest ranking
          const lowestRanking = filteredRankings.reduce((prev, current) => {
            return (prev.rankingNumber < current.rankingNumber) ? prev : current;
          }, filteredRankings[0]);
  
          return {
            ...university,
            ranking: lowestRanking ? [lowestRanking] : []
          };
        }
        return university;
      })
      .filter((university: { ranking: string | any[]; }) => university.ranking.length > 0)
      .sort((a: { ranking: { rankingNumber: number }[] }, b: { ranking: { rankingNumber: number }[] }) => {
        // Ensure both universities have at least one ranking, then sort by the first ranking number
        if (a.ranking[0] && b.ranking[0]) {
          return a.ranking[0].rankingNumber - b.ranking[0].rankingNumber;
        }
        return 0;
      });
  }
  
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
