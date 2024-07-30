import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
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
        hostname: "www.onlyeducation.in",
      },

      {
        hostname: "admin.onlyeducation.co.inundefined",
      },


    ],
  },
};

export default nextConfig;
