"use client";

import React, { useState, useEffect } from "react";
import CollegeFilter from "./college-filter";
import CollegeList from "./college-list";
import { getStrapiData } from "@/utils/utils";
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
  data: UniversitiesData;
}

const AllUniversitiesList = ({
  ownership,
  indianStates,
  exams,
  data,
}: Props) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredData, setFilteredData] = useState<UniversitiesData>(data);

  const getData = async (updatedAttributes: object) => {
    setSelectedFilters(updatedAttributes);

    // Construct dynamic filter query based on updatedAttributes
    let filterQuery = "/api/universities?";
    const queryParams = Object.entries(updatedAttributes)
      .map(([key, value]) => `filters[${key}][slug][$eq]=${value}`)
      .join("&");

    filterQuery += `${queryParams}&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true`;

    // Fetch new data based on the filter query
    const newFilterData = await getStrapiData(filterQuery);
    setFilteredData(newFilterData);
  };

  useEffect(() => {
    // This effect will run whenever selectedFilters changes
    if (Object.keys(selectedFilters).length > 0) {
      getData(selectedFilters);
    }
  }, [selectedFilters]);

  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <CollegeFilter
        exams={exams}
        ownership={ownership}
        indianStates={indianStates}
        setFun={getData}
      />
      <CollegeList data={filteredData} />
    </div>
  );
};

export default AllUniversitiesList;
