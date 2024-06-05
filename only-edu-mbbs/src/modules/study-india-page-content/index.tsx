import React from "react";
import ExploreOptions from "./explore-options";
import QuestionDropdown from "../questions-dropdown";
import Facts from "./facts-india";
import WhyInida from "./why-india";
import EligibilityIndiaCourse from "./eligibility-criteria";
import StudyInBanner from "./study-in-banner";
import GlobalProfileLayout from "../global-profile-layout";

const StudyIndiaPage = () => {
  return (
    <section>
      <GlobalProfileLayout />
      {/* <StudyInBanner /> */}
      <WhyInida />
      {/* <Facts /> */}
      <ExploreOptions />
      <EligibilityIndiaCourse />
      <QuestionDropdown />
    </section>
  );
};

export default StudyIndiaPage;
