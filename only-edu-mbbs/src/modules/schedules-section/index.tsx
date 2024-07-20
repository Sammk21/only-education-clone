


import React from "react";
import TestCards from "../test-card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageAttributes, streams } from "@/types/types.js";


interface Props{

  data:{
    universities:{
      data:{
        id:number
        title:string
        
      }[]
    };
  
    entrance_exams:{
      data:{
        id:number
        title:string
    }[]
  };
  top_courses:{
    data:{
      id:number
      title:string
    }[]
  }
  id:number
  title:string  
  streamIcon:ImageAttributes;
  slug:string
}[]

}

const SchedulesSection =  ({data}:Props) => {


const extractedData = data.map(item => ({
  universitiesLength: item.universities.data.length,
  entranceExamsLength: item.entrance_exams.data.length,
  topCoursesLength: item.top_courses.data.length,
  streamTitle:item.title,
  streamIcon:item.streamIcon,
  streamSlug:item.slug
}));









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
  {extractedData.map((item, index) => (
    <TestCards
      key={index} 
      length={item.universitiesLength} 
      context="streamsParam"
      tab="Colleges"
      href="/universities-list"
      streamTitle={item.streamTitle}
      streamIcon={item.streamIcon}
      streamSlug={item.streamSlug}
    />
  ))}
</TabsContent>



         <TabsContent
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 justify-center"
              value="exams"
            >
             {extractedData.map((item, index) => (
    <TestCards
      key={index} 
      length={item.entranceExamsLength} 
      context="streamsParam"
      tab="Exams"
      href="/exams-list"
      streamTitle={item.streamTitle}
      streamIcon={item.streamIcon}
      streamSlug={item.streamSlug}

    />
  ))}
             
            </TabsContent> 
                <TabsContent
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 justify-center"
              value="courses"
            >
               {extractedData.map((item, index) => (
    <TestCards
      key={index} 
      length={item.topCoursesLength} 
      context="streamsParam"
      tab="Courses"
      href="/course-list"
      streamTitle={item.streamTitle}
      streamIcon={item.streamIcon}
      streamSlug={item.streamSlug}

    />
  ))}
            </TabsContent> 
            
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SchedulesSection;



