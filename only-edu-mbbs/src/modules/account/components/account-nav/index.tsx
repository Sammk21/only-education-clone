"use client";
import { usePathname } from "next/navigation";
import { UserType } from "@/types/types";

import Link from "next/link";

import { logoutAction } from "@/app/data/actions/auth-actions";
import { cn } from "@/util/cn";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  AccordionItem,
  Accordion,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BookUser, User } from "lucide-react";
import { toast } from "sonner";

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
    <div className="flex  w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 rounded-xl bg-muted/40 p-4 md:gap-8 md:p-10">
        <Accordion
          defaultValue="item-1"
          type="single"
          collapsible
          className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
        >
          <AccordionItem className=" pb-3 w-full" value="item-1">
            <AccordionTrigger className="text-2xl">Settings</AccordionTrigger>
            <AccordionContent>
              <AccountNavLink href="/auth" route={route!}>
                <BookUser className="mr-2 h-4 w-4" />
                Overview
              </AccountNavLink>
            </AccordionContent>
            <AccordionContent>
              <AccountNavLink href="/auth/profile" route={route!}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </AccountNavLink>
            </AccordionContent>
            <AccordionContent className="w-full">
              <Button
                className="w-full"
                variant={"destructive"}
                type="button"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
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
      className={` flex items-center ${
        active ? "text-dark font-semibold" : " text-accent "
      }`}
    >
      {children}
    </Link>
  );
};

export default AccountNav;
