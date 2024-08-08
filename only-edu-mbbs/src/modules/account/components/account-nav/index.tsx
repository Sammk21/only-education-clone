"use client";
import { usePathname } from "next/navigation";
import { UserType } from "@/types/types";
import Link from "next/link";
import { logoutAction } from "@/app/data/actions/auth-actions";
import { BookUser, User } from "lucide-react";
import { toast } from "sonner";
import { RiSettingsLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const AccountNav = ({
  user,
}: {
  user: Omit<UserType, "password_hash"> | null;
}) => {
  const route = usePathname();

  const handleLogout = async () => {
    toast.error("you are logged out");
    await logoutAction();
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex  w-full flex-col my-2 px-4">
        <AccountNavLink href="/auth" route={route!}>
          <BookUser className="mr-2 h-4 w-4" />
          Overview
        </AccountNavLink>
        <AccountNavLink href="/auth/profile" route={route!}>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </AccountNavLink>
      </div>
      <div className="px-2 pb-3 sm:block hidden">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full  mx-auto border-none text-xs mt-3 bg-red-500 text-white hover:bg-red-400"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

type AccountNavLinkProps = {
  href: string;
  route: string;
  children: React.ReactNode;
};

const AccountNavLink = ({ href, route, children }: AccountNavLinkProps) => {
  const active = route === href;
  return (
    <Link
      href={href}
      className={` py-2 flex items-center ${
        active ? "text-dark" : " text-accent "
      }`}
    >
      {children}
    </Link>
  );
};

export default AccountNav;
