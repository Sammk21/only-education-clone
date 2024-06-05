import ElegibilityCriteria from "@/modules/MBBS-abroad-content/elegibility-criteria-mbbs";
import WhyAbroad from "@/modules/aborad-page-content/why-aborad";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import CountryProfile from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import InfoTableLayout from "@/modules/table-layout";
import TopUniRail from "@/modules/top-uni-rail";
import Image from "next/image";
import React from "react";

const StudyCountry = () => {
  return (
    <div className="pt-36 pb-12 text-dark dark:text-light">
      <GlobalProfileLayout />
      <WhyAbroad />
      <InfoTableLayout title={"Highlights"} />
      <ElegibilityCriteria name="admissions in russia" />
      <InfoTableLayout title={"Eligibility Criteria"} />
      <TopUniRail />
      <QuestionDropdown />
    </div>
  );
};

export default StudyCountry;
