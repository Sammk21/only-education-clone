"use client";
import React, { useState } from "react";
import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import ResetButton from "../resetButton";
import { updatedFilters } from "@/app/action";
import { FaFilter } from "react-icons/fa";

interface Option {
  id: number;
  title: string;
  slug: string;
  universities?: {
    data: uniProp[];
  };
}

interface uniProp {
  id: number;
}

interface FilterProps {
  ownership: {
    data: Option[];
  };
  indianStates: {
    data: Option[];
  };
  exams: {
    data: Option[];
  };
  filterParams: FilterParams;
}

interface AccordionProps {
  data: Option[];
  name: string;
  selectedItems: string[];
}

interface FilterParams {
  locationsParam?: string;
  examsParam?: string;
  ownershipsParam?: string;
}

const MobileFilter: React.FC<FilterProps> = ({
  ownership,
  indianStates,
  exams,
  filterParams,
}) => {
  const { locationsParam, examsParam, ownershipsParam } = filterParams;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const selectedLocations = locationsParam ? locationsParam.split(",") : [];
  const selectedExams = examsParam ? examsParam.split(",") : [];
  const selectedOwnerships = ownershipsParam ? ownershipsParam.split(",") : [];

  const handleSubmit = (event: React.FormEvent) => {
    setIsDrawerOpen(false); // Close the drawer after submitting the form
  };

  return (
    <div className="block lg:hidden">
      <Drawer.Root
        direction="right"
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      >
        <Drawer.Trigger asChild>
          <div
            className="px-4 flex justify-between items-center mb-4 pb-2 border-b-[1px]"
            onClick={() => setIsDrawerOpen(true)}
          >
            <p className="text-dark">Filters</p>
            <FaFilter />
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-30 bg-black/40" />
          <Drawer.Content className="bg-light z-40 rounded-l-3xl flex flex-col h-full w-[320px] fixed bottom-0 right-0 ">
            <span className="absolute w-1 h-28 bg-gray-500/30 rounded-2xl left-1 top-1/2 -translate-y-1/2"></span>
            <div className="text-gradient w-full mt-5 px-3 flex justify-center items-center border-b pb-3 ">
              <span>Slide to close</span>
            </div>
            <div className="flex-1 h-full overflow-y-scroll px-4 py-6">
              <ResetButton />
              <form action={updatedFilters} onSubmit={handleSubmit}>
                <div className="flex justify-end items-center gap-x-2 mb-4">
                  <Button type="submit">Apply filters</Button>
                </div>
                <div className="min-h-20 w-full rounded-lg bg-accent/10 m-0 text-xs p-2 mt-3">
                  <span className="mt-3">Selected filters:</span>
                  <Separator className="mt-1" orientation="horizontal" />
                  <div className="flex flex-wrap gap-2 ">
                    {selectedLocations.map((location) => (
                      <div
                        key={location}
                        className="px-1 border border-dark inline-block mt-1 justify-center"
                      >
                        <span>{location}</span>
                      </div>
                    ))}
                    {selectedExams.map((exam) => (
                      <div
                        key={exam}
                        className="px-1 border border-dark inline-block mt-1 justify-center"
                      >
                        <span>{exam}</span>
                      </div>
                    ))}
                    {selectedOwnerships.map((ownership) => (
                      <div
                        key={ownership}
                        className="px-1 border border-dark inline-block mt-1 justify-center"
                      >
                        <span>{ownership}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <AccordionCustom
                    name={"Location"}
                    data={indianStates.data}
                    selectedItems={selectedLocations}
                  />
                  <AccordionCustom
                    name={"Exams"}
                    data={exams.data}
                    selectedItems={selectedExams}
                  />
                  <AccordionCustom
                    name={"Ownership"}
                    data={ownership.data}
                    selectedItems={selectedOwnerships}
                  />
                </div>
              </form>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default MobileFilter;

const AccordionCustom: React.FC<AccordionProps> = ({
  data,
  name,
  selectedItems,
}) => {
  return (
    <Accordion defaultValue={name} className="w-full" type="single">
      <AccordionItem value={name}>
        <AccordionTrigger>{name}</AccordionTrigger>
        <div className="max-h-72 overflow-y-scroll">
          {data.map((item) => (
            <AccordionContent key={item.id}>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={item.slug}
                  name={name}
                  value={item.slug}
                  defaultChecked={selectedItems.includes(item.slug)}
                />
                <label
                  htmlFor={item.slug}
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.title}
                </label>
                <span className="font-medium text-foreground">
                  {item?.universities
                    ? ` (${item?.universities?.data.length})`
                    : ""}
                </span>
              </div>
            </AccordionContent>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};
