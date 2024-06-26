import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import { LogoutButton } from "../account/components/logout/logout";
import Image from "next/image";
import { getUserMeLoader } from "@/app/data/services/get-user-me-loader";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ProfileAndAcc = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <span className="h-8 w-8 rounded-full overflow-hidden relative">
                <Image
                  fill={true}
                  src={
                    user.imageUrl ||
                    "https://admin.onlyeducation.co.in/uploads/depositphotos_137014128_stock_illustration_user_profile_icon_852499f6e7.jpg"
                  }
                  alt=""
                />
              </span>
              {user.name}
            </MenuButton>
          </div>
          <MenuItems
            as="div"
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            {userNavigation.map((item) => (
              <MenuItem key={item.name}>
                {({ focus }) => (
                  <>
                    <a
                      href={item.href}
                      className={classNames(
                        focus ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  </>
                )}
              </MenuItem>
            ))}
            <div className="w-full h-full justify-center items-center mt-1">
              <LogoutButton />
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};
