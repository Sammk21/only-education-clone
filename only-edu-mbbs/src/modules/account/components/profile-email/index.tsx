"use client"
import React from "react";
import { Input } from "@/components/ui/input";
import AccountInfo from "../account-info";
import { UserType } from "@/types/types";
type MyInformationProps = {
  user: UserType;
};

const ProfileEmail = ({ user }: MyInformationProps) => {
  const [successState, setSuccessState] = React.useState(false);
  const clearState = () => {
    setSuccessState(false);
  };
  return (
    <form className="w-full ">
      <AccountInfo
        label="Email"
        currentInfo={
          user.data
            ? `${user?.data.email}`
            : "couldnt fetch data please try later"
        }
        isSuccess={false}
        isError={true}
        clearState={clearState}
      >
        <div className="grid grid-cols-1 gap-y-2 ">
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={
              user.data
                ? user?.data.email
                : "couldnt fetch data please try later"
            }
          />
        </div>
      </AccountInfo>
    </form>
  );
};

export default ProfileEmail
