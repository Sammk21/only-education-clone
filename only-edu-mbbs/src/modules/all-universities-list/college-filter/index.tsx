"use client";

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
  // filterParams: FilterParams;
}

interface AccordionProps {
  data: Option[];
  name: string;
}

interface FilterParams {
  locations: string;
  exams: string;
  ownerships: string;
  page: string;
}
import { useState, useEffect, ChangeEvent } from "react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { updatedFilters } from "@/app/action";
import { Button } from "@/components/ui/button";

const CollegeFilter = ({ ownership, indianStates, exams }: Props) => {
  return (
    <div className="lg:w-[20%] hidden lg:block text-dark">
      <form className="space-y-3" action={updatedFilters}>
        <div>
          <AccordionCustom name={"Location"} data={indianStates.data} />
          <AccordionCustom name={"Exams"} data={exams.data} />
          <AccordionCustom name={"Ownership"} data={ownership.data} />
        </div>
        <Button type="submit">Apply filters</Button>
      </form>
    </div>
  );
};

export default CollegeFilter;

const AccordionCustom = ({ data, name }: AccordionProps) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const savedCheckedItems = JSON.parse(
      localStorage.getItem(name) || "{}"
    ) as { [key: string]: boolean };
    setCheckedItems(savedCheckedItems);
  }, [name]);

  const handleCheckboxChange =
    (slug: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [slug]: checked,
      }));
    };

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(checkedItems));
  }, [checkedItems, name]);

  return (
    <Accordion className="w-full " type="single" collapsible>
      <AccordionItem value={name}>
        <AccordionTrigger>{name}</AccordionTrigger>
        <div className="max-h-72 overflow-y-scroll">
          {data.map((item) => (
            <AccordionContent key={item.id}>
              <div className="flex items-center space-x-2 ">
                <Checkbox
                  // checked={checkedItems[item.slug] || false}
                  id={item.slug}
                  name={name}
                  value={item.slug}
                  // onChange={() => handleCheckboxChange(item.slug)}
                />
                <label
                  htmlFor={item.slug}
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.title}
                </label>
              </div>
            </AccordionContent>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};
