import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuFlagTriangleRight } from "react-icons/lu";
import { ImageAttributes } from "@/types/types";
import { University } from "lucide-react";

// interface Benifits {
//   id: number;
//   avgPackage: string;
//   fees: string;
//   examsAccepted: string;
//   location: string | null;
//   ownership: string;
// }
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
}
const CollegeList = ({ data }: Props) => {
  const baseUrl = "https://admin.onlyeducation.co.in";
  console.dir(data, { depth: null });

  return (
    <section className="sm:w-[70%] sm:mt-[5%] mb-4 p-4">
      {data.data.map((university) => (
        <div
          key={university.id}
          className="md:w-[80%] m-auto mb-4  flex flex-col sm:flex-row bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <Link href={`study/uni/${university.slug}`}>
            <Image
              className=" rounded-xl w-full  h-60 sm:h-40 sm:w-60"
              // src="https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={baseUrl + university.universityProfile.backgroundImage.url}
              alt="Image Description"
              width={200}
              height={100}
            />
          </Link>
          <div className="px-4 py-4 w-full ">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white  line-clamp-1">
              {/* Bashkir State Medical University */}
              {university.title}
            </h3>
            <Link href={`study/uni/${university.slug}`}>
              <div className="mt-1 text-gray-500 text-sm flex">
                <p className="flex items-center mr-4">
                  <IoLocationOutline />
                  <span className=" line-clamp-1">
                    {university.indian_state.title}
                  </span>
                </p>
                <p className="flex items-center">
                  <LuFlagTriangleRight />

                  <span className=" line-clamp-1">
                    {" "}
                    {university.ownership.title}
                  </span>
                </p>
              </div>
            </Link>
            <div className="flex  mt-1 text-gray-500 dark:text-neutral-400 text-sm flex-col sm:flex-row">
              <p>
                {university.exams.data.map((item, index) => (
                  <span className="mr-1" key={item.id}>
                    {item.title}
                  </span>
                ))}
              </p>
              <p className="sm:mx-2">
                | Fees: {university.universityProfile.fees}
              </p>{" "}
              <p className="sm:mx-2">
                | Avg Package: {university.universityProfile.avgPackage}
              </p>
            </div>
            <div className="mt-4  ">
              <Link
                className="px-4  py-2 mt-2 rounded-2xl border border-borderLight dark:border-border  bg-blue-500 text-light text-sm hover:shadow-[1px_1px_0px_0px_rgba(0,0,0)] transition duration-200"
                href="#"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CollegeList;
