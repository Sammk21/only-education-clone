import QuestionDropdown from "@/modules/questions-dropdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "@/modules/footer/call-to-action";
import { MetaProps } from "@/types/types";
import { getMetaData, getStrapiData } from "@/utils/utils";
import { Metadata } from "next";
import GlobalUniversitiesTabs from "@/modules/universities-tabs/global-universities-tabs";
import { ImageExtended } from "@/modules/common/extended-image/extended-image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: MetaProps = await getMetaData("entrance-exams", params.slug);
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
        <div className="grid grid-cols-12 bg-orange-50 px-3">
          <div className="col-span-2">
            <nav className=" toc-nav-list text-sm border rounded-sm bg-white">
              <div className=" pr-1 pl-2 py-2 my-2 font-medium  text-black/60  hover:text-orange-500 cursor-pointer">
                <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">
                  01
                </span>
                <span className="inline-block text-md font-semibold self-center">
                  NEET Application Form Dates
                </span>
              </div>
              <div className="pr-1 pl-2 py-2 my-2 font-medium flex  text-black/60 hover:text-orange-500 cursor-pointer">
                <span className="  pt-2 px-2 font-weight-semi text-md rounded-full mr-2 border">
                  02
                </span>
                <span className="inline-block text-md font-semibold self-center">
                  Documents Required for NEET
                </span>
              </div>
              <div className="pr-1 pl-2 py-2 my-2 font-medium flex  text-black/60 hover:text-orange-500 cursor-pointer">
                <span className="  pt-2 px-2 font-weight-semi text-md rounded-full mr-2 border">
                  03
                </span>
                <span className="inline-block text-md font-semibold self-center">
                  NEET Registration Process
                </span>
              </div>
              <div className="pr-1 pl-2 py-2 my-2 font-medium flex  text-black/60 hover:text-orange-500 cursor-pointer">
                <span className="  pt-2 px-2 font-weight-semi text-md rounded-full mr-2 border">
                  04
                </span>
                <span className="inline-block text-md font-semibold self-center">
                  NEET Application Fees
                </span>
              </div>
              <div className="pr-1 pl-2 py-2 my-2 font-medium flex  text-black/60 hover:text-orange-500 cursor-pointer">
                <span className="  pt-2 px-2 font-weight-semi text-md rounded-full mr-2 border">
                  05
                </span>
                <span className="inline-block text-md font-semibold self-center">
                  NEET Application Form Correction
                </span>
              </div>
              <div className="pr-1 pl-2 py-2 my-2 font-medium flex  text-black/60 hover:text-orange-500 cursor-pointer">
                <span className="  pt-2 px-2 font-weight-semi text-md rounded-full mr-2 border">
                  06
                </span>
                <span className="inline-block text-md font-semibold self-center">
                  NEET Registration Statistics
                </span>
              </div>
              <div className="pr-1 pl-2 py-2 my-2 font-medium flex  text-black/60 hover:text-orange-500 cursor-pointer">
                <span className="  pt-2 px-2 font-weight-semi text-md rounded-full mr-2 border">
                  07
                </span>
                <span className="inline-block text-md font-semibold self-center">
                  Frequently Asked Questions
                </span>
              </div>
            </nav>
          </div>
          <div className="col-span-8">
            <TabsContent
              className="  mt-0 rounded-t-xl py-6 flex-col  lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
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
                  <GlobalUniversitiesTabs
                    data={overviewTabs.eligibilitycriteria}
                  />
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
            </TabsContent>
            <TabsContent
              className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
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
            </TabsContent>
            <TabsContent
              className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col  lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
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
            </TabsContent>
            <TabsContent
              className=" bg-orange-50 mt-0 rounded-t-xl py-6 flex-col  lg:px-10 sm:px-6 px-px xl:px-16 mx-auto"
              value="previousPapers"
            >
              <div className="mt-3 px-1 sm:px-3 col-span-8 ">
                {previousPapers?.previousPapers && (
                  <GlobalUniversitiesTabs
                    data={previousPapers.previousPapers}
                  />
                )}

                <QuestionDropdown data={faq} />
              </div>
            </TabsContent>
          </div>
          <div className="col-span-2">hello</div>
        </div>
      </Tabs>
    </div>
  );
};

export default StudyUniversity;
