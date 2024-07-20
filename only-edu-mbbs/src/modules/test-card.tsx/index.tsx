

import { Card, CardContent } from "@/components/ui/card";
import { ImageAttributes } from "@/types/types";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { ImageExtended } from "../common/extended-image/extended-image";


interface Props{



   
  

   key:number
context:string
tab:string
href:string
length:number
streamTitle:string  
streamIcon:ImageAttributes
streamSlug:string
}

const TestCards = ({streamTitle,context,tab,href,length, streamIcon,streamSlug}:Props) => {


  return (
    <>
    
    <Card className="border sm:aspect-[1/1] rounded-lg hover:shadow-lg transition cursor-pointer " >
     <Link href={`${href}?${context}=${streamSlug}`}>
      <CardContent className="flex justify-center h-full items-center flex-col gap-y-2">
        <figure className="h-14 w-14 relative">
          <ImageExtended
            src={streamIcon.url}
            alt="college"
            fill={true}
            className="object-cover object-center"
          />
        </figure>
        <p className="text-center text-lg font-semibold">{streamTitle}</p>
        <p className="text-center text-sm">{length} {tab}</p>




      </CardContent>
      </Link>
    </Card>




    </>


  
  );
};

export default TestCards;







