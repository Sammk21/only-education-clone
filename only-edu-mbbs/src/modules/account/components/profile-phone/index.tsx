"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import AccountInfo from "../account-info";
import { UserType } from "@/types/types";
import { Label } from "@/components/ui/label";

type MyInformationProps = {
  user: Omit<UserType, "password_hash">;
};

const ProfilePhone: React.FC<MyInformationProps> = ({ user }) => {
  const [successState, setSuccessState] = React.useState(false);

  // const [state, formAction] = useFormState(updateCustomerPhone, {
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
    <form className="w-full">
      <AccountInfo
        label="Phone"
        currentInfo={`${user.data?.username}`}
        isSuccess={false}
        isError={true}
        // errorMessage={user.error}
        clearState={clearState}
      >
        <div className="grid grid-cols-1 gap-y-2 -z-10">
          <Label>Phone</Label>
          <Input
            name="phone"
            type="phone"
            autoComplete="phone"
            required
            defaultValue={user.data?.username}
          />
        </div>
      </AccountInfo>
    </form>
  );
};

export default ProfilePhone;
