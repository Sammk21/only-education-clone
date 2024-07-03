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
import parse from "html-react-parser";
import OverviewTab from "@/modules/universities-tabs/overview-tabs";
import GalleryTabs from "@/modules/universities-tabs/gallery";
import FacultyList from "@/modules/universities-tabs/faculty-list";

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
  const getUniQuery = `/api/universities?filters[slug][$eq]=${params.slug}&populate[universityProfile][populate][profileImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate]=true&populate[overview][populate]=true&populate[cta][populate]=true&populate[whythisUniversity][populate][header][populate]=true&populate[whythisUniversity][populate][qna][populate]=true&populate[rankComparison][populate][header][populate]=true&populate[rankComparison][populate][ranks][populate]=true&populate[eligibilityCriteria][populate][header][populate]=true&populate[eligibilityCriteria][populate][criteriaList][populate]=true&populate[documentRequired][populate][header][populate]=true&populate[documentRequired][populate][list][populate]=true&populate[feesStructure][populate][header][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true&populate[universityInfo][populate][list][populate]=true&populate[placement][populate][list][populate]=true&populate[placement][populate][placementTable][populate]=true&populate[documentRequired][populate][documents][populate]=true&populate[highlights][populate]=true&populate[overviewTabs][populate][latestUpdates][populate]=true&populate[overviewTabs][populate][overview][populate]=true&populate[overviewTabs][populate][highlights][populate]=true&populate[overviewTabs][populate][ranking][populate]=true&populate[overviewTabs][populate][whyChoose][populate]=true&populate[overviewTabs][populate][academicAdvantages][populate]=true&populate[coursesFees][populate][feeDetails][populate]=true&populate[coursesFees][populate][entranceExams][populate]=true&populate[coursesFees][populate][paymentGuidelines][populate]=true&populate[admission][populate][courseAdmission][populate]=true&populate[admission][populate][apllicationDates][populate]=true&populate[admission][populate][cutoff][populate]=true&populate[placements][populate][placementInfo][populate]=true&populate[placements][populate][packagesInfo][populate]=true&populate[gallery][populate][events][populate]=true&populate[gallery][populate][infrastructure][populate]=true&populate[faculty][populate][facInfo][populate]=true`;
  const data = await getStrapiData(getUniQuery);

  const {
    universityProfile,
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
    overview,
    overviewTabs,
    coursesFees,
    admission,
    placements,
    gallery,
    faculty,
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
        <TabsList className="sm:w-full justify-start sm:justify-center w-screen overflow-x-scroll md:overflow-hidden">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses&fees">Courses & Fees</TabsTrigger>
          <TabsTrigger value="admission">Admission</TabsTrigger>
          <TabsTrigger value="placement">Placement</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
        </TabsList>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="overview"
        >
          <div className="mt-3 px-3 col-span-8">
            <OverviewTab data={overviewTabs.latestUpdates} />
            <CallToAction id={id} data={cta} title={title} />
            <OverviewTab data={overviewTabs.overview} />
            <OverviewTab data={overviewTabs.highlights} />
            <OverviewTab data={overviewTabs.ranking} />
            <CallToAction id={id} data={cta} title={title} />
            <OverviewTab data={overviewTabs.whyChoose} />
            <OverviewTab data={overviewTabs.academicAdvantages} />

            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="courses&fees"
        >
          <div className="mt-3 px-3 col-span-8">
            <OverviewTab data={coursesFees.feeDetails} />
            <CallToAction id={id} data={cta} title={title} />
            <OverviewTab data={coursesFees.entranceExams} />
            <OverviewTab data={coursesFees.paymentGuidelines} />
            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="admission"
        >
          <div className="mt-3 px-3 col-span-8">
            <OverviewTab data={admission.courseAdmission} />
            <CallToAction id={id} data={cta} title={title} />
            <OverviewTab data={admission.apllicationDates} />
            <OverviewTab data={admission.cutoff} />
            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="placement"
        >
          <div className="mt-3 px-3 col-span-8">
            <OverviewTab data={placements.placementInfo} />
            <CallToAction id={id} data={cta} title={title} />
            <OverviewTab data={placements.packagesInfo} />
            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="gallery"
        >
          <div className="mt-3 px-3 col-span-8">
            <GalleryTabs data={gallery.events} infra={gallery.infrastructure} />
            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="faculty"
        >
          <div className="mt-3 px-3 col-span-8">
            <FacultyList data={faculty} />
            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyUniversity;

{
  /* 
            <UniHighlights data={highlights} />
            <WhyThisUni data={whythisUniversity} />
            <UniRanking data={rankComparison} />
            <ElegibilityCriteria data={eligibilityCriteria} />
            <AdmissionProcessFlow />
            <DocumentRquired data={documentRequired} />
          <InfoTableLayout data={feesStructure} />
            <PlacementInfo data={placement} />
            <CampusHighlight /> */
}
