import { Metadata } from "next";

// import { getCustomer, listCustomerOrders } from "@lib/data"
// import Overview from "@modules/account/components/overview"
import { notFound } from "next/navigation";
import Profile from "./profile/page";

// export const metadata: Metadata = {
//   title: "Account",
//   description: "Overview of your account activity.",
// }

export default function OverviewTemplate() {
  return (
    <div>
      <Profile />
    </div>
  );
}
