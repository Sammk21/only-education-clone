// college-filter.tsx
"use client";
import { useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { getStrapiData } from "@/utils/utils";

interface Option {
  id: number;
  title: string;
  slug: string;
}

interface Props {
  ownership: {
    data: Option[];
  };
  indianStates: {
    data: Option[];
  };
  exams: {
    data: Option[];
  };
  onFilterDataReceived: (data: any) => void;
}

export default function CollegeFilter({
  ownership,
  indianStates,
  exams,
  onFilterDataReceived,
}: Props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    indian_state: [],
    ownership: [],
    exams: [],
  });

  const filters = [
    {
      id: "indian_state",
      name: "Location",
      options: indianStates.data.map((state) => ({
        value: state.slug,
        label: state.title,
        checked: false,
      })),
    },
    {
      id: "ownership",
      name: "Ownership",
      options: ownership.data.map((own) => ({
        value: own.slug,
        label: own.title,
        checked: false,
      })),
    },
    {
      id: "exams",
      name: "Exams",
      options: exams.data.map((exam) => ({
        value: exam.slug,
        label: exam.title,
        checked: false,
      })),
    },
  ];

  const handleCheckboxChange = (sectionId: string, value: string) => {
    setSelectedFilters((prevSelectedFilters) => {
      const sectionFilters = prevSelectedFilters[sectionId];
      const isSelected = sectionFilters.includes(value);

      const updatedSectionFilters = isSelected
        ? sectionFilters.filter((item) => item !== value)
        : [...sectionFilters, value];

      const updatedFilters = {
        ...prevSelectedFilters,
        [sectionId]: updatedSectionFilters,
      };

      // Trigger an effect to fetch new data based on the updated filters
      fetchNewData(updatedFilters);

      return updatedFilters;
    });
  };

  const fetchNewData = async (filters: Record<string, string[]>) => {
    // Construct dynamic filter query based on updatedFilters
    let filterQuery = "/api/universities?";
    const queryParams = Object.entries(filters).map(([key, values]) =>
      values
        .map((value: string) => `filters[${key}][slug][$eq]=${value}`)
        .join("&")
    );

    filterQuery += `${queryParams}&populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true`;

    try {
      const response = await getStrapiData(filterQuery);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const newFilterData = await response.json();
      // console.log("Filtered Data:", newFilterData);

      // Pass filtered data to parent component
      onFilterDataReceived(newFilterData);
    } catch (error) {
      console.error("Failed to fetch new data:", error);
    }
  };

  return (
    <div className="lg:w-[20%]">
      <div>
        <Transition show={mobileFiltersOpen}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={() => setMobileFiltersOpen(false)}
          >
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto py-4 pb-12 shadow-xl justify-center bg-light rounded-tl-3xl rounded-bl-3xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4 border-t border-gray-200 overflow-scroll h-full">
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
                            <h3 className="-mx-2 -my-3 flow-root ">
                              <Disclosure.Button className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
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
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6 overflow-y-auto h-32 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      value={option.value}
                                      type="checkbox"
                                      checked={selectedFilters[
                                        section.id
                                      ].includes(option.value)}
                                      onChange={() =>
                                        handleCheckboxChange(
                                          section.id,
                                          option.value
                                        )
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-green-900 focus:outline-offset-0"
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
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>

        <div className="border-b border-gray-200 py-6 lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span className="ml-2">Filters</span>
          </button>
        </div>

        <div className="hidden lg:block">
          <form className="space-y-10 divide-y divide-gray-200">
            <h3 className="sr-only">Categories</h3>
            {filters.map((section, index) => (
              <Disclosure
                as="div"
                key={section.id}
                className="border-b border-gray-200 py-6"
                defaultOpen={index === 0}
              >
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root ">
                      <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6 overflow-y-auto h-32 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              value={option.value}
                              type="checkbox"
                              checked={selectedFilters[section.id].includes(
                                option.value
                              )}
                              onChange={() =>
                                handleCheckboxChange(section.id, option.value)
                              }
                              className="h-4 w-4 rounded border-gray-300 text-green-900 focus:outline-offset-0"
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
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}
