// /components/NextBreadcrumb.tsx
"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  disabledClasses?: string;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  let pathNames = paths.split("/").filter((path) => path);

  const disableLink = (link: string) => {
    return ["study", "country", "uni", "post"].includes(link.toLowerCase());
  };

  // Replace /study/uni with university-list
  pathNames = pathNames.map((link, index) => {
    if (
      link.toLowerCase() === "uni" &&
      pathNames[index - 1]?.toLowerCase() === "study"
    ) {
      return "universities-list";
    }
    return link;
  });

  // Update href for specific cases
  const getHref = (index: number) => {
    if (
      pathNames[index] === "universities-list" &&
      pathNames[index - 1]?.toLowerCase() === "study"
    ) {
      return "/universities-list";
    }
    return `/${pathNames.slice(0, index + 1).join("/")}`;
  };

  return (
    <div className={`mt-20 ${paths === "/" && "hidden"}`}>
      <ul className={`${containerClasses} text-xs`}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = getHref(index);
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;

          if (disableLink(link) && link !== "universities-list") {
            return null;
          }

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
