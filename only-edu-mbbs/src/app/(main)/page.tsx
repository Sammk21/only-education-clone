import Hero from "@/modules/hero/index";
import OurServices from "@/modules/services";
import WhyUs from "@/modules/why-us";
import NewsLetter from "@/modules/newsletter";
import { getStrapiData } from "@/utils/utils";
import InformationSlider from "@/modules/sliders/slider-one";

import UniversitiesRail from "@/modules/sliders/slider-two";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import RecentlyViewedUniversity from "@/modules/recently-viewed-university/RecentlyViewedProduct";
import Link from "next/link";
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

  const streamQuery="/api/streams?populate[universities][fields][1]=title"
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

/*


const RecentlyViewedColleges = () => {
  "use client";
  return (
    <>
      <div className="grid grid-cols-6 gap-x-3"></div>
    </>
  );
};

>>>>>>> c22912ba678c53bb0dfb24f4d8310083176b29de
=======
>>>>>>> f08580968cddd8057868c75c0486b7ba3a8b5924
const LeadingEducationPortal = () => {
  return (
    <section className=" bg-orange-50">
      <div className=" container px-6 py-12 mt-6 text-dark ">
        <h3 className="md:text-3xl sm:text-2xl text-xl text-center">
          India's Leading Education Portal For All Your Academic Needs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6 ">
          <Link href={"/universities-list"}>
            <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer ">
              <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
                <figure className="h-14 w-14 relative">
                  <Image
                    src={
                      "https://www.onlyeducation.in/assets/img/icon/college.png"
                    }
                    alt="college"
                    fill={true}
                    className="object-cover object-center"
                  />
                </figure>
                <p className="text-center text-lg">COLLEGES</p>
                <p className="text-center text-sm">
                  Find your dream college! Explore over 12,000+ colleges to find
                  the right one for you.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer ">
            <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
              <figure className="h-14 w-14 relative">
                <Image
                  src={
                    "https://www.onlyeducation.in/assets/img/icon/course.png"
                  }
                  alt="college"
                  fill={true}
                  className="object-cover object-center"
                />
              </figure>
              <p className="text-center text-lg">COURSES</p>
              <p className="text-center text-sm">
                Apply your skills in the right place. Choose from over 500+
                trending courses across India.
              </p>
            </CardContent>
          </Card>
          <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer  ">
            <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
              <figure className="h-14 w-14 relative">
                <Image
                  src={
                    "https://www.onlyeducation.in/assets/img/icon/admission.png"
                  }
                  alt="college"
                  fill={true}
                  className="object-cover object-center"
                />
              </figure>
              <p className="text-center text-lg">ADMISSION</p>
              <p className="text-center text-sm">
                Apply your skills in the right place. Choose from over 500+
                trending courses across India.
              </p>
            </CardContent>
          </Card>
          <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer  ">
            <CardContent className="flex justify-center h-full  items-center flex-col gap-y-2">
              <figure className="h-14 w-14 relative">
                <Image
                  src={"https://www.onlyeducation.in/assets/img/icon/exam.png"}
                  alt="college"
                  fill={true}
                  className="object-cover object-center"
                />
              </figure>
              <p className="text-center text-lg">Exams</p>
              <p className="text-center text-sm">
                Search among 500+ government &amp; competitive entrance exams to
                get the right answers, notifications .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
const SchedulesSection = () => {
  return (
    <section className="pb-3 pt-6 mt-6 text-dark  px-6 bg-orange-50">
      <div className="container">
        <h3 className="md:text-3xl sm:text-2xl text-xl text-center">
          India's Leading Education Portal For All Your Academic Needs
        </h3>
        <Tabs defaultValue="college" className=" mt-6">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto border-orange-100 border">
            <TabsTrigger className="border-orange-100" value="college">
              College
            </TabsTrigger>
            <TabsTrigger className="border-orange-100" value="exams">
              Exams
            </TabsTrigger>
            <TabsTrigger className="border-orange-100" value="courses">
              Courses
            </TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 justify-center"
              value="college"
            >
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
            </TabsContent>
            <TabsContent
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 justify-center"
              value="exams"
            >
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
            </TabsContent>
            <TabsContent
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 justify-center"
              value="courses"
            >
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
              <TestCards />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

const TestCards = () => {
  return (
    <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer ">
      <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
        <figure className="h-14 w-14 relative">
          <Image
            src={"https://www.onlyeducation.in/assets/img/logo/864164102_3.png"}
            alt="college"
            fill={true}
            className="object-cover object-center"
          />
        </figure>
        <p className="text-center text-lg">Agriculture</p>
        <p className="text-center text-sm">3 colleges</p>
      </CardContent>
    </Card>
  );
};

function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h3 className="text-3xl text-center text-dark">What our client says</h3>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
*/
