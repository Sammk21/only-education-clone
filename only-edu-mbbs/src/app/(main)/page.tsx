import Hero from "@/modules/hero/index";
import OurServices from "@/modules/services";
import WhyUs from "@/modules/why-us";
import NewsLetter from "@/modules/newsletter";
import { getStrapiData } from "@/utils/utils";
import InformationSlider from "@/modules/sliders/slider-one";

import UniversitiesRail from "@/modules/sliders/slider-two";
import LeadingEducationPortal from "@/modules/leading-education-portal";
import SchedulesSection from "@/modules/schedules-section";
import ExploreArticles from "@/modules/explore-articles";
import CitySlider from "@/modules/sliders/city-slider";
import { Separator } from "@radix-ui/react-dropdown-menu";
import InfoButton from "@/modules/info-button/info-button";
import ExamsSlider from "@/modules/sliders/exams-slidre";

const HeroQuery =
  "/api/landing-page?populate[hero][populate][header][populate]=true";
const ServicesQuery =
  "/api/landing-page?populate[services][populate][header][populate]=true&populate[services][populate][ourServiceInfo][populate]=true";
const WhyUsQuery =
  "/api/landing-page?populate[whyOnlyEducation][populate][header][populate]=true&populate[whyOnlyEducation][populate][qna][populate]=true";

const NewsQuery =
  "/api/landing-page?populate[news][fields][0]=title&populate[news][fields][1]=slug&populate[news][fields][2]=live&populate[news][fields][3]=description&populate[news][populate][image][fields][0]=url&populate[news][populate][image][fields][1]=formats&populate[news][populate][image][fields][2]=blurhash&populate[news][populate][image][fields][3]=alternativeText";

const ArticlesQuery =
  "/api/landing-page?populate[articles][fields][0]=title&populate[articles][fields][1]=slug&populate[articles][fields][2]=createdAt&populate[articles][fields][3]=description&populate[articles][fields][4]=createdBy&populate[articles][populate][image][fields][0]=url&populate[articles][populate][image][fields][1]=blurhash&populate[articles][populate][image][fields][2]=alternativeText&populate[articles][populate][image][fields][3]=formats";
const TopUniversitiesQuery =
  "/api/landing-page?populate[topUniversities][populate][header][populate]=true&populate[topUniversities][populate][universities][fields][0]=title&populate[topUniversities][populate][universities][fields][1]=slug&populate[topUniversities][populate][universities][populate][universityProfile][fields][0]=location&populate[topUniversities][populate][universities][populate][universityProfile][fields][1]=Approvedby&populate[topUniversities][populate][universities][populate][universityProfile][populate][backgroundImage][fields][1]=url&populate[topUniversities][populate][universities][populate][universityProfile][populate][backgroundImage][fields][2]=blurhash&populate[topUniversities][populate][universities][populate][universityProfile][populate][backgroundImage][fields][3]=alternativeText&populate[topUniversities][populate][universities][populate][universityProfile][populate][backgroundImage][fields][4]=formats&populate[topUniversities][populate][universities][populate][universityProfile][populate][profileImage][fields][1]=url&populate[topUniversities][populate][universities][populate][universityProfile][populate][profileImage][fields][2]=blurhash&populate[topUniversities][populate][universities][populate][universityProfile][populate][profileImage][fields][3]=alternativeText&populate[topUniversities][populate][universities][populate][universityProfile][populate][profileImage][fields][4]=formats";

const BannerImageQuery =
  "/api/landing-page?populate[bannerImage][fields][0]=url&populate[bannerImage][fields][1]=alternativeText&populate[bannerImage][fields][2]=blurhash&populate[bannerImage][fields][3]=formats&populate[bannerImage][fields][4]=name";

const cityQuery =
  "/api/landing-page?populate[cities][fields][0]=title&populate[cities][fields][1]=slug&populate[cities][populate][streamIcon][fields][1]=url&populate[cities][populate][streamIcon][fields][2]=blurhash&populate[cities][populate][streamIcon][fields][3]=alternativeText";

const streamQuery =
  "/api/streams?populate[universities][fields][1]=title&populate=streamIcon&populate[entrance_exams]=true&populate[courses]=true";

const courseQuery =
  "/api/landing-page?populate[courses][fields][0]=title&populate[courses][fields][1]=slug";

const examsQuery =
  "/api/landing-page?populate[entrance_exams][fields][0]=title&populate[entrance_exams][fields][1]=slug&populate[entrance_exams][populate][searchableImage][fields][0]=url&populate[entrance_exams][populate][searchableImage][fields][1]=alternativeText&populate[entrance_exams][populate][searchableImage][fields][2]=blurhash&populate[entrance_exams][populate][searchableImage][fields][3]=formats&populate[entrance_exams][populate][mode][fields][0]=title";

export default async function Home() {
  const [
    heroData,
    whyUsData,
    newsData,
    articlesData,
    topUniversitiesData,
    bannerImageData,
    streamData,
    cityData,
    courseButtonData,
    examsData,
  ] = await Promise.all([
    getStrapiData(HeroQuery),
    getStrapiData(ServicesQuery),
    getStrapiData(WhyUsQuery),
    getStrapiData(NewsQuery),
    getStrapiData(ArticlesQuery),
    getStrapiData(TopUniversitiesQuery),
    getStrapiData(BannerImageQuery),
    getStrapiData(streamQuery),
    getStrapiData(cityQuery),
    getStrapiData(courseQuery),
    getStrapiData(examsQuery),
  ]);



  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="w-full overflow-hidden">
          <div className="relative">
            <Hero
              data={heroData.hero}
              bannerImage={bannerImageData.bannerImage}
            />
            <div className="z-[9999]"></div>
            <InformationSlider data={newsData.news} href="news" />
            <LeadingEducationPortal />
            <Separator aria-orientation="vertical" />
            <UniversitiesRail data={topUniversitiesData.topUniversities} />
            <SchedulesSection data={streamData.data} />
            <CitySlider data={cityData.cities.data} />
            <ExploreArticles href="articles" data={articlesData.articles} />
            <ExamsSlider data={examsData} />
            <InfoButton
              title="Admission 2024"
              data={topUniversitiesData.topUniversities.universities.data}
              href="study/uni/"
            />
            <InfoButton
              title="Top courses 2024"
              data={courseButtonData.courses.data}
              href="study/course/"
            />
            <WhyUs data={whyUsData.whyOnlyEducation} />
            <NewsLetter />
          </div>
        </div>
      </div>
    </div>
  );
}
