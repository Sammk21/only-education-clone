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
      {
        hostname: "192.168.1.4",
      },
    ],
  },
};

export default nextConfig;
