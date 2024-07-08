"use client";
import { Drawer } from "vaul";
import { NavbarProps } from "..";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export default function MySideBar({ navigation, dropdown }: NavbarProps) {
  const path = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

  const isActive = (href: string) => path === href;

  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };

  return (
    <div className="block lg:hidden">
      <Drawer.Root
        direction="right"
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      >
        <Drawer.Trigger asChild>
          <div
            className="fixed bottom-6 z-10 h-14 w-14 border border-dark/20 left-1/2 -translate-x-1/2 bg-custom-gradient rounded-full flex justify-center items-center text-light shadow-lg lg:hidden"
            onClick={() => setIsDrawerOpen(true)} // Open the drawer on click
          >
            <p>Menu</p>
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-30 bg-black/40" />
          <Drawer.Content className="bg-light z-40 rounded-l-3xl flex flex-col h-full w-[320px] fixed bottom-0 right-0 ">
            <span className="absolute w-1 h-28 bg-gray-500/30 rounded-2xl left-1 top-1/2 -translate-y-1/2"></span>
            <div className="text-gradient w-full mt-5 px-3 flex justify-center items-center border-b pb-3 ">
              <span>slide to close</span>
              <ChevronRightIcon
                color="#ff8005"
                size={17}
                className="slideToClose mt-[2px]"
              />
            </div>
            <div className="flex-1 h-full overflow-y-scroll">
              <div className="max-w-md mx-auto">
                <ul className="mb-6">
                  <p className="pl-6 text-dark text-lg font-medium mb-3 border-b py-2">
                    Sitemap
                  </p>
                  {navigation.links.map((link) => (
                    <li
                      key={link.id}
                      className={`py-2 pl-1 mx-2 mr-1 rounded-xl ${
                        isActive(link.href) ? "bg-accent/20" : ""
                      } flex items-center gap-x-2 `}
                    >
                      <Link
                        className="pl-3"
                        href={link.href}
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {dropdown.map((item) => (
                  <div key={item.id}>
                    <ul>
                      <p className="pl-6 text-dark text-lg font-medium mb-3 border-y py-2">
                        {item.label}
                      </p>
                      {item.subMenuLinks.map((link) => (
                        <li
                          key={link.href}
                          className="py-2 pl-1 mx-2 mr-1 rounded-xl flex items-center gap-x-2"
                        >
                          <Link
                            className="pl-3"
                            href={link.href + link.university.slug}
                            onClick={handleLinkClick}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="universities-list"
                      className="mt-1 ml-6 text-blue-500 underline mb-3 flex items-center gap-x-1"
                    >
                      view all <GoArrowRight className="-rotate-45" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
