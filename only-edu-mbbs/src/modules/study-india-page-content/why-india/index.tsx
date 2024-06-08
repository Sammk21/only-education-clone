import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiFediverseLogoDuotone } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { SiIndiansuperleague } from "react-icons/si";

const WhyInida = () => {
  return (
    <section className="sm:px-12 py-6 my-6 px-2 ">
      <h4 className="text-center text-4xl py-6 mb-6 ">
        Why Choose India for Your Higher Education?
      </h4>

      <div>
        <div className="max-w-full lg:max-w-7xl lg:mx-auto lg:px-6 sm:px-0 mt-5">
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4">
            <div className="text-5xl">
              <HiOutlineAcademicCap />
            </div>
            <div className="">
              <h2 className="text-xl mb-2">Academic Excellence</h2>
              <p className="text-dark/50 text-sm">
                Indian institutions consistently rank among the top in the
                world, renowned for their academic rigor and research
                opportunities.
              </p>
            </div>
          </div>
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4 mt-4  mr-0 ml-auto">
            <div className="text-5xl">
              <PiFediverseLogoDuotone />
            </div>
            <div className="">
              <h2 className="text-xl mb-2">Academic Excellence</h2>
              <p className="text-dark/50 text-sm">
                Indian institutions consistently rank among the top in the
                world, renowned for their academic rigor and research
                opportunities.
              </p>
            </div>
          </div>
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4 mt-4">
            <div className="text-5xl">
              <SiIndiansuperleague />
            </div>
            <div className="">
              <h2 className="text-xl mb-2">Academic Excellence</h2>
              <p className="text-dark/50 text-sm">
                Indian institutions consistently rank among the top in the
                world, renowned for their academic rigor and research
                opportunities.
              </p>
            </div>
          </div>
          <div className=" max-w-4xl rounded-md text-dark bg-dark/5 px-6 py-2 flex items-center gap-4 mt-4  mr-0 ml-auto">
            <div className="text-5xl">
              <AiOutlineGlobal />
            </div>
            <div className="">
              <h2 className="text-xl mb-2">Academic Excellence</h2>
              <p className="text-dark/50 text-sm">
                Indian institutions consistently rank among the top in the
                world, renowned for their academic rigor and research
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInida;
