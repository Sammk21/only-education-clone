

"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import AccountInfo from "../account-info";
import { UserType } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { StrapiErrors } from "@/modules/custom/StrapiErrors";
import { updatePhoneAction, updatePhoneSchema } from "@/app/data/actions/update-user-actions";


const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export interface IPhoneInput {
  id: number;
  phone: string;
  last_phone_update:Date | null
  
}

type MyInformationProps = {
  user: UserType;
};

const ProfilePhone = ({ user }: MyInformationProps) => {
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
  } = useForm<IPhoneInput>({
    resolver: zodResolver(updatePhoneSchema),
    defaultValues: {
      id: user.data?.id,
      phone: user.data?.phone,
      last_phone_update:  user.data?.last_phone_update || null, 
    },
  });



  


  const onSubmit: SubmitHandler<IPhoneInput> = async (data) => {
    setIsLoading(true); // Start loading
    const res = await updatePhoneAction(INITIAL_STATE, data);
    setIsLoading(false); // End loading
    if(res.strapiErrors){
      toast.error("failed to update phone")
    }else{
      toast.success("updated sucessfully")
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <AccountInfo
        disable={user.data?.last_phone_update !== null}
        isLoading={isLoading}
        label="Phone"
        currentInfo={user.data ? `${user.data.phone}` : "couldn't fetch data please try later"}
        isSuccess={false}
        isError={true}
        clearState={clearState}
      >
        <div className="grid grid-cols-1 gap-y-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </Label>  
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="123-456-7890"
            {...register("phone")}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs font-medium">
              {errors.phone.message}
            </p>
          )}
          <StrapiErrors error={strapiError} />
        </div>
      </AccountInfo>
    </form>
  );
};

export default ProfilePhone;
