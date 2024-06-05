"use client";
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "My Test", label: "My Test" },
  { id: "Attempted Tests", label: "Attempted Tests" },
  { id: "My orders", label: "Orders" },
  { id: "My Account", label: "My Account" },
];

const AccountNav = ({ handleTabChange, tabs, selectedTab, activeId }) => {
  return (
    <div className="w-full">
      <div className="flex  justify-center ">
        <div className="border bg-white/40 rounded-full p-3 static z-0 flex">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => handleTabChange(tab.name, tab.id)}
              className={`${
                activeId === tab.id ? "" : "hover:text-[#115e5d]/60 "
              } relative rounded-full text-xs sm:font-medium px-3 py-2.5  text-[#11535d] transition outline-none p-2 z-1 cursor-pointer `}
            >
              {activeId === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 bg-[#fff] p-1 border -z-10 "
                  style={{ borderRadius: 9999 }}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.6,
                  }}
                />
              )}
              {tab.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AccountNav;
