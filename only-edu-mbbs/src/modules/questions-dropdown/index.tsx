import { faqProps } from "@/types/types";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import parse from "html-react-parser";
import Title from "../common/title";

interface Props {
  data: {
    id: number;
    title: string;
    faq: faqProps[];
  };
}

const QuestionDropdown = ({ data }: Props) => {
  const { title, faq } = data;


  return (
    <>
      <section className=" py-6 my-6  ">
        <Title>Commanly asked questions</Title>
        <div className=" pt-6 w-full ">
          <div className="mx-auto w-full max-w-5xl divide-y divide-dark/5 dark:divide-border divide-borderLight  rounded-xl dark:bg-foreground bg-dark/5">
            {faq.map((item) => (
              <Disclosure key={item.id} as="div" className="p-6">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium dark:text-light text-start sm:text-center  text-dark dark:group-data-[hover]:text-light/50 group-data-[hover]:text-dark/80">
                    {item.question}
                  </span>
                  <IoIosArrowForward className="size-5 fill-dark dark:fill-light rotate-90 dark:group-data-[hover]:fill-light/50 group-data-[hover]:fill-dark/50 group-data-[open]:-rotate-90" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5  dark:text-light/70 text-dark/50">
                {item.answer &&  parse(item?.answer) }
              
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionDropdown;
