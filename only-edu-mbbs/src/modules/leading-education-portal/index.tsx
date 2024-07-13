import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const LeadingEducationPortal = () => {
  return (
    <section className="py-3 mt-6 text-dark container px-6">
      <h3 className="md:text-3xl sm:text-2xl text-xl text-center">
        India's Leading Education Portal For All Your Academic Needs
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6 ">
        <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer ">
          <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
            <figure className="h-14 w-14 relative">
              <Image
                src={"https://www.onlyeducation.in/assets/img/icon/college.png"}
                alt="college"
                fill={true}
                className="object-cover object-center"
              />
            </figure>
            <p className="text-center text-lg">College</p>
            <p className="text-center text-sm">
              Find your dream college! Explore over 12,000+ colleges to find the
              right one for you.
            </p>
          </CardContent>
        </Card>
        <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer ">
          <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
            <figure className="h-14 w-14 relative">
              <Image
                src={"https://www.onlyeducation.in/assets/img/icon/course.png"}
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
    </section>
  );
};

export default LeadingEducationPortal;
