"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import TopUniRail from "@/modules/top-uni-rail";
import { IoIosArrowForward } from "react-icons/io";
import TopCountryRail from "@/modules/top-country-rail";
import VideoPlayer from "@/modules/video-player";
import WhyAbroad from "@/modules/aborad-page-content/why-aborad";
import ElegibilityCriteriaTable from "@/modules/aborad-page-content/elegibility-criteria-table";
import CountrySelect from "@/modules/aborad-page-content/countries-select";
import PopularCoursesAbroad from "@/modules/aborad-page-content/popular-courses-abroad";
import QuestionDropdown from "@/modules/questions-dropdown";

// import required modules

const StudyMbbsAbroad = () => {
  return (
    <>
      <section className="pt-28 text-dark container mx-auto overflow-hidden ">
        <CountrySelect />
        <VideoPlayer />
        <WhyAbroad />
        <ElegibilityCriteriaTable />
      </section>
      <TopCountryRail />
      <PopularCoursesAbroad />
      <TopUniRail />
      {/* <QuestionDropdown /> */}
    </>
  );
};

export default StudyMbbsAbroad;
