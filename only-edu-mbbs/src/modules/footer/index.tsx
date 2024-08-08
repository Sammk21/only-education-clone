"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

import { IoLocationSharp } from "react-icons/io5";

import { GoMail } from "react-icons/go";
import SvgComponent from "@/svg/onlyeducationLogo";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-screen-2xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600 ">
              <SvgComponent height="150px" width="200px" />
            </div>

            <ul className="mt-3 gap-y-1">
              <li className="flex gap-x-3 text-sm">
                <AiFillMail className=" text-lg text-orange-500" />
                <p>info@onlyEducation.com</p>
              </li>
              <li className="flex gap-x-3 text-sm ">
                <FaPhone className=" text-blue-500 text-sm rotate-90" />
                <p>+91 9191919191</p>
              </li>
              <li className="flex gap-x-3 text-sm">
                <IoLocationSharp className=" text-lg text-red-500" />
                <p> Satra Plaza, 909, Sector 19D Navi Mumbai 400709</p>
              </li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="https://www.facebook.com/onlyedu.co.in"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/onlyeducationofficial/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://twitter.com/onlyeducation17"
                  target="_blank"
                >
                  <span className="sr-only">Twitter</span>
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900">Sitemap</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/universities-list/engineering"
                    className="text-gray-700 transition hover:opacity-75 hover:underline"
                  >
                    Top engineering colleges
                  </Link>
                </li>

                <li>
                  <Link
                    href="/universities-list/medical"
                    className="text-gray-700 transition hover:opacity-75 hover:underline"
                  >
                    Top medical colleges
                  </Link>
                </li>

                <li>
                  <Link
                    href="/universities-list/management"
                    className="text-gray-700 transition hover:opacity-75 hover:underline"
                  >
                    {" "}
                    Top management colleges{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/exams-list"
                    className="text-gray-700 transition hover:opacity-75 hover:underline"
                  >
                    Top entrance exams
                  </Link>
                </li>

                <li>
                  <Link
                    href="/articles"
                    className="text-gray-700 transition hover:opacity-75 hover:underline"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-700 transition hover:opacity-75 hover:underline"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/terms-and-condition"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                   Terms & Conditions 
                    
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                   Privacy policy
                  </Link>
                </li>

               
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Contact Us
                  </Link>
                </li>

             
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 inline-block">
            &copy; 2022. Only education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
