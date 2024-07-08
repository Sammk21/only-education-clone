import { UserType } from "@/types/types";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import AccountNav from "../components/account-nav";

interface AccountLayoutProps {
  user: Omit<UserType, "password_hash"> | null;
  children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children, user }) => {
  return (
    <div className="w-full h-full mb-12">
      <div className="container">
        <div className="pb-3 mt-3">
          <h3 className="text-dark text-lg font-medium">Account Settings</h3>
          <p className="text-xs">Change your profile and settings</p>
        </div>
        <div className="bg-accent/5 border px-3 text-sm font-normal rounded-lg">
          <div className="grid grid-cols-12">
            <div className="accountNav col-span-2 ml-1 mr-2 border-r ">
              {user?.data && <AccountNav user={user} />}
            </div>
            <div className="col-span-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
