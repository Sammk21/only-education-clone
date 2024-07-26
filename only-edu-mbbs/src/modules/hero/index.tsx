"use client";
import SearchBox from "@/app/(main)/searchbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ImageAttributes, Universitylist } from "@/types/types";
import MeiliSearch from "meilisearch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ImageExtended } from "../common/extended-image/extended-image";
import {
  FreeMode,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import RecentlyViewedUniversity from "../recently-viewed-university/RecentlyViewedProduct";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  id: number;
  title: string;
  description: string;
}
interface bannerImage {
  data: ImageAttributes[];
}

interface HeroProps {
  data: {
    id: number;
    text: string;
    header: HeaderProps;
  };
  bannerImage: bannerImage;
}

export default function Hero({ data, bannerImage }: HeroProps) {
  const client = new MeiliSearch({
    host: "https://search.onlyeducation.co.in",
    apiKey: "c434b12d44e6b8ee0783ac505dbf8a6e61fc701c8d1ce0cd15bdb8a3b08c855a",
  });

  const suggestedBadges = [
    "IIT",
    "IIM",
    "Mumbai University",
    "Science",
    "Engneering",
    "JEE",
  ];

  const handleBadgeClick = (badge: string) => {
    setQuery(badge);
  };

  const searchIndex = client.index("university");

  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Universitylist[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const search = async () => {
    if (query) {
      try {
        const searchResults = await searchIndex.search<Universitylist>(query);
        setResults(searchResults.hits.length === 0 ? [] : searchResults.hits);
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    search();
  }, [query, data]);

  return (
    <>
      {/* Hero */}
      <div className="relative  text-white  ">
        <div>
          <div className=" h-full flex items-center justify-center  py-24 lg:py-32 z-20 absolute m-auto left-0 right-0">
            <div className="text-center">
              <h1 className="text-5xl font-semibold drop-shadow-lg">
                Right choice, Better future
              </h1>
              <p className="mt-3 text-lg text-muted-foreground text-white drop-shadow-md">
                Stay in the know with insights from industry experts.
              </p>
              <div className="mt-7 px-3 sm:px-0 sm:mt-12 mx-auto max-w-xl relative">
                {/* Form */}

                <div
                  className="p-2 border border-gray-300 text-xs flex justify-start items-center text-gray-400 bg-white h-8 rounded-md w-full z-20 cursor-text"
                  onClick={() => setIsSearchOpen(true)}
                >
                  Search Universities ...
                </div>
                <div>
                  <RecentlyViewedUniversity />
                </div>

                <div
                  className={`fixed transition-opacity duration-300 inset-0 bg-dark bg-opacity-50 backdrop-blur-lg ${
                    isSearchOpen ? "opacity-100 flex" : "opacity-0 hidden"
                  } ${
                    results ? "items-start pt-28" : "items-center"
                  }   justify-center p-4 z-[60]`}
                >
                  <div className="relative w-full max-w-2xl">
                    <div className="flex w-full relative">
                      <SearchBox query={query} setQuery={setQuery} />
                      <button
                        onClick={() => {
                          setIsSearchOpen(false);
                          setQuery("");
                        }}
                        className="h-full text-dark absolute right-0 text-2xl -top-3 mt-1.5 w-8 z-30"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 my-2 text-white">
                      <p className="inline-block italic">Suggestions:</p>
                      {suggestedBadges.map((badge) => (
                        <Badge
                          className="hover:bg-white hover:text-dark cursor-pointer"
                          key={badge}
                          onClick={() => handleBadgeClick(badge)}
                          variant="outline"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="relative w-full z-10">
                      <div className="absolute w-full bg-white text-black top-0 rounded-sm max-h-[600px] overflow-y-scroll">
                        {results &&
                          query &&
                          results.map((item) => (
                            <Link
                              key={item.slug}
                              className="block"
                              href={`/study/uni/${item.slug}`}
                            >
                              <p className="text-start px-1 py-2 my-3 border-b">
                                {item.title}
                              </p>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* End Form */}
                {/* SVG Element */}
                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20 -z-10">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width={121}
                    height={135}
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
                {/* SVG Element */}
                <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                  <svg
                    className="w-40 h-auto text-cyan-500"
                    width={347}
                    height={188}
                    viewBox="0 0 347 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                      stroke="currentColor"
                      strokeWidth={7}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="w-full h-full relative  ">
              <Swiper
                speed={600}
                spaceBetween={40}
                pagination={false}
                effect={"fade"}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1080: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                }}
                navigation={{ nextEl: ".back", prevEl: ".front" }}
                modules={[
                  FreeMode,
                  Pagination,
                  Autoplay,
                  Navigation,
                  EffectFade,
                ]}
                className="mySwiper"
              >
                {bannerImage.data.map((item) => (
                  <SwiperSlide key={item.id} className="">
                    <div className="  ">
                      <div className="w-full h-[70svh] relative ">
                        <Image
                          src={"https://admin.onlyeducation.co.in" + item.url}
                          alt={item.name}
                          fill={true}
                          blurDataURL={item.blurhash}
                          className="w-full h-full object-cover object-center -z-20"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-dark/50 -z-10" />
                      </div>
                      <div className="uppercase  rounded-lg px-1 py-2 border-[0.8px] backdrop-blur-lg items-center text-white absolute inline-block bottom-5 right-5">
                        <p className="sm:text-sm text-xs line-clamp-2 ">
                          {item.name.replace(/\.[^/.]+$/, "")}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
