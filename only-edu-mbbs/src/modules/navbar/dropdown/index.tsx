"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { navbarLinks } from "@/app/json/navLink"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


interface SubmenuItem {
  id: number;
  title: string;
  href: string;
  submenu?: SubmenuItem[];
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href="#"
          ref={ref}
          className={cn(
            "block select-none py-1 hover:underline hover:outline px-3 leading-none no-underline outline-none hover:bg-accent/20  duration-200 rounded-2xl hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="flex flex-col flex-wrap text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const SubMenuSection = ({
  title,
  items,
}: {
  title: string;
  items: SubmenuItem[];
}) => {
  return (
    <div className="mb-4 h-full ">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <ul className=" flex-col h-full justify-center  ">
        {items.map((item) => (
          <ListItem key={item.id} title={item.title} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

const renderSubMenu = (submenu: SubmenuItem[]) => {
  return submenu.map((section) => (
    <SubMenuSection
      key={section.id}
      title={section.title}
      items={section.submenu || []}
    />
  ));
};

export function NavbarDrop() {
  return (
    <NavigationMenuList className="flex gap-y-2 w-full justify-center ">
      {navbarLinks.navbar.map((navItem) => (
        <NavigationMenuItem key={navItem.id}>
          {navItem.submenu ? (
            <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
          ) : (
            <Link
              className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href={navItem.href}
            >
              {navItem.title}
            </Link>
          )}

          <NavigationMenuContent>
            <div className=" flex gap-x-4 w-screen max-h-[60dvh] justify-between p-3 ">
              {navItem.submenu && renderSubMenu(navItem.submenu)}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  );
}
