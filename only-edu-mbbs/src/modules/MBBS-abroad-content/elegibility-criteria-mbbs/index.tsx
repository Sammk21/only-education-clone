import Image from "next/image";
import React from "react";

interface Props {
  name: string;
}

const ElegibilityCriteria = ({ name }: Props) => {
  return (
    <div className="text-dark dark:text-light py-6 my-6">
      <h4 className="leading-none text-4xl mb-6 text-center text-dark dark:text-light">
        {" "}
        {/** FETCH DYNAMIC NAME*/}
        Elegibility criteria for {name}
      </h4>
      <p className="text-center text-accent">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum expedita
        omnis aperiam facere praesentium, tempora non eius, dolores impedit
        alias enim, pariatur qui iusto? Eius?
      </p>
      <div className="pt-6 max-w-4xl w-full justify-center mx-auto grid sm:grid-cols-2 gap-y-7">
        <div className="max-w-sm  overflow-hidden border border-l-[3px] border-l-yellow-500 dark:border-l-yellow-500 border-borderLight dark:border-border rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Age requirement</div>
            <p className="text-accent text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden border border-borderLight dark:border-border border-l-[3px] dark:border-l-blue-500 border-l-blue-500 rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Acemedic requirement</div>
            <p className="text-accent   text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden dark:border-border border-borderLight border border-l-[3px] border-l-green-500  dark:border-l-green-500 rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Medical requirement</div>
            <p className="text-accent   text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden border border-borderLight dark:border-border border-l-[3px] dark:border-l-red-500 border-l-red-500 rounded-2xl">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Exams to qualify for mbbs
            </div>
            <p className="text-accent text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegibilityCriteria;
