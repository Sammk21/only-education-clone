"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/util/cn";
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_VIEW } from "../../templates/login-template";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function Register({ setCurrentView }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-light mb-6 dark:bg-black border dark:border-border border-borderLight">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Only Educations
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Only education if you can because we don&apos;t have a login
        flow yet
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
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
                errors.lastName ? "dark:border-error" : ""
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
            placeholder="projectmayhem@fc.com"
            type="email"
            className={`dark:border ${errors.email ? "dark:border-error" : ""}`}
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            className={`dark:border ${
              errors.password ? "dark:border-error" : ""
            }`}
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              Password is required
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              Password must be at least 8 characters
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            className={`dark:border ${
              errors.confirmPassword ? "dark:border-error" : ""
            }`}
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword?.type === "validate" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              Passwords do not match
            </p>
          )}
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn bg-dark dark:bg-foreground w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20 dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
      <span className="w-full flex justify-center items-center gap-x-2 text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <span> Already a member? </span>
        <span
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-bluelink underline cursor-pointer"
        >
          Sign in here
        </span>
      </span>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
