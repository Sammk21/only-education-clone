
"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import {
  FacebookShareButton,
  FacebookShareCount,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  url: string;
}

export const ShareComponent = ({ url }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IoMdShare className="text-orange-600 stroke-1 text-xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem className="flex justify-between">
          <div className=" text-blue-500">
            <FacebookShareButton url={url} className="flex gap-x-2">
              <FaFacebookF />
            Facebook
            </FacebookShareButton>
          </div>
          <div>
            <FacebookShareCount
              url={url}
              className="Demo__some-network__share-count"
            >
              {(count) => count}
            </FacebookShareCount>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-blue-700">
          <div className=" justify-start ">
            <LinkedinShareButton url={url} className="flex gap-x-2">
              <FaLinkedin />
            LinkedIn
            </LinkedinShareButton>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-green-700">
          <div className=" justify-start ">
            <WhatsappShareButton url={url} className="flex gap-x-2">
              <FaWhatsapp />
            Whatsapp
            </WhatsappShareButton>
          </div>
          
        
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className=" justify-start ">
            <TwitterShareButton url={url} className="flex gap-x-2">
              <FaXTwitter />
            Twitter
            </TwitterShareButton>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
