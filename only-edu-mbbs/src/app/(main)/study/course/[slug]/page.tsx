import GlobalProfileLayout from "@/modules/global-profile-layout";
import QuestionDropdown from "@/modules/questions-dropdown";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "@/modules/footer/call-to-action";
import { MetaProps } from "@/types/types";
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("top-courses", params.slug);
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

const StudyUniversity = async ({ params }: { params: { slug: string } }) => {
  const getUniQuery = `/api/top-courses?populate[overviewTabs][populate][overview][populate]=true&populate[overviewTabs][populate][latestupdates][populate]=true&populate[overviewTabs][populate][highlights][populate]=true&populate[overviewTabs][populate][entranceExams][populate]=true&populate[overviewTabs][populate][whyChoose][populate]=true&populate[salary][populate][averageSalary][populate]=true&populate[admissionProcess][populate][admissionProcess][populate]=true&populate[cta][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true`;

  const data = await getStrapiData(getUniQuery);

  const { cta, faq, overviewTabs, admissionProcess, salary } = data.data[0];

  const title = data.data[0].title;
  const id = data.data[0].id;

  return (
    <div className="mb-16">
      <div className="px-2 my-8 items-center sm:px-16  ">
        <h2 className="text-2xl font-bold dark:text-light text-dark ">
          {title}
        </h2>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="sm:w-full justify-start sm:justify-center w-screen overflow-x-scroll md:overflow-hidden sticky top-16 sm:top-[4.5rem] z-20">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="salary">Salary</TabsTrigger>
          <TabsTrigger value="admission">Admission</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="overview"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {overviewTabs?.overview && (
              <GlobalUniversitiesTabs data={overviewTabs.overview} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {overviewTabs?.latestupdates && (
              <GlobalUniversitiesTabs data={overviewTabs.latestupdates} />
            )}

            {overviewTabs?.highlights && (
              <GlobalUniversitiesTabs data={overviewTabs.highlights} />
            )}
            {overviewTabs?.entranceExams && (
              <GlobalUniversitiesTabs data={overviewTabs.entranceExams} />
            )}
            <CallToAction id={id} data={cta} title={title} />

            {overviewTabs?.whyChoose && (
              <GlobalUniversitiesTabs data={overviewTabs.whyChoose} />
            )}

            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="salary"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {salary?.averageSalary && (
              <GlobalUniversitiesTabs data={salary.averageSalary} />
            )}

            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>
        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="admission"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {admissionProcess?.admissionProcess && (
              <GlobalUniversitiesTabs
                data={admissionProcess.admissionProcess}
              />
            )}
            <CallToAction id={id} data={cta} title={title} />

            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyUniversity;
