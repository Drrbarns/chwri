import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images directly from public/ on Vercel; avoids optimizer 404s in production
    unoptimized: true,
  },
};

export default nextConfig;
