import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuFlagTriangleRight } from "react-icons/lu";

const CollegeList = () => {
  return (
    <section>
      <div className="md:w-[80%] m-auto mb-5 flex flex-col sm:flex-row bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <Image
          className=" rounded-xl w-full  h-60 sm:h-40 sm:w-60"
          src="https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image Description"
          width={200} // Provide the actual width of the image
          height={100} // Provide the actual height of the image to maintain the aspect ratio
        />

        <div className="px-4 py-4 w-full ">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white  line-clamp-1">
            Bashkir State Medical University
          </h3>
          <div className="mt-1 text-gray-500 text-sm flex">
            <p className="flex items-center mr-4">
              <IoLocationOutline />
              <span className=" line-clamp-1">Chennai, Tamil Nadu</span>
            </p>
            <p className="flex items-center">
              <LuFlagTriangleRight />

              <span className=" line-clamp-1">Private Unaided</span>
            </p>
          </div>
          <div className="flex  mt-1 text-gray-500 dark:text-neutral-400 text-sm flex-col sm:flex-row">
            <p className="">
              <span>Fees: </span>
              <span>₹ 10.00 Lakh</span>
            </p>
            <span className="mx-2 hidden  sm:block">|</span>
            <p className=" ">
              <span>Salary: </span>
              <span>₹ 10.00 Lakh</span>
            </p>
            <span className="mx-2 hidden  sm:block">|</span>
            <p className="">
              <span>Exam: </span>
              <span>JEE</span>
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
    </section>
  );
};

export default CollegeList;
