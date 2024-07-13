"use client";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { ArticleAttributes } from "@/types/types";
import { InformationCard } from "../university-card";

const flickityOptions = {
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
};

interface BlogPageProps {
  data: {
    data: ArticleAttributes[];
  };
  href: string;
}

const InformationSlider = ({ data, href }: BlogPageProps) => {
  return (
    <div className=" pb-6">
      <div className="">
        <h4 className="font-semibold mb-4 text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl  items-center flex sm:flex-row">
          <span className="mb-2 capitalize">Latest {href} </span>
        </h4>
        <Flickity
          className={"carousel "} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={true} // default false
          reloadOnUpdate // default false
          static // default false
          // contain={true}
        >
          {data.data.map((item) => (
            <div key={item.id} className=" mr-3">
              <InformationCard item={item} href={href} />
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default InformationSlider;






// import React from "react";
// import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import { ArticleAttributes } from "@/types/types";
// import Link from "next/link";
// import "@/styles/swiper-pagination/pagination.css";
// import { ImageExtended } from "../common/extended-image/extended-image";



// const InformationSlider = ({ data, href }: BlogPageProps) => {
//   if (!data || !data.data || data.data.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       <div className="  mt-4 sm:mt-8 lg:mt-10 relative py-6  ">
//         <div className="flex justify-between items-center mb-4">
//           <h4 className="font-semibold text-dark ml-6 dark:text-light text-2xl sm:text-3xl md:text-4xl  items-center flex sm:flex-row">
//             <span className=" capitalize">Latest {href} </span>
//           </h4>
//           <div className="flex gap-x-2 items-center mr-2">
//             <span className="front transition ease-in-out cursor-pointer rotate-180 z-20  p-2  border rounded-full text-lg sm:text-xl md:text-2xl   text-black textglobal  hover:-translate-x-1">
//               <MdOutlineArrowRightAlt />
//             </span>
//             <span className="back  transition ease-in-out cursor-pointer z-20 p-2    border rounded-full sm:text-xl md:text-2xl   text-black textglobal  hover:translate-x-1   ">
//               <MdOutlineArrowRightAlt />
//             </span>
//           </div>
//         </div>
//         <div className="h-1 w-full"></div>
//         <div className="w-full h-full relative ml-3">
//           <Swiper
//             speed={600}
//             spaceBetween={40}
//             pagination={true}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: true,
//               pauseOnMouseEnter: true,
//             }}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1.2,
//                 spaceBetween: 10,
//               },
//               530: {
//                 slidesPerView: 2.4,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 3.3,
//                 spaceBetween: 30,
//               },
//               1080: {
//                 slidesPerView: 4.2,
//                 spaceBetween: 40,
//               },
//             }}
//             navigation={{ nextEl: ".back", prevEl: ".front" }}
//             modules={[FreeMode, Pagination, Autoplay, Navigation]}
//             className="mySwiper"
//           >
//             {data.data.map((item) => (
//               <SwiperSlide key={item.id} className="border rounded-md bg-">
//                
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InformationSlider;
