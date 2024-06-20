"use client";

import React, { useState } from "react";
import CollegeFilter from "./college-filter";
import CollegeList from "./college-list";
import { ImageAttributes } from "@/types/types";

interface Ownership {
  id: number;
  title: string;
  slug: string;
}
interface Streams {
  id: number;
  title: string;
  slug: string;
}
interface IndianState {
  id: number;
  title: string;
  slug: string;
}
interface Data {
  id: number;
  title: string;
  slug: string;
}
interface UniversityProfile {
  backgroundImage: ImageAttributes;
  fees: string;
  avgPackage: string;
  description: string;
}
interface University {
  title: string;
  id: number;
  slug: string;
  universityProfile: UniversityProfile;
  ownership: Ownership;
  indian_state: IndianState;
  streams: Streams;
  exams: {
    data: Data[];
  };
}

interface UniversitiesData {
  data: University[];
}
interface Option {
  id: number;
  title: string;
  slug: string;
}

interface Props {
  ownership: {
    data: Option[];
  };
  indianStates: {
    data: Option[];
  };
  exams: {
    data: Option[];
  };

  filterData: UniversitiesData;
  data: UniversitiesData;
}

const AllUniversitiesList = ({
  ownership,
  indianStates,
  exams,
  data,
  filterData,
}: //   filterData,
Props) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const getData = (updatedAttributes: object) => {
    setSelectedFilters(updatedAttributes);
  };

  console.log(selectedFilters);
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <CollegeFilter
        exams={exams}
        ownership={ownership}
        indianStates={indianStates}
        setFun={getData}
      />
      <CollegeList data={data} filterData={filterData} />
    </div>
  );
};

export default AllUniversitiesList;
