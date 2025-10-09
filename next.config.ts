import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    // Partial prerendering / caching enabled
    cacheComponents: true, // 'incremental' is not needed; just enable true
  },
  devIndicators: {
    // Deprecated options removed; only 'position' remains
    position: "bottom-right",
  },
};

export default nextConfig;
