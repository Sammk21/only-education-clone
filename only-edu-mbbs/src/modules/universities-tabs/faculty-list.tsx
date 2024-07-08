import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

interface facultyFields {
  id: number;
  designation: string;
  email: string;
  professorName: string;
  number: string;
}

interface facultyProps {
  data: {
    facInfo: facultyFields[];
  };
}

const FacultyList = ({ data }: facultyProps) => {
  return (
    <Card className=" p-5 mt-4">
      <h2 className="text-dark font-semibold mb-4 text-xl">Faculty Details</h2>
      <div className="grid sm:grid-cols-3 gap-4 text-dark/60 text-center">
        {data.facInfo.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 ">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full m-auto">
              <Image
                src="https://admin.onlyeducation.co.in/uploads/depositphotos_137014128_stock_illustration_user_profile_icon_852499f6e7.jpg"
                alt=""
                fill={true}
                className="aspect-square h-full w-full"
              />
            </div>
            <div className="mt-2">
              <h2 className="font-semibold text-md text-dark ">
                {item.professorName}
              </h2>
              <p className="text-sm mt-1">{item.designation}</p>
              {item.number && (
                <p className="text-sm flex justify-center items-center gap-2 mt-1">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span>{item.number}</span>
                </p>
              )}
              {item.email && (
                <p className="text-sm flex justify-center items-center gap-1 mt-1">
                  <span>
                    <IoEarthOutline />
                  </span>
                  <span>{item.email}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FacultyList;
