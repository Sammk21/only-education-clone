import React from "react";
import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";
import MobileFilter from "@/modules/all-universities-list/responsive-filter";
import RankingFilter from "@/modules/all-universities-list/rankingsFilter";
import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import { FilterParams, SearchParamsProps, UniversitiesData } from "@/types/types";
import { buildUniversityListQuery, filterUniversities, getStrapiData, getUniversities, getUserData } from "@/utils/utils";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { examsQuery, indianStatesQuery,  ownershipQuery, rankingQuery,} from "@/app/data/quries/uniList-query";


export default async function UniversitiesList({
  searchParams,
  params
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
  };

  const baseQuery = "/api/universities?populate[searchableImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true";
  const universityListQuery = buildUniversityListQuery(baseQuery, filterParams, params);

  
  const examQueryUpdated = examsQuery(params.stream)
  const indianStatesQueryUpdated = indianStatesQuery(params.stream)

  console.log(examQueryUpdated.toString())

  const [ownership, indianStates, exams, ranking, data, user] = await Promise.all([
    getStrapiData(ownershipQuery),
    getStrapiData(indianStatesQueryUpdated),
    getStrapiData(examQueryUpdated),
    getStrapiData(rankingQuery),
    getUniversities(universityListQuery, currentPage),
    getUserMeLoader(),
  ]);

  const filteredUniversities = filterUniversities(data.data);
  const finalData: UniversitiesData = filteredUniversities.length > 0
    ? { data: filteredUniversities, meta: data.meta }
    : data;

  const newUser = getUserData(user);
  const { pagination } = data.meta;

  return (
    <>
      <div className="bg-white mx-8 rounded-[30px] my-4">
        <div className="flex flex-col-reverse relative lg:flex-row justify-center">
          <CollegeFilter
            exams={exams}
            ownership={ownership}
            indianStates={indianStates}
            filterParams={filterParams}
            context="universities"
          />
          <div className="flex flex-col w-full ml-4">
            <RankingFilter
              ranking={ranking}
              filterParams={filterParams}
              context="/universities"
            />
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

