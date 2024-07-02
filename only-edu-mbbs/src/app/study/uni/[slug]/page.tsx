import ElegibilityCriteria from "@/modules/MBBS-abroad-content/elegibility-criteria-mbbs";
import AdmissionProcessFlow from "@/modules/admission-process-flowchart";
import CampusHighlight from "@/modules/campus-highlight";
import DocumentRquired from "@/modules/deocuments-required";
import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import InfoTableLayout from "@/modules/table-layout";
import UniHighlights from "@/modules/uni-highlights";
import UniRanking from "@/modules/uni-ranking";
import WhyThisUni from "@/modules/why-this-uni";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "@/modules/footer/call-to-action";
import { MetaProps } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import PlacementInfo from "@/modules/placement";
import ReadMoreParagraph from "@/modules/common/readMorePara";
import UniversityTabs from "@/modules/Tabs";
import Title from "@/modules/common/title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

  const title = data.data[0].title;
  const id = data.data[0].id;

  const ctaProps = {
    title,
    id,
  };

  return (
    <div className="mb-16">
      <GlobalProfileLayout
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        data={universityProfile}
        universityInfo={universityInfo}
      />
      <Tabs defaultValue="overview">
        <TabsList className="sm:w-full justify-start sm:justify-center w-screen overflow-x-scroll">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses&fees">Courses & Fees</TabsTrigger>
          <TabsTrigger value="admission">Admission</TabsTrigger>
          <TabsTrigger value="placement">Placement</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="gallary">Gallary</TabsTrigger>
        </TabsList>
        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="overview"
        >
          <div className="mt-3 px-3 col-span-8">
            <Card>
              <CardHeader>
                <Title>{`${title} Latest updates`}</Title>
              </CardHeader>
              <CardContent>Ck editor content</CardContent>
            </Card>
            <div className=" bg-white p-3 mt-3 rounded-lg border">
              <Title>{overview.title}</Title>
              <ReadMoreParagraph text={overview.description} />
            </div>
            <CallToAction id={id} data={cta} title={title} />
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
          <div className="col-span-4"></div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyUniversity;
