import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoIosArrowForward } from "react-icons/io";

import WhyAbroad from "@/modules/aborad-page-content/why-aborad";
import ElegibilityCriteriaTable from "@/modules/aborad-page-content/elegibility-criteria-table";
import CountrySelect from "@/modules/aborad-page-content/countries-select";
import PopularCoursesAbroad from "@/modules/aborad-page-content/popular-courses-abroad";
import QuestionDropdown from "@/modules/questions-dropdown";
import { getStrapiData } from "@/utils/utils";
import { UniversitiesRail } from "@/modules/sliders/slider-two";

const StudyMbbsAbroad = async () => {
  const studyAbroadQuey =
    "/api/study-abroad?populate[whyAbroad][populate][qna][populate]=true&populate[whyAbroad][populate][header][populate]=true&populate[eligibilityTable][populate][header][populate]=true&populate[topUniversities][populate][Header][populate]=true&populate[topUniversities][populate][universities][populate][0]=universityProfile.backgroundImage&populate[popularCourses][populate][documents]=true&populate[popularCourses][populate][header][populate]=true&populate[faq][populate][header][populate]=true&populate[faq][populate][faq][populate]=true";

  const data = await getStrapiData(studyAbroadQuey);
  const { whyAbroad, eligibilityTable, popularCourses, faq } = data;

  return (
    <>
      <section className="pt-2 text-dark  mx-auto overflow-hidden ">
        <CountrySelect />

        <WhyAbroad data={whyAbroad} />
        <ElegibilityCriteriaTable data={eligibilityTable} />
      </section>
      <UniversitiesRail data={data.topUniversities} />
      <PopularCoursesAbroad data={popularCourses} />

      <QuestionDropdown data={faq} />
    </>
  );
};

export default StudyMbbsAbroad;
