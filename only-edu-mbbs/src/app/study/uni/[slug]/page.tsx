import ElegibilityCriteria from "@/modules/MBBS-abroad-content/elegibility-criteria-mbbs";
import FlowDiagram from "@/modules/aborad-page-content/flow-diagram";
import AdmissionProcessFlow from "@/modules/admission-process-flowchart";
import CampusHighlight from "@/modules/campus-highlight";
import DocumentRquired from "@/modules/deocuments-required";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import InfoTableLayout from "@/modules/table-layout";
import UniHighlights from "@/modules/uni-highlights";
import UniRanking from "@/modules/uni-ranking";
import WhyThisUni from "@/modules/why-this-uni";

import CallToAction from "@/modules/footer/call-to-action";
import { MetaProps } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import PlacementInfo from "@/modules/placement";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("universities", params.slug);
  const baseUrl = process.env.API_URL || "http://localhost:1337";
  const { seo } = data.data[0];
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      images: [
        {
          url: baseUrl + seo?.metaImage?.url || "",
        },
      ],
    },
  };
}

const StudyUniversity = async ({ params }: { params: { slug: string } }) => {
  const getUniQuery = `/api/universities?filters[slug][$eq]=${params.slug}&populate[universityProfile][populate][profileImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate]=true&populate[overview][populate]=true&populate[cta][populate]=true&populate[whythisUniversity][populate][header][populate]=true&populate[whythisUniversity][populate][qna][populate]=true&populate[rankComparison][populate][header][populate]=true&populate[rankComparison][populate][ranks][populate]=true&populate[eligibilityCriteria][populate][header][populate]=true&populate[eligibilityCriteria][populate][criteriaList][populate]=true&populate[documentRequired][populate][header][populate]=true&populate[documentRequired][populate][list][populate]=true&populate[feesStructure][populate][header][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true&populate[universityInfo][populate][list][populate]=ture&populate[placement][populate][list][populate]=true&populate[placement][populate][placementTable][populate]=true&populate[documentRequired][populate][documents][populate]=true`;

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
    universityInfo,
    placement,
  } = data.data[0];

  const backgroundImage = data.data[0].universityProfile.backgroundImage.url;
  const profileImage = data.data[0].universityProfile.profileImage.url;

  return (
    <div className=" mb-16">
      <GlobalProfileLayout
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        data={universityProfile}
        universityInfo={universityInfo}
      />
      <div className="mt-6 px-3 ">
        <div className="my-8 container">
          <h2 className=" text-4xl font-medium mb-4 dark:text-light text-dark">
            {overview.title}
          </h2>
          <p className=" max-w-6xl w-full mx-auto dark:text-accent">
            {overview.description}
          </p>
        </div>
        <CallToAction data={cta} />
        <UniHighlights />
        <WhyThisUni data={whythisUniversity} />
        <UniRanking data={rankComparison} />
        <ElegibilityCriteria data={eligibilityCriteria} />
        <AdmissionProcessFlow />
        <DocumentRquired data={documentRequired} />
        <InfoTableLayout data={feesStructure} />
        <PlacementInfo data={placement} />
        <CampusHighlight />
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
