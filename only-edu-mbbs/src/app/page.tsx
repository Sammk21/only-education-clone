import Hero from "@/modules/hero";
import ExperienceRail from "@/modules/experience-rail/index";
import TopUniRail from "@/modules/top-uni-rail";
import OurServices from "@/modules/services";
import WhyUs from "@/modules/why-us";
import NewsLetter from "@/modules/newsletter";
import { getStrapiData } from "@/utils/utils";
import ArticleRail from "@/modules/article-rail";
import NotificationRail from "@/modules/notification-rail";

const HomePageQuery =
  "/api/landing-page?populate[hero][populate][header][populate]=true&populate[experienceRail][populate][expBlock]=true&populate[services][populate][header][populate]=true&populate[services][populate][ourServiceInfo][populate]=true&populate[whyOnlyEducation][populate][header][populate]=true&populate[whyOnlyEducation][populate][qna][populate]=true?populate[topUniversities][populate][header][populate]=true&populate[topUniversities][populate][universities][populate]=true&populate[topUniversities][populate][universities][populate][0]=universityProfile.backgroundImage&populate[articles][populate]=true&populate[articles][populate][2]=image&populate[news][populate]=true&populate[news][populate][2]=image";

export default async function Home() {
  const data = await getStrapiData(HomePageQuery);


  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="rounded-t-3xl relative">
          <Hero data={data.hero} />
          <NotificationRail data={data.news} />
          <ExperienceRail data={data.experienceRail} />
          <TopUniRail data={data.topUniversities} />
          {/* <CircleFilled className="absolute lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[400px]  sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] top-56 -right-[20%] opacity-25  -z-10" />
          <CircleFilled className="absolute lg:w-[800px] lg:h-[800px] md:w-[600px] md:h-[600px]  sm:w-[400px] sm:h-[400px] w-[300px] h-[300px]  top-0 -left-[20%] opacity-35  -z-10" /> */}
        </div>
        <OurServices data={data.services} />
        <ArticleRail data={data.articles} />
        <WhyUs data={data.whyOnlyEducation} />
        <NewsLetter />
        <CircleFilled className="absolute lg:w-[900px] lg:h-[900px] md:w-[700px] md:h-[700px]  sm:w-[600px] sm:h-[600px] w-[450px] h-[450px] top-3/4 -left-[20%] opacity-50  -z-10" />
      </div>
    </div>
  );
}

interface Props {
  className: string;
}

export const CircleOutline = ({ className }: Props) => {
  return (
    <>
      <svg
        className={`${className}`}
        viewBox="0 0 3400 3400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1700"
          cy="1700"
          r="1696"
          transform="rotate(-90 1700 1700)"
          stroke="#000000"
          stroke-width="8"
        />
      </svg>
    </>
  );
};

export const CircleFilled = ({ className }: Props) => {
  return (
    <>
      <svg
        className={className}
        viewBox="0 0 164 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <g clip-path="url(#clip0_1_23)">
            <rect width="164" height="168" rx="82" fill="#F9B2E0" />
            <g filter="url(#filter0_f_1_23)">
              <ellipse cx="78.5" cy="73" rx="85.5" ry="86" fill="#C3B3D9" />
            </g>
            <g opacity="0.7" filter="url(#filter1_f_1_23)">
              <circle cx="66" cy="52" r="49" fill="#E7F7FE" />
            </g>
            <g filter="url(#filter2_f_1_23)">
              <ellipse
                cx="23.3175"
                cy="14.267"
                rx="23.3175"
                ry="14.267"
                transform="matrix(0.981129 -0.193352 0.191759 0.981442 69.7 135.841)"
                fill="#F4DACB"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1_23"
            x="-67"
            y="-73"
            width="291"
            height="292"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="30"
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
          <filter
            id="filter1_f_1_23"
            x="-33"
            y="-47"
            width="198"
            height="198"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="25"
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
          <filter
            id="filter2_f_1_23"
            x="42.2706"
            y="100.62"
            width="106.085"
            height="89.4282"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="15"
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
          <clipPath id="clip0_1_23">
            <rect width="164" height="168" rx="82" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
