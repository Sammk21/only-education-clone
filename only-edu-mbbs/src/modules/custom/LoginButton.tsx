import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";
import { BottomGradient } from "../account/components/register";
import { getUserMeLoader } from "@/app/data/services/get-user-me-loader";
import { ProfileAndAcc } from "../profile-&-notification-navbar";

const LoginButton = async () => {
  const userInfo = await getUserMeLoader();
  return (
    <div className="px-1 flex items-center">
      {userInfo?.ok ? (
        <div className="flex gap-x-2 items-center font-medium font-sm">
          <ProfileAndAcc />
          <span>{userInfo.data?.firstName}</span>
        </div>
      ) : (
        <Link href={"/auth"}>
          <Button
            className="relative group/btn hover:bg-light"
            variant={"outline"}
          >
            <span>Login</span>
            <BottomGradient />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
