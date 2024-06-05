import Image from "next/image";
import { getStrapiMedia } from "@/utils/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  fill: true;
}

export function Thumbnail({
  src,
  alt,
  height,
  width,
  fill,
  className,
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      fill={fill}
      height={height || undefined}
      width={width || undefined}
      className={className}
    />
  );
}
