import Hero from "@/modules/hero/index";
import OurServices from "@/modules/services";
import WhyUs from "@/modules/why-us";
import NewsLetter from "@/modules/newsletter";
import { getStrapiData } from "@/utils/utils";
import InformationSlider from "@/modules/sliders/slider-one";

import UniversitiesRail from "@/modules/sliders/slider-two";
import LeadingEducationPortal from "@/modules/leading-education-portal";
import SchedulesSection from "@/modules/schedules-section";

const HeroQuery =
  "/api/landing-page?populate[hero][populate][header][populate]=true";
const ServicesQuery =
  "/api/landing-page?populate[services][populate][header][populate]=true&populate[services][populate][ourServiceInfo][populate]=true";
const WhyUsQuery =
  "/api/landing-page?populate[whyOnlyEducation][populate][header][populate]=true&populate[whyOnlyEducation][populate][qna][populate]=true";
const NewsQuery =
  "/api/landing-page?populate[news][populate]=true&populate[news][populate][2]=image";
const ArticlesQuery =
  "/api/landing-page?populate[articles][populate]=true&populate[articles][populate][2]=image";
const TopUniversitiesQuery =
  "/api/landing-page?populate[topUniversities][populate][header][populate]=true&populate[topUniversities][populate][universities][populate]=true&populate[topUniversities][populate][universities][populate][0]=universityProfile.backgroundImage&populate[topUniversities][populate][universities][populate][1]=universityProfile.profileImage";
const BannerImageQuery =
  "/api/landing-page?populate[bannerImage][populate]=true";

  const streamQuery="/api/streams?populate[universities][fields][1]=title&populate=streamIcon"
export default async function Home() {


  const [
    heroData,
    servicesData,
    whyUsData,
    newsData,
    articlesData,
    topUniversitiesData,
    bannerImageData,
  ] = await Promise.all([
    getStrapiData(HeroQuery),
    getStrapiData(ServicesQuery),
    getStrapiData(WhyUsQuery),
    getStrapiData(NewsQuery),
    getStrapiData(ArticlesQuery),
    getStrapiData(TopUniversitiesQuery),
    getStrapiData(BannerImageQuery),
  ]);
  const stream= await getStrapiData(streamQuery)
  const streams=stream.data
  

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="w-full overflow-hidden">
          <div className="relative">
            <Hero
              data={heroData.hero}
              bannerImage={bannerImageData.bannerImage}
            />
            <div className="z-[9999]">
            </div>
            <InformationSlider data={newsData.news} href="news" />
            <LeadingEducationPortal />
            <UniversitiesRail data={topUniversitiesData.topUniversities} />
            <SchedulesSection data={streams}/>
            <OurServices data={servicesData.services} />
            <InformationSlider href="articles" data={articlesData.articles} />
            <WhyUs data={whyUsData.whyOnlyEducation} />
            <NewsLetter />
           
          </div>
        </div>
      </div>
    </div>
  );
}

