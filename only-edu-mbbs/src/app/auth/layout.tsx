// import { getCustomer } from "@lib/data";
import AccountLayout from "@/modules/account/templates/account-layout";
import React from "react";

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode;
  login?: React.ReactNode;
}) {
  // const customer = await getCustomer().catch(() => null)

  const customer = true;

  return (
    <AccountLayout customer={customer}>
      {customer ? dashboard : login}
    </AccountLayout>
  );
}
