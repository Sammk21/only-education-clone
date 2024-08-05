import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "@/modules/footer/call-to-action";
import { College, ImageAttributes, Meta, MetaProps } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import GlobalUniversitiesTabs from "@/modules/universities-tabs/global-universities-tabs";
import GalleryTabs from "@/modules/universities-tabs/gallery";
import FacultyList from "@/modules/universities-tabs/faculty-list";
import UniversitiesNews from "@/modules/universities-tabs/universities-news";
import Ranking from "@/modules/universities-tabs/ranking";

import {
  halfGetUniNewsQuery,
  halfGetUniQuery,
} from "@/app/data/quries/uni-query";

import MockComponent from "@/modules/mock-component";
import { CourseListUniversity } from "@/modules/course-list-uni-page";
<<<<<<< HEAD
import RankingUniversityPage from "@/modules/ranking-university-page";
=======
import TableOfConten from "@/modules/universities-tabs/tableOf-conten";
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("universities", params.slug);
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";
  const { seo } = data.data[0];
  return {
    title:
      seo?.metaTitle || "Colleges with the Best Campus Life | Only Education",
    description:
      seo?.metaDescription ||
      "Learn how to choose the right college with Education's comprehensive guide",
    openGraph: {
      images: [
        {
          url: seo?.metaImage?.url
            ? baseUrl + seo.metaImage.url
            : "https://admin.onlyeducation.co.in/uploads/only_education_f_logo_2_b4d4bc1c95.png",
        },
      ],
    },
  };
}

export type CourseDataResponse = {
  data: College[];
  meta: Meta;
};

const StudyUniversity = async ({ params }: { params: { slug: string } }) => {
  const getUniQuery = `/api/universities?filters[slug][$eq]=${params.slug}${halfGetUniQuery}`;
  const getUniNewsQuery = `/api/news?filters[relatedUniversities][slug][$eq]=${params.slug}${halfGetUniNewsQuery}`;
  const getCourseQuery = `/api/universities?filters[slug]=${params.slug}&populate[collegeCourseManager][populate][spzm][populate][specialization][populate]=true&populate[collegeCourseManager][populate][course][populate]=true&populate[collegeCourseManager][populate][spzm][populate][entrance_exam][populate]=true`;

  // const uniHeader="/api/universities?populate[overviewTabs][populate][latestUpdates][fields][0]=header&populate[overviewTabs][populate][overview][fields][0]=header&populate[overviewTabs][populate][highlights][fields][0]=header&populate[overviewTabs][populate][ranking][fields][0]=header&populate[overviewTabs][populate][whyChoose][fields][0]=header&populate[overviewTabs][populate][academicAdvantages][fields][0]=header"
  // const header = await getStrapiData(uniHeader);

  const data = await getStrapiData(getUniQuery);

  const newsData = await getStrapiData(getUniNewsQuery);
  const courseData: CourseDataResponse = await getStrapiData(getCourseQuery);

  const {
    universityProfile,
    cta,
    faq,
    universityInfo,
    overviewTabs,
    coursesFees,
    admission,
    placements,
    gallery,
    faculty,
    hostel,
    scholarships,
    ranking,
    rankingStreams
  } = data.data[0];
console.log(rankingStreams)
  const backgroundImage = data.data[0].universityProfile.backgroundImage.url;
  const profileImage: ImageAttributes =
    data.data[0].universityProfile.profileImage;

  const title = data.data[0].title;
  const id = data.data[0].id;

  const recentlyViewedData = {
    slug: params.slug,
    image: profileImage.formats.thumbnail.url,
    title: title,
  };


  return (
    <div className="">
      <MockComponent data={recentlyViewedData} />

      <GlobalProfileLayout
        profileImage={profileImage.url}
        backgroundImage={backgroundImage}
        data={universityProfile}
        universityInfo={universityInfo}
      />
      <Tabs defaultValue="overview">
        <TabsList className="sm:w-full justify-start sm:justify-center w-screen overflow-x-scroll md:overflow-hidden sticky top-16 sm:top-[4.5rem] z-20">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses&fees" id="courses&fees">
            Courses & Fees
          </TabsTrigger>
          <TabsTrigger value="admission" id="admission">
            Admission
          </TabsTrigger>
          <TabsTrigger value="placement" id="placement">
            Placement
          </TabsTrigger>
          <TabsTrigger value="scholarships" id="scholarships">
            Scholarships
          </TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="hostel">Hostel</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="ranking">Ranking</TabsTrigger>
        </TabsList>

        <TabsContent
<<<<<<< HEAD
          className=" bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className=" bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto "
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="overview"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {overviewTabs?.latestUpdates && (
              <GlobalUniversitiesTabs data={overviewTabs.latestUpdates} />
            )}
<<<<<<< HEAD
            {courseData && <CourseListUniversity data={courseData} />}
            <QuestionDropdown data={faq} />
            <CallToAction id={id} data={cta} title={title} />
=======
            <TableOfConten data={overviewTabs} />

>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0  rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="courses&fees"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {coursesFees?.feeDetails && (
              <GlobalUniversitiesTabs data={coursesFees.feeDetails} />
            )}
            <TableOfConten data={coursesFees} />

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
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="admission"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            {admission?.courseAdmission && (
              <GlobalUniversitiesTabs data={admission.courseAdmission} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {admission?.eventsInfo && (
              <GlobalUniversitiesTabs data={admission.eventsInfo} />
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="placement"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="gallery"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="faculty"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="hostel"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="news"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
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
<<<<<<< HEAD
          className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
=======
          className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
>>>>>>> 237f7d3f8b6f8bf3e0253cc2706aeaedae6c591b
          value="ranking"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8">
            <RankingUniversityPage slug={params.slug} />
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
      </Tabs>
    </div>
  );
};

export default StudyUniversity;
