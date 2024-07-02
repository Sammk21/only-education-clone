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
import { Separator } from "@/components/ui/separator";
import ResetButton from "../resetButton";

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

const CollegeFilter = ({
  ownership,
  indianStates,
  exams,
  filterParams,
}: Props) => {
  const { locationsParam, examsParam, ownershipsParam } = filterParams;

  const selectedLocations = locationsParam ? locationsParam.split(",") : [];
  const selectedExams = examsParam ? examsParam.split(",") : [];
  const selectedOwnerships = ownershipsParam ? ownershipsParam.split(",") : [];

  return (
    <div className="lg:w-[20%] hidden lg:block text-dark z-10 relative">
      <ResetButton />
      <form className="" action={updatedFilters}>
        <div className="flex justify-end items-center gap-x-2">
          <Button type="submit">Apply filters</Button>
        </div>
        <div className="min-h-20  w-full rounded-lg bg-accent/10 m-0 text-xs p-2 mt-3">
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

        <div className=" border-b sticky top-20 w-full h-fit">
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
  );
};

export default CollegeFilter;

const AccordionCustom: React.FC<AccordionProps> = ({
  data,
  name,
  selectedItems,
}) => {
  return (
    <Accordion defaultValue={name} className="w-full " type="single">
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
