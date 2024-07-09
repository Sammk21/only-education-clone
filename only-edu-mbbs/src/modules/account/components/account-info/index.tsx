import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import useToggleState from "@/lib/use-toggle-state";
import { useFormStatus } from "react-dom";
import { cn } from "@/util/cn";
import { Badge } from "@/components/ui/badge";

type AccountInfoProps = {
  label: string;
  currentInfo: string | React.ReactNode;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  clearState: () => void;
  children?: React.ReactNode;
};

const AccountInfo = ({
  label,
  currentInfo,
  isSuccess,
  isError,
  clearState,
  errorMessage = "An error occurred, please try again",
  children,
}: AccountInfoProps) => {
  const { state, close, toggle } = useToggleState();

  const { pending } = useFormStatus();

  const handleToggle = () => {
    clearState();
    setTimeout(() => toggle(), 100);
  };

  useEffect(() => {
    if (isSuccess) {
      close();
    }
  }, [isSuccess, close]);

  return (
    <div className="text-sm relative my-3">
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <span className=" text-dark capitalize">{label}</span>
          <div className="flex items-center flex-1 basis-0 justify-end gap-x-4">
            {typeof currentInfo === "string" ? (
              <span className="text-dark/60">{currentInfo}</span>
            ) : (
              currentInfo
            )}
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            className="w-[100px] min-h-[25px] py-1 z-20"
            onClick={handleToggle}
            type={state ? "reset" : "button"}
          >
            {state ? "Cancel" : "Edit"}
          </Button>
        </div>
      </div>

      {/* Success state */}
      <Disclosure>
        <DisclosurePanel
          static
          className={cn(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
            {
              "max-h-[1000px] opacity-100": isSuccess,
              "max-h-0 opacity-0": !isSuccess,
            }
          )}
        >
          <Badge className="p-2 my-4 bg-green" color="green">
            <span>{label} updated successfully</span>
          </Badge>
        </DisclosurePanel>
      </Disclosure>

      {/* Error state */}
      {/* <Disclosure>
        <DisclosurePanel
          static
          className={cn(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
            {
              "max-h-[1000px] opacity-100": isError,
              "max-h-0 opacity-0": !isError,
            }
          )}
        >
          <Badge className="p-2 my-4 bg-red-500" color="red">
            <span>{errorMessage}</span>
          </Badge>
        </DisclosurePanel>
      </Disclosure> */}

      <Disclosure>
        <DisclosurePanel
          static
          className={cn(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
            {
              "max-h-[1000px] opacity-100": state,
              "max-h-0 opacity-0": !state,
            }
          )}
        >
          <div className="flex flex-col gap-y-2 py-4 z-10">
            <div>{children}</div>
            <div className="flex items-center justify-end mt-2">
              <Button
                // isLoading={pending}
                className="w-full small:max-w-[140px]"
                type="submit"
              >
                Save changes
              </Button>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default AccountInfo;
