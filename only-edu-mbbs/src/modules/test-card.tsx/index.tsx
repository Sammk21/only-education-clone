import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

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

export default TestCards;
