/*

"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";


import AccountInfo from "../account-info";
import { UserType } from "@/types/types";
import { Label } from "@/components/ui/label";

type MyInformationProps = {
  user: Omit<UserType, "password_hash">;
};

const ProfileName: React.FC<MyInformationProps> = ({ user }) => {
  const [successState, setSuccessState] = React.useState(false);


  const clearState = () => {
    setSuccessState(false);
  };



  return (
    <form className="w-full overflow-visible ">
      <AccountInfo
      isLoading={false}
        label="Name"
        currentInfo={`${user.data?.firstName} ${user.data?.lastName}`}
        isSuccess={false}
        isError={true}
       
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

*/



"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import AccountInfo from "../account-info";
import { UserType } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { BottomGradient, LabelInputContainer } from "../register";
import { Label } from "@/components/ui/label";
import { StrapiErrors } from "@/modules/custom/StrapiErrors";
import { updateNamesAction, updateNamesSchema } from "@/app/data/actions/update-user-actions";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export interface INameInput {
  id: number;
  firstName: string;
  lastName: string;
}

type MyInformationProps = {
  // user: Omit<UserType, "password_hash">;
  user: UserType;
};

const ProfileName = ({ user }: MyInformationProps) => {
  const [successState, setSuccessState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [strapiError, setStrapiError] = useState<string | null>(null);
  const clearState = () => {
    setSuccessState(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INameInput>({
    resolver: zodResolver(updateNamesSchema),
    defaultValues: {
      id: user.data?.id,
      firstName: user.data?.firstName,
      lastName: user.data?.lastName,
    },
  });

  const onSubmit: SubmitHandler<INameInput> = async (data) => {
    setIsLoading(true); 
    const res = await updateNamesAction(INITIAL_STATE, data);
    setIsLoading(false); 
    if (res?.message) {
      setStrapiError(res.message);
    } else {
      toast.success("Name updated successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <AccountInfo
        disable={false}
        isLoading={isLoading}
        label="Name"
        currentInfo={
          user.data ? `${user.data.firstName} ${user.data.lastName}` : "couldn't fetch data please try later"
        }
        isSuccess={false}
        isError={true}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="John"
              {...register("firstName")}
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs font-medium">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Doe"
              {...register("lastName")}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs font-medium">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <StrapiErrors error={strapiError} />
      </AccountInfo>
    </form>
  );
};

export default ProfileName;
