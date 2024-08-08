import React from "react";
import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";
import MobileFilter from "@/modules/all-universities-list/responsive-filter";
import RankingFilter from "@/modules/all-universities-list/rankingsFilter"; //for university ranking
import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import {
  FilterParams,
  SearchParamsProps,
  UniversitiesData,
} from "@/types/types";
import {
  buildUniversityListQuery,
  getStrapiData,
  getUniversities,
  getUserData,
} from "@/utils/utils";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import {
  courseQuery,
  examsQuery,
  indianStatesQuery,
  ownershipQuery,
  rankingQuery,
} from "@/app/data/quries/uniList-query";

export default async function UniversitiesList({
  searchParams,
  params,
}: {
  searchParams: Readonly<SearchParamsProps>;
  params: { stream: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const filterParams: FilterParams = {
    locationsParam: searchParams.locationsParam,
    examsParam: searchParams.examsParam,
    ownershipsParam: searchParams.ownershipsParam,
    streamsParam: searchParams.streamsParam,
    rankingParam: searchParams.rankingParam,
    courseParam: searchParams.courseParam,
    cityParam: searchParams.cityParam,
  };

  const baseQuery =
    "/api/universities?fields[0]=title&fields[1]=slug&populate[searchableImage][fields][0]=url&populate[searchableImage][fields][1]=alternativeText&populate[searchableImage][fields][2]=blurhash&populate[searchableImage][fields][3]=formats&populate[universityProfile][fields][0]=description&populate[universityProfile][fields][1]=fees&populate[universityProfile][fields][2]=avgPackage&populate[universityProfile][fields][3]=location&populate[ownership][fields][0]=title&populate[indian_state][fields][0]=title&populate[entrance_exams][fields][0]=title";

  const universityListQuery = buildUniversityListQuery(
    baseQuery,
    filterParams,
    params
  );

  const examQueryUpdated = examsQuery(params.stream);
  const courseQueryUpdated = courseQuery(params.stream);
  const indianStatesQueryUpdated = indianStatesQuery(params.stream);

  const [ownership, indianStates, exams, ranking, data, courses, user] =
    await Promise.all([
      getStrapiData(ownershipQuery),
      getStrapiData(indianStatesQueryUpdated),
      getStrapiData(examQueryUpdated),
      getStrapiData(rankingQuery),
      getUniversities(universityListQuery, currentPage),
      getStrapiData(courseQueryUpdated),
      getUserMeLoader(),
    ]);

  const filteredUniversities = data.data;
  const finalData: UniversitiesData =
    filteredUniversities.length > 0
      ? { data: filteredUniversities, meta: data.meta }
      : data;
  const newUser = getUserData(user);
  const { pagination } = data.meta;

  return (
    <>
      <div className="bg-white lg:mx-8 rounded-[30px] lg:my-4">
        <div className="flex flex-col-reverse relative lg:flex-row justify-center">
          <CollegeFilter
            exams={exams.data[0].entrance_exams}
            ownership={ownership}
            indianStates={indianStates}
            filterParams={filterParams}
            course={courses.data[0].courses}
            context="universities"
          />
          <div className="flex flex-col w-full lg:ml-4">
            {/*  !important nirf ranking working properly in ascending order but other ranking not working properly need to work on below ranking part after 15 august 2024

            <RankingFilter
              ranking={ranking}
              filterParams={filterParams}
              context="/universities"
            /> */}

            {finalData.data.length > 0 ? (
              <CollegeList
                user={newUser}
                data={finalData}
                ranking={ranking}
                filterParams={filterParams}
                context="universities"
              />
            ) : (
              <div className="flex justify-center">
                <span className="text-dark bg-accent/10 rounded-xl mb-6 mx-10 w-full h-[200px] justify-center flex items-center">
                  Uh oh... no result found
                </span>
              </div>
            )}
          </div>
          <MobileFilter
            exams={exams}
            ownership={ownership}
            indianStates={indianStates}
            filterParams={filterParams}
            context="universities"
          />
        </div>
        <PaginationComponent pageCount={pagination.pageCount} />
      </div>
      <div className="w-full h-3"></div>
    </>
  );
}
