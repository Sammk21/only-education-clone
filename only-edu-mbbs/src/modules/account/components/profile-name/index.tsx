"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import AccountInfo from "../account-info";
import { UserType } from "@/types/types";
import { Label } from "@/components/ui/label";

type MyInformationProps = {
  user: Omit<UserType, "password_hash">;
};

const ProfileName: React.FC<MyInformationProps> = ({ user }) => {
  const [successState, setSuccessState] = React.useState(false);

  // const [state, formAction] = useFormState(updateCustomerName, {
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
    <form className="w-full overflow-visible ">
      <AccountInfo
        label="Name"
        currentInfo={`${user.data?.firstName} ${user.data?.lastName}`}
        isSuccess={false}
        isError={true}
        // errorMessage={user.error}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-x-4 -z-10">
          <div>
            <Label>First name</Label>
            <Input
              name="firstName"
              required
              defaultValue={user.data?.firstName}
            />
          </div>
          <div>
            <Label>Last name</Label>
            <Input
              name="lastName"
              required
              defaultValue={user.data?.lastName}
            />
          </div>
        </div>
      </AccountInfo>
    </form>
  );
};

export default ProfileName;
