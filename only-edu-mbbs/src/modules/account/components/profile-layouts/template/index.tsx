"use client";
import React, { Suspense, useState } from "react";
import AccountNav from "../../account-nav";
import MyAccount from "../components/MyAccount";
import AttemptedTests from "../components/AttemptedTests";
import OrderHistory from "../components/OrderHistory";
import MyTests from "../components/MyTests";
import { PiExamFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

interface Tab {
  id: number;
  name: string;
  icons: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 1,
    name: "My Tests",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
  {
    id: 2,
    name: "Attempted Tests",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
  {
    id: 3,
    name: "Order history",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
  {
    id: 4,
    name: "My Accounts",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
  },
];

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [activeId, setActiveId] = useState(tabs[0].id);

  const handleTabChange = (name: string, id: number) => {
    setSelectedTab(name);
    setActiveId(id);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <AccountNav
          handleTabChange={handleTabChange}
          tabs={tabs}
          selectedTab={selectedTab}
          activeId={activeId}
        />
        <div className="py-8">
          <section className="sm:grid flex flex-col grid-cols-8 w-full  gap-4 ">
            <div className="col-span-2  bg-white ">
              <div className="p-4 relative border border-borderLight dark:border-none dark:bg-foreground rounded-lg h-fit">
                <div className="flex justify-center my-3">
                  <FaRegUser className="text-[40px]" />
                </div>
                <div className="my-3">
                  <h3 className="font-semibold text-center">Jonathan Smith</h3>
                </div>
                <div className="flex justify-between">
                  <p>Profile Completion</p>
                  <p className="font-semibold">30%</p>
                </div>
                <div className="h-1 w-full bg-[#66666670] my-3 rounded-full">
                  <div className="h-1 rounded-full w-2/5 bg-yellow-500 bg-bluelink"></div>
                </div>
                <div className="flex justify-between">
                  <p>for more opportunity</p>
                  <p className="font-semibold text-bluelink">UPDATE PROFILE</p>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Live Count
                </h2>
                <div className="border border-borderLight dark:border-none dark:bg-foreground rounded-lg p-3 mt-5">
                  <div className="flex items-center gap-3 mb-4 ">
                    <FaUniversity />

                    <div>
                      <h4 className="font-bold">1,562</h4>
                      <p>
                        {" "}
                        <span> Exams Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-bold">20,000</h4>
                      <p>
                        {" "}
                        <span> Mock Tests Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-bold">10,349</h4>
                      <p>
                        {" "}
                        <span> Questions Attempted</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Suspense boundary with SkeletonLoader */}{" "}
            <div className="col-span-4 bg-white rounded-xl">
              <Suspense>
                {" "}
                {/*add fallback */}
                {selectedTab === "My Tests" ? (
                  <MyTests />
                ) : selectedTab === "Attempted Tests" ? (
                  <AttemptedTests />
                ) : selectedTab === "Order history" ? (
                  <OrderHistory />
                ) : selectedTab === "My Accounts" ? (
                  <MyAccount />
                ) : null}
              </Suspense>
            </div>
            <div className="col-span-2 bg-white">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Trending Exams
                </h2>
                <div className="border border-borderLight dark:border-none dark:bg-foreground rounded-lg p-3 mt-5"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Trending Exams
                </h2>
                <div className="h-[350px] overflow-y-scroll border border-borderLight dark:border-none dark:bg-foreground rounded-lg p-3 mt-5">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-semibold">CBSE Class IX</h4>
                      <p>
                        {" "}
                        <span className="">Attempted by</span>
                        <span> 29 students</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-semibold">CBSE Class IX</h4>
                      <p>
                        {" "}
                        <span className="">Attempted by</span>
                        <span> 29 students</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-semibold">CBSE Class IX</h4>
                      <p>
                        {" "}
                        <span className="">Attempted by</span>
                        <span> 29 students</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-semibold">CBSE Class IX</h4>
                      <p>
                        {" "}
                        <span className="">Attempted by</span>
                        <span> 29 students</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-semibold">CBSE Class IX</h4>
                      <p>
                        {" "}
                        <span className="">Attempted by</span>
                        <span> 29 students</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-semibold">CBSE Class IX</h4>
                      <p>
                        {" "}
                        <span className="">Attempted by</span>
                        <span> 29 students</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaUniversity />

                    <div>
                      <h4 className="font-semibold">CBSE Class IX</h4>
                      <p>
                        {" "}
                        <span className="">Attempted by</span>
                        <span> 29 students</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TabComponent;
