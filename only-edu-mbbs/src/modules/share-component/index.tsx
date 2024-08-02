import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";

export const ShareComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IoMdShare className="text-orange-600 stroke-1 text-xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Share</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-start items-center gap-x-2 text-pink-600">
          <FaInstagram />
          Instagram
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-start items-center gap-x-2 text-blue-600">
          <FaFacebookF />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-start items-center gap-x-2 text-blue-500">
          <FaLinkedin />
          LinkdIn
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-start items-center gap-x-2 text-green-600">
          <FaWhatsapp />
          Whatsapp
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-start items-center gap-x-2">
          <FaXTwitter />
          X-Twitter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
