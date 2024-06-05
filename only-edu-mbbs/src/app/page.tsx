import Hero from "@/modules/hero";
import ExperienceRail from "@/modules/experience-rail/index";
import TopUniRail from "@/modules/top-uni-rail";
import OurServices from "@/modules/services";
import WhyUs from "@/modules/why-us";
import NewsLetter from "@/modules/newsletter";
import { getStrapiData } from "@/utils/utils";

const HomePageQuery =
  "/api/landing-page?populate[hero][populate][header][populate]=true&populate[experienceRail][populate][expBlock]=true";

export default async function Home() {
  const data = await getStrapiData(HomePageQuery);

  return (
    <div className="pt-28 w-full overflow-hidden">
      <div className="relative">
        <div className="rounded-t-3xl ">
          <Hero data={data.hero} />
          <ExperienceRail data={data.experienceRail} />
          <TopUniRail />
        </div>
        <OurServices />
        <WhyUs />
        <NewsLetter />
      </div>
    </div>
  );
}
