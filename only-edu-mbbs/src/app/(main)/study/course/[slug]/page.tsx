import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "@/modules/footer/call-to-action";
import { MetaProps, streams } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";

import GlobalUniversitiesTabs from "@/modules/universities-tabs/global-universities-tabs";
import GalleryTabs from "@/modules/universities-tabs/gallery";
import FacultyList from "@/modules/universities-tabs/faculty-list";
import Ranking from "@/modules/universities-tabs/ranking";

import {
  halfGetUniNewsQuery,
  halfGetUniQuery,
} from "@/app/data/quries/uni-query";

import MockComponent from "@/modules/mock-component";
import { ImageExtended } from "@/modules/common/extended-image/extended-image";
import TableOfConten from "@/modules/universities-tabs/tableOf-conten";
import Link from "next/link";
import DataNotFound from "@/modules/data-not-found/DataNotFound";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("courses", params.slug);
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";
  if (!data.data[0]) return {};
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

const StudyUniversity = async ({ params }: { params: { slug: string } }) => {
  const getUniQuery =
    "/api/courses?populate[stream][populate]=true&populate[overviewTabs][populate][latestupdates][populate]=true&populate[overviewTabs][populate][overview][populate]=true&populate[overviewTabs][populate][highlights][populate]=true&populate[overviewTabs][populate][aboutCourse][populate]=true&populate[overviewTabs][populate][eligibilityCriteria][populate]=true&populate[overviewTabs][populate][whyChoose][populate]=true&populate[overviewTabs][populate][whyChoose][populate]=true&populate[overviewTabs][populate][admissionProcess][populate]=true&populate[overviewTabs][populate][Cutoff][populate]=true&populate[syllabus_subject][populate][subjects][populate]=true&populate[jobs][populate][jobOpportunities][populate]=true&populate[cta][fields][0]=title&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true";

  const data = await getStrapiData(getUniQuery);

  const entry = data.data.find((item: any) => item.slug === params.slug);

  if (!entry) {
    return <DataNotFound />; // Handle case where no data is returned for the slug
  }

  const { cta, overviewTabs, syllabus_subject, jobs, title, id, faq, stream } =
    entry;

  return (
    <div className="">
      <div className="px-2 my-8 items-center sm:px-16  ">
        <h2 className="text-2xl font-bold dark:text-light text-dark ">
          {title} : Course Details, Admission, Fees, Eligibility, Syllabus, Jobs
          & Salary
        </h2>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="sm:w-full justify-start sm:justify-center w-screen overflow-x-scroll md:overflow-hidden sticky top-16 sm:top-[4.5rem] z-20">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="syllabus">Syllabus and Subjects</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <Link href={`/universities-list/${stream?.slug}`} prefetch={true}>
            <TabsTrigger value="participate">Participate Colleges</TabsTrigger>
          </Link>
        </TabsList>
        <div className="grid grid-cols-12 bg-orange-50 px-0 lg:px-3 relative">
          <div className="lg:col-span-8 col-span-12">
            <TabsContent
              className="bg-orange-50 mt-0 rounded-t-xl flex-col lg:grid  lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
              value="overview"
            >
              <div className="mt-3 px-1 sm:px-3 lg:col-span-8 col-span-12">
                {overviewTabs?.latestupdates && (
                  <GlobalUniversitiesTabs data={overviewTabs.latestupdates} />
                )}
                {overviewTabs?.overview && (
                  <GlobalUniversitiesTabs data={overviewTabs.overview} />
                )}
                <TableOfConten data={overviewTabs} />
                {overviewTabs?.highlights && (
                  <GlobalUniversitiesTabs data={overviewTabs.highlights} />
                )}
                {overviewTabs?.aboutCourse && (
                  <GlobalUniversitiesTabs data={overviewTabs.aboutCourse} />
                )}
                {overviewTabs?.eligibilityCriteria && (
                  <GlobalUniversitiesTabs
                    data={overviewTabs.eligibilityCriteria}
                  />
                )}
                {overviewTabs?.whyChoose && (
                  <GlobalUniversitiesTabs data={overviewTabs.whyChoose} />
                )}
                {overviewTabs?.admissionProcess && (
                  <GlobalUniversitiesTabs
                    data={overviewTabs.admissionProcess}
                  />
                )}
                {overviewTabs?.Cutoff && (
                  <GlobalUniversitiesTabs data={overviewTabs.Cutoff} />
                )}
                <QuestionDropdown data={faq} />
              </div>
            </TabsContent>

            <TabsContent
              className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
              value="syllabus"
            >
              <div className="mt-3 px-1 sm:px-3 col-span-8">
                {syllabus_subject?.subjects && (
                  <GlobalUniversitiesTabs data={syllabus_subject.subjects} />
                )}

                <QuestionDropdown data={faq} />
              </div>
            </TabsContent>

            <TabsContent
              className="bg-orange-50 mt-0 rounded-t-xl  flex-col lg:grid lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
              value="jobs"
            >
              <div className="mt-3 px-1 sm:px-3 col-span-8">
                {jobs?.jobOpportunities && (
                  <GlobalUniversitiesTabs data={jobs.jobOpportunities} />
                )}

                <QuestionDropdown data={faq} />
              </div>
            </TabsContent>
          </div>

          <div className="col-span-4 hidden lg:block py-6">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default StudyUniversity;
