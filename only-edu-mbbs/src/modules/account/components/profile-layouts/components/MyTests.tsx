// components/MyTestsLayout.tsx
import React from "react";

interface Test {
  id: string;
  name: string;
  description: string;
}

const MyTests: React.FC<{ tests?: Test[] }> = ({ tests }) => {
  // Dummy data if tests prop is not provided
  const dummyTests: Test[] = [
    {
      id: "1",
      name: "Test 1",
      description: "This is a description for Test 1.",
    },
    {
      id: "2",
      name: "Test 2",
      description: "This is a description for Test 2.",
    },
    {
      id: "3",
      name: "Test 3",
      description: "This is a description for Test 3.",
    },
  ];

  const testList = tests || dummyTests;

  return (
    <div className="max-w-lg mx-auto  overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Available Tests
        </h2>
        {testList.map((test) => (
          <div key={test.id} className="border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {test.name}
            </h3>
            <p className="text-gray-600">{test.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTests;
