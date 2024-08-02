
"use client";

import React from "react";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Content } from "next/font/google";
import Title from "../common/title";
import { IoNotifications } from "react-icons/io5";

interface paper{
    data:{
        id:number;
        url:string
    }
}


interface Props {
    data: {
        previousPapers:{
    id: number;
    header: string;  
    previousPapers:{
        id: number;
        title: string;  
        paper:paper
    }[]
        }[]

  };

}
const PreviousPapers = ({ data }: Props) => {
console.log("hsdl", data)

  if (!data) {
    return null;
  }
  return (
    
  
    <div className="mt-3">
      
 

      {data.previousPapers.map((item) => (
        <div key={item.id}>
          <h2>{item.header}</h2>
          {item.previousPapers.map((paper) => (
            <div key={paper.id}>
              <h3>{paper.title}</h3>
              
            </div>
          ))}
        </div>
      ))}

    </div>
  );
};

export default PreviousPapers;
