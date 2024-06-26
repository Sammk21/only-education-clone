"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const MenuItems = ({ items }) => {
  const path = usePathname();
  const isActive = (href) => path === href;

  return (
    <li className="menu-items hover:text-dark/50 dark:text-dark/80 items-center gap-r-1 ">
      <Link
        className={`py-2 pl-1 mx-2  mr-1  hover:bg-accent/20 transition duration-200 rounded-2xl ${
          isActive(items?.href) ? "bg-accent/20" : ""
        } flex items-center gap-x-2 `}
        href={items?.href || "#"}
      >
        {items.label}
      </Link>
    </li>
  );
};
