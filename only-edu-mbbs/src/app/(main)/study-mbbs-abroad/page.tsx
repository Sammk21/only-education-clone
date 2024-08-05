
import CountrySelect from "@/modules/aborad-page-content/countries-select";
import QuestionDropdown from "@/modules/questions-dropdown";
import React from "react";

const StudyAbroad = () => {
  return (
    <div className="pt-28 container mx-auto px-6">
      <CountrySelect />
      {/* <ElegibilityCriteria name={"MBBS"} /> */}
      {/* <InfoTableLayout title={"Medical licencing Exams after MBBS abroad "}/> */}
      {/**send dynamic data to table regarding medical exam info */}
      {/* <QuestionDropdown /> */}
    </div>
  );
};

export default StudyAbroad;
