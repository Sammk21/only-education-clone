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
import Reacts from "react";

const StudyUniversity = async ({ params }: { params: { slug: string } }) => {
  const getUniQuery = `/api/universities?filters[slug][$eq]=${params.slug}&populate[universityProfile][populate][profileImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate]=true&populate[overview][populate]=true&populate[cta][populate]=true&populate[whythisUniversity][populate][header][populate]=true&populate[whythisUniversity][populate][qna][populate]=true&populate[rankComparison][populate][header][populate]=true&populate[rankComparison][populate][ranks][populate]=true&populate[eligibilityCriteria][populate][header][populate]=true&populate[eligibilityCriteria][populate][criteriaList][populate]=true&populate[documentRequired][populate][header][populate]=true&populate[documentRequired][populate][list][populate]=true&populate[feesStructure][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true`;

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

  const backgroundImage = data.data[0].universityProfile.backgroundImage.url;
  const profileImage = data.data[0].universityProfile.profileImage.url;

  return (
    <div className=" mb-16">
      <GlobalProfileLayout
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        data={universityProfile}
      />
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
        {/* <InfoTableLayout data={feesStructure} />   create table inside layout */}
        <CampusHighlight /> /** */
        <QuestionDropdown data={faq} />
      </div>
    </div>
  );
};

export default StudyUniversity;

function LoadingSlider() {
  return (
    <div className="flex w-full h-full gap-x-4 overflow-x-hidden">
      <div
        role="status"
        className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
      >
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}