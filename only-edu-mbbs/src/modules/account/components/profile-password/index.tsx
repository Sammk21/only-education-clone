

"use client"
import React from "react";
import { Input } from "@/components/ui/input";
import AccountInfo from "../account-info";
import { UserType } from "@/types/types";
import { Label } from "@/components/ui/label";

type MyInformationProps = {
  user: Omit<UserType, "password_hash">;
};

const ProfilePassword: React.FC<MyInformationProps> = ({ user }) => {
  const [successState, setSuccessState] = React.useState(false);



  const clearState = () => {
    setSuccessState(false);
  };

 

  return (
    <form className="w-full">
      <AccountInfo
       isLoading={false}
        label="Password"
        currentInfo={`Password is not shown for security reason`}
        isSuccess={false}
        isError={true}
        // errorMessage={user.error}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-4 -z-10">
          <Label>Old password</Label>
          <Input name="old_password" required type="password" />
          <Label>New password</Label>
          <Input type="password" name="new_password" required />
          <Label>Confirm password</Label>
          <Input type="password" name="confirm_password" required />
        </div>
      </AccountInfo>
    </form>
  );
};

export default ProfilePassword;
