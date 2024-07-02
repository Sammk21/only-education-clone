import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EnquiryDialog } from "@/modules/enquiry-dialog";
import Link from "next/link";
import React from "react";
interface Props {
  title: string;
  id: number;
  data: {
    theme: string;
    title: string;
  };
}

const CallToAction = async ({ data, title, id }: Props) => {
  const user = await getUserMeLoader();

  if (!user.ok) {
  }

  return (
    <section className="mt-3  w-full">
      <Card className="  bg-[#ffe9a5] rounded-lg flex ">
        <div className="flex sm:flex-row flex-col p-5 justify-between w-full items-center sm:items-end gap-x-5  text-dark">
          <div className="flex flex-col text-center sm:text-start">
            <h4 className="text-lg font-medium">{data.title} ?</h4>
            <p className="text-dark/60">
              Ask us and get personalized response free of cost.
            </p>
          </div>
          {user.ok ? (
            <EnquiryDialog title={title} user={user} id={id} />
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 hover:border-green-500 bg-orange-500 hover:bg-orange-400 text-light"
            >
              Enquiry Now
            </Link>
          )}
        </div>
      </Card>
    </section>
  );
};

export default CallToAction;
