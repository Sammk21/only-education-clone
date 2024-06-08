import Link from "next/link";
import React from "react";
import LoginTemplate from "./login-template";
import { IoIosArrowRoundForward } from "react-icons/io";

interface AccountLayoutProps {
  customer: any | null;
  children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1  text-dark dark:text-light  ">
      <div className="flex-1  h-full  mx-auto   flex flex-col">
        <div className="grid sm:grid-cols-1">
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col mt-6 pt-6 sm:flex-row items-end justify-between border-t border-borderLight dark:border-border  gap-6 px-2 container mx-auto">
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
