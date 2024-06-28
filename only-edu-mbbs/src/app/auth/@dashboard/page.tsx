import { Metadata } from "next";

// import { getCustomer, listCustomerOrders } from "@lib/data"
// import Overview from "@modules/account/components/overview"
import { notFound } from "next/navigation";
import Profile from "./profile/page";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import Overview from "@/modules/account/components/overview";

export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
};

export default async function OverviewTemplate() {
  const user = await getUserMeLoader();

  if (!user) {
    notFound();
  }

  return <Overview />;
}
