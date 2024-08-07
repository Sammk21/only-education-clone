import React from "react";
import Link from "next/link";
import { Navigation, Dropdown } from "@/types/types";
import Image from "next/image";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoLogIn } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User } from "lucide-react";
import Banner from "@/components/ui/tailwind-banner";
import {NavbarDrop} from "./dropdown";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export interface NavbarProps {
  navigation: Navigation;
  dropdown: Dropdown[];
}

export const Navbar = async ({ navigation, dropdown }: NavbarProps) => {
  const user = await getUserMeLoader();
  return (
    <>
      <header className="w-screen h-20 shadow-sm fixed top-0 bg-white z-30  px-6 ">
        <div className=" grid grid-cols-[auto,1fr,auto] place-items-center h-full relative">
          <Link
            className=" col-span-1 h-9 w-24 sm:h-12 sm:w-28 relative"
            href="/"
          >
            <Image
              src={
                "https://admin.onlyeducation.co.in/uploads/Only_Edu_Logo_c0eb3ea843.png"
              }
              alt="logo"
              fill={true}
              className="object-cover object-center top-4 drop-shadow-lg"
            />
          </Link>
          <NavigationMenu className="w-full flex items-center justify-center">
            <nav>
              <div className=" hidden  xlg:block text-xs text-dark font-semibold uppercase">
                <ul className=" flex items-center justify-center   ">
                  <NavbarDrop />
                </ul>
              </div>
            </nav>
          </NavigationMenu>
          <div>
            <Link href={"/auth"}>
              <Button className="bg-gray-800 text-xs flex items-center justify-center">
                Login
                <IoLogIn className="mt-[2px] ml-1" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

interface Props {
  firstName: string | undefined | null;
}

export const AuthLoader = () => {
  return (
    <div className="relative">
      <div className="w-5 h-5 border-orange-200 border-2 rounded-full"></div>
      <div className="w-5 h-5 border-orange-500 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
  );
};

const UserProfileButton = ({ firstName }: Props) => {
  return (
    <div className="flex items-center gap-x-2  text-sm">
      <Avatar>
        <AvatarImage
          src="https://admin.onlyeducation.co.in/uploads/depositphotos_137014128_stock_illustration_user_profile_icon_852499f6e7.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <p className="flex justify-center items-center ">
            {firstName ? "hello, " + firstName : "profile"}
            <ChevronDown className="" size={15} />
          </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/auth"}>
              <DropdownMenuItem className="hover:bg-accent/10">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
