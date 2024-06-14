import CollegeFilter from "@/modules/all-universities-list/college-filter";
import CollegeList from "@/modules/all-universities-list/college-list";
import { getStrapiData } from "@/utils/utils";
import React from "react";
const universityListQuery =
  "/api/universities?populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[benifits][populate]=true";

export default async function UniversitiesList() {
  const data = await getStrapiData(universityListQuery);

  return (
    // <UniversitiesListPage data={data}
    <div className="bg-white rounded-[30px] my-4">
      <div className="flex flex-col sm:flex-row justify-center">
        <CollegeFilter />
        <CollegeList data={data} />
      </div>
    </div>
  );
}

// export default UniversitiesList;
