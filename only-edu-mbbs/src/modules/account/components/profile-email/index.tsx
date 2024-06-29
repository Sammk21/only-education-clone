"use client"

import React, { useEffect } from "react";
import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";

import AccountInfo from "../account-info";
import { updateVerifiedUserService } from "@/app/data/services/auth-service";
import { UserType } from "@/types/types";
import { notFound } from "next/navigation";
import { updateCustomerEmail } from "@/app/action";

type MyInformationProps = {
  user: UserType;
};

const ProfileEmail = ({ user }: MyInformationProps) => {
  const [successState, setSuccessState] = React.useState(false);

  // const [state, formAction] = useFormState(updateCustomerEmail, {
  //   error: false,
  //   success: false,
  // })

  const clearState = () => {
    setSuccessState(false);
  };

  // useEffect(() => {
  //   setSuccessState(state.success)
  // }, [state])
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
        errorMessage={user.error}
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
