"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/util/cn";
import {
  registerUserAction,
  // verifyOtpAction,
} from "@/app/data/actions/auth-actions";
import { LOGIN_VIEW } from "../../templates/login-template";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const INITIAL_STATE = {
  data: null,
};

interface response {
  success: boolean;
  details: string;
}

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

export interface IFormInput {
  firstName?: string;
  lastName?: string;
  phone?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export function Register({ setCurrentView }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await registerUserAction(INITIAL_STATE, data);
    if (response.success === true) {
      router.push(`/verify?dh=${response.userId}`);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-light mb-6 dark:bg-black border border-border border-borderLight">
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
            <Label htmlFor="firstName">
              First name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="Tyler"
              type="text"
              {...register("firstName")}
              // aria-invalid={firstName ? "true" : "false"}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              placeholder="Durden"
              type="text"
              {...register("lastName")}
              // aria-invalid={lastName ? "true" : "false"}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              // aria-invalid={phone ? "true" : "false"}
            />
            <span className="h-full flex pt-px justify-center text-accent items-center absolute top-0 left-0 text-sm px-1">
              <IndianFlagSvg /> +91
            </span>
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            {...register("email")}

            // aria-invalid={email ? "true" : "false"}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password")}
            // aria-invalid={password ? "true" : "false"}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">
            Confirm Password <span className="text-red-500">*</span>
          </Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            {...register("confirmPassword")}

            // aria-invalid={confirmPassword ? "true" : "false"}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br disabled:bg-dark/50 relative group/btn bg-dark dark:bg-foreground w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="flex flex-col space-y-4">
          {/* <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20 dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button> */}
          {/* <Strapierror={strapiError} /> */}
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
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[1.5px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[1.5px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
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

const IndianFlagSvg = () => {
  return (
    <svg
      width="25px"
      height="13px"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1200" height="267" fill="#FF9933" />
      <rect y="267" width="1200" height="267" fill="white" />
      <rect y="533" width="1200" height="267" fill="#128807" />
      <circle cx="600" cy="400" r="100.5" stroke="#3333A0" stroke-width="13" />
      <path
        d="M606 382L604 381.5L606 362.5L624 311.5L613.5 362.5L606 382Z"
        fill="#3333A0"
      />
      <path
        d="M601.234 381.752L599.173 381.792L596.142 362.929L600.199 308.998L603.382 360.97L601.234 381.752Z"
        fill="#3333A0"
      />
      <path
        d="M596.833 382.103L594.85 382.665L587.125 365.192L577.345 312L593.63 361.458L596.833 382.103Z"
        fill="#3333A0"
      />
      <path
        d="M592.8 383.184L591.055 384.282L578.723 369.69L554.363 321.403L583.913 364.275L592.8 383.184Z"
        fill="#3333A0"
      />
      <path
        d="M588.531 386.083L587.12 387.586L571.505 376.578L535.749 336L575.161 370.029L588.531 386.083Z"
        fill="#3333A0"
      />
      <path
        d="M585.833 389.76L584.857 391.576L566.93 384.972L521.911 355L568.771 377.701L585.833 389.76Z"
        fill="#3333A0"
      />
      <path
        d="M583.898 392.995L583.444 395.006L564.403 393.446L513 376.632L564.229 385.949L583.898 392.995Z"
        fill="#3333A0"
      />
      <path
        d="M581.767 398.978L581.775 401.04L562.867 403.779L509.006 398.89L561.021 396.51L581.767 398.978Z"
        fill="#3333A0"
      />
      <path
        d="M581.974 403.552L582.549 405.531L565.127 413.37L512 423.498L561.35 406.89L581.974 403.552Z"
        fill="#3333A0"
      />
      <path
        d="M584.154 407.583L585.235 409.339L570.523 421.527L522 445.413L565.16 416.284L584.154 407.583Z"
        fill="#3333A0"
      />
      <path
        d="M616.417 391.345L615.353 389.579L630.182 377.534L678.934 354.119L635.494 382.829L616.417 391.345Z"
        fill="#3333A0"
      />
      <path
        d="M609.929 384.517L608.132 383.506L615.088 365.712L645.94 321.291L622.321 367.696L609.929 384.517Z"
        fill="#3333A0"
      />
      <path
        d="M617.99 395.651L617.434 393.666L634.931 385.994L688.152 376.375L638.646 392.51L617.99 395.651Z"
        fill="#3333A0"
      />
      <path
        d="M614.521 388L613.029 386.577L624.153 371.045L664.996 335.593L630.674 374.75L614.521 388Z"
        fill="#3333A0"
      />
      <path
        d="M617.546 402.155L617.481 400.094L636.306 396.836L690.282 400.242L638.352 404.051L617.546 402.155Z"
        fill="#3333A0"
      />
      <path
        d="M616.957 406.769L617.428 404.762L636.455 406.483L687.713 423.733L636.565 413.983L616.957 406.769Z"
        fill="#3333A0"
      />
      <path
        d="M614.609 409.933L615.604 408.128L633.459 414.926L678.15 445.384L631.538 422.176L614.609 409.933Z"
        fill="#3333A0"
      />
      <path
        d="M611.083 412.385L612.513 410.9L627.992 422.099L663.248 463.111L624.256 428.602L611.083 412.385Z"
        fill="#3333A0"
      />
      <path
        d="M607.574 415.431L609.329 414.349L621.527 429.053L645.446 477.56L616.288 434.42L607.574 415.431Z"
        fill="#3333A0"
      />
      <path
        d="M603.662 417.986L605.649 417.435L613.272 434.953L622.743 488.201L606.746 438.649L603.662 417.986Z"
        fill="#3333A0"
      />
      <path
        d="M598.333 417.539L600.394 417.481L603.592 436.317L600.011 490.282L596.369 438.339L598.333 417.539Z"
        fill="#3333A0"
      />
      <path
        d="M593.997 417.037L596.006 417.5L594.36 436.534L577.314 487.861L586.862 436.674L593.997 417.037Z"
        fill="#3333A0"
      />
      <path
        d="M589.684 415.655L591.485 416.659L584.602 434.481L553.933 479.027L577.362 432.526L589.684 415.655Z"
        fill="#3333A0"
      />
      <path
        d="M585.411 411.661L586.928 413.057L576.076 428.781L535.857 464.94L569.491 425.19L585.411 411.661Z"
        fill="#3333A0"
      />
      <path
        d="M619 400C619 410.493 610.493 419 600 419C589.507 419 581 410.493 581 400C581 389.507 589.507 381 600 381C601.372 381 602.71 381.145 604 381.422C604.681 381.568 605.348 381.75 606 381.967C613.553 384.479 619 391.603 619 400Z"
        fill="#3333A0"
      />
      <circle cx="693" cy="388" r="5" fill="#3333A0" />
      <circle cx="686" cy="364" r="5" fill="#3333A0" />
      <circle cx="674" cy="343" r="5" fill="#3333A0" />
      <circle cx="657" cy="326" r="5" fill="#3333A0" />
      <circle cx="636" cy="314" r="5" fill="#3333A0" />
      <circle cx="612" cy="308" r="5" fill="#3333A0" />
      <circle cx="588" cy="307" r="5" fill="#3333A0" />
      <circle cx="565" cy="314" r="5" fill="#3333A0" />
      <circle cx="544" cy="326" r="5" fill="#3333A0" />
      <circle cx="526" cy="343" r="5" fill="#3333A0" />
      <circle cx="514" cy="364" r="5" fill="#3333A0" />
      <circle cx="508" cy="388" r="5" fill="#3333A0" />
      <circle cx="508" cy="412" r="5" fill="#3333A0" />
      <circle cx="514" cy="435" r="5" fill="#3333A0" />
      <circle cx="527" cy="457" r="5" fill="#3333A0" />
      <circle cx="543" cy="474" r="5" fill="#3333A0" />
      <circle cx="565" cy="486" r="5" fill="#3333A0" />
      <circle cx="588" cy="493" r="5" fill="#3333A0" />
      <circle cx="612" cy="493" r="5" fill="#3333A0" />
      <circle cx="636" cy="486" r="5" fill="#3333A0" />
      <circle cx="657" cy="473" r="5" fill="#3333A0" />
      <circle cx="674" cy="456" r="5" fill="#3333A0" />
      <circle cx="686" cy="435" r="5" fill="#3333A0" />
      <circle cx="693" cy="412" r="5" fill="#3333A0" />
    </svg>
  );
};
