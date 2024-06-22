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
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";
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
  const getUniQuery = `/api/universities?filters[slug][$eq]=${params.slug}&populate[universityProfile][populate][profileImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate]=true&populate[overview][populate]=true&populate[cta][populate]=true&populate[whythisUniversity][populate][header][populate]=true&populate[whythisUniversity][populate][qna][populate]=true&populate[rankComparison][populate][header][populate]=true&populate[rankComparison][populate][ranks][populate]=true&populate[eligibilityCriteria][populate][header][populate]=true&populate[eligibilityCriteria][populate][criteriaList][populate]=true&populate[documentRequired][populate][header][populate]=true&populate[documentRequired][populate][list][populate]=true&populate[feesStructure][populate][header][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true&populate[universityInfo][populate][list][populate]=true&populate[placement][populate][list][populate]=true&populate[placement][populate][placementTable][populate]=true&populate[documentRequired][populate][documents][populate]=true&populate[highlights][populate]=true`;

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
    highlights,
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
        <UniHighlights data={highlights} />
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
