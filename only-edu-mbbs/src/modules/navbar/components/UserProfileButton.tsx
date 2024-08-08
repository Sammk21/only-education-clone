"use client";
import { logoutAction } from "@/app/data/actions/auth-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Edit, LogOutIcon, User } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const handleLogout = async () => {
  toast.error("you are logged out");
  await logoutAction();
};

interface Props {
  firstName: string | undefined | null;
}

export const UserProfileButton = ({ firstName }: Props) => {
  return (
    <div className="flex items-center gap-x-2 text-dark text-sm">
      <Avatar>
        <AvatarImage
          src="https://admin.onlyeducation.co.in/uploads/depositphotos_137014128_stock_illustration_user_profile_icon_852499f6e7.jpg"
          alt="@shadcn"
          sizes="30px"
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
          <DropdownMenuGroup className="font-medium">
            <Link href={"/auth"}>
              <DropdownMenuItem className="hover:bg-accent/10 ">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <Link href={"/auth/profile"}>
              <DropdownMenuItem className="hover:bg-accent/10 ">
                <Edit className="mr-2 h-4 w-4" />
                <span>Update profile </span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-accent/10 text-red-500">
              <div onClick={handleLogout} className="flex items-center">
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>logout</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
