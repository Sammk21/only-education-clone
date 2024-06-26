// import { getCustomer } from "@lib/data";
import AccountLayout from "@/modules/account/templates/account-layout";
import React from "react";
import { getUserMeLoader } from "../data/services/get-user-me-loader";

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode;
  login?: React.ReactNode;
}) {
  const user = await getUserMeLoader();
  return <AccountLayout>{user.ok ? dashboard : login}</AccountLayout>;
}
