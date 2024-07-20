"use client";
import { Drawer } from "vaul";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { navbarLinks } from "@/app/json/navLink";
interface MenuItem {
  id: number;
  title: string;
  href: string;
  submenu?: MenuItem[];
}

interface NavbarProps {
  navigation: MenuItem[];
}

export default function MySideBar() {
  const path = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<MenuItem[]>(navbarLinks.navbar);
  const [history, setHistory] = useState<MenuItem[][]>([]);

  const isActive = (href: string) => path === href;

  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.submenu) {
      setHistory((prev) => [...prev, currentLevel]);
      setCurrentLevel(item.submenu);
    } else {
      handleLinkClick();
    }
  };

  const handleBackClick = () => {
    const prevLevel = history.pop();
    if (prevLevel) {
      setCurrentLevel(prevLevel);
      setHistory(history);
    }
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
            className={`fixed z-[70] bottom-6 h-14  ${
              isDrawerOpen ? "rotate-0" : "-rotate-45"
            }  w-14 border border-dark/20 left-1/2 text-orange-500 -translate-x-1/2 backdrop-blur-lg bg-white/80  rounded-full transition-all duration-300 hover:shadow-inner flex justify-center items-center text-xs shadow-lg lg:hidden`}
            onClick={() => setIsDrawerOpen(true)} // Open the drawer on click
          >
            <ImCross className="drop-shadow-lg" stroke="#424242" size={20} />
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-[80] bg-black/40" />
          <Drawer.Content className="bg-light z-[90] rounded-l-3xl flex flex-col h-full w-[320px] fixed bottom-0 right-0 ">
            <span className="absolute w-1 h-28 bg-gray-500/30 rounded-2xl left-1 top-1/2 -translate-y-1/2"></span>
            <div className="w-full mt-5 px-3 flex justify-center items-center border-b pb-3">
              {history.length > 0 && (
                <button
                  onClick={handleBackClick}
                  className="absolute left-3 text-gradient text-transparent bg-clip-text"
                >
                  Back
                </button>
              )}
              <span className="text-gradient text-transparent bg-clip-text">
                {history.length > 0 ? "Select an option" : "Sitemap"}
              </span>
              <ChevronRightIcon
                color="#ff8005"
                size={17}
                className="slideToClose mt-[2px]"
              />
            </div>
            <div className="flex-1 h-full overflow-y-scroll">
              <div className="max-w-md mx-auto">
                <ul className="mb-6">
                  {currentLevel.map((item) => (
                    <li
                      key={item.id}
                      className={`py-2 pl-1 mx-2 mr-1 rounded-xl ${
                        isActive(item.href) ? "bg-accent/20" : ""
                      } flex items-center gap-x-2 hover:bg-accent/20 `}
                      onClick={() => handleItemClick(item)}
                    >
                      <Link className="pl-3" href={item.href}>
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <ChevronRightIcon
                          color="#ff8005"
                          size={17}
                          className="ml-auto"
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
