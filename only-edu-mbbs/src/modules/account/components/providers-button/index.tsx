import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { BottomGradient } from "../register";

export const GoogleButton = () => {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://admin.onlyeducation.co.in";
  const path = "/api/connect/google";
  const url = new URL(backendUrl + path);

  return (
    <div className="flex flex-col space-y-4">
      <Link
        href={url.href}
        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20 dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="button"
      >
        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
          Google
        </span>
        <BottomGradient />
      </Link>
    </div>
  );
};
