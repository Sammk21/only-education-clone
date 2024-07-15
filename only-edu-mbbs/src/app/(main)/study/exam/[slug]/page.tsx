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

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const data: MetaProps = await getMetaData("universities", params.slug);
//   const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";
//   const { seo } = data.data[0];
//   return {
//     title:
//       seo?.metaTitle || "Colleges with the Best Campus Life | Only Education",
//     description:
//       seo?.metaDescription ||
//       "Learn how to choose the right college with Education's comprehensive guide",
//     openGraph: {
//       images: [
//         {
//           url: seo?.metaImage?.url
//             ? baseUrl + seo.metaImage.url
//             : "https://admin.onlyeducation.co.in/uploads/only_education_f_logo_2_b4d4bc1c95.png",
//         },
//       ],
//     },
//   };
// }

const StudyUniversity = async ({ params }: { params: { slug: string } }) => {
  const getUniQuery = `/api/entrance-exams?populate[overviewTabs][populate][latestupdates][populate]=true&populate[overviewTabs][populate][overview][populate]=true&populate[overviewTabs][populate][highlights][populate]=true&populate[overviewTabs][populate][eligibilitycriteria][populate]=true&populate[overviewTabs][populate][exampattern][populate]=true&populate[overviewTabs][populate][examdates][populate]=true&populate[resultsTab][populate][resultDates][populate]=true&populate[resultsTab][populate][checkResult][populate]=true&populate[cutoff][populate][categoryWise][populate]=true&populate[cutoff][populate][subjectWise][populate]=true&populate[previousPapers][populate][previousPapers][populate]=true&populate[faq][populate][fields][0]=title&populate[faq][populate][faq][populate]=true&populate[cta][populate]=true&populate[searchableImage][populate]=true`;

  const data = await getStrapiData(getUniQuery);

  const {
    cta,
    faq,
    overviewTabs,
    resultsTab,
    cutoff,
    previousPapers,
    searchableImage,
  } = data.data[0];

  const title = data.data[0].title;
  const id = data.data[0].id;
  console.dir(searchableImage);

  return (
    <div className="mb-16">
      <div className="px-2 my-8 items-center sm:px-16 grid grid-cols-12 gap-3 ">
        <div className=" col-span-2 sm:col-span-1 flex justify-end">
          <div className="h-14 relative border-2 w-14 bg-light dark:bg-dark  rounded-full overflow-hidden justify-center flex">
            <ImageExtended
              fill={true}
              className="object-center object-contain "
              src={searchableImage.url}
              alt=""
            />
          </div>
        </div>
        <h2 className="text-xl font-bold dark:text-light text-dark col-span-10 sm:col-span-11">
          {title} Previous Year Papers PDFs with Solutions - Download JEE Mains
          Question Paper PDF
        </h2>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="sm:w-full justify-start sm:justify-center w-screen overflow-x-scroll md:overflow-hidden sticky top-16 sm:top-[4.5rem] z-20">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="result">Result</TabsTrigger>
          <TabsTrigger value="cutoff">cutoff</TabsTrigger>
          <TabsTrigger value="previousPapers">
            Previous Year Question Papers
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="overview"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {overviewTabs?.latestupdates && (
              <GlobalUniversitiesTabs data={overviewTabs.latestupdates} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {overviewTabs?.overview && (
              <GlobalUniversitiesTabs data={overviewTabs.overview} />
            )}
            {overviewTabs?.highlights && (
              <GlobalUniversitiesTabs data={overviewTabs.highlights} />
            )}
            {overviewTabs?.eligibilitycriteria && (
              <GlobalUniversitiesTabs data={overviewTabs.eligibilitycriteria} />
            )}
            <CallToAction id={id} data={cta} title={title} />

            {overviewTabs?.exampattern && (
              <GlobalUniversitiesTabs data={overviewTabs.exampattern} />
            )}

            {overviewTabs?.examdates && (
              <GlobalUniversitiesTabs data={overviewTabs.examdates} />
            )}
            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="result"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {resultsTab?.resultDates && (
              <GlobalUniversitiesTabs data={resultsTab.resultDates} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {resultsTab?.checkResult && (
              <GlobalUniversitiesTabs data={resultsTab.checkResult} />
            )}

            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>
        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="cutoff"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {cutoff?.categoryWise && (
              <GlobalUniversitiesTabs data={cutoff.categoryWise} />
            )}
            <CallToAction id={id} data={cta} title={title} />
            {cutoff?.subjectWise && (
              <GlobalUniversitiesTabs data={cutoff.subjectWise} />
            )}

            <QuestionDropdown data={faq} />
          </div>
          <div className="col-span-4 mt-3 hidden md:block">
            <CallToAction id={id} data={cta} title={title} />
          </div>
        </TabsContent>

        <TabsContent
          className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid grid-cols-12 lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
          value="previousPapers"
        >
          <div className="mt-3 px-1 sm:px-3 col-span-8 ">
            {previousPapers?.previousPapers && (
              <GlobalUniversitiesTabs data={previousPapers.previousPapers} />
            )}

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
