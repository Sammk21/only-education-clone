"use client";
import Image from "next/image";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { HeaderProps, ImageAttributes } from "@/types/types";
import Link from "next/link";

// interface Props {
//   data: {
//     Header: HeaderProps;
//     CountryCard: {
//       id: number;
//       universities: {
//         data: ImageAttributes;
//       };
//     };
//   };
// }

interface UniversityProfile {
  backgroundImage: ImageAttributes;
}

interface University {
  id: number;
  title: string;
  noOfStudentsStudying: string;
  universityProfile: UniversityProfile;
  slug: string;
}

interface CountryCard {
  id: number;
  universities: {
    data: University[];
  };
}

interface Props {
  data: {
    Header: HeaderProps;
    CountryCard: CountryCard;
  };
}

const TopCountryRail = ({ data }: Props) => {
  const baseUrl = "https://admin.onlyeducation.co.in" || process.env.API_URL;

  return (
    <div className="sm:px-12 py-6 my-6 px-2">
      <h4 className="font-semibold text-dark dark:text-light text-3xl sm:text-4xl md:text-5xl mb-10 flex-col items-center flex sm:flex-row">
        <span className="mb-2">{data.Header.title}</span>
        {/* <span className="sm:text-lg text-sm font-light text-accent sm:ml-2">
          {data.Header.description}
        </span> */}
      </h4>
      <Swiper
        speed={600}
        spaceBetween={40}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          530: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 3.3,
            spaceBetween: 40,
          },
        }}
        navigation={{ nextEl: ".backCountry", prevEl: ".frontCountry" }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.CountryCard.universities.data.map((university) => (
          <SwiperSlide key={university.id}>
            <Link href={`study/uni/${university.slug}`}>
              <div className="rounded-lg aspect-video flex flex-col p-4  relative  group overflow-hidden cursor-pointer border  border-borderLight dark:border-border">
                <Image
                  src={
                    baseUrl + university.universityProfile.backgroundImage.url
                  }
                  alt="mumbai uni"
                  fill={true}
                  className="object-center object-cover rounded-md  group-hover:scale-105 transition-transform ease-out duration-300"
                />

                <span className="font-bold text-sm sm:text-lg md:text-xl absolute left-1/2  items-center -translate-x-1/2 bottom-2 sm:bottom-6 z-10 text-light w-full flex justify-center gap-x-4">
                  <p className=" text-lg font-medium"> {university.title}</p>
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark via-dark/20 to-dark/0"></span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <span className="flex flex-row-reverse mt-12 gap-x-1">
        <span className="backCountry transition ease-in-out cursor-pointer z-40 p-3  border rounded-full  text-3xl stroke-foreground dark:text-light  textglobal  hover:translate-x-1 hover:bg-dark/10 top-1/2 -translate-y-1/2  right-0">
          <MdOutlineArrowRightAlt />
        </span>
        <span className="frontCountry transition ease-in-out  cursor-pointer rotate-180 z-40 p-3  border rounded-full text-3xl stroke-foreground textglobal dark:text-light  hover:-translate-x-1 top-1/2 hover:bg-dark/10 -translate-y-1/2 left-0">
          <MdOutlineArrowRightAlt />
        </span>
      </span>
      {/* <div className="h-4"></div> */}
    </div>
  );
};

export default TopCountryRail;
