import { FC } from "react";
import Image from "next/image";

import { blurHashToDataURL } from "@/utils/blurhash-to-base64";

import { IImageExtended } from "@/types/types";

export const ImageExtended: FC<IImageExtended> = ({
  src,
  blurDataURL,
  ...props
}) => {
  let newBlurUrl = null;

  if (blurDataURL) {
    newBlurUrl = blurHashToDataURL(blurDataURL) || null;
  }
  const baseUrl = process.env.API_URL || "https://admin.onlyeducation.co.in";

  return (
    <Image
      src={baseUrl + src}
      blurDataURL={newBlurUrl ? newBlurUrl! : ""}
      placeholder={newBlurUrl ? "blur" : "empty"}

      {...props}
    />
  );
};
