// this is college list

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuFlagTriangleRight } from "react-icons/lu";
import { ImageAttributes } from "@/types/types";
import { University } from "lucide-react";
import { FaDownload, FaRegPaperPlane } from "react-icons/fa";

interface ownership {
  id: number;
  title: string;
  slug: string;
}
interface streams {
  id: number;
  title: string;
  slug: string;
}
interface indian_state {
  id: number;
  title: string;
  slug: string;
}
interface data {
  id: number;
  title: string;
  slug: string;
}
interface UniversityProfile {
  backgroundImage: ImageAttributes;
  fees: string;
  avgPackage: string;
  description: string;
}
interface University {
  title: string;
  id: number;
  slug: string;
  universityProfile: UniversityProfile;
  ownership: ownership;
  indian_state: indian_state;
  streams: streams;
  exams: {
    data: data[];
  };
}

interface UniversitiesData {
  data: University[];
}

interface Props {
  data: UniversitiesData;
  filterData: UniversitiesData;
}
const CollegeList = ({ data, filterData }: Props) => {
  const baseUrl = "https://admin.onlyeducation.co.in";
  return (
    <section className="lg:w-[70%] lg:mt-[5%] mb-4 p-4">
      {data.data.map((university) => (
        <div
          key={university.id}
          className="justify-between lg:w-[95%] m-auto mb-4 lg:p-4 p-2 flex flex-col   border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <div className="flex mb-2 flex-col lg:flex-row justify-between">
            <Link href={`study/uni/${university.slug}`}>
              <Image
                className=" rounded-xl w-full  h-50 lg:h-40 lg:w-70"
                src={baseUrl + university.universityProfile.backgroundImage.url}
                alt="Image Description"
                width={300}
                height={100}
              />
            </Link>
            <div className="lg:pl-6 lg:pr-2 my-4 lg:my-0">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white  line-clamp-1">
                {university.title}
              </h3>
              <div className="flex">
                <p className="flex items-center mr-4">
                  <IoLocationOutline className="text-[#fc7318]" />

                  <span className=" line-clamp-1 text-sm text-[#6a6767]">
                    {university.indian_state.title}
                  </span>
                </p>
                <p className="flex items-center">
                  <LuFlagTriangleRight className="text-[#fc7318]" />

                  <span className=" line-clamp-1 text-sm text-[#6a6767]">
                    {university.ownership.title}
                  </span>
                </p>
              </div>
              <p className="line-clamp-2 mt-2 text-[#3a3a40]">
                {university.universityProfile.description}
              </p>
            </div>
            <div className="flex lg:flex-col flex-row ">
              <button className="flex items-center bg-[#fc7318] text-white rounded-md h-10 w-32 justify-center mb-4 mr-2 lg:mr-0">
                <FaDownload className="mr-1" />
                Broucher
              </button>
              <button className="flex items-center rounded-md text-[#fc7318] bg-[#ffe5d9] border border-[#fc7318] h-10 w-32 justify-center">
                <FaRegPaperPlane className="mr-2" />
                Apply
              </button>
            </div>
          </div>
          <div className="border-t border-b border-dashed border-6 flex pt-2 pb-2 mb-2">
            <p className="mr-5"> Fees: {university.universityProfile.fees}</p>
            <p> Avg Package: {university.universityProfile.avgPackage}</p>
          </div>
          <div className=" text-dark cursor-pointer overflow-scroll lg:overflow-hidden">
            <span className="hover:text-[#fc7318]">Admission</span>
            <span className="mx-2">|</span>
            <span className="hover:text-[#fc7318]">Placements</span>
            <span className="mx-2">|</span>
            <span className="hover:text-[#fc7318]">Courses</span>
            <span className="mx-2">|</span>

            <span className="hover:text-[#fc7318]">Facilities </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CollegeList;
