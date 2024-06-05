import Link from "next/link";
import React from "react";

const Postlistright = () => {
  return (
    <div className="border-l border-l-borderLight dark:border-l-border pl-5 mt-10 hidden lg:block">
      <div>
        <h2 className="font-semibold">Recommended topics</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <div className="text-sm bg-dark/5 rounded-2xl w-fit px-4 py-2">
            Software Development
          </div>
          <div className="text-sm bg-dark/5 rounded-2xl w-fit px-4 py-2">
            Startup
          </div>
          <div className="text-sm bg-dark/5 rounded-2xl w-fit px-4 py-2">
            Startup
          </div>
          <div className="text-sm bg-dark/5 rounded-2xl w-fit px-4 py-2">
            Startup
          </div>
          <div className="text-sm bg-dark/5 rounded-2xl w-fit px-4 py-2">
            JavaScript
          </div>
          <div className="text-sm bg-dark/5 rounded-2xl w-fit px-4 py-2">
            JavaScript
          </div>
          <div className="text-sm bg-dark/5 rounded-2xl w-fit px-4 py-2">
            JavaScript
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-semibold">Trendy Blogs</h2>
        <div className="mt-3 text-sm">
          <p>
            <Link href="#" className="mt-2 ">
              High-Level System Architecture of Booking.com
            </Link>
          </p>
          <p>
            <Link href="#" className="mt-2 ">
              High-Level System Architecture of Booking.com
            </Link>
          </p>
          <p>
            <Link href="#" className="mt-2 ">
              High-Level System Architecture of Booking.com
            </Link>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Postlistright;
