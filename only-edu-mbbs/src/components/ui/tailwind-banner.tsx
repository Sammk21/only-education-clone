import PhoneInputForm from "@/modules/phone-otp-input-dialog/phone-top-input";
import { XMarkIcon } from "@heroicons/react/20/solid";

export interface dataProps {
  userId: number;
  existingPhone: string | undefined;
}

export default function Banner({ userId, existingPhone }: dataProps) {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-red-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      ></div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      ></div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 font-medium text-red-500">
          Looks like your phone number is yet to be verfied please verify
          yourself to get more benifits
        </p>
        <PhoneInputForm
          existingPhone={existingPhone}
          userId={userId}
          title="verify phone"
          color="bg-red-500"
        />
      </div>
      <div className="flex flex-1 justify-end"></div>
    </div>
  );
}
