import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const LeadingEducationPortal = () => {
  return (
    <section className=" text-dark  py-9 border-b">
      <div className="container">
      <h3 className="capitalize font-semibold mb-4 text-dark md:text-3xl text-2xl pl-2 lg:pl-0 ">
      India's Leading Education Platform
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6 overflow-x-auto">
        <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer ">
          <Link href="/universities-list/all">
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
              <p className="text-center text-lg font-semibold">College</p>
              <p className="text-center text-sm">
                Find your dream college! Explore over 12,000+ colleges to find
                the right one for you.
              </p>
            </CardContent>
          </Link>
        </Card>
        <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer ">
          <Link href="/course-list">
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
              <p className="text-center text-lg font-semibold">COURSES</p>
              <p className="text-center text-sm">
                Apply your skills in the right place. Choose from over 500+
                trending courses across India.
              </p>
            </CardContent>
          </Link>
        </Card>
        <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer  ">
          <Link href="/universities-list/all">
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
              <p className="text-center text-lg font-semibold">ADMISSION</p>
              <p className="text-center text-sm">
                Apply your skills in the right place. Choose from over 500+
                trending courses across India.
              </p>
            </CardContent>
          </Link>
        </Card>
        <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer  ">
          <Link href="/exams-list">
            <CardContent className="flex justify-center h-full  items-center flex-col gap-y-2">
              <figure className="h-14 w-14 relative">
                <Image
                  src={"https://www.onlyeducation.in/assets/img/icon/exam.png"}
                  alt="college"
                  fill={true}
                  className="object-cover object-center"
                />
              </figure>
              <p className="text-center text-lg font-semibold">Exams</p>
              <p className="text-center text-sm">
                Search among 500+ government &amp; competitive entrance exams to
                get the right answers, notifications .
              </p>
            </CardContent>
          </Link>
        </Card>
      </div>
      </div>
    </section>
  );
};

export default LeadingEducationPortal;
