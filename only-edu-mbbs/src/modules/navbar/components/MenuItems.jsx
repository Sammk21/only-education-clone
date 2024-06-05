import Link from "next/link";
import React from "react";

export const MenuItems = ({ items }) => {
  return (
    <li className="menu-items text-dark dark:text-light dark:hover:text-light/80 hover:text-dark/50">
      <Link href={items?.href || "#"}>{items.label}</Link>
    </li>
  );
};


