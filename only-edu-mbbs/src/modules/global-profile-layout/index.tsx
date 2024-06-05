import Image from "next/image";
import React from "react";

const GlobalProfileLayout = () => {
  return (
    <div className=" bg-light  dark:bg-dark flex flex-wrap items-center border-none  justify-center  ">
      <div className="w-full   bg-light dark:bg-dark   transform  border-none   duration-200 easy-in-out">
        <div className=" h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden relative -z-10">
          <Image
            fill={true}
            className=" object-cover object-center"
            src="https://images.unsplash.com/photo-1523509080324-9183f313dc50?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="RUSSIA"
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-light dark:bg-dark p-2 rounded-full   "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XkFPc-cSfQq5TBWh63H0FTX1HWRQkGnkpEp7nu02NA&s"
            alt=""
          />
        </div>
        <div className="">
          <div className="text-center px-14">
            <h2 className=" text-3xl font-bold dark:text-light">Russia</h2>

            <p className="mt-2 text-accent text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
          <hr className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default GlobalProfileLayout;
