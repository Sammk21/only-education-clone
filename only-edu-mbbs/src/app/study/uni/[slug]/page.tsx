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
import { getStrapiData } from "@/utils/utils";
import React from "react";

const StudyUniversity = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  const getUniQuery =
    "/api/universities?populate[universityProfile][populate]=true&populate[overview][populate]=true&populate[cta][populate]=true&populate[whythisUniversity][populate][header][populate]=true&populate[whythisUniversity][populate][qna][populate]=true&populate[rankComparison][populate][header][populate]=true&populate[rankComparison][populate][ranks][populate]=true&populate[eligibilityCriteria][populate][header][populate]=true&populate[eligibilityCriteria][populate][criteriaList][populate]=true&populate[documentRequired][populate][header][populate]=true&populate[documentRequired][populate][list][populate]=true&populate[feesStructure][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true";

  const data = await getStrapiData(getUniQuery);

  const {
    universityProfile,
    overview,
    cta,
    whythisUniversity,
    rankComparison,
    eligibilityCriteria,
    documentRequired,
    feesStructure,
    faq,
  } = data.data[0];

  return (
    <div className="pt-32 mb-16">
      <GlobalProfileLayout slug={params.slug} data={universityProfile} />

      <div className="py-4 bg-greenDark my-12">
        <div className="flex  items-center justify-center gap-x-5  text-light">
          <h1 className="lg:text-4xl text-sm/6">{cta.title}</h1>
          <button className="px-4  py-2 mt-2 rounded-2xl border border-borderLight dark:border-border  bg-blue-500 text-light text-sm hover:shadow-[1px_1px_0px_0px_rgba(0,0,0)] transition duration-200">
            Enquire Now
          </button>
        </div>
      </div>
      <div className="mt-6 ">
        <div className="my-8">
          <h2 className="text-center text-4xl font-medium mb-4 dark:text-light">
            {overview.title}
          </h2>
          <p className="text-center max-w-6xl w-full mx-auto dark:text-accent">
            {overview.description}
          </p>
        </div>
        <UniHighlights />
        <WhyThisUni data={whythisUniversity} />
        <UniRanking data={rankComparison} />
        <ElegibilityCriteria data={eligibilityCriteria} />
        <AdmissionProcessFlow />
        <DocumentRquired data={documentRequired} />
        <InfoTableLayout data={feesStructure} />
        <CampusHighlight />
        <QuestionDropdown data={faq} />
      </div>
    </div>
  );
};

export default StudyUniversity;
