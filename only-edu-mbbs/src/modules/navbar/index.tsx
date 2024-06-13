"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MenuItems } from "./components/MenuItems";
import Link from "next/link";
import { Navigation, Dropdown, Links } from "@/types/types";
import { DropDownItems } from "./components/Dropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface NavbarProps {
  navigation: Navigation;
  dropdown: Dropdown[];
}

const Navbar = ({ navigation, dropdown }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    //used useMotionValueEvent from framer motion to avoid unnecessary re-rendering of whole component caused by events
    setIsScrolled(latest >= 80);
  });

  return (
    <>
      <header className="mb-9 w-screen top-0 fixed bg-greenDark  dark:bg-only-green-950 z-30">
        <div
          className={`bg-only-green-900 dark:bg-only-green-950  text-white transition-all duration-300 ease-out relative overflow-hidden ${
            isScrolled ? "h-0" : "h-[2rem]"
          }`}
        >
          <div className="flex gap-5 items-center h-full justify-between px-16  ">
            <ul className="w-full flex justify-between  text-xs  sm:text-sm">
              <li>info@onlyeducation.in</li>
              <li>+91 9898989898</li>
            </ul>
            <ul className=" gap-x-2 text-lg hidden sm:flex">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
        <nav
          className={`w-screen relative bg-light dark:bg-dark justify-between  text-green-950 dark:text-light px-4 sm:px-10 transition-all  ease-in-out duration-300 border-t dark:border-t-border border-t-borderLight flex items-center  ${
            isScrolled ? "rounded-t-none h-[4rem] " : "rounded-t-3xl h-[5rem]"
          } `}
        >
          <Link className="h-14 w-36 relative" href="/">
            <span className="font-medium text-2xl  ">
              <Image
                src={"/onlyedu.svg"}
                alt="logo"
                fill={true}
                className="object-cover object-center"
              />
            </span>
          </Link>

          <div className=" hidden 2lg:flex  text-sm font-normal">
            <ul className="flex justify-center items-center">
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

          <div className="px-1">
            <Link href={"/auth"} className="relative z-20">
              <span className="px-8 py-2 rounded-full relative bg-custom-gradient text-white text-sm hover:shadow-2xl hover:shadow-dark/30 transition duration-200 border border-dark/20">
                login
              </span>
            </Link>
          </div>
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }} // Adjust duration and ease as needed
                className={`absolute left-0 bottom-0 w-full z-50 border-b dark:border-b-border border-b-borderLight `}
              ></motion.span>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
