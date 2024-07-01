import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { EnquiryDialog } from "@/modules/enquiry-dialog";
import Link from "next/link";
import React from "react";
interface Props {
  ctaProps: {
    title: string;
    id: number;
  };
  data: {
    theme: string;
    title: string;
  };
}

const CallToAction = async ({ data, ctaProps }: Props) => {
  const user = await getUserMeLoader();
  return (
    <section className="my-12 sm:px-4">
      <div className="py-4 bg-[#ffe9a5] mx-auto w-full max-w-5xl rounded-2xl">
        <div className="flex sm:flex-row flex-col items-center justify-around gap-x-5  text-dark">
          <h1 className="lg:text-2xl text-sm">{data.title}</h1>
          {user.ok ? (
            <EnquiryDialog ctaProps={ctaProps} user={user} />
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 hover:border-green-500 bg-orange-500 hover:bg-orange-400 text-light"
            >
              Enquiry Now
            </Link>
          )}
          {/* <EnquiryDialog title={title} /> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
