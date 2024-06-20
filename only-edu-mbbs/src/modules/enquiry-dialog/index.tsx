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

export function EnquiryDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="sm:px-8 py-2 px-2 text-xs rounded-full relative text-dark sm:text-sm hover:shadow-2xl hover:shadow-dark/30 transition duration-200 border border-dark/20">
          Enquire now
        </button>
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
