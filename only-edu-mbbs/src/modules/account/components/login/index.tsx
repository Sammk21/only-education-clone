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
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handlePhoneInput } from "@/utils/utils";
import { GoogleButton } from "../providers-button";
import { useRouter } from "next/navigation";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

export interface ILoginFormInput {
  phone: string;
  password: string;
}

const schema = zod.object({
  phone: zod
    .string()
    .nonempty("Phone number is required")
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  password: zod.string().min(8, "Password must be at least 8 characters"),
});

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

const Login = ({ setCurrentView }: Props) => {
  const [strapiError, setStrapiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = async (data) => {
    setIsLoading(true); // Start loading
    const res = await loginUserAction(INITIAL_STATE, data);
    setIsLoading(false); // End loading
    if (res?.message) {
      setStrapiError(res.message);
    } else {
      toast.success("You have logged in successfully");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mb-6 rounded-2xl p-4 md:p-8 shadow-input bg-light dark:bg-black border dark:border-border border-borderLight">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Only Educations
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Only Education
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input
            autoComplete="tel"
            id="phone"
            placeholder="Enter your phone number"
            type="tel"
            className={`border ${errors.phone ? "border-red-500" : ""}`}
            {...register("phone")}
            aria-invalid={errors.phone ? "true" : "false"}
            onChange={handlePhoneInput} // Added onChange handler
          />
          {errors.phone && (
            <p role="alert" className="text-red-500 text-xs font-medium">
              {errors.phone.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            autoComplete="current-password"
            id="password"
            placeholder="••••••••"
            type="password"
            className={`border ${errors.password ? "border-red-500" : ""}`}
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p role="alert" className="text-red-500 text-xs font-medium">
              {errors.password.message}
            </p>
          )}
        </LabelInputContainer>

        <Button
          className="bg-dark relative group/btn dark:bg-foreground w-full text-white rounded-md h-10 font-medium"
          type="submit"
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
              ></path>
            </svg>
          ) : (
            <>
              Login &rarr;
              <BottomGradient />
            </>
          )}
        </Button>
        <StrapiErrors error={strapiError} />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <GoogleButton />
      </form>
      <span className="w-full flex justify-center items-center gap-x-2 text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <span>Not a member?</span>
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
