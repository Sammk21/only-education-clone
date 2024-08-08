"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { EnquiryFrom } from "./enquiryfrom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BottomGradient } from "../account/components/register";
import { UserType } from "@/types/types";

interface Props {
  title?: string;
  user: UserType;
  id: number;
}

export function EnquiryDialog({ title, user, id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-col">
        <DialogTrigger asChild>
          <Button
            className="hover:border-green-500 bg-orange-500 hover:bg-orange-400 text-light "
            variant={"outline"}
          >
            Enquire now
            <BottomGradient />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-xl">
          <DialogHeader>
            <DialogTitle>Send Enquiry</DialogTitle>
            <DialogDescription>
              Our experts will contact you as soon as possible
            </DialogDescription>
          </DialogHeader>
          <EnquiryFrom
            title={title}
            onClose={() => setIsOpen(false)}
            setStatus={setStatus}
            user={user}
            id={id}
          />
        </DialogContent>
      </div>
    </Dialog>
  );
}
