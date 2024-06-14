/* eslint-disable react/jsx-no-bind */

// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// export default function Pagination({ pageIndex, isFirstPage, isLastPage }) {
//   const router = useRouter();

//   const searchParams = useSearchParams();
//   const params = new URLSearchParams(searchParams);

//   // Define functions for navigating to the next and previous pages
//   // These functions update the page query parameter in the URL
//   const handleNextPage = () => {
//     params.set("page", (pageIndex + 1).toString());
//     const query = params.toString();

//     router.push(`/archive?${query}`);
//   };

//   const handlePrevPage = () => {
//     params.set("page", (pageIndex - 1).toString());
//     const query = params.toString();

//     router.push(`/archive?${query}`);
//   };

//   return (
//     <div className="mt-10 flex items-center justify-center">
//       <nav
//         className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//         aria-label="Pagination"
//       >
//         <button
//           disabled={isFirstPage}
//           onClick={handlePrevPage}
//           className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
//         >
//           <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
//           <span>Previous</span>
//         </button>
//         <button
//           onClick={handleNextPage}
//           disabled={isLastPage}
//           className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
//         >
//           <span>Next</span>
//           <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
//         </button>
//       </nav>
//     </div>
//   );
// }

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <Link
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </Link>

            <Link
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
