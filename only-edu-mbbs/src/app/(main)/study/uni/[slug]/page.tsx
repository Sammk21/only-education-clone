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
import GlobalUniversitiesTabs from "@/modules/universities-tabs/global-universities-tabs";
import GalleryTabs from "@/modules/universities-tabs/gallery";
import FacultyList from "@/modules/universities-tabs/faculty-list";
import UniversitiesNews from "@/modules/universities-tabs/universities-news";
import Ranking from "@/modules/universities-tabs/ranking";

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
  const getUniQuery = `/api/universities?filters[slug][$eq]=${params.slug}&populate[universityProfile][populate][profileImage][populate]=true&populate[universityProfile][populate][backgroundImage][populate]=true&populate[overview][populate]=true&populate[cta][populate]=true&populate[feesStructure][populate][header][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true&populate[universityInfo][populate][list][populate]=true&populate[documentRequired][populate][documents][populate]=true&populate[highlights][populate]=true&populate[overviewTabs][populate][latestUpdates][populate]=true&populate[overviewTabs][populate][overview][populate]=true&populate[overviewTabs][populate][highlights][populate]=true&populate[overviewTabs][populate][ranking][populate]=true&populate[overviewTabs][populate][whyChoose][populate]=true&populate[overviewTabs][populate][academicAdvantages][populate]=true&populate[coursesFees][populate][feeDetails][populate]=true&populate[coursesFees][populate][entranceExams][populate]=true&populate[coursesFees][populate][paymentGuidelines][populate]=true&populate[admission][populate][courseAdmission][populate]=true&populate[admission][populate][apllicationDates][populate]=true&populate[admission][populate][cutoff][populate]=true&populate[placements][populate][placementInfo][populate]=true&populate[placements][populate][packagesInfo][populate]=true&populate[gallery][populate][events][populate]=true&populate[gallery][populate][infrastructure][populate]=true&populate[faculty][populate][facInfo][populate]=true&populate[hostel][populate][maleHostel][populate][header][populate]=true&populate[hostel][populate][maleHostel][populate][content][populate]=true&populate[hostel][populate][femaleHostel][populate][header][populate]=true&populate[hostel][populate][femaleHostel][populate][content][populate]=true&populate[scholarships][populate][scholarshipsInfo][populate][header][populate]=true&populate[scholarships][populate][scholarshipsInfo][populate][content][populate]=true&populate[notification][populate][header][populate]=true&populate[notification][populate][content][populate]=true&populate[ranking][populate]=true&populate[ranking][populate]=course&populate[ranking][populate]=rankings&populate[ranking][populate]=rankings.publisherImage`;
  const data = await getStrapiData(getUniQuery);

  const getUniNewsQuery = `/api/news?filters[relatedUniversities][slug][$eq]=${params.slug}&populate[image][populate]=true&populate[relatedUniversities][populate]=true`;
  // const getUniNewsQuery = `/api/news?populate[relatedUniversities][populate]=true`;
  const newsData = await getStrapiData(getUniNewsQuery);

  const {
    universityProfile,
    cta,

    feesStructure,
    faq,
    universityInfo,
    highlights,
    overview,
    overviewTabs,
    coursesFees,
    admission,
    placements,
    gallery,
    faculty,
    hostel,
    scholarships,
    notification,
    ranking,
  } = data.data[0];

  const backgroundImage = data.data[0].universityProfile.backgroundImage.url;
  const profileImage = data.data[0].universityProfile.profileImage.url;

  const title = data.data[0].title;
  const id = data.data[0].id;
  console.dir(gallery);

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
        <TabsList className="sm:w-full justify-start sm:justify-center w-screen overflow-x-scroll md:overflow-hidden sticky top-16 z-50">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses&fees">Courses & Fees</TabsTrigger>
          <TabsTrigger value="admission">Admission</TabsTrigger>
          <TabsTrigger value="placement">Placement</TabsTrigger>

          <TabsTrigger value="scholarships">scholarships</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="hostel">Hostel</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="ranking">Ranking</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="overview"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}

            {overviewTabs?.latestUpdates && (
              <GlobalUniversitiesTabs data={overviewTabs.latestUpdates} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {overviewTabs?.overview && (
              <GlobalUniversitiesTabs data={overviewTabs.overview} />
            )}
            {overviewTabs?.highlights && (
              <GlobalUniversitiesTabs data={overviewTabs.highlights} />
            )}
            {overviewTabs?.ranking && (
              <GlobalUniversitiesTabs data={overviewTabs.ranking} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {overviewTabs?.whyChoose && (
              <GlobalUniversitiesTabs data={overviewTabs.whyChoose} />
            )}
            {overviewTabs?.academicAdvantages && (
              <GlobalUniversitiesTabs data={overviewTabs.academicAdvantages} />
            )}

            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />

            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="courses&fees"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}
            {coursesFees?.feeDetails && (
              <GlobalUniversitiesTabs data={coursesFees.feeDetails} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {coursesFees?.entranceExams && (
              <GlobalUniversitiesTabs data={coursesFees.entranceExams} />
            )}
            {coursesFees?.paymentGuidelines && (
              <GlobalUniversitiesTabs data={coursesFees.paymentGuidelines} />
            )}
            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />

            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="admission"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {admission?.courseAdmission && (
              <GlobalUniversitiesTabs data={admission.courseAdmission} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {admission?.apllicationDates && (
              <GlobalUniversitiesTabs data={admission.apllicationDates} />
            )}
            {admission?.cutoff && (
              <GlobalUniversitiesTabs data={admission.cutoff} />
            )}
            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />

            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="placement"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}
            {placements?.placementInfo && (
              <GlobalUniversitiesTabs data={placements.placementInfo} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {placements?.packagesInfo && (
              <GlobalUniversitiesTabs data={placements.packagesInfo} />
            )}

            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />

            <UniversitiesNews
              data={newsData.data}
              sticky="sticky top-28 mb-12"
              className="grid grid-cols-1"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="scholarships"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {scholarships?.scholarshipsInfo && (
              <GlobalUniversitiesTabs data={scholarships.scholarshipsInfo} />
            )}

            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />

            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="gallery"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}

            {gallery?.events && gallery?.infrastructure && (
              <GalleryTabs
                event={gallery.events}
                infra={gallery.infrastructure}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-dashed pb-7 mb-5"
              />
            )}

            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="faculty"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}

            {faculty && <FacultyList data={faculty} />}

            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="hostel"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}
            {hostel?.maleHostel && (
              <GlobalUniversitiesTabs data={hostel.maleHostel} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {hostel?.femaleHostel && (
              <GlobalUniversitiesTabs data={hostel.femaleHostel} />
            )}
            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="news"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}

            {newsData?.data && (
              <UniversitiesNews
                data={newsData.data}
                className="grid md:grid-cols-2 gap-4 font-semibold grid-cols-1"
              />
            )}

            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4  hidden md:block mt-3">
            <CallToAction id={id} data={cta} title={title} />

            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
          </div>
        </TabsContent>

        <TabsContent
          className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="ranking"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {notification && (
              <GlobalUniversitiesTabs data={notification} notification={true} />
            )}
            {ranking && <Ranking data={ranking} />}
            {faq && <QuestionDropdown data={faq} />}
          </div>
          <div className="col-span-4 mt-3 hidden md:block ">
            <CallToAction id={id} data={cta} title={title} />

            <UniversitiesNews
              data={newsData.data}
              className="grid grid-cols-1"
              sticky="sticky top-28 mb-12"
            />
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
