import React from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdCurrencyExchange } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";

const UniHighlights = () => {
  return (
    <div className="my-16">
      <h3 className=" text-4xl font-medium text-center mb-8">Highlights</h3>
      <div className="sm:flex sm:justify-evenly grid xs:grid-rows-2 grid-flow-col gap-16 justify-items-center px-6 grid-rows-3 relative">
        <div className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24  bg-[#e8e6e2] dark:bg-foreground  rounded-lg">
          <span className="w-full h-full relative flex justify-center items-center dark:text-light">
            <FaUniversity className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
            <p className="absolute -bottom-6 text-md  -left-2 sm:left-0  text-center font-medium w-full text-dark/50 ">
              1932
            </p>
            <p className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm -left-2 sm:left-0  text-center font-medium w-full">
              Founded
            </p>
          </span>
        </div>
        <div className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24  bg-[#e8e6e2] dark:bg-foreground  rounded-lg">
          <span className="w-full h-full relative flex justify-center items-center dark:text-light">
            <PiStudent className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
            <p className="absolute -bottom-6 text-md  -left-2 sm:left-0  text-center font-medium w-full text-dark/50 ">
              English
            </p>
            <p className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm -left-2 sm:left-0  text-center font-medium w-full">
              Medium
            </p>
          </span>
        </div>
        <div className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24  bg-[#e8e6e2] dark:bg-foreground  rounded-lg">
          <span className="w-full h-full relative flex justify-center items-center dark:text-light">
            <MdCurrencyExchange className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
            <p className="absolute -bottom-6 text-[15px]  -left-2 sm:left-0  text-center font-medium w-full text-dark/50 ">
              2,94,120 RUB
            </p>
            <p className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm -left-2 sm:left-0  text-center font-medium w-full">
              Annual fees
            </p>
          </span>
        </div>
        <div className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24  bg-[#e8e6e2] dark:bg-foreground  rounded-lg">
          <span className="w-full h-full relative flex justify-center items-center dark:text-light">
            <HiOutlineBuildingOffice className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
            <p className="absolute -bottom-6 text-md  -left-2 sm:left-0  text-center font-medium w-full text-dark/50 ">
              NMC, WHO
            </p>
            <p className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm -left-2 sm:left-0  text-center font-medium w-full">
              Accreditation
            </p>
          </span>
        </div>
        <div className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24  bg-[#e8e6e2] dark:bg-foreground  rounded-lg">
          <span className="w-full h-full relative flex justify-center items-center dark:text-light">
            <FaRankingStar className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
            <p className="absolute -bottom-6 text-md  -left-2 sm:left-0  text-center font-medium w-full text-dark/50 ">
              NEET
            </p>
            <p className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm -left-2 sm:left-0  text-center font-medium w-full">
              Criteria
            </p>
          </span>
        </div>
        <div className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24  bg-[#e8e6e2] dark:bg-foreground  rounded-lg">
          <span className="w-full h-full relative flex justify-center items-center dark:text-light">
            <LiaClipboardListSolid className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />

            <p className="absolute -bottom-6 text-md  -left-2 sm:left-0  text-center font-medium w-full text-dark/50 ">
              8,000+
            </p>
            <p className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm -left-2 sm:left-0  text-center font-medium w-full">
              Trained
            </p>
          </span>
        </div>
        {/* <span className="w-full border-b border-b-borderLight dark:border-b-border absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10"></span> */}
      </div>
    </div>
  );
};

export default UniHighlights;
