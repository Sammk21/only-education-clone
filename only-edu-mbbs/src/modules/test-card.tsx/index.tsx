import { Card, CardContent } from "@/components/ui/card";
import { ImageAttributes } from "@/types/types";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { ImageExtended } from "../common/extended-image/extended-image";
interface Props{

  data:{
    universities:{
      data:{
        title:string
       
      }[]
    }
    title:string,
    id:number,
    slug:string
    streamIcon:ImageAttributes;
  }[]
context:string
tab:string

}
const TestCards = ({data,context,tab}:Props) => {
  


  return (
    <>
     {data.map((stream) => (
    <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer " key={stream.id}>
      <Link href={`/universities-list?${context}=${stream.slug}`}>
      <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
        <figure className="h-14 w-14 relative">
          <ImageExtended
            src={stream.streamIcon.url}
            alt="college"
            fill={true}
            className="object-cover object-center"
          />
        </figure>
        <p className="text-center text-lg font-semibold">{stream.title}</p>
        <p className="text-center text-sm">{stream.universities.data.length} {tab}</p>
      </CardContent>
      </Link>
    </Card>
    ))}
    </>


  //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //   {data.map((stream) => (
  //     <Card
  //       key={stream.id} // Make sure each Card has a unique key
  //       className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer"
  //     >
  //       <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
  //         <figure className="h-14 w-14 relative">
  //           <Image
  //             src="https://www.onlyeducation.in/assets/img/logo/864164102_3.png" // Replace with actual image source from stream object
  //             alt="college"
  //             fill={true}
  //             className="object-cover object-center"
  //           />
  //         </figure>
  //         <p className="text-center text-lg">{stream.title}</p> {/* Assuming 'title' exists in your stream object */}
  //         <p className="text-center text-sm">{`Number of colleges: ${stream.universities.data.length}`}</p> {/* Adjust as per your data structure */}
  //       </CardContent>
  //     </Card>
  //   ))}
  // </div>
  );
};

export default TestCards;
