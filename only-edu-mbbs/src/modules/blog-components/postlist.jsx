import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { Merriweather } from "next/font/google";
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
import { CiBookmark } from "react-icons/ci";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export default function PostList({ post, href }) {
  const imageUrl = "https://admin.onlyeducation.co.in";
  const image = post.image.url;
  console.dir(image);

  return (
    <section>
      <div className="border-b border-b-borderLight dark:border-b-border mt-5">
        <div className={cx("group cursor-pointer grid grid-cols-6 gap-4")}>
          <Link
            href={`${href}/${post.slug}`}
            className="col-span-4 flex flex-col justify-between"
          >
            <div className="flex items-center">
              <div className="font-semibold sm:text-xl text-sm mb-2 line-clamp-2 text-dark">
                <h5 className="">
                  {post.live && (
                    <span className="relative w-12 h-4 bg-red-500 rounded-full flex justify-end items-center text-white p-1 text-xs mr-2">
                      <span className="livenow absolute left-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                      <p>LIVE</p>
                    </span>
                  )}
                  {post.title}
                </h5>
              </div>
            </div>
            <p
              className={`text-sm line-clamp-2 sm:line-clamp-3 ${merriweather.className}`}
            >
              {post.description}
            </p>
          </Link>
          <Link
            href={`${href}/${post.slug}`}
            className="relative col-span-2 h-20 w-20 sm:h-28 sm:w-28"
          >
            <Image
              src={imageUrl + image}
              alt="Thumbnail"
              className="object-cover transition-all"
              fill={true}
            />
          </Link>
          <div className="col-span-6 sm:py-3 pb-2 flex justify-between items-center">
            <Link
              href="#"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <div className="bg-dark/5 rounded-2xl w-fit px-2 py-1 text-[10px] sm:text-sm capitalize">
                {post.category.name}
              </div>
            </Link>
            <div className="flex sm:gap-4 items-center">
              <CiBookmark className="text-black text-xl" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <CiShare1 className="text-black text-xl" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
