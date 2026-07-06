import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stovetopmusic.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
