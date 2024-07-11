"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handlePhoneInput } from "@/utils/utils";
import { sendAndVerifyOtpAction } from "@/app/data/actions/auth-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";

// Define Zod schema for form validation
const PhoneSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be at most 15 digits" }),
});

type PhoneSchemaType = z.infer<typeof PhoneSchema>;

interface Props {
  userId: number;
  existingPhone: string | undefined;
  title: string;
  color: string;
}

const PhoneInputForm: React.FC<Props> = ({
  userId,
  existingPhone,
  title,
  color,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const form = useForm<PhoneSchemaType>({
    resolver: zodResolver(PhoneSchema),
    defaultValues: {
      phone: existingPhone || "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<PhoneSchemaType> = async (data) => {
    const res = await sendAndVerifyOtpAction(userId, data.phone);
    if (res) {
      setIsDrawerOpen(false);
      toast.success(`Otp sent successfully on +91 ${data.phone}`);
      router.push("/verify");
    }
  };

  return (
    <Dialog open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className={`flex-none px-3.5 py-1 text-sm ${`hover:${color}/60`} ${color} hover:bg-opacity-75  text-white shadow-sm rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900`}
          variant="default"
        >
          {title === "Brochure" && <FaLock className="mr-1" />} {title}
        </Button>
      </DialogTrigger>
      <DialogContent status={null} className="sm:max-w-[425px] rounded-lg">
        <DialogHeader>
          <DialogTitle>Verify Phone</DialogTitle>
          <DialogDescription>
            {existingPhone ? (
              <>
                Your current phone number ends in {existingPhone.slice(-4)}.
                Please confirm or update your phone number.
              </>
            ) : (
              "Enter your 10 digits phone number"
            )}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    {...field}
                    id="phone"
                    placeholder="+91"
                    onChange={(e) => {
                      handlePhoneInput(e);
                      field.onChange(e); // Ensure the value is updated in the form state
                    }}
                    type="tel"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="float-end bg-orange-500 hover:bg-orange-300"
              type="submit"
            >
              Send OTP
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PhoneInputForm;
