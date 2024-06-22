"use client";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/modules/account/components/register";
import { Label } from "@/modules/account/components/ui/label";
import { Input } from "@/modules/account/components/ui/input";
import React, { ErrorInfo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { enquiryFormSchema } from "@/utils/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
  import { toast } from "sonner";

  type EnquiryFormInput = z.infer<typeof enquiryFormSchema>;

  interface EnquiryFromProps {
    onClose: () => void;
    setStatus: React.Dispatch<React.SetStateAction<null | "success" | "error">>;
  }

  export function EnquiryFrom({ onClose, setStatus }: EnquiryFromProps) {
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm<EnquiryFormInput>({
      resolver: zodResolver(enquiryFormSchema),
    });
    const [serverErrors, setServerErrors] = useState({ email: "", phone: "" });
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<EnquiryFormInput> = async (data) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://admin.onlyeducation.co.in/api/enquiries",
          {
            data: {
              firstname: data.firstName,
              lastname: data.lastName,
              email: data.email,
              phone: data.phone,
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          toast.success("Enquiry has been made.");
          reset();
          setStatus("success");
          setTimeout(() => {
            setStatus(null);
            onClose();
          }, 1000);
        } else {
          window.alert(
            "There was a problem with your submission. Please try again."
          );
          setStatus("error");
        }
      } catch (error: any) {
        if (error.response?.data?.error?.status === 400) {
          const validationErrors = error.response.data.error.details.errors;
          const errorMessages = { email: "", phone: "" };
          validationErrors.forEach((err: any) => {
            if (err.path.includes("email")) {
              errorMessages.email = err.message;
            }
            if (err.path.includes("phone")) {
              errorMessages.phone = err.message;
            }
          });
          setServerErrors(errorMessages);
          setStatus("error");
        } else {
          window.alert("Error submitting form: " + error.message);
          setStatus("error");
        }
      } finally {
        setLoading(false);
      }
    };

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
      e.target.value = value; // Set the input value
    };

    return (
      <div className="min-w-2xl grid grid-cols-2 w-full mx-auto rounded-none md:rounded-2xl overflow-hidden  shadow-input  mb-6 dark:bg-black border border-border border-borderLight">
        <div className="w-full h-full overflow-hidden relative ">
          <span className="w-full h-full absolute left-0 top-0 bg-black/40 z-10"></span>
          <Image
            alt="graducation hat"
            fill={true}
            className="object-cover object-top "
            src="https://admin.onlyeducation.co.in/uploads/photo_1624727828618_ee42ef2ec5cf_43ba67ca11.avif"
          />
        </div>
        <form className="my-8 p-4 md:p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                placeholder="Tyler"
                type="text"
                className={`dark:border ${
                  errors.firstName ? "dark:border-error" : ""
                }`}
                {...register("firstName")}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName && (
                <p role="alert" className="text-error text-[10px] font-medium">
                  {errors.firstName.message}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                placeholder="Durden"
                type="text"
                className={`dark:border ${
                  errors.lastName ? "dark:ring-error" : ""
                }`}
                {...register("lastName")}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName && (
                <p role="alert" className="text-error text-[10px] font-medium">
                  {errors.lastName.message}
                </p>
              )}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="youremail@host.com"
              type="email"
              className={`dark:border ${errors.email ? "dark:ring-error" : ""}`}
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p role="alert" className="text-error text-[10px] font-medium">
                {errors.email.message}
              </p>
            )}
            {serverErrors.email && (
              <p role="alert" className="text-error text-[10px] font-medium">
                email already exists!
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="+91"
              type="tel" // Use type="tel" for phone input
              className={`dark:border ${errors.phone ? "dark:ring-error" : ""}`}
              {...register("phone")}
              onInput={handlePhoneInput} // Handle numeric input only
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className="text-error text-[10px] font-medium">
                Invalid phone no!
              </p>
            )}
            {serverErrors.phone && (
              <p role="alert" className="text-error text-[10px] font-medium">
                Phone already exists
              </p>
            )}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn bg-dark dark:bg-foreground w-full text-white rounded-md h-10 font-medium flex justify-center items-center"
            type="submit"
            disabled={loading}
          >
            {loading ? <div className="spinner"></div> : "Enquire now →"}
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    );
  }
