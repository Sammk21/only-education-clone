"use client";
import { usePathname } from "next/navigation";
import { UserType } from "@/types/types";
import Link from "next/link";
import { logoutAction } from "@/app/data/actions/auth-actions";
import { BookUser, User } from "lucide-react";
import { toast } from "sonner";
import { RiSettingsLine } from "react-icons/ri";

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
    <div className="flex  w-full flex-col my-2">
      <AccountNavLink href="/auth" route={route!}>
        <BookUser className="mr-2 h-4 w-4" />
        Overview
      </AccountNavLink>
      <AccountNavLink href="/auth/profile" route={route!}>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
      </AccountNavLink>
      <AccountNavLink href="/auth/settings" route={route!}>
        <RiSettingsLine className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </AccountNavLink>
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
