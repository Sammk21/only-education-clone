import React from "react";
import TestCards from "../test-card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { streams } from "@/types/types.js";

interface Props{

  data:{
    universities:{
      data:{
        title:string
        
      }[]
    }
    title:string
    slug:string

  }[]

}

const SchedulesSection = async({data}:Props) => {
  return (
    <section className="pb-3 pt-6 mt-6 text-dark  px-6 bg-orange-50">
      <div className="container">
        <h3 className="md:text-3xl sm:text-2xl text-xl text-center">
          India's Leading Education Portal For All Your Academic Needs
        </h3>
        <Tabs defaultValue="college" className=" mt-6">
          <TabsList
            defaultValue="college"
            className="grid w-full grid-cols-3 max-w-[400px] mx-auto border-orange-100 border"
          >
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
              <TestCards data={data} context="streamsParam" tab="Colleges"/>
            </TabsContent>

            {/* <TabsContent
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
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SchedulesSection;



