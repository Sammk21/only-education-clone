"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

import { GoDeviceMobile, GoLocation, GoMail } from "react-icons/go";
import CallToAction from "./call-to-action";
import { Dropdown, Navigation } from "@/types/types";

export interface NavbarProps {
  navigation: Navigation;
}

const Footer = ({ navigation }: NavbarProps) => {
  return (
    <footer className=" w-full rounded-t-[28px]  z-10  mt-1">
      <CallToAction />
      <div className="h-full w-full flex justify-center items-center border-t bg-light border-t-borderLight pt-12 rounded-3xl">
        <section className="w-full bottom-0  mx-auto flex flex-col rounded-3xl  bg-light z-0">
          <div className="sm:px-14 px-4 py-1 ">
            <div className="row h-full flex-col gap-y-9 sm:flex-row flex justify-between">
              <Link className="aspect-video relative" href="/">
                <Image
                  src={"/onlyedu.svg"}
                  alt="logo"
                  fill={true}
                  className="object-cover object-center"
                />
              </Link>

              <div className="flex-col flex text-sm text-dark mb-8">
                <h2 className="mb-3 text-[16px]">Useful Link</h2>
                <ul>
                  {navigation.links.map((item) => (
                    <li key={item.id}>
                      <div className="footer-item footer-item-title text-gray-500 mb-3">
                        <Link href={item.href}>
                          <span> {item.label}</span>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-col h-full w-[250px] flex gap-y-5 text-sm">
                <li className="flex gap-x-3 justify-center items-center">
                  <GoLocation className="text-2xl text-accent" />
                  <p>Satra Plaza, 909, Sector 19D Navi Mumbai 400709</p>
                </li>
                <li className="flex gap-x-3">
                  <GoMail className="text-accent text-lg" />
                  <p>info@onlyEducation.com</p>
                </li>
                <li className="flex gap-x-3">
                  <GoDeviceMobile className="text-accent text-lg" />
                  <p>+91 9191919191</p>
                </li>
              </div>
            </div>
          </div>
          <div className="h-[5rem] left-0 bottom-0  w-full  text-light bg-greenDark flex justify-around sm:px-24 items-center flex-col z-20">
            <ul className="flex gap-x-2 text-lg">
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
            <ul className="flex text-xs gap-x-6">
              <li>
                <Link href="/terms-and-condition">Terms and condition</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;