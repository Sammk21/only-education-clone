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

export function EnquiryDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="hover:border-green-500 hover:bg-light"
          variant={"outline"}
        >
          Enquire now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl bg-white rounded-xl" status={status}>
        <DialogHeader>
          <DialogTitle>Send Enquiry</DialogTitle>
          <DialogDescription>
            Our experts will contact you as soon as possible
          </DialogDescription>
        </DialogHeader>
        <EnquiryFrom onClose={() => setIsOpen(false)} setStatus={setStatus} />
      </DialogContent>
    </Dialog>
  );
}
