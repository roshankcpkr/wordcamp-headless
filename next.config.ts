import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
    // Allow WordPress media from local devx
  },
};

export default nextConfig;
