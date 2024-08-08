import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const ResetButton = async () => {
  const router = useRouter();

  const pathname = usePathname();

  const handleReset = () => {
    // Clear all filter params from the URL
    router.push(pathname);
  };

  return (
    <div className="relative">
      <form>
        <Button
          onClick={handleReset}
          className="hover:border-red-500 transition-colors hover:bg-light absolute top-0 left-0 "
          variant={"outline"}
          type="submit"
        >
          reset
        </Button>
      </form>
    </div>
  );
};

export default ResetButton;
