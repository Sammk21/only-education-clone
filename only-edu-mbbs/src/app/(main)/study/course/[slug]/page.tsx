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
//   const data: MetaProps = await getMetaData("top-courses", params.slug);
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
  const getUniQuery = `/api/courses?populate[overviewTabs][populate][latestUpdate][populate]=true&populate[overviewTabs][populate][overview][populate]=true&populate[overviewTabs][populate][highlights][populate]=true&populate[overviewTabs][populate][aboutCourse][populate]=true&populate[overviewTabs][populate][eligibilityCriteria][populate]=true&populate[overviewTabs][populate][whyChoose][populate]=true&populate[overviewTabs][populate][admissionProcess][populate]=true&populate[overviewTabs][populate][entranceExams][populate]=true&populate[overviewTabs][populate][Cutoff][populate]=true`;
  const data = await getStrapiData(getUniQuery);

  const entry = data.data.find((item:any) => item.slug === params.slug);

  if (!entry) {
    return <div>No data available for this slug</div>; // Handle case where no data is returned for the slug
  }

  const { cta, overviewTabs, admissionProcess, salary, title, id } = entry;

  // const title = data.data[0].title;
  // const id = data.data[0].id;


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
          <TabsTrigger value="syllabus">Syllabus and Subjects</TabsTrigger>
          <TabsTrigger value="admission">Admission</TabsTrigger>
        </TabsList>
        <div className="grid grid-cols-12 bg-orange-50 px-0 lg:px-3 relative">
 
  <div className="col-span-2 py-6 hidden lg:block sticky top-0">
    <nav className="toc-nav-list text-sm border rounded-sm bg-white">
      <div className="pr-1 pl-2 py-2 my-2 font-medium text-black/60 hover:text-orange-500 cursor-pointer">
        <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">01</span>
        <span className="inline-block text-md font-semibold self-center">NEET Application Form Dates</span>
      </div>
      <div className="pr-1 pl-2 py-2 my-2 font-medium flex text-black/60 hover:text-orange-500 cursor-pointer">
        <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">02</span>
        <span className="inline-block text-md font-semibold self-center">Documents Required for NEET</span>
      </div>
      <div className="pr-1 pl-2 py-2 my-2 font-medium flex text-black/60 hover:text-orange-500 cursor-pointer">
        <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">03</span>
        <span className="inline-block text-md font-semibold self-center">NEET Registration Process</span>
      </div>
      <div className="pr-1 pl-2 py-2 my-2 font-medium flex text-black/60 hover:text-orange-500 cursor-pointer">
        <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">04</span>
        <span className="inline-block text-md font-semibold self-center">NEET Application Fees</span>
      </div>
      <div className="pr-1 pl-2 py-2 my-2 font-medium flex text-black/60 hover:text-orange-500 cursor-pointer">
        <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">05</span>
        <span className="inline-block text-md font-semibold self-center">NEET Application Form Correction</span>
      </div>
      <div className="pr-1 pl-2 py-2 my-2 font-medium flex text-black/60 hover:text-orange-500 cursor-pointer">
        <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">06</span>
        <span className="inline-block text-md font-semibold self-center">NEET Registration Statistics</span>
      </div>
      <div className="pr-1 pl-2 py-2 my-2 font-medium flex text-black/60 hover:text-orange-500 cursor-pointer">
        <span className="pt-2 px-2 font-semibold text-md rounded-full mr-2 border">07</span>
        <span className="inline-block text-md font-semibold self-center">Frequently Asked Questions</span>
      </div>
    </nav>
  </div>

  <div className="lg:col-span-8 col-span-12">
    <TabsContent className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid  lg:px-10 sm:px-6 px-px xl:px-16 mx-auto" value="overview">
      <div className="mt-3 px-1 sm:px-3 lg:col-span-8 col-span-12">
        {overviewTabs?.highlights && <GlobalUniversitiesTabs data={overviewTabs.highlights} />}
        {overviewTabs?.aboutCourse && <GlobalUniversitiesTabs data={overviewTabs.aboutCourse} />}
        {overviewTabs?.eligibilityCriteria && <GlobalUniversitiesTabs data={overviewTabs.eligibilityCriteria} />}
        {overviewTabs?.whyChoose && <GlobalUniversitiesTabs data={overviewTabs.whyChoose} />}
        {overviewTabs?.admissionProcess && <GlobalUniversitiesTabs data={overviewTabs.admissionProcess} />}
        {overviewTabs?.entranceExams && <GlobalUniversitiesTabs data={overviewTabs.entranceExams} />}
        {overviewTabs?.Cutoff && <GlobalUniversitiesTabs data={overviewTabs.Cutoff} />}
       
      </div>
     
    </TabsContent>
    

    <TabsContent className="bg-orange-50 mt-0 rounded-t-xl py-6 flex-col lg:grid lg:px-10 sm:px-6 px-px xl:px-16 mx-auto" value="salary">
      <div className="mt-3 px-1 sm:px-3 col-span-8">
        {overviewTabs?.highlights && <GlobalUniversitiesTabs data={overviewTabs.highlights} />}
        {overviewTabs?.aboutCourse && <GlobalUniversitiesTabs data={overviewTabs.aboutCourse} />}
        {overviewTabs?.eligibilityCriteria && <GlobalUniversitiesTabs data={overviewTabs.eligibilityCriteria} />}
        {overviewTabs?.whyChoose && <GlobalUniversitiesTabs data={overviewTabs.whyChoose} />}
        {overviewTabs?.admissionProcess && <GlobalUniversitiesTabs data={overviewTabs.admissionProcess} />}
        {overviewTabs?.entranceExams && <GlobalUniversitiesTabs data={overviewTabs.entranceExams} />}
        {overviewTabs?.Cutoff && <GlobalUniversitiesTabs data={overviewTabs.Cutoff} />}
       
      </div>
    
    </TabsContent>
  </div>


  <div className="col-span-2 hidden lg:block py-6">
  hello
  </div>
</div>

      </Tabs>
    </div>
  );
};

export default StudyUniversity;
