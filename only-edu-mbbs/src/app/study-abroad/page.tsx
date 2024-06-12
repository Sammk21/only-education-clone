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
import { getStrapiData } from "@/utils/utils";

const StudyMbbsAbroad = async () => {
  const studyAbroadQuey =
    "/api/study-abroad?populate[whyAbroad][populate][qna][populate]=true&populate[whyAbroad][populate][header][populate]=true&populate[eligibilityTable][populate][header][populate]=true&populate[topCountries][populate][Header][populate]=true&populate[topCountries][populate][CountryCard][populate][universities][populate][0]=universityProfile.backgroundImage&populate[popularCourses][populate][list]=true&populate[popularCourses][populate][header][populate]=true&populate[faq][populate][header][populate]=true&populate[faq][populate][faq][populate]=true";

  const data = await getStrapiData(studyAbroadQuey);
  const { whyAbroad, eligibilityTable, topCountries, popularCourses, faq } =
    data;

  return (
    <>
      <section className="pt-2 text-dark  mx-auto overflow-hidden ">
        <CountrySelect />
        {/* <VideoPlayer /> */}
        <WhyAbroad data={whyAbroad} />
        <ElegibilityCriteriaTable data={eligibilityTable} />
      </section>
      <TopCountryRail data={topCountries} />
      <PopularCoursesAbroad data={popularCourses} />
      {/* <TopUniRail /> */}
      <QuestionDropdown data={faq} />
    </>
  );
};

export default StudyMbbsAbroad;
