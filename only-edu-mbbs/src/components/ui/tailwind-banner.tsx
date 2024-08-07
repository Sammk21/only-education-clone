"use client";
import PhoneInputForm from "@/modules/phone-otp-input-dialog/phone-top-input";
import { useEffect, useState } from "react";

export interface dataProps {
  userId?: number;
  existingPhone?: string | undefined;
  ok?: boolean;
}

export default function Banner({ userId, existingPhone, ok }: dataProps) {
  const [view, setView] = useState(false);

  console.log(view);

  console.log(existingPhone);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (existingPhone === null) {
        setView(true);
      }
    }, 300); // Delay before showing the dialog for a smooth transition
    return () => clearTimeout(timeout);
  }, [existingPhone]);

  return (
    <div
      className={`w-[100vw] transition-opacity duration-300 ease-out h-[100vh] fixed top-0 backdrop-blur-sm left-0 bg-black/60 ${
        view ? "opacity-100 z-[999]" : "opacity-0 -z-[999]"
      }`}
    >
      <div className="w-full h-full relative flex items-center justify-center">
        <div
          className={`w-full sm:w-80 h-auto sm:h-36 ${
            view ? "translate-y-0" : "translate-y-full"
          } sm:translate-y-0 fixed sm:absolute top-0 sm:top-[77dvh] right-0 sm:right-4 sm:bottom-0 transition-transform delay-150 duration-300 ease-out shadow-md rounded-md isolate flex p-3 overflow-hidden bg-red-300 sm:before:flex-1`}
        >
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
              Looks like your phone number is yet to be verified. Please verify
              yourself to get more benefits.
            </p>
            <div className="flex w-full justify-between text-red-700 font-semibold text-md items-center">
              {userId && (
                <div onClick={() => setView(false)}>
                  <PhoneInputForm
                    existingPhone={existingPhone}
                    userId={userId}
                    title="Verify Phone"
                    color="bg-red-500"
                  />
                </div>
              )}

              <button onClick={() => setView(false)}>
                <p>Do it later</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 justify-end"></div>
        </div>
      </div>
    </div>
  );
}
