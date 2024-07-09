import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import ProfileEmail from "@/modules/account/components/profile-email";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProfileName from "@/modules/account/components/profile-name";
import ProfilePassword from "@/modules/account/components/profile-password";
import ProfilePhone from "@/modules/account/components/profile-phone";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your Medusa Store profile.",
};

export default async function Profile() {
  const user = await getUserMeLoader();

  if (!user) {
    notFound();
  }

  return (
    <div className="text-dark my-3 px-2">
      <h3 className="text-lg">Profile</h3>

      <p className="text-dark/60 text-xs mb-2">
        View and update your profile information, including your name, email,
        and phone number. You can also update your billing address, or change
        your password.
      </p>

      <Separator />
      <div className="gap-y-4 flex flex-col mb-3 mt-2">
        <ProfileEmail user={user} />
        <ProfileName user={user} />
        <ProfilePassword user={user} />
        <ProfilePhone user={user} />
      </div>
      <CardFooter className="border-t px-6 py-4">
        <Button>Save</Button>
      </CardFooter>
    </div>
  );
}
