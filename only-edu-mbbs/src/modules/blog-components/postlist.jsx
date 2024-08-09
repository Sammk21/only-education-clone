import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { Merriweather } from "next/font/google";
import { ShareComponent } from "../share-component";
import { CiBookmark } from "react-icons/ci";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export default function PostList({ post, href }) {
  const imageUrl = "https://admin.onlyeducation.co.in";
  const image = post.image.url;
  const baseUrl = `https://test.onlyeducation.co.in${href}/`; 
  const itemUrl = `${baseUrl}${post.slug}`;
  return (
    <section>
      <div className="border-b border-b-borderLight dark:border-b-border mt-5">
        <div className={cx("group cursor-pointer grid grid-cols-6 gap-4")}>
          <Link
            href={`${href}/${post.slug}`}
            className="col-span-4 flex flex-col justify-between"
          >
            <div className="flex items-center">
              <div className="font-semibold sm:text-xl text-sm mb-2 line-clamp-2 text-dark">
                <h5 className="">
                  {post.live && (
                    <span className="relative w-12 h-4 bg-red-500 rounded-full flex justify-end items-center text-white p-1 text-xs mr-2">
                      <span className="livenow absolute left-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                      <p>LIVE</p>
                    </span>
                  )}
                  {post.title}
                </h5>
              </div>
            </div>
            <p
              className={`text-sm line-clamp-2 sm:line-clamp-3 ${merriweather.className}`}
            >
              {post.description}
            </p>
          </Link>
          <Link
            href={`${href}/${post.slug}`}
            className="relative col-span-2 h-20 w-full sm:h-28 sm:w-full"
          >
            <Image
              src={imageUrl + image}
              alt="Thumbnail"
              className="object-cover transition-all"
              fill={true}
              // blurDataURL={post.image.blurDataURL}
            />
          </Link>
          <div className="col-span-6 sm:py-3 pb-2 flex justify-between items-center">
            <Link
              href="#"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <div className="bg-dark/5 rounded-2xl w-fit px-2 py-1 text-[10px] sm:text-sm capitalize">
                {post.category.name}
              </div>
            </Link>
            <div className="flex sm:gap-4 items-center">
              {/* <CiBookmark className="text-black text-xl" /> */}
              <ShareComponent  url={itemUrl}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
