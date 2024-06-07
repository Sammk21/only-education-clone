import React from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { MdMenuBook, MdOutlineShowChart } from "react-icons/md";
import { TbWorldDown, TbWorldHeart } from "react-icons/tb";

const FlowDiagram = () => {
  return (
    <section className="py-6 mt-6  mb-20">
      <p className="text-center text-dark dark:text-light pt-6 text-xl font-semibold">
        Why Study Abroad is the best for Indian Students?
      </p>
      <div className=" flex flex-col px-10 sm:px-12 w-full justify-center">
        <div className=" h-24 mx-auto flex gap-5 ">
          <span className="h-full border-l border-l-borderLight dark:border-l-border"></span>
          <span className="h-full border-l border-l-borderLight dark:border-l-border"></span>
          <span className="h-full border-l border-l-borderLight dark:border-l-border"></span>
          <span className="h-full border-l border-l-borderLight dark:border-l-border"></span>
        </div>

        <span className="max-w-[800px] w-full mx-auto border-t dark:border-t-border border-t-borderLight">
          <div className=" mx-auto flex justify-between ">
            <div className="h-14 sm:h-24 border-l border-l-borderLight dark:border-l-border flex flex-col relative">
              <div className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24  bg-[#e8e6e2] dark:bg-foreground absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-lg">
                <span className="w-full h-full relative flex justify-center items-center dark:text-light">
                  <FaMagnifyingGlassChart className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
                  <span className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm -left-2 sm:left-0  text-center font-medium">
                    Increased Employability
                  </span>
                </span>
              </div>
            </div>
            <div className=" h-40 sm:h-32 border-l border-l-borderLight dark:border-l-border  relative">
              <div className="xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24 bg-[#e8e6e2] dark:bg-foreground absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-lg flex justify-center items-center">
                <span className="dark:text-light">
                  <TbWorldHeart className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
                  <span className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm  -left-2 sm:left-0 text-center font-medium">
                    International Exposure
                  </span>
                </span>
              </div>
            </div>
            <div className=" h-64 sm:h-40 border-l border-l-borderLight dark:border-l-border  relative">
              <span className="  xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24 bg-[#e8e6e2] dark:bg-foreground absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-lg flex justify-center items-center">
                <span className="dark:text-light">
                  <MdMenuBook className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent" />
                  <span className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm  left-0 text-center font-medium">
                    Variety of courses
                  </span>
                </span>
              </span>
            </div>
            <div className="sm:h-32  h-40 border-l border-l-borderLight dark:border-l-border  relative">
              <span className=" xs:h-16 xs:w-16  h-14 w-14 sm:w-24 sm:h-24 bg-[#e8e6e2] dark:bg-foreground absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-lg flex justify-center items-center">
                <span className="dark:text-light">
                  <MdOutlineShowChart className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
                  <span className="absolute -bottom-9 sm:-bottom-12 text-xs sm:text-sm left-0 text-center font-medium">
                    Lifetime expeience
                  </span>
                </span>
              </span>
            </div>
            <div className="h-14 sm:h-24  border-l border-l-borderLight dark:border-l-border  relative">
              <span className=" xs:h-16 xs:w-16  h-14 w-14  sm:w-24 sm:h-24 bg-[#e8e6e2] dark:bg-foreground absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-lg flex justify-center items-center">
                <span className="dark:text-light">
                  <TbWorldDown className=" text-4xl sm:text-6xl text-foreground/70 dark:text-accent " />
                  <span className="absolute -bottom-6 sm:-bottom-12 -left-1 sm:left-0 text-xs sm:text-sm left- font-medium">
                    Immigration
                  </span>
                </span>
              </span>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
};

export default FlowDiagram;
