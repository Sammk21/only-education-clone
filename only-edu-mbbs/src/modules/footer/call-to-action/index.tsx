import { EnquiryDialog } from "@/modules/enquiry-dialog";
import React from "react";
interface Props {
  title: string;
  data: {
    theme: string;
    title: string;
  };
}
const CallToAction = ({ data, title }: Props) => {
  return (
    <section className="my-12 sm:px-4">
      <div className="py-4 bg-[#ffe9a5] mx-auto w-full max-w-5xl rounded-2xl">
        <div className="flex sm:flex-row flex-col items-center justify-around gap-x-5  text-dark">
          <h1 className="lg:text-2xl text-sm">{data.title}</h1>
          <EnquiryDialog title={title} />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
