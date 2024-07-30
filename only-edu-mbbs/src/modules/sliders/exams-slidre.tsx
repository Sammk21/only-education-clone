"use client";
import { ImageAttributes } from "@/types/types";
import Flickity from "react-flickity-component";
import { ImageExtended } from "../common/extended-image/extended-image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowRight } from "react-icons/md";

interface EntranceExamData {
  entrance_exams: {
    data: {
      id: number;
      title: string;
      slug: string;
      applicationDate: string;
      examinationDate: string;
      resultDate: string;
      searchableImage: ImageAttributes;
      mode: {
        title: string;
      };
    }[];
  };
}
interface Props {
  data: EntranceExamData;
}

const ExamsSlider = ({ data }: Props) => {
  const flickityOptions = {
    initialIndex: 2,
    fade: true,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    lazyLoad: 2,
    imagesLoaded: true,
    pageDots: false,
  };

  return (
    <section className=" py-9 border-b">
      <div className="container">
        <h4 className="capitalize font-semibold mb-4 text-dark md:text-3xl text-2xl pl-2 lg:pl-0">
          Top Exams
        </h4>
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={true}
          reloadOnUpdate
        >
          {data.entrance_exams.data.map((item) => (
            <div className="border p-4 relative h-64 w-64  sm:w-72  bg-white rounded-lg mr-4">
              <a
                className="jsx-3656862976 flex items-center  mb-6"
                href="/exams/neet"
              >
                <div className="exam-img mr-3">
                  <ImageExtended
                    src={item.searchableImage.url}
                    alt={item.searchableImage.alternativeText}
                    height={50}
                    width={50}
                    className="border rounded-full lazyloaded border-black"
                  />
                </div>
                <div className="jsx-3656862976">
                  <Badge className="bg-accent text-dark">
                    {" "}
                    {item.mode.title} Exam
                  </Badge>
                  <h3 className="font-medium text-sm ">{item.title}</h3>
                </div>
              </a>
              <div className="flex flex-row justify-between text-black text-lg">
                <div className="">
                  <p className=" text-black/60">Participating Colleges</p>
                </div>
                <div className=" font-medium text-right">
                  <p className="">893</p>
                </div>
              </div>
              <div className="flex flex-row justify-between text-black text-lg">
                <div className="">
                  <p className=" text-black/60"> Exam Date</p>
                </div>
                <div className=" font-medium text-right">
                  <p className="">{item.applicationDate}</p>
                </div>
              </div>
              <div className="flex flex-row justify-between text-black text-lg">
                <div className="">
                  <p className=" text-black/60">Exam Level</p>
                </div>
                <div className=" font-medium text-right">
                  <p className="">national</p>
                </div>
              </div>
              <Separator className="mt-3 mb-1" />
              <div className="flex flex-row justify-between hover:text-orange-500 cursor-pointer text-black text-lg">
                <div className="font-medium">
                  <p className=" ">Application Process</p>
                </div>
                <div className=" text-right">
                  <MdKeyboardArrowRight />
                </div>
              </div>
              <Separator className="my-1" />
              <div className="flex flex-row justify-between hover:text-orange-500 cursor-pointer text-black text-lg">
                <div className="font-medium">
                  <p className="">Exam info</p>
                </div>
                <div className=" font-medium text-right">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default ExamsSlider;
