import CollegeFilter from "@/modules/all-universities-list/college-filter";
import MobileFilter from "@/modules/all-universities-list/responsive-filter";

import { PaginationComponent } from "@/modules/blog-components/blog/pagination";
import { SearchParamsProps } from "@/types/types";
import { getStrapiData, getUniversities } from "@/utils/utils";

import React from "react";
import { getUserMeLoader } from "../../data/services/get-user-loader";
import {
  courseQuery,
  durationQuery,
  streamsQuery,
} from "@/app/data/quries/uniList-query";
import CourseList from "@/modules/all-universities-list/course-list";

export default async function UniversitiesList({
  searchParams,
}:{searchParams :Readonly<SearchParamsProps>}) {

  let courseListQuery =
    "/api/courses?populate[stream][populate]=true&populate[duration][populate]=true&populate[course]=true&populate[universities][populate]=true";

  const currentPage = Number(searchParams?.page) || 1;

  const streams = await getStrapiData(streamsQuery);
  const duration = await getStrapiData(durationQuery);
  // const course = await getStrapiData(courseQuery);

  let { streamsParam, durationParam, courseParam } = searchParams;
  let filterParams = { streamsParam, durationParam, courseParam };
  if (searchParams) {
    if (streamsParam) {
      const streamsFilters = streamsParam
        .split(",")
        .map((streams) => `filters[stream][slug][$eq]=${streams}`)
        .join("&");
      courseListQuery += `&${streamsFilters}`;
    }
    if (durationParam) {
      const durationFilters = durationParam
        .split(",")
        .map((duration) => `filters[duration][slug][$eq]=${duration}`)
        .join("&");
      courseListQuery += `&${durationFilters}`;
    }
    if (courseParam) {
      const courseFilters = courseParam
        .split(",")
        .map((course) => `filters[course][slug][$eq]=${course}`)
        .join("&");
      courseListQuery += `&${courseFilters}`;
    }
  }

  const data = await getUniversities(courseListQuery, currentPage);
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
            duration={duration}
            // course={course}
            context="course"
            filterParams={filterParams}
          />
          {data.data.length > 0 ? (
            <CourseList user={newUser} data={data} />
          ) : (
            <div className=" sm:w-[70%] w-[100%] flex justify-center ">
              <span className=" text-dark bg-accent/10  rounded-xl mb-6 mx-10 w-full h-[200px] justify-center flex items-center">
                Uh oh... no result found
              </span>
            </div>
          )}
          <MobileFilter
            streams={streams}
           
            context="course"
            filterParams={filterParams}
          />
        </div>
        <PaginationComponent pageCount={pagination.pageCount} />
      </div>
      <div className="w-full h-3 "></div>
    </>
  );
}
