import CollegeFilter from "@/modules/all-universities-list/college-filter";
import MobileFilter from "@/modules/all-universities-list/responsive-filter";
import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import { SearchParamsProps } from "@/types/types";
import { getStrapiData, getUniversities } from "@/utils/utils";

import React from "react";
import { getUserMeLoader } from "../../data/services/get-user-loader";
import {
  examsFilterQuery,
  modeQuery,
  streamsQuery,
} from "@/app/data/quries/uniList-query";
import EntranceExamList from "@/modules/all-universities-list/exam-list";

export default async function UniversitiesList({
  searchParams,
}:{searchParams :Readonly<SearchParamsProps>}) {

  let examListQuery =
    "/api/entrance-exams?populate[searchableImage][populate]=true&populate[stream][populate]=true&populate[entrance_exam][populate]=true&populate[mode][populate]=true";

  const currentPage = Number(searchParams?.page) || 1;
  const streams = await getStrapiData(streamsQuery);
  const modes = await getStrapiData(modeQuery);
  const exams = await getStrapiData(examsFilterQuery);

  let {  streamsParam, modesParam, examsParam } = searchParams;
  let filterParams = {  streamsParam, modesParam, examsParam }; 
  if (searchParams) {
   
    if (streamsParam) {
      const streamsFilters = streamsParam
        .split(",")
        .map((streams) => `filters[streams][slug][$eq]=${streams}`)
        .join("&");
      examListQuery += `&${streamsFilters}`;
    }
    if (modesParam) {
      const modesFilters = modesParam
        .split(",")
        .map((modes) => `filters[mode][slug][$eq]=${modes}`)
        .join("&"); 
      examListQuery += `&${modesFilters}`;
      console.log("hdfshfsak", modesFilters)
    }
    // if (examsParam) {
    //   const examsFilters = examsParam
    //     .split(",")
    //     .map((exams) => `filters[exams][slug][$eq]=${exams}`)
    //     .join("&");
    //   examListQuery += `&${examsFilters}`;
    // }
  }
  

  const data = await getUniversities(examListQuery, currentPage);
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
            modes={modes}
            // exams={exams}
            context="exams"
            filterParams={filterParams}
          />
          {data.data.length > 0 ? (
            <EntranceExamList user={newUser} data={data} />
          ) : (
            <div className=" w-[70%] flex justify-center ">
              <span className=" text-dark bg-accent/10  rounded-xl mb-6 mx-10 w-full h-[200px] justify-center flex items-center">
                Uh oh... no result found
              </span>
            </div>
          )}
          <MobileFilter
streams={streams}
            modes={modes}
            context="exams"
            filterParams={filterParams}
          />
        </div>
        <PaginationComponent pageCount={pagination.pageCount} />
      </div>
      <div className="w-full h-3 "></div>
    </>
  );
}
