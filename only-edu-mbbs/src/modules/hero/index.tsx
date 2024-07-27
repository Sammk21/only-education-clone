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
    "Engineering",
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
    
      <div className="relative text-white">
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center h-[60vh] z-20">
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
              <RecentlyViewedUniversity />

              <div
                className={`fixed transition-opacity duration-300 inset-0 bg-dark bg-opacity-50 backdrop-blur-lg ${
                  isSearchOpen ? "opacity-100 flex" : "opacity-0 hidden"
                } ${
                  results ? "items-start pt-28" : "items-center"
                } justify-center p-4 z-[60]`}
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

      {/* End Hero */}
    </>
  );
}
