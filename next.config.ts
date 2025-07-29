import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  onError: (err: any, errorInfo: any) => {
    if (err.message?.includes("data-np-intersection-state")) {
      return;
    }
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
