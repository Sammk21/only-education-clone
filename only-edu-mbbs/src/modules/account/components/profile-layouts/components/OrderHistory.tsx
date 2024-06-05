// components/OrderHistoryLayout.tsx
import React from "react";

const OrderHistory = () => {
  // Dummy data if orders prop is not provided

  return (
    <div className="flex flex-col gap-y-2 py-12 max-w-lg mx-auto">
      <div className=" overflow-hidden">
        <div className="px-6 py-4 border bg-white rounded-xl">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Your Package
            </h2>
            <span className="text-gray-500 text-xs">what you've ordered</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 border  bg-gradient-to-r from-slate-200 to-slate-600 rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <h5 className=" font-extrabold   text-white drop-shadow-md ">
            Platinum
          </h5>
          <span className="text-sm text-white drop-shadow-md">499.00</span>
        </div>
      </div>
      <div className="px-6 py-4 border bg-gradient-to-r from-amber-200 to-yellow-500 rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <h5 className=" font-extrabold   text-white drop-shadow-md ">Gold</h5>
          <span className="text-sm text-white drop-shadow-md">499.00</span>
        </div>
      </div>
      <div className="px-6 py-4 border   bg-white rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <h5 className=" font-extrabold   text-black drop-shadow-sm ">
            Basic
          </h5>
          <span className="text-sm text-black drop-shadow-sm">499.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
