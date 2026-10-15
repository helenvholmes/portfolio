import type { NextConfig } from "next";

// The library is a separate Vercel project (helenvholmes/library), served
// under /library. Its build already prefixes every URL with /library.
const LIBRARY_ORIGIN = "https://library-9dhw.vercel.app";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        protocol: "https",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/library", destination: `${LIBRARY_ORIGIN}/` },
      { source: "/library/:path*", destination: `${LIBRARY_ORIGIN}/:path*` },
    ];
  },
  transpilePackages: ["three"],
};

export default nextConfig;
