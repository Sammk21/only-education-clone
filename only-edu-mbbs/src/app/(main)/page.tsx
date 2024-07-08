import Hero from "@/modules/hero/index";
import OurServices from "@/modules/services";
import WhyUs from "@/modules/why-us";
import NewsLetter from "@/modules/newsletter";
import { getStrapiData } from "@/utils/utils";
import InformationSlider from "@/modules/sliders/slider-one";
import UniversitiesRail from "@/modules/sliders/slider-two";
const HomePageQuery =
  "/api/landing-page?populate[hero][populate][header][populate]=true&populate[experienceRail][populate][expBlock]=true&populate[services][populate][header][populate]=true&populate[services][populate][ourServiceInfo][populate]=true&populate[whyOnlyEducation][populate][header][populate]=true&populate[whyOnlyEducation][populate][qna][populate]=true?populate[topUniversities][populate][header][populate]=true&populate[topUniversities][populate][universities][populate]=true&populate[topUniversities][populate][universities][populate][0]=universityProfile.backgroundImage&populate[articles][populate]=true&populate[articles][populate][2]=image&populate[news][populate]=true&populate[news][populate][2]=image";

export default async function Home() {
  const data = await getStrapiData(HomePageQuery);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="rounded-t-3xl relative">
          <Hero data={data.hero} />
          <InformationSlider data={data.news} href="news" />
          <UniversitiesRail data={data.topUniversities} />
        </div>
        <OurServices data={data.services} />
        <InformationSlider href="articles" data={data.articles} />
        <WhyUs data={data.whyOnlyEducation} />
        <NewsLetter />
      </div>
    </div>
  );
}
