import { UserType } from "@/types/types";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import AccountNav from "../components/account-nav";
import { Separator } from "@radix-ui/react-dropdown-menu";

interface AccountLayoutProps {
  user: Omit<UserType, "password_hash"> | null;
  children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children, user }) => {
  return (
    <div className="flex-1 text-dark dark:text-light  ">
      <div className="flex-1 h-screen   max-w-6xl  mx-auto   flex flex-col">
        <div className="sm:flex-row flex  flex-col gap-x-3">
          <div>{user?.data && <AccountNav user={user} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col mt-6 pt-6 sm:flex-row items-end justify-between  gap-6 px-2 container mx-auto">
          <div className="">
            <h3 className="text-xl-semi  mb-4">Got questions?</h3>
            <span className="txt-medium">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div className="text-center ">
            <Link
              className="interactive-link group text-bluelink text-sm flex justify-center items-center "
              href="/customer-service"
            >
              <span className="group-hover:underline transition-transform duration-200 ease-in-out">
                Customer Service
              </span>
              <span className=" group-hover:-rotate-45 transition-transform duration-200 ease-in-out ">
                <IoIosArrowRoundForward size={28} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
