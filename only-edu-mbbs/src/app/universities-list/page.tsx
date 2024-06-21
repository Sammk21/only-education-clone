import AllUniversitiesFilter from "@/modules/all-universities-list";
import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";
import { getStrapiData } from "@/utils/utils";
import React from "react";

const universityListQuery =
  "/api/universities?populate[searchableImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true";
const ownershipQuery = "/api/ownerships?populate=true";
const indianStatesQuery = "/api/indian-states?populate=true";
const examsQuery = "/api/exams?populate=true";

export default async function UniversitiesList() {
  const data = await getStrapiData(universityListQuery);
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);

  return (
    <div className="bg-white rounded-[30px] my-4">
      <div className="flex flex-col sm:flex-row justify-center">
        <AllUniversitiesFilter
          exams={exams}
          ownership={ownership}
          indianStates={indianStates}
          data={data}
        />
        {/* <CollegeList data={data} /> */}
      </div>
    </div>
  );
}
