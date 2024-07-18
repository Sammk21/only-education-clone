import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import Overview from "@/modules/account/components/overview";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/app/data/actions/auth-actions";

export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
};

export default async function OverviewTemplate() {
  const user = await getUserMeLoader();

  if (!user) {
    notFound();
  }

  return (
    <>
      <Overview user={user} />
      <form action={logoutAction}>
        <div className="px-2 pb-3 block sm:hidden">
          <Button
            type="submit"
            variant="outline"
            className="w-full  mx-auto border-none text-xs mt-3 bg-red-500 text-white hover:bg-red-400"
          >
            Logout
          </Button>
        </div>
      </form>
    </>
  );
}
