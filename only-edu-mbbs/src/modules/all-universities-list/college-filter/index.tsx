"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const filters = [
  {
    id: "color",
    name: "Location",
    options: [
      { value: "andhra_pradesh", label: "Andhra Pradesh", checked: false },
      { value: "assam", label: "Assam", checked: false },
      { value: "bihar", label: "Bihar", checked: false },
      { value: "delhi", label: "Delhi", checked: false },
      { value: "gujarat", label: "Gujarat", checked: false },
      { value: "karnataka", label: "Karnataka", checked: false },
      { value: "kerala", label: "Kerala", checked: false },
      { value: "maharashtra", label: "Maharashtra", checked: true },
      { value: "rajasthan", label: "Rajasthan", checked: false },
      { value: "tamil_nadu", label: "Tamil Nadu", checked: false },
    ],
  },
  {
    id: "category",
    name: "Ownership",
    options: [
      { value: "Private", label: "Private", checked: false },
      { value: "Public", label: "Public / Government", checked: false },
      { value: "Public_Private", label: "Public Private", checked: true },
    ],
  },
  {
    id: "fees",
    name: "Fees",
    options: [
      { value: "less_than_1_lakh", label: "< 1 Lakh", checked: false },
      { value: "1_to_2_lakh", label: "1 - 2 Lakh", checked: false },
      { value: "2_to_3_lakh", label: "2 - 3 Lakh", checked: false },
      { value: "3_to_5_lakh", label: "3 - 5 Lakh", checked: false },
      { value: "more_than_5_lakh", label: "> 5 Lakh", checked: true },
    ],
  },
  {
    id: "size",
    name: "Exams Accepted",
    options: [
      { value: "jee_main", label: "JEE Main", checked: false },
      { value: "cbse_12th", label: "CBSE 12th", checked: false },
      { value: "dasa_ug", label: "DASA UG", checked: false },
      { value: "jee_advanced", label: "JEE Advanced", checked: false },
      { value: "tnea", label: "TNEA", checked: false },
      { value: "kcet", label: "KCET", checked: false },
      { value: "cuet", label: "CUET", checked: false },
      { value: "comedk_uget", label: "COMEDK UGET", checked: true },
      { value: "ts_eamcet", label: "TS EAMCET", checked: false },
      { value: "mht_cet", label: "MHT CET", checked: false },
    ],
  },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function CollegeFilter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="sm:w-[20%]">
      <div>
        <Transition show={mobileFiltersOpen}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto  py-4 pb-12 shadow-xl justify-center bg-light rounded-tl-3xl rounded-bl-3xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md  p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200 overflow-scroll h-full ">
                    <h3 className="sr-only">Categories</h3>
                    {filters.map((section, index) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                        defaultOpen={index === 0}
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between  px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6 overflow-y-auto h-32 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-green-900   focus:outline-offset-0"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 pt-4">
            <h4 className="text-xl font-bold tracking-tight text-gray-900 mb-1">
              FILTERS
            </h4>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section
            aria-labelledby="products-heading"
            className="sm:pb-24 sm:pt-6"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"> */}
            <div>
              {/* Filters */}
              <form className="hidden lg:block bg-white ">
                <h3 className="sr-only">Categories</h3>
                {/* <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filters.map((section, index) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                    defaultOpen={index === 0}
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="mt-6 overflow-y-auto h-32  scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-green-900   focus:outline-offset-0"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              {/* <div className="lg:col-span-3">
                <CollegeList />
              </div> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
