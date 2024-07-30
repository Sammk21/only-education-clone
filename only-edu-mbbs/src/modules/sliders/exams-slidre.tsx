
"use client"
import { ImageAttributes } from "@/types/types";
import Flickity from "react-flickity-component";
import { ImageExtended } from "../common/extended-image/extended-image";



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
            <div key={item.id} className=" mr-3  border mb-4 p-4  rounded-sm  ">
              <div className="">
                <div className="w-32 h-32 rounded-full border border-gray-300 p-1">
                  <ImageExtended
                    src={item.searchableImage.url}
                    alt={item.searchableImage.alternativeText}
                    width={120}
                    height={120}
                    className=" w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <p className="text-center mt-2 bg-gray-100 text-dark rounded-sm">
                    {item.mode.title} Exam
                  </p>
                  <p className="text-2xl font-semibold text-dark">
                    {item.title}
                  </p>
                </div>
                <div>
                    <p>Application Date {item.applicationDate}</p>
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
