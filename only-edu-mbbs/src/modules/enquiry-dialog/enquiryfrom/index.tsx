"use client";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/modules/account/components/register";
import { Label } from "@/modules/account/components/ui/label";
import { Input } from "@/modules/account/components/ui/input";
import React, { ErrorInfo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { enquiryFormSchema } from "@/utils/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Selectlevel, SelectSpecialization } from "../combo-box";
import { UserType } from "@/types/types";
import { enquiryAction } from "@/app/data/actions/enquiry-action";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
import Link from "next/link";
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

export function EnquiryFrom({ title, user, id }: EnquiryFromProps) {
  const maskPhoneNumber = (username: string | undefined) => {
    if (!username) return;
    return username.replace(/\d{6}(\d{4})/, "******$1");
  };

  const form = useForm<z.infer<typeof enquiryFormSchema>>({
    resolver: zodResolver(enquiryFormSchema),
  });

  async function onSubmit(data: z.infer<typeof enquiryFormSchema>) {
    const userId = user.data?.id;
    const response = await enquiryAction(INITIAL_STATE, data, userId, id);
    if (response.success) {
      toast.info("Enquiry has been sent");
    } else {
      toast.error("internal server error");
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
            disabled={true}
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
            disabled={true}
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
        <Label className="text-accent" htmlFor="phone">
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
          value={maskPhoneNumber(user.data?.username)}
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
                <FormLabel>level</FormLabel>
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
                <FormLabel>specialization</FormLabel>
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
