import React from "react";
import { FaChartBar } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

const UniRanking = () => {
  return (
    <section className="py-12 my-12 bg-greenDark rounded-2xl text-light container mx-auto">
      <h4 className="text-center text-3xl font-medium mb-6">Ranking</h4>
      <p className="text-center max-w-5xl mx-auto mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        perspiciatis at recusandae sapiente eveniet! Qui possimus numquam
        doloremque, at facere inventore maxime perspiciatis, nostrum quaerat
        sint culpa. Ipsam voluptate voluptas nam odio. Excepturi, harum.
      </p>
      <div className="w-full h-full flex  justify-around ">
        <div className="flex justify-center flex-col ">
          <FaChartBar className="text-8xl mb-3" />
          <p className="font-medium">Russia : 153</p>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <FaEarthAsia className="text-8xl mb-3" />
          <p className="font-medium">world ranking : 1153</p>
        </div>
      </div>
    </section>
  );
};

export default UniRanking;
