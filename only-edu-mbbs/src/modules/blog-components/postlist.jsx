import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import CategoryLabel from "@/modules/blog-components/blog/category";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export default function PostList({ post, href }) {
  const imageUrl = "https://admin.onlyeducation.co.in";
  const image = post.image.url;
  console.dir(image);

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
            className="relative col-span-2 h-20 w-20 sm:h-28 sm:w-28"
          >
            <Image
              src={imageUrl + image}
              alt="Thumbnail"
              className="object-cover transition-all"
              fill={true}
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
            <div className="flex sm:gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="lj"
              >
                <path
                  d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                  fill="#000"
                ></path>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
