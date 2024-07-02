import React from "react";
import { FaPassport, FaPenNib } from "react-icons/fa";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { BsFillEnvelopePaperFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaTicket } from "react-icons/fa6";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Title from "../common/title";

const AdmissionProcessFlow = () => {
  return (
    <Card className="mt-6">
      <CardContent>
        <CardHeader>
          <Title>Admission process</Title>
        </CardHeader>
        <div className="flex w-full justify-center">
          <div className="grid gap-x-16 items-center justify-center xl:grid-cols-3  gap-y-16 relative  font-medium">
            <div className=" border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] flex justify-start items-center px-8  text-xlr">
              <p className="text-dark dark:text-light">1.Registration</p>
              <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                <FaPenNib className="text-light text-4xl" />
              </div>
            </div>
            <div className=" border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] flex justify-start items-center px-8  text-xlr">
              <p className="text-dark dark:text-light">2.Admission</p>
              <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                <BsFileEarmarkPersonFill className="text-light text-4xl" />
              </div>
            </div>
            <div className=" border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] flex justify-start items-center px-8  text-xlr">
              <p className="text-dark dark:text-light">3.Admission letter</p>
              <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                <BsFillEnvelopePaperFill className="text-light text-4xl" />
              </div>
            </div>
            <div className=" hidden xl:flex border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px]  justify-start items-center px-8  text-xlr">
              <p className="text-dark dark:text-light">6.Departure</p>
              <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                <FaTicket className="text-light text-4xl" />
              </div>
            </div>
            <div className=" hidden xl:flex border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] justify-start items-center px-8  text-xlr">
              <p className="text-dark dark:text-light">5.Visa</p>
              <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                <FaPassport className="text-light text-4xl" />
              </div>
            </div>
            <div className=" hidden xl:flex border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] justify-start items-center px-8  text-xlr">
              <p className="text-dark dark:text-light">4.Documentation</p>
              <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                <IoNewspaperSharp className="text-light text-4xl" />
              </div>
            </div>
            <div className="flex gap-y-16 flex-col-reverse xl:hidden ">
              <div className=" border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] flex justify-start items-center px-8  text-xlr">
                <p className="text-dark dark:text-light">6.Departure</p>
                <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                  <FaTicket className="text-light text-4xl" />
                </div>
              </div>
              <div className=" border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] flex justify-start items-center px-8  text-xlr">
                <p className="text-dark dark:text-light">5.Visa</p>
                <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                  <FaPassport className="text-light text-4xl" />
                </div>
              </div>
              <div className=" border relative dark:border-border aspect-auto rounded-3xl bg-accent dark:bg-foreground h-[70px] w-[250px] flex justify-start items-center px-8  text-xlr">
                <p className="text-dark dark:text-light">4.Documentation</p>
                <div className="h-24 w-24 bg-foreground absolute -right-6 top-1/2 -translate-y-1/2 rounded-full border-borderLight border flex justify-center items-center">
                  <IoNewspaperSharp className="text-light text-4xl" />
                </div>
              </div>
            </div>
            <span className="w-[80%] hidden xl:block border border-black dark:border-light absolute top-9 -translate-y-1/4 md:left-20 left-9 -z-10"></span>
            <span className="h-24 hidden xl:block border-black dark:border-light  -translate-y-full border absolute md:rotate-60   lg:top-[70%] md:top-[65%]  md:right-[48%] lg:right-12 xl:right-6 -z-10"></span>
            <span className="w-[80%] hidden xl:block border border-black dark:border-light absolute bottom-8  md:left-24 lg:left-9  -z-10"></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdmissionProcessFlow;
