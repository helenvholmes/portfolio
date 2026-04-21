import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        protocol: "https",
      },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
