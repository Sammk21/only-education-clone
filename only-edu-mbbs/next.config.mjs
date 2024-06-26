import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "plus.unsplash.com",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "admin.onlyeducation.co.in",
      },
      {
        hostname: "https://admin.onlyeducation.co.in",
      },
      {
        hostname: "192.168.1.28",
      },
    ],
  },
};

export default nextConfig;
