import { UserType } from "@/types/types";
import React from "react";
import AccountNav from "../components/account-nav";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MdDangerous } from "react-icons/md";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import PhoneInputForm from "@/modules/phone-otp-input-dialog/phone-top-input";

interface AccountLayoutProps {
  user: Omit<UserType, "password_hash"> | null;
  children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children, user }) => {
  return (
    <div className="w-full h-full mb-12">
      <div className="container mx-auto">
        {user?.ok && !user?.data?.phone && (
          <>
            <Alert variant={"destructive"}>
              <MdDangerous className="h-4 w-4 " />
              <AlertTitle>Phone is not verified!</AlertTitle>
              <AlertDescription>
                Please verify your phone for better user experience and perks
              </AlertDescription>
            </Alert>
          </>
        )}

        {user?.ok ? (
          <div className="pb-3 mt-3">
            <h3 className="text-dark text-lg font-medium">Account Settings</h3>
            <p className="text-xs">Change your profile and settings</p>
          </div>
        ) : null}
        <div
          className={`bg-accent/5 ${
            user?.ok ? "border" : ""
          }  text-sm font-normal rounded-lg `}
        >
          <div className={`${user?.ok ? "sm:grid  grid-cols-12" : ""}`}>
            <div className="accountNav col-span-2  border-r ">
              {user?.data && <AccountNav user={user} />}
            </div>
            <div className="col-span-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
