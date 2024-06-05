// import React from "react";
// import { LOGIN_VIEW } from "../../templates/login-template";
// import { SubmitButton } from "../submit-button";
// import ErrorMessage from "../error-message";
// import Input from "../input-box";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { BottomGradient, LabelInputContainer } from "../register";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { LOGIN_VIEW } from "../../templates/login-template";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Login = ({ setCurrentView }: Props) => {
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border dark:border-border border-borderLight">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Only Educations
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Only education if you can because we don&apos;t have a login
        flow yet
      </p>
      {/* onSubmit={handleSubmit} */}
      <form className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn  to-neutral-600 block bg-accent/60  dark:bg-foreground w-full text-white rounded-md h-10 font-medium  "
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20  dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20 dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>

          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20  dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
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
