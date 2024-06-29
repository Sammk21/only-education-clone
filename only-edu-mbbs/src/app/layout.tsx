import type { Metadata } from "next";
import { Roboto, Ubuntu } from "next/font/google";
import "../styles/globals.css";
import "../styles/normalize.css";
import Navbar from "@/modules/navbar";
import Footer from "@/modules/footer";
import { getStrapiData } from "@/utils/utils";
import MySideBar from "@/modules/navbar/components/Sidebar";
import NextBreadcrumb from "@/modules/common/breadcrumbs";
import { ChevronRightIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { getUserMeLoader } from "./data/services/get-user-loader";

const inter = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Only education",
  description: "Only education is a information hub for the students",
  applicationName: "Only Education",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navData = await getStrapiData(
    "/api/global?populate[navigation][populate][links]=*&[populate][dropdown][populate][subMenuLinks][populate][country]=true&[populate][dropdown][populate][subMenuLinks][populate][university]=*&[populate][footer][populate][footerColumns][populate][links][populate]=true"
  );
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any"></link>
      </head>
      <body className={`bg-light dark:bg-dark  ${inter.className}`}>
        <div className="relative w-full h-full text-gray-400 ">
          <Navbar navigation={navData.navigation} dropdown={navData.dropdown} />
          <NextBreadcrumb
            homeElement={"Home"}
            separator={
              <span className="flex justify-center items-center">
                <ChevronRightIcon size={15} />
              </span>
            }
            activeClasses="text-dark"
            containerClasses="flex items-center py-5 gap-3 mx-3 sm:mx-12 lg:mx-16 text-sm"
            listClasses="text-accent hover:text-dark line-clamp-1"
            capitalizeLinks
            disabledClasses="cursor-not-allowed "
          />
          {children}
          <Footer navigation={navData.navigation} />
          <MySideBar
            navigation={navData.navigation}
            dropdown={navData.dropdown}
          />
          <Toaster richColors position="top-center" />
        </div>
      </body>
    </html>
  );
}
