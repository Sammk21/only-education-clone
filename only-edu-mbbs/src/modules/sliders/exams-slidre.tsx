"use client";
import { ImageAttributes } from "@/types/types";
import Flickity from "react-flickity-component";
import { ImageExtended } from "../common/extended-image/extended-image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

interface EntranceExamData {
  entrance_exams: {
    data: {
      id: number;
      title: string;
      slug: string;
      applicationDate: Date;
      examinationDate: Date;
      resultDate: string;
      searchableImage: ImageAttributes;
      examlevel:string;
      
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
  console.log("check",data.entrance_exams.data[0].applicationDate)
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
            <div key={item.id} className="border p-4 relative h-64 w-72  sm:w-80  bg-white rounded-lg mr-4">
              <Link
                className="jsx-3656862976 flex items-center  mb-6"
                href={`/study/exam/${item.slug}`}
              >
                <div className="exam-img mr-3">
                  <ImageExtended
                    src={item.searchableImage.url}
                    alt={item.searchableImage.alternativeText}
                    height={50}
                    width={50}
                    blurDataURL={item.searchableImage.blurhash}
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
              </Link>
              <div className="flex flex-row justify-between text-black text-lg">
                <div className="">
                  <p className=" text-black/60">Appplication Date                  </p>
                </div>
                <div className=" font-medium text-right">
                  {/* <p className="">{item.applicationDate}</p> */}
                  <p>{new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(item.applicationDate))}</p>

                </div>
              </div>
              <div className="flex flex-row justify-between text-black text-lg">
                <div className="">
                  <p className=" text-black/60"> Exam Date</p>
                </div>
                <div className=" font-medium text-right">
                  {/* <p className="">{item.examinationDate}</p> */}
                  <p>{new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(item.examinationDate))}</p>

                </div>
              </div>
              <div className="flex flex-row justify-between text-black text-lg">
                <div className="">
                  <p className=" text-black/60">Exam Level</p>
                </div>
                <div className=" font-medium text-right">
                  <p className="">{item.examlevel}</p>
                </div>
              </div>
              <Separator className="mt-3 mb-1" />
              <Link
                className=""
                href={`/study/exam/${item.slug}`}
              >
              <div className="flex flex-row justify-between hover:text-orange-500 cursor-pointer text-black text-lg">
                <div className="font-medium">
                  <p className=" ">Application Process</p>
                </div>
                <div className=" text-right">
                  <MdKeyboardArrowRight />
                </div>
              </div>
              </Link>
              <Separator className="my-1" />
              <Link
                className=""
                href={`/study/exam/${item.slug}`}
              >
              <div className="flex flex-row justify-between hover:text-orange-500 cursor-pointer text-black text-lg">
                <div className="font-medium">
                  <p className="">Exam info</p>
                </div>
                <div className=" font-medium text-right">
                  <MdKeyboardArrowRight />
                </div>
              </div>
              </Link>
            </div>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default ExamsSlider;


