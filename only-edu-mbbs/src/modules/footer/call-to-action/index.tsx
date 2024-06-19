import React from "react";
interface Props {
  data: {
    theme: string;
    title: string;
  };
}
const CallToAction = ({ data }: Props) => {
  return (
    <section className="my-12 sm:px-4">
      <div className="py-4 bg-greenDark mx-auto w-full max-w-5xl rounded-2xl">
        <div className="flex sm:flex-row flex-col items-center justify-around gap-x-5  text-light">
          <h1 className="lg:text-2xl text-sm">{data.title}</h1>
          <button className="px-4  py-2 mt-2 rounded-2xl border border-borderLight dark:border-border  bg-blue-500 text-light text-sm hover:shadow-[1px_1px_0px_0px_rgba(0,0,0)] transition duration-200">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
