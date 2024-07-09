import React from "react";
import { MenuItems } from "./components/MenuItems";
import Link from "next/link";
import { Navigation, Dropdown, Links, UserType } from "@/types/types";
import { DropDownItems } from "./components/Dropdown";
import Image from "next/image";
import LoginButton from "../custom/LoginButton";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { ProfileAndAcc } from "../profile-&-notification-navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BottomGradient } from "../account/components/register";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import Banner from "@/components/ui/tailwind-banner";

export interface NavbarProps {
  navigation: Navigation;
  dropdown: Dropdown[];
}

export const Navbar = async ({ navigation, dropdown }: NavbarProps) => {
  const user = await getUserMeLoader();
  return (
    <>
      <header className="mb-9 w-screen top-0 fixed text-black  bg-clip-padding bg-white backdrop-filter backdrop-blur-md    z-30">
        {user?.ok && !user?.data?.verified ? (
          <Banner existingPhone={user.data.phone} userId={user.data.id} />
        ) : null}
        <nav className="flex justify-between items-center px-6 py-2  border-b">
          <Link className=" h-12 w-24 sm:h-14 sm:w-36 relative" href="/">
            <Image
              src={
                "https://admin.onlyeducation.co.in/uploads/Only_Edu_Logo_56f967fe38.png"
              }
              alt="logo"
              fill={true}
              className="object-cover object-center top-4 drop-shadow-lg"
            />
          </Link>

          <div className=" hidden 2lg:flex  text-sm font-normal">
            <ul className="flex justify-center items-cente ">
              {navigation.links.map((link: Links) => {
                return <MenuItems items={link} key={link.id} />;
              })}
              {dropdown.map((link: Dropdown) => {
                const depthLevel = 0;
                return (
                  <DropDownItems
                    items={link}
                    key={link.id}
                    depthLevel={depthLevel}
                  />
                );
              })}
            </ul>
          </div>
          {user.ok ? (
            <>
              <UserProfileButton />
            </>
          ) : (
            <Link href={"/auth"}>
              <Button
                className="relative group/btn hover:bg-light"
                variant={"outline"}
              >
                <span>Login</span>
                <BottomGradient />
              </Button>
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;

export const AuthLoader = () => {
  return (
    <div className="relative">
      <div className="w-5 h-5 border-orange-200 border-2 rounded-full"></div>
      <div className="w-5 h-5 border-orange-500 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
  );
};

const UserProfileButton = () => {
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
          <Button className="hover:bg-accent/10" variant="outline">
            Profile
          </Button>
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
