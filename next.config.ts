import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    middlewarePrefetch: "strict", // Enables prefetching in middleware (optional)
  },
  /* config options here */
};

export default nextConfig;
