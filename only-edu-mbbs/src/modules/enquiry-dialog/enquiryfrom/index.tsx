"use client";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/modules/account/components/register";
import { Label } from "@/modules/account/components/ui/label";
import { Input } from "@/modules/account/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { enquiryFormSchema, maskPhoneNumber } from "@/utils/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { UserType } from "@/types/types";
import { enquiryAction } from "@/app/data/actions/enquiry-action";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface EnquiryFromProps {
  onClose: () => void;
  setStatus: React.Dispatch<React.SetStateAction<null | "success" | "error">>;
  title?: string;
  user: UserType;
  id: number;
}

const INITIAL_STATE = {
  data: null,
};

export function EnquiryFrom({ title, user, id, onClose }: EnquiryFromProps) {
  const form = useForm<z.infer<typeof enquiryFormSchema>>({
    resolver: zodResolver(enquiryFormSchema),
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(formData: z.infer<typeof enquiryFormSchema>) {
    const userId = user.data?.id;
    const response = await enquiryAction(INITIAL_STATE, formData, userId, id);
    if (response.success) {
      toast.info("Enquiry has been sent");
      setIsSubmitted(true);
      setTimeout(onClose, 2000); // Close the tab after 2 seconds
    } else {
      toast.error("Internal server error");
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label className="text-accent" htmlFor="firstName">
            First name
          </Label>
          <Input
            id="firstName"
            placeholder="Tyler"
            type="text"
            value={user.data?.firstName}
            disabled={user.data?.firstName ? true : false}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label className="text-accent" htmlFor="lastName">
            Last name
          </Label>
          <Input
            id="lastName"
            placeholder="Durden"
            defaultValue={user.data?.lastName}
            disabled={user.data?.lastName ? true : false}
            type="text"
          />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label className="text-accent" htmlFor="email">
          Email Address
        </Label>
        <Input
          id="email"
          value={user.data?.email}
          disabled={true}
          placeholder="youremail@host.com"
          type="email"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label className="text-accent" htmlFor="for">
          For
        </Label>
        <Input
          id="for"
          placeholder=""
          value={title || "college"}
          disabled={true}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label className="text-accent" htmlFor="phone">
          Phone
        </Label>
        <Input
          id="phone"
          placeholder="+91"
          value={maskPhoneNumber(user.data?.phone)}
          disabled={true}
          type="tel"
        />
      </LabelInputContainer>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="UG">UG</SelectItem>
                      <SelectItem value="PG">PG</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the level you want to study in
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="specialization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialization</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Specialization" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Management">Management</SelectItem>
                      <SelectItem value="Medical">Medical</SelectItem>
                      <SelectItem value="Pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the specialization you want to study in
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitted}>
            {isSubmitted ? "Applied" : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
