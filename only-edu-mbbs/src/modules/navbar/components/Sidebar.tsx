"use client";

import { Drawer } from "vaul";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { navbarLinks } from "@/app/json/navLink";
import { usePathname } from "next/navigation";

interface MenuItem {
  id: number;
  title: string;
  href: string;
  submenu?: MenuItem[];
}

const MySideBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>(
    navbarLinks.navbar
  );
  const [menuHistory, setMenuHistory] = useState<MenuItem[][]>([]);

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.submenu) {
      setMenuHistory((prev) => [...prev, currentMenu]);
      setCurrentMenu(item.submenu);
    } else {
      handleLinkClick();
    }
  };

  const handleBackClick = () => {
    setMenuHistory((prev) => {
      const newHistory = [...prev];
      setCurrentMenu(newHistory.pop() || navbarLinks.navbar);
      return newHistory;
    });
  };

  const getCurrentDirectoryTitle = () => {
    return menuHistory.length > 0
      ? menuHistory[menuHistory.length - 1][0]?.title || "Select an option"
      : "Sitemap";
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
            className={`fixed z-[70] bottom-6 h-14 ${
              isDrawerOpen ? "rotate-0" : "-rotate-45"
            } w-14 border border-dark/20 left-1/2 text-orange-500 -translate-x-1/2 backdrop-blur-lg bg-white/80 rounded-full transition-all duration-300 hover:shadow-inner flex justify-center items-center text-xs shadow-lg lg:hidden`}
            onClick={() => setIsDrawerOpen(true)}
          >
            <ImCross className="drop-shadow-lg" stroke="#424242" size={20} />
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-[80] bg-black/40" />
          <Drawer.Content className="bg-light z-[90] rounded-l-3xl flex flex-col h-full w-[320px] fixed bottom-0 right-0">
            <span className="absolute w-1 h-28 bg-gray-500/30 rounded-2xl left-1 top-1/2 -translate-y-1/2"></span>
            <div className="w-full mt-5 px-3 flex justify-center items-center border-b pb-3">
              {menuHistory.length > 0 && (
                <button
                  onClick={handleBackClick}
                  className="absolute left-3 text-gradient text-transparent bg-clip-text"
                >
                  Back
                </button>
              )}
              <span className="text-gradient text-transparent bg-clip-text">
                {getCurrentDirectoryTitle()}
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
                  {currentMenu.map((item) => (
                    <li
                      key={item.id}
                      className={`py-2 pl-1 mx-2 mr-1 rounded-xl ${
                        isActive(item.href) ? "bg-accent/20" : ""
                      } flex items-center gap-x-2 hover:bg-accent/20`}
                      onClick={() => handleMenuItemClick(item)}
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
};

export default MySideBar;
