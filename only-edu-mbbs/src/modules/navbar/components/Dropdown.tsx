import { subMenuLinks } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

export interface MenuItemProps {
  items: {
    id: number;
    label: string;
    href?: string | null;
    subMenuLinks?: subMenuLinks[];
  };
  depthLevel: number;
}

export interface DropDownItemProps {
  subMenuLinks: subMenuLinks[];
  dropdown: boolean;
  depthLevel: number;
}

export const DropDownItems = ({ items, depthLevel }: MenuItemProps) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <>
        <Link
          href={items.href || "#"}
          className="hover:text-dark/50 dark:text-dark/80 items-center gap-r-1"
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
        >
          <span className="flex justify-between items-center">
            <p>{items.label}</p>
            {depthLevel > 0 ? (
              <RiArrowRightSLine />
            ) : (
              <RiArrowDownSLine
                className={`mt-[2px] font-semibold transition duration-200 ease-in-out ${
                  dropdown && "rotate-180"
                }`}
              />
            )}
          </span>
        </Link>
        {items.subMenuLinks && (
          <Dropdown
            depthLevel={depthLevel}
            subMenuLinks={items.subMenuLinks}
            dropdown={dropdown}
          />
        )}
      </>
    </li>
  );
};

const Dropdown = ({
  subMenuLinks,
  dropdown,
  depthLevel,
}: DropDownItemProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  console.dir(subMenuLinks, { depth: null });

  return (
    <ul
      className={`dropdown border-borderLight text-dark border dark:border-border bg-light dark:bg-dark ${dropdownClass} ${
        dropdown ? "show" : ""
      }`}
    >
      {subMenuLinks.map((submenu) => {
        if (submenu.university && submenu.university.title) {
          return (
            <li key={`uni-${submenu.id}`}>
              <Link href={`${submenu.href}${submenu.university.slug}`}>
                {submenu.label}
              </Link>
            </li>
          );
        }
        return null;
      })}
      {subMenuLinks.map((submenu) => {
        if (submenu.country && submenu.country.title) {
          return (
            <li key={`country-${submenu.id}`}>
              <Link href={`${submenu.href}${submenu.country.slug}`}>
                {submenu.label}
              </Link>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};
