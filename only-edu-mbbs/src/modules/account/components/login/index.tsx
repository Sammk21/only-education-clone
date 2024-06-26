"use client";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { BottomGradient, LabelInputContainer } from "../register";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { LOGIN_VIEW } from "../../templates/login-template";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginUserAction } from "@/app/data/actions/auth-actions";
import { StrapiErrors, StrapiErrorsProps } from "@/modules/custom/StrapiErrors";
import { Button } from "@headlessui/react";
import { toast } from "sonner";
import { useState } from "react";
import { redirect } from "next/navigation";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

export interface ILoginFormInput {
  email: string;
  password: string;
}

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

//using fromstate to validate fields REGISTER USES REACT HOOK FORMS AND ZOD VALIDATION

const Login = ({ setCurrentView }: Props) => {
  const [strapiError, setStrapiError] = useState<StrapiErrorsProps | null>(
    null
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormInput>();

  const onSubmit: SubmitHandler<ILoginFormInput> = async (data) => {
    const res = await loginUserAction(INITIAL_STATE, data);
    if (res?.strapiErrors) {
      setStrapiError(res.strapiErrors);
    } else {
      toast.success("you have logged in successfully");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mb-6  rounded-2xl p-4 md:p-8 shadow-input bg-light dark:bg-black border dark:border-border border-borderLight">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Only Educations
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Only Education
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            className={`border ${errors.email ? "border-error" : ""}`}
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
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            className={`border ${errors.password ? "border-error" : ""}`}
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
        </LabelInputContainer>

        <Button
          className="bg-dark relative group/btn  dark:bg-foreground w-full text-white rounded-md h-10 font-medium  "
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </Button>
        <StrapiErrors error={strapiError} />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        {/* <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black  rounded-md h-10 font-medium shadow-input bg-accent/20 dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
      <span className="w-full flex justify-center items-center  gap-x-2 text-neutral-600  text-sm max-w-sm mt-2 dark:text-neutral-300">
        <span className="">Not a member?</span>
        <span
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-bluelink underline cursor-pointer"
        >
          Register here
        </span>
      </span>
    </div>
  );
};
export default Login;
