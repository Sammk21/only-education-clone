"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navbarLinks } from "@/app/json/navLink";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            "block select-none py-2 px-4 leading-none no-underline outline-none hover:bg-gray-100 hover:text-gray-900 duration-200 rounded-md focus:bg-gray-100 focus:text-gray-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-sm text-gray-500">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavbarDrop() {
  const [selectedMenu, setSelectedMenu] = React.useState<number | null>(null);

  return (
    <NavigationMenuList className="flex gap-y-2 w-full justify-center">
      {navbarLinks.navbar.map((navItem) => (
        <NavigationMenuItem key={navItem.id}>
          {navItem.submenu ? (
            <NavigationMenuTrigger className="inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 rounded-md">
              {navItem.title}
            </NavigationMenuTrigger>
          ) : (
            <Link
              className="inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 rounded-md"
              href={navItem.href}
            >
              {navItem.title}
            </Link>
          )}

          {navItem.submenu && (
            <NavigationMenuContent className="">
              <div className="w-[800px] max-h-[60vh] grid grid-cols-5  bg-white  rounded-md shadow-lg">
                <div className="col-span-2 border-r ">
                  <ul>
                    {navItem.submenu.map((item) => (
                      <li
                        key={item.id}
                        className={cn(
                          "relative border-b-orange-400 group hover:border-l-2 outline-l-orange-500 py-1.5 px-2.5 text-black",
                          selectedMenu === item.id ? "bg-gray-100 border-l-2 border-l-orange-500" : "hover:bg-gray-50 "
                        )}
                        onMouseOver={() => setSelectedMenu(item.id)}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3 ">
                  {navItem.submenu
                    .filter((item) => item.id === selectedMenu)
                    .flatMap((item) =>
                      item.submenu ? (
                        <ul key={item.id} className="bg-gray-100">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id} className="p-2 rounded-md hover:underline hover:bg-gray-50">
                              <Link href={subItem.href} className="text-sm text-gray-700">
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div key={item.id} className="p-2 text-sm text-gray-500">
                          No further submenus
                        </div>
                      )
                    )}
                </div>
              </div>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  );
}
