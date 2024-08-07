/*
"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import {
  FacebookShareButton,
  FacebookShareCount,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { usePathname } from "next/navigation";
interface Props{
url:string
}[]
export const ShareComponent = ({ url }: { url: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IoMdShare className="text-orange-600 stroke-1 text-xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 ">
        <DropdownMenuItem className="flex justify-between">
          <div className="flex gap-x-2 text-blue-500">
            <FacebookShareButton url="https://admin.onlyeducation.co.in">
              <FaFacebookF />
            </FacebookShareButton>
            Facebook
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
        <DropdownMenuItem className="text-blue-700 ">
          <div className="flex justify-start gap-x-2">
            <LinkedinShareButton url={url}>
              <FaLinkedin />
            </LinkedinShareButton>
            LinkdIn
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-green-700 ">
          <div className="flex justify-start gap-x-2">
            <WhatsappShareButton url={url}>
              <FaWhatsapp />
            </WhatsappShareButton>
            Whatsapp
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className=" ">
          <div className="flex justify-start gap-x-2">
            <WhatsappShareButton url={url}>
              <FaXTwitter />
            </WhatsappShareButton>
            X-Twitter
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

*/
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
              <FaTwitter />
            Twitter
            </TwitterShareButton>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
