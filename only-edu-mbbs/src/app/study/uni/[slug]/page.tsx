import ElegibilityCriteria from "@/modules/MBBS-abroad-content/elegibility-criteria-mbbs";
import FlowDiagram from "@/modules/aborad-page-content/flow-diagram";
import AdmissionProcessFlow from "@/modules/admission-process-flowchart";
import CampusHighlight from "@/modules/campus-highlight";
import DocumentRquired from "@/modules/deocuments-required";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import InfoTableLayout from "@/modules/table-layout";
import TopUniRail from "@/modules/top-uni-rail";
import UniHighlights from "@/modules/uni-highlights";
import UniRanking from "@/modules/uni-ranking";
import WhyThisUni from "@/modules/why-this-uni";
import React from "react";

const StudyUniversity = () => {
  return (
    <div className="pt-32 mb-16">
      <GlobalProfileLayout />

      <div className="py-4 bg-greenDark my-12">
        <div className="flex  items-center justify-center gap-x-5  text-light">
          <h1 className="lg:text-4xl text-sm/6">
            Get connected with our experts{" "}
          </h1>
          <button className="px-4  py-2 mt-2 rounded-2xl border border-borderLight dark:border-border  bg-blue-500 text-light text-sm hover:shadow-[1px_1px_0px_0px_rgba(0,0,0)] transition duration-200">
            Enquire Now
          </button>
        </div>
        {/* <p className="text-center text-accent">For better guidence</p> */}
      </div>
      <div className="mt-6 ">
        <div className="my-8">
          <h2 className="text-center text-4xl font-medium mb-4 dark:text-light">
            Overview
          </h2>
          <p className="text-center max-w-6xl w-full mx-auto dark:text-accent">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum
            soluta nostrum architecto dolorum ullam voluptatibus molestias
            commodi laudantium nulla assumenda possimus sapiente non rerum
            excepturi quisquam delectus, perferendis incidunt obcaecati error
            culpa aliquam? Sed, veritatis!
          </p>
        </div>
        <UniHighlights />
        <WhyThisUni />
        <UniRanking />
        <ElegibilityCriteria name="name of uni" />
        <AdmissionProcessFlow />
        <DocumentRquired />
        <div className="my-12">
          <InfoTableLayout title="bashkir state medical uni fees" />
        </div>
        <CampusHighlight />
        <QuestionDropdown />
      </div>
    </div>
  );
};

export default StudyUniversity;
