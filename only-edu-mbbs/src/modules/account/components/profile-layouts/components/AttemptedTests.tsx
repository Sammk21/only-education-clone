// components/AttemptedTestsLayout.tsx
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";

interface AttemptedTest {
  id: string;
  date: string;
  score: number;
  status: string;
}

const AttemptedTests: React.FC<{ attempts?: AttemptedTest[] }> = ({
  attempts,
}) => {
  // Dummy data if attempts prop is not provided
  const dummyAttempts: AttemptedTest[] = [
    {
      id: "1",
      date: "2024-05-12",
      score: 80,
      status: "Completed",
    },
    {
      id: "2",
      date: "2024-05-10",
      score: 65,
      status: "Completed",
    },
    {
      id: "3",
      date: "2024-05-08",
      score: 45,
      status: "Incomplete",
    },
  ];

  const attemptedTestData = attempts || dummyAttempts;

  return (
    <div className="w-full max-w-3xl mx-auto p-4 py-12 rounded-3xl">
      <TabGroup>
        <TabList className="flex justify-start gap-x-2 ">
          <div className="bg-[#ededed] rounded-xl border px-1 py-1 text-sm ">
            <Tab className="text-black  p-2 rounded-lg  data-[selected]:bg-white  outline-none">
              Tests
            </Tab>
            <Tab className=" text-black p-2 rounded-lg  data-[selected]:bg-white outline-none">
              Quiz
            </Tab>
          </div>
        </TabList>

        <TabPanels>
          <TabPanel className="flex flex-col gap-y-3 list-none pt-10">
            <li className="bg-[#ededed] p-3 flex justify-between rounded-xl">
              <div>
                <h3>MET Mock Test - 1</h3>
                <span className="text-gray-500">
                  60 Questions | 240 Marks | 120 Min
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <button className="p-2 rounded-xl border border-red-600 text-black bg-red-700/50">
                  Re-atttempt
                </button>
                <button className="p-2 rounded-xl border border-green-600 text-black bg-green-700/50">
                  Results
                </button>
              </div>
            </li>
            <li className="bg-[#ededed] p-3 flex justify-between rounded-xl">
              <div>
                <h3>MET Mock Test - 1</h3>
                <span className="text-gray-500">
                  60 Questions | 240 Marks | 120 Min
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <button className="p-2 rounded-xl border border-red-600 text-sm text-black bg-red-700/50">
                  Re-atttempt
                </button>
                <button className="p-2 rounded-xl border border-green-600 text-sm text-black bg-green-700/50">
                  Results
                </button>
              </div>
            </li>
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default AttemptedTests;
