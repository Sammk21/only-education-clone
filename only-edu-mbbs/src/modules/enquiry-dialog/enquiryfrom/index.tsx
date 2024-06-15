"use client";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/modules/account/components/register";
import { Label } from "@/modules/account/components/ui/label";
import { Input } from "@/modules/account/components/ui/input";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
interface EnquiryFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

export function EnquiryFrom() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EnquiryFormInput>();

  const onSubmit: SubmitHandler<EnquiryFormInput> = async (data) => {};

  return (
    <div className="min-w-2xl grid grid-cols-2 w-full mx-auto rounded-none md:rounded-2xl overflow-hidden  shadow-input  mb-6 dark:bg-black border dark:border-border border-borderLight">
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
              {...register("firstName", {
                required: true,
                maxLength: 15,
                minLength: 2,
                pattern: /^[A-Za-z]+$/i,
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "pattern" && (
              <p role="alert" className="text-error text-[10px] font-medium">
                Enter a valid name
              </p>
            )}
            {errors.firstName?.type === "required" && (
              <p role="alert" className="text-error text-[10px] font-medium">
                First name is required
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
              {...register("lastName", {
                required: true,
                maxLength: 15,
                minLength: 2,
                pattern: /^[A-Za-z]+$/i,
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "pattern" && (
              <p role="alert" className="text-error text-[10px] font-medium">
                Enter a valid name
              </p>
            )}
            {errors.lastName?.type === "required" && (
              <p role="alert" className="text-error text-[10px] font-medium">
                Last name is required
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
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "pattern" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              Enter a valid email address
            </p>
          )}
          {errors.email?.type === "required" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              Email is required
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">phone</Label>
          <Input
            id="phone"
            placeholder="+91"
            type="phone"
            className={`dark:border ${errors.phone ? "dark:ring-error" : ""}`}
            {...register("phone", {
              required: true,
              minLength: 10,
            })}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone?.type === "required" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              phone is required
            </p>
          )}
          {errors.phone?.type === "minLength" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              Enter valid phone number
            </p>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn bg-dark dark:bg-foreground w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Enquire now &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}
