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
  async redirects() {
    return [
      {
        destination: "https://buildingdesignsystems.com",
        permanent: true,
        source: "/writing",
      },
      // Wildcard path matching
      // {
      //   source: "/blog/:slug",
      //   destination: "/news/:slug",
      //   permanent: true,
      // },
    ];
  },
  transpilePackages: ["three"],
};

export default nextConfig;
