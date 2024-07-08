import ElegibilityCriteriaTable from "@/modules/aborad-page-content/elegibility-criteria-table";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import UniversitiesRail from "@/modules/sliders/slider-two";
import StudyIndiaPage from "@/modules/study-india-page-content";
import EligibilityIndiaCourse from "@/modules/study-india-page-content/eligibility-criteria";
import ExploreOptions from "@/modules/study-india-page-content/explore-options";
import Facts from "@/modules/study-india-page-content/facts-india";
import StudyInBanner from "@/modules/study-india-page-content/study-in-banner";
import WhyInida from "@/modules/study-india-page-content/why-india";
import { getStrapiData } from "@/utils/utils";

import React from "react";
const StudyIn = async () => {
  const studyINdiaQuery =
    "/api/study-india?populate[faq][populate][header][populate]=true&populate[faq][populate][faq][populate]=true&populate[eligibilityTable][populate][eligibilityTable][populate]=true&populate[eligibilityTable][populate][header][populate]=true&populate[explore][populate][header][populate]=true&populate[explore][populate][list][populate]=true&populate[topUniversities][populate][Header][populate]=true&populate[topUniversities][populate][universities][populate][0]=universityProfile.backgroundImage&populate[whyIndia][populate][header][populate]=true&populate[whyIndia][populate][list][populate]=true";
  const data = await getStrapiData(studyINdiaQuery);
  const { faq, eligibilityTable, explore, topUniversities, whyIndia } = data;
  return (
    <section className="text-dark  mx-auto overflow-hidden">
      {/* <GlobalProfileLayout /> */}
      <StudyInBanner />
      <WhyInida data={whyIndia} />
      {/* <Facts /> */}
      <UniversitiesRail data={topUniversities} />
      <ExploreOptions data={explore} />
      <ElegibilityCriteriaTable data={eligibilityTable} />
      {/* <EligibilityIndiaCourse /> */}
      <QuestionDropdown data={faq} />
    </section>
  );
};

export default StudyIn;
