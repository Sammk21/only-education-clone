"use client";
import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { BottomGradient } from "../account/components/register";
import { getUserMeLoader } from "@/app/data/services/get-user-me-loader";
import { LogoutButton } from "../account/components/logout/logout";
import { ProfileAndAcc } from "../profile-&-notification-navbar";

export interface NavbarProps {
  navigation: Navigation;
  dropdown: Dropdown[];
}

export const Navbar = ({ navigation, dropdown }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest >= 80);
  });

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const user = await getUserMeLoader();
      setUserInfo(user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="mb-9 w-screen top-0 fixed bg-greenDark  dark:bg-only-green-950 z-30">
        <div
          className={`bg-only-green-900 dark:bg-only-green-950  text-white transition-all duration-300 ease-out relative overflow-hidden ${
            isScrolled ? "h-0" : "h-[2rem]"
          }`}
        >
          <div className="flex gap-5 items-center h-full justify-between sm:px-16 px-4  ">
            <ul className="w-full flex justify-between  text-xs  sm:text-sm">
              <li>info@onlyeducation.in</li>
              <li>+91 6262929248</li>
            </ul>
            <ul className=" gap-x-2 text-lg hidden sm:flex">
              <li>
                <Link
                  href="https://www.instagram.com/onlyeducationofficial/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/onlyedu.co.in"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/onlyeducation/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/onlyeducation17"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
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

          <div className="px-1 flex items-center">
            {loading ? (
              <AuthLoader />
            ) : userInfo?.ok ? (
              <div className="flex gap-x-2 items-center font-medium font-sm">
                <ProfileAndAcc />
                <span>{userInfo.data?.firstName}</span>
              </div>
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

export const AuthLoader = () => {
  return (
    <div className="relative">
      <div className="w-5 h-5 border-orange-200 border-2 rounded-full"></div>
      <div className="w-5 h-5 border-orange-500 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
  );
};