import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const QuestionDropdown = () => {
  return (
    <>
      <section className=" py-6 my-6  px-2 sm:px-6">
        <h4 className="text-center text-2xl text-dark dark:text-light">
          Frequently asked questions
        </h4>
        <div className=" pt-6 w-full ">
          <div className="mx-auto w-full max-w-5xl divide-y divide-dark/5 dark:divide-border divide-borderLight  rounded-xl dark:bg-foreground bg-dark/5">
            <Disclosure as="div" className="p-6" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium dark:text-light  text-dark dark:group-data-[hover]:text-light/50 group-data-[hover]:text-dark/80">
                  What is your refund policy?
                </span>
                <IoIosArrowForward className="size-5 fill-dark dark:fill-light rotate-90 dark:group-data-[hover]:fill-light/50 group-data-[hover]:fill-dark/50 group-data-[open]:-rotate-90" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 dark:text-light/70 text-dark/50">
                If you're unhappy with your purchase, we'll refund you in full.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium dark:text-light text-dark dark:group-data-[hover]:text-light/50 group-data-[hover]:text-dark/80">
                  Do you offer technical support?
                </span>
                <IoIosArrowForward className="size-5 rotate-90  fill-dark/60 dark:fill-light dark:group-data-[hover]:fill-light/50 group-data-[hover]:fill-dark/50 group-data-[open]:-rotate-90" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 dark:text-light/70  text-dark/50">
                No.
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionDropdown;
