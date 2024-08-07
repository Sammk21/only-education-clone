"use client";
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
import { usePathname } from "next/navigation";

interface Option {
  id: number;
  title: string;
  slug: string;
  universities?: {
    data: uniProp[];
  };
}

interface uniProp {
  id?: number;
}



interface Props {
  ownership?: {
    data: Option[];
  };
  indianStates?: {
    data: Option[];
  };
  exams?: {
    data: any;
  };
  duration?: {
    data: Option[];
  };
  course?: {
    data: Option[];
  };
  modes?: {
    data: Option[];
  };
  streams?:{
    data: Option[];
  }
  filterParams: FilterParams;
  context: string;
  streamsProp?:any
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
  streamsParam?: string;
  modesParam?: string;
  durationParam?: string;
  courseParam?: string;

}

const CollegeFilter = ({
  modes,
  ownership,
  indianStates,
  exams,
  filterParams,
  context,
  course,
  streams

}: Props) => {
  const {
    locationsParam,
    examsParam,
    ownershipsParam,
    streamsParam,
    modesParam,
    durationParam,
    courseParam,
  } = filterParams;


  const selectedLocations = locationsParam ? locationsParam.split(",") : [];
  const selectedExams = examsParam ? examsParam.split(",") : [];
  const selectedOwnerships = ownershipsParam ? ownershipsParam.split(",") : [];
  const selectedmodesParam = modesParam ? modesParam.split(",") : [];
  const selecteddurationParam = durationParam ? durationParam.split(",") : [];
  const selectedcourseParam = courseParam ? courseParam.split(",") : [];
  const selectedstreamParam = streamsParam ? streamsParam.split(",") : [];
  const pathname = usePathname();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await updatedFilters(formData, context, pathname); // Call server-side action

  };


  return (
    <div className="lg:w-[20%] hidden lg:block text-dark z-10 relative ">
      <div className="sticky top-24">
        <ResetButton />
        <form className="" onSubmit={handleSubmit}>
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
              {selectedExams.map((exams) => (
                <div
                  key={exams}
                  className="px-1 border border-dark inline-block mt-1 justify-center"
                >
                  <span>{exams}</span>
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

              {selectedmodesParam.map((modes) => (
                <div
                  key={modes}
                  className="px-1 border border-dark inline-block mt-1 justify-center"
                >
                  <span>{modes}</span>
                </div>
              ))}
              {selecteddurationParam.map((duration) => (
                <div
                  key={duration}
                  className="px-1 border border-dark inline-block mt-1 justify-center"
                >
                  <span>{duration}</span>
                </div>
              ))}
              {selectedcourseParam.map((course) => (
                <div
                  key={course}
                  className="px-1 border border-dark inline-block mt-1 justify-center"
                >
                  <span>{course}</span>
                </div>
              ))}
                  {selectedstreamParam.map((streams) => (
                <div
                  key={streams}
                  className="px-1 border border-dark inline-block mt-1 justify-center"
                >
                  <span>{streams}</span>
                </div>
              ))}
            </div>
          </div>

          <div className=" border-b sticky top-20 w-full h-fit">
            {indianStates && (
              <AccordionCustom
                name={"Location"}
                data={indianStates.data}
                selectedItems={selectedLocations}
              />
            )}
           
            {exams && (
              <AccordionCustom
                name={"Exams"}
                data={exams?.data }
                selectedItems={selectedExams}
              />
            )}

            
            {ownership && (
              <AccordionCustom
                name={"Ownership"}
                data={ownership.data}
                selectedItems={selectedOwnerships}
              />
            )}
              {streams && (
              <AccordionCustom
                name={"stream"}
                data={streams.data}
                selectedItems={selectedstreamParam}
              />
            )}
            {modes && (
              <AccordionCustom
                name={"Examination Modes"}
                data={modes.data}
                selectedItems={selectedmodesParam}
              />
            )}
            {course && (
              <AccordionCustom
                name={"Course"}
                data={course.data}
                selectedItems={selectedcourseParam}
              />
            )}
           
          </div>
        </form>
      </div>
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
