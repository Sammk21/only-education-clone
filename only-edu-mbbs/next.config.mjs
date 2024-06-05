import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "plus.unsplash.com",
      },
      {
        hostname: "flowbite.s3.amazonaws.com",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
