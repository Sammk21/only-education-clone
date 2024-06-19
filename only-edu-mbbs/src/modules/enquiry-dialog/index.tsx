import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Register } from "../account/components/register";
import { EnquiryFrom } from "./enquiryfrom";

export function EnquiryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="sm:px-8 py-2 px-2 text-xs rounded-full relative  text-dark sm:text-sm hover:shadow-2xl hover:shadow-dark/30 transition duration-200 border border-dark/20">
          Enquire now
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1080px]">
        <DialogHeader>
          <DialogTitle>Send Enquiry</DialogTitle>
          <DialogDescription>
            Our experts will contact you as soon as possible
          </DialogDescription>
        </DialogHeader>
        <EnquiryFrom />
      </DialogContent>
    </Dialog>
  );
}
